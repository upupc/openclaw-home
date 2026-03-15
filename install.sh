#!/usr/bin/env bash

set -euo pipefail

OPENCLAW_HOME="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${OPENCLAW_HOME}/.env"
ENV_EXAMPLE_FILE="${OPENCLAW_HOME}/.env.example"
OPENCLAW_CONFIG_FILE="${OPENCLAW_HOME}/openclaw.json"
OPENCLAW_CONFIG_EXAMPLE_FILE="${OPENCLAW_HOME}/openclaw.example.json"

log() {
  printf '[install] %s\n' "$*"
}

fail() {
  printf '[install] 错误: %s\n' "$*" >&2
  exit 1
}

ensure_env_file() {
  if [[ -f "${ENV_FILE}" ]]; then
    :
  elif [[ -f "${ENV_EXAMPLE_FILE}" ]]; then
    cp "${ENV_EXAMPLE_FILE}" "${ENV_FILE}"
    log "检测到 .env 不存在，已基于 .env.example 创建"
  else
    touch "${ENV_FILE}"
    log "检测到 .env 不存在，已创建空文件"
  fi

  set_env_var "PATH" "~/miniforge3/bin:\$PATH"
  set_env_var "OPENCLAW_DATA_DIR" "${OPENCLAW_HOME}/data"
  set_env_var "OPENCLAW_WORKSPACE_DIR" "${OPENCLAW_HOME}/workspace"
  set_env_var "OPENCLAW_STATE_DIR" "${OPENCLAW_HOME}/state"
  set_env_var "OPENCLAW_CONFIG_PATH" "${OPENCLAW_HOME}/openclaw.json"
}

set_env_var() {
  local key="$1"
  local value="$2"
  local tmp_file

  tmp_file="$(mktemp)"

  if [[ -f "${ENV_FILE}" ]] && grep -qE "^${key}=" "${ENV_FILE}"; then
    awk -v key="${key}" -v value="${value}" '
      BEGIN { updated = 0 }
      $0 ~ ("^" key "=") {
        print key "=" value
        updated = 1
        next
      }
      { print }
      END {
        if (updated == 0) {
          print key "=" value
        }
      }
    ' "${ENV_FILE}" > "${tmp_file}"
  else
    cat "${ENV_FILE}" > "${tmp_file}"
    printf '%s=%s\n' "${key}" "${value}" >> "${tmp_file}"
  fi

  mv "${tmp_file}" "${ENV_FILE}"
}

detect_user_env_file() {
  local shell_name

  shell_name="$(basename "${SHELL:-}")"
  case "${shell_name}" in
    zsh)
      USER_ENV_FILE="${HOME}/.zshrc"
      ;;
    bash)
      if [[ -f "${HOME}/.bashrc" || ! -f "${HOME}/.bash_profile" ]]; then
        USER_ENV_FILE="${HOME}/.bashrc"
      else
        USER_ENV_FILE="${HOME}/.bash_profile"
      fi
      ;;
    *)
      fail "暂不支持当前 shell: ${shell_name:-unknown}，请手动将 ${ENV_FILE} 加载到对应环境文件"
      ;;
  esac
}

ensure_nvm() {
  NVM_DIR="${NVM_DIR:-${HOME}/.nvm}"
  export NVM_DIR

  if [[ ! -s "${NVM_DIR}/nvm.sh" ]]; then
    fail "未检测到 nvm，请先安装 nvm"
  fi

  # shellcheck source=/dev/null
  . "${NVM_DIR}/nvm.sh"

  command -v nvm >/dev/null 2>&1 || fail "nvm 初始化失败，请确认 shell 环境配置正确"
  command -v npm >/dev/null 2>&1 || fail "未检测到 npm，请先通过 nvm 安装并启用 Node.js"
}

ensure_sqlite_vec_lib() {
  local global_root
  local sqlite_vec_dir
  local lib_name

  if ! npm ls -g sqlite-vec --depth=0 >/dev/null 2>&1; then
    log "未检测到全局 sqlite-vec，开始安装"
    npm install -g sqlite-vec
  fi

  global_root="$(npm root -g)"
  sqlite_vec_dir="${global_root}/sqlite-vec"
  [[ -d "${sqlite_vec_dir}" ]] || fail "sqlite-vec 安装目录不存在: ${sqlite_vec_dir}"

  case "$(uname -s)" in
    Darwin)
      lib_name='vec0.dylib'
      ;;
    Linux)
      lib_name='vec0.so'
      ;;
    *)
      fail "不支持的操作系统: $(uname -s)"
      ;;
  esac

  SQLITE_VEC_LIB="$(find "${sqlite_vec_dir}" -type f -name "${lib_name}" | head -n 1)"
  [[ -n "${SQLITE_VEC_LIB}" ]] || fail "未找到 sqlite-vec 动态库 ${lib_name}"
}

append_env_source_block() {
  local block

  touch "${USER_ENV_FILE}"
  block=$'set -a\nsource '"${ENV_FILE}"$'\nset +a'

  if grep -Fq "source ${ENV_FILE}" "${USER_ENV_FILE}"; then
    log "环境文件 ${USER_ENV_FILE} 已包含 .env 加载逻辑，跳过追加"
    return
  fi

  {
    printf '\n'
    printf '%s\n' "${block}"
  } >> "${USER_ENV_FILE}"

  log "已向 ${USER_ENV_FILE} 追加 .env 加载逻辑"
}

update_linux_service_file() {
  local service_file
  local target_line
  local tmp_file

  service_file="${HOME}/.config/systemd/user/openclaw-gateway.service"
  [[ -f "${service_file}" ]] || fail "未找到 systemd 服务文件: ${service_file}"

  target_line="EnvironmentFile=${ENV_FILE}"
  tmp_file="$(mktemp)"

  awk -v target_line="${target_line}" '
    BEGIN {
      in_service = 0
      inserted = 0
    }
    /^\[Service\]$/ {
      in_service = 1
      print
      next
    }
    /^\[/ {
      if (in_service && inserted == 0) {
        print target_line
        inserted = 1
      }
      in_service = 0
    }
    {
      if (in_service && $0 ~ /^EnvironmentFile=/) {
        if (inserted == 0) {
          print target_line
          inserted = 1
        }
        next
      }
      print
    }
    END {
      if (in_service && inserted == 0) {
        print target_line
      }
    }
  ' "${service_file}" > "${tmp_file}"

  mv "${tmp_file}" "${service_file}"
  log "已更新 systemd 服务文件: ${service_file}"
}

update_macos_launch_agent() {
  local plist_file
  local key
  local value
  local expanded_value

  plist_file="${HOME}/Library/LaunchAgents/ai.openclaw.gateway.plist"
  [[ -f "${plist_file}" ]] || fail "未找到 LaunchAgent 文件: ${plist_file}"

  /usr/libexec/PlistBuddy -c 'Add :EnvironmentVariables dict' "${plist_file}" >/dev/null 2>&1 || true

  set -a
  # shellcheck source=/dev/null
  source "${ENV_FILE}"
  set +a

  while IFS= read -r line; do
    [[ -n "${line}" ]] || continue
    [[ "${line}" =~ ^[[:space:]]*# ]] && continue
    [[ "${line}" == *=* ]] || continue

    key="${line%%=*}"
    value="${!key-}"
    expanded_value="${value/#\~/${HOME}}"

    /usr/libexec/PlistBuddy -c "Delete :EnvironmentVariables:${key}" "${plist_file}" >/dev/null 2>&1 || true
    /usr/libexec/PlistBuddy -c "Add :EnvironmentVariables:${key} string ${expanded_value}" "${plist_file}"
  done < "${ENV_FILE}"

  log "已更新 LaunchAgent 环境变量: ${plist_file}"
}

reload_service_by_os() {
  local os_name="$1"

  case "${os_name}" in
    Darwin)
      local plist_path
      plist_path="${HOME}/Library/LaunchAgents/ai.openclaw.gateway.plist"

      launchctl bootout "gui/$(id -u)" "${plist_path}" >/dev/null 2>&1 || log "LaunchAgent 当前未加载，跳过 bootout"
      launchctl bootstrap "gui/$(id -u)" "${plist_path}"
      log "已执行 launchctl bootout/bootstrap"
      ;;
    Linux)
      systemctl --user daemon-reload
      log "已执行 systemctl --user daemon-reload"
      ;;
    *)
      fail "不支持的操作系统: ${os_name}"
      ;;
  esac
}

ensure_openclaw_config_file() {
  if [[ -f "${OPENCLAW_CONFIG_FILE}" ]]; then
    return
  fi

  [[ -f "${OPENCLAW_CONFIG_EXAMPLE_FILE}" ]] || fail "未找到配置模板文件: ${OPENCLAW_CONFIG_EXAMPLE_FILE}"
  cp "${OPENCLAW_CONFIG_EXAMPLE_FILE}" "${OPENCLAW_CONFIG_FILE}"
  log "检测到 openclaw.json 不存在，已基于 openclaw.example.json 创建"
}

main() {
  local os_name

  os_name="$(uname -s)"

  log "OPENCLAW_HOME=${OPENCLAW_HOME}"
  ensure_env_file
  ensure_nvm
  ensure_sqlite_vec_lib
  set_env_var "OPENCLAW_SQLITE_VEC_LIB" "${SQLITE_VEC_LIB}"
  log "已更新 OPENCLAW_SQLITE_VEC_LIB=${SQLITE_VEC_LIB}"
  ensure_openclaw_config_file

  detect_user_env_file
  append_env_source_block

  case "${os_name}" in
    Linux)
      update_linux_service_file
      ;;
    Darwin)
      update_macos_launch_agent
      ;;
    *)
      fail "不支持的操作系统: ${os_name}"
      ;;
  esac

  reload_service_by_os "${os_name}"
  log "安装配置完成"
}

main "$@"
