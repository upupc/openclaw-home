#!/usr/bin/env bash
set -euo pipefail

SKILL_HOME="$HOME/workspace/openclaw-workspace/skills"
SKILL_DIR="${SKILL_HOME}/video-download"
SCRIPT_DIR="${SKILL_DIR}/scripts"
PARSER="${SCRIPT_DIR}/video_parser.py"
TEST_BASE="$HOME/workspace/openclaw-workspace/test/video-download"

VIDEO_URL="https://www.youtube.com/watch?v=LIVeuxOQnw4"
COOKIEFILE="$HOME/workspace/openclaw-workspace/cookie/www.youtube.com_cookies.txt"
MODEL="tiny"

if [[ ! -f "${PARSER}" ]]; then
  echo "未找到脚本: ${PARSER}" >&2
  exit 1
fi

OUTPUT_BASE="${1:-${TEST_BASE}/test-param-coverage-$(date +%Y%m%d-%H%M%S)}"
LOG_DIR="${OUTPUT_BASE}/logs"
SUMMARY_LOG="${OUTPUT_BASE}/summary.log"

mkdir -p "${LOG_DIR}"

run_case() {
  local name="$1"
  local payload="$2"
  local log_file="${LOG_DIR}/${name}.log"

  echo "===== ${name} =====" | tee -a "${SUMMARY_LOG}"
  python3 "${PARSER}" "${payload}" > "${log_file}" 2>&1
  local code=$?
  echo "exit_code=${code}" | tee -a "${SUMMARY_LOG}"
  tail -n 12 "${log_file}" | sed 's/^/  /' | tee -a "${SUMMARY_LOG}"
  echo | tee -a "${SUMMARY_LOG}"
}

run_case "case1_urls_empty" \
  "{\"urls\":[],\"output\":\"${OUTPUT_BASE}/ignore\",\"cookiefile\":\"${COOKIEFILE}\"}"

run_case "case2_download_with_builtin_sub" \
  "{\"urls\":[\"${VIDEO_URL}\"],\"output\":\"${OUTPUT_BASE}/case2\",\"model\":\"${MODEL}\",\"transcribe\":false,\"subtitle_format\":\"vtt\",\"download_subtitle\":true,\"overwrite_subtitle\":false,\"cookiefile\":\"${COOKIEFILE}\"}"

run_case "case3_onlysubtitle" \
  "{\"urls\":[\"${VIDEO_URL}\"],\"output\":\"${OUTPUT_BASE}/case3\",\"onlysubtitle\":true,\"cookiefile\":\"${COOKIEFILE}\"}"

run_case "case4_transcribe" \
  "{\"urls\":[\"${VIDEO_URL}\"],\"output\":\"${OUTPUT_BASE}/case4\",\"model\":\"${MODEL}\",\"transcribe\":true,\"subtitle_format\":\"txt\",\"download_subtitle\":false,\"overwrite_subtitle\":false,\"cookiefile\":\"${COOKIEFILE}\"}"

run_case "case5_overwrite_skip" \
  "{\"urls\":[\"${VIDEO_URL}\"],\"output\":\"${OUTPUT_BASE}/case4\",\"model\":\"${MODEL}\",\"transcribe\":true,\"subtitle_format\":\"txt\",\"download_subtitle\":false,\"overwrite_subtitle\":false,\"cookiefile\":\"${COOKIEFILE}\"}"

echo "===== artifacts =====" | tee -a "${SUMMARY_LOG}"
find "${OUTPUT_BASE}" -maxdepth 4 -type f | rg '\.(webm|txt|srt|vtt)$' | sed 's/^/  /' | tee -a "${SUMMARY_LOG}" || true
echo | tee -a "${SUMMARY_LOG}"
echo "测试完成，结果目录: ${OUTPUT_BASE}"
echo "汇总日志: ${SUMMARY_LOG}"
