import * as os from 'os';
import { homedir, tmpdir } from 'os';
import * as path from 'path';
import { join } from 'path';
import { DWClient, TOPIC_ROBOT } from 'dingtalk-stream';
import * as fs3 from 'fs';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import * as fsPromises from 'fs/promises';
import 'crypto';
import N2, { stdout, stdin } from 'process';
import ot from 'readline';
import 'tty';
import 'util';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x3)(function(x3) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x3 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// ../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js"(exports$1, module) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input2) => {
      let string = "" + input2, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let f = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module.exports = createColors();
    module.exports.createColors = createColors;
  }
});

// ../../node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js"(exports$1, module) {
    var ESC = "\x1B";
    var CSI = `${ESC}[`;
    var beep = "\x07";
    var cursor = {
      to(x3, y2) {
        if (!y2) return `${CSI}${x3 + 1}G`;
        return `${CSI}${y2 + 1};${x3 + 1}H`;
      },
      move(x3, y2) {
        let ret = "";
        if (x3 < 0) ret += `${CSI}${-x3}D`;
        else if (x3 > 0) ret += `${CSI}${x3}C`;
        if (y2 < 0) ret += `${CSI}${-y2}A`;
        else if (y2 > 0) ret += `${CSI}${y2}B`;
        return ret;
      },
      up: (count = 1) => `${CSI}${count}A`,
      down: (count = 1) => `${CSI}${count}B`,
      forward: (count = 1) => `${CSI}${count}C`,
      backward: (count = 1) => `${CSI}${count}D`,
      nextLine: (count = 1) => `${CSI}E`.repeat(count),
      prevLine: (count = 1) => `${CSI}F`.repeat(count),
      left: `${CSI}G`,
      hide: `${CSI}?25l`,
      show: `${CSI}?25h`,
      save: `${ESC}7`,
      restore: `${ESC}8`
    };
    var scroll = {
      up: (count = 1) => `${CSI}S`.repeat(count),
      down: (count = 1) => `${CSI}T`.repeat(count)
    };
    var erase = {
      screen: `${CSI}2J`,
      up: (count = 1) => `${CSI}1J`.repeat(count),
      down: (count = 1) => `${CSI}J`.repeat(count),
      line: `${CSI}2K`,
      lineEnd: `${CSI}K`,
      lineStart: `${CSI}1K`,
      lines(count) {
        let clear = "";
        for (let i = 0; i < count; i++)
          clear += this.line + (i < count - 1 ? cursor.up() : "");
        if (count)
          clear += cursor.left;
        return clear;
      }
    };
    module.exports = { cursor, scroll, erase, beep };
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_2) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e2) {
      return obj[e2];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_2, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path: path5, errorMaps, issueData } = params;
  const fullPath = [...path5, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x3) => !!x3)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x3) => x3.status === "aborted";
var isDirty = (x3) => x3.status === "dirty";
var isValid = (x3) => x3.status === "valid";
var isAsync = (x3) => typeof Promise !== "undefined" && x3 instanceof Promise;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path5, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path5;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input2) {
    return getParsedType(input2.data);
  }
  _getOrReturnCtx(input2, ctx) {
    return ctx || {
      common: input2.parent.common,
      data: input2.data,
      parsedType: getParsedType(input2.data),
      schemaErrorMap: this._def.errorMap,
      path: input2.path,
      parent: input2.parent
    };
  }
  _processInputParams(input2) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input2.parent.common,
        data: input2.data,
        parsedType: getParsedType(input2.data),
        schemaErrorMap: this._def.errorMap,
        path: input2.path,
        parent: input2.parent
      }
    };
  }
  _parseSync(input2) {
    const result = this._parse(input2);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input2) {
    const result = this._parse(input2);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = String(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input2.data.length < check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input2.data.length > check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input2.data.length > check.value;
        const tooSmall = input2.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input2, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input2.data);
        } catch {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input2.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input2.data = input2.data.trim();
      } else if (check.kind === "includes") {
        if (!input2.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input2.data = input2.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input2.data = input2.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input2.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input2.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input2.data, check.version)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input2.data, check.alg)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input2.data, check.version)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input2.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = Number(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input2.data < check.value : input2.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input2.data > check.value : input2.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input2.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input2.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input2) {
    if (this._def.coerce) {
      try {
        input2.data = BigInt(input2.data);
      } catch {
        return this._getInvalidInput(input2);
      }
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input2);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input2.data < check.value : input2.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input2.data > check.value : input2.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input2.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input2.data };
  }
  _getInvalidInput(input2) {
    const ctx = this._getOrReturnCtx(input2);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = Boolean(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = new Date(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input2.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input2.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input2.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input2.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input2) {
    return OK(input2.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input2) {
    return OK(input2.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input2) {
    const ctx = this._getOrReturnCtx(input2);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input2) {
    const { ctx, status } = this._processInputParams(input2);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input2);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ; else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x3) => !!x3);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me2 = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me2._def.args.parseAsync(args, params).catch((e2) => {
          error.addIssue(makeArgsIssue(args, e2));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me2._def.returns._def.type.parseAsync(result, params).catch((e2) => {
          error.addIssue(makeReturnsIssue(result, e2));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me2 = this;
      return OK(function(...args) {
        const parsedArgs = me2._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me2._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input2) {
    if (input2.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input2.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input2) {
    if (typeof input2.data !== "string") {
      const ctx = this._getOrReturnCtx(input2);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input2.data)) {
      const ctx = this._getOrReturnCtx(input2);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input2.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input2) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input2);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input2.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input2.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input2.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input2) {
    const result = this._def.innerType._parse(input2);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;
function toTrimmedString(value) {
  if (value === void 0 || value === null) return void 0;
  const next = String(value).trim();
  return next ? next : void 0;
}
var optionalCoercedString = external_exports.preprocess(
  (value) => toTrimmedString(value),
  external_exports.string().min(1).optional()
);
var DingtalkAccountSchema = external_exports.object({
  /** 账户显示名 */
  name: external_exports.string().optional(),
  /** 是否启用钉钉渠道 */
  enabled: external_exports.boolean().optional().default(true),
  /** 钉钉应用 AppKey (clientId) */
  clientId: optionalCoercedString,
  /** 钉钉应用 AppSecret (clientSecret) */
  clientSecret: optionalCoercedString,
  /** 单聊策略: open=开放, pairing=配对, allowlist=白名单 */
  dmPolicy: external_exports.enum(["open", "pairing", "allowlist"]).optional().default("open"),
  /** 群聊策略: open=开放, allowlist=白名单, disabled=禁用 */
  groupPolicy: external_exports.enum(["open", "allowlist", "disabled"]).optional().default("open"),
  /** 群聊是否需要 @机器人才响应 */
  requireMention: external_exports.boolean().optional().default(true),
  /** 单聊白名单: 允许的用户 ID 列表 */
  allowFrom: external_exports.array(external_exports.string()).optional(),
  /** 群聊白名单: 允许的会话 ID 列表 */
  groupAllowFrom: external_exports.array(external_exports.string()).optional(),
  /** 历史消息数量限制 */
  historyLimit: external_exports.number().int().min(0).optional().default(10),
  /** 文本分块大小限制 (钉钉单条消息最大 4000 字符) */
  textChunkLimit: external_exports.number().int().positive().optional().default(4e3),
  /** 长任务提醒延迟（毫秒），0 表示关闭 */
  longTaskNoticeDelayMs: external_exports.number().int().min(0).optional().default(3e4),
  /** 是否启用 AI Card 流式响应 */
  enableAICard: external_exports.boolean().optional().default(false),
  /** Gateway auth token（Bearer） */
  gatewayToken: external_exports.string().optional(),
  /** Gateway auth password（替代 gatewayToken） */
  gatewayPassword: external_exports.string().optional(),
  /** 媒体文件大小限制 (MB)，默认 100MB */
  maxFileSizeMB: external_exports.number().positive().optional().default(100),
  /** 入站媒体归档策略 */
  inboundMedia: external_exports.object({
    dir: external_exports.string().optional(),
    keepDays: external_exports.number().optional()
  }).optional()
});
DingtalkAccountSchema.extend({
  defaultAccount: external_exports.string().optional(),
  accounts: external_exports.record(DingtalkAccountSchema).optional()
});
var DEFAULT_ACCOUNT_ID = "default";
var DINGTALK_ACCOUNT_KEYS = [
  "name",
  "clientId",
  "clientSecret",
  "dmPolicy",
  "groupPolicy",
  "requireMention",
  "allowFrom",
  "groupAllowFrom",
  "historyLimit",
  "textChunkLimit",
  "longTaskNoticeDelayMs",
  "enableAICard",
  "gatewayToken",
  "gatewayPassword",
  "maxFileSizeMB",
  "inboundMedia"
];
var DEFAULT_INBOUND_MEDIA_DIR = join(homedir(), ".openclaw", "media", "dingtalk", "inbound");
var DEFAULT_INBOUND_MEDIA_KEEP_DAYS = 7;
var DEFAULT_INBOUND_MEDIA_TEMP_DIR = join(tmpdir(), "dingtalk-media");
function resolveInboundMediaDir(config) {
  return String(config?.inboundMedia?.dir ?? "").trim() || DEFAULT_INBOUND_MEDIA_DIR;
}
function resolveInboundMediaKeepDays(config) {
  const value = config?.inboundMedia?.keepDays;
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : DEFAULT_INBOUND_MEDIA_KEEP_DAYS;
}
function resolveInboundMediaTempDir() {
  return DEFAULT_INBOUND_MEDIA_TEMP_DIR;
}
function cloneIfObject(value) {
  if (value && typeof value === "object") {
    return structuredClone(value);
  }
  return value;
}
function baseLooksLikeConcreteAccount(cfg) {
  if (!cfg) return false;
  return Boolean(
    toTrimmedString(cfg.clientId) || toTrimmedString(cfg.clientSecret) || toTrimmedString(cfg.gatewayToken) || toTrimmedString(cfg.gatewayPassword) || toTrimmedString(cfg.name)
  );
}
function listConfiguredAccountIds(cfg) {
  const accounts = cfg.channels?.dingtalk?.accounts;
  if (!accounts || typeof accounts !== "object") return [];
  return Object.keys(accounts).filter(Boolean);
}
function listDingtalkAccountIds(cfg) {
  const ids = new Set(listConfiguredAccountIds(cfg));
  if (ids.size === 0) return [DEFAULT_ACCOUNT_ID];
  if (baseLooksLikeConcreteAccount(cfg.channels?.dingtalk) && !ids.has(DEFAULT_ACCOUNT_ID)) {
    ids.add(DEFAULT_ACCOUNT_ID);
  }
  return Array.from(ids).sort((a, b) => a.localeCompare(b));
}
function resolveDefaultDingtalkAccountId(cfg) {
  const dingtalkConfig = cfg.channels?.dingtalk;
  const preferred = toTrimmedString(dingtalkConfig?.defaultAccount);
  if (preferred && listDingtalkAccountIds(cfg).includes(preferred)) {
    return preferred;
  }
  const ids = listDingtalkAccountIds(cfg);
  if (ids.includes(DEFAULT_ACCOUNT_ID)) return DEFAULT_ACCOUNT_ID;
  return ids[0] ?? DEFAULT_ACCOUNT_ID;
}
function resolveDingtalkAccountId(cfg, rawAccountId) {
  return toTrimmedString(rawAccountId) ?? resolveDefaultDingtalkAccountId(cfg);
}
function resolveAccountConfig(cfg, accountId) {
  const accounts = cfg.channels?.dingtalk?.accounts;
  if (!accounts || typeof accounts !== "object") return void 0;
  return accounts[accountId];
}
function extractBaseAccountPatch(cfg) {
  const patch = {};
  const patchRecord = patch;
  if (!cfg) return patch;
  for (const key of DINGTALK_ACCOUNT_KEYS) {
    const value = cfg[key];
    if (value !== void 0) {
      patchRecord[key] = cloneIfObject(value);
    }
  }
  return patch;
}
function moveDingtalkSingleAccountConfigToDefaultAccount(cfg) {
  const dingtalkConfig = cfg.channels?.dingtalk;
  if (!dingtalkConfig) {
    return cfg;
  }
  const accounts = dingtalkConfig.accounts ?? {};
  if (accounts[DEFAULT_ACCOUNT_ID]) {
    return cfg;
  }
  if (!baseLooksLikeConcreteAccount(dingtalkConfig)) {
    return cfg;
  }
  const patch = extractBaseAccountPatch(dingtalkConfig);
  if (Object.keys(patch).length === 0) {
    return cfg;
  }
  const nextChannel = { ...dingtalkConfig };
  for (const key of DINGTALK_ACCOUNT_KEYS) {
    delete nextChannel[key];
  }
  return {
    ...cfg,
    channels: {
      ...cfg.channels,
      dingtalk: {
        ...nextChannel,
        accounts: {
          ...accounts,
          [DEFAULT_ACCOUNT_ID]: {
            ...patch
          }
        }
      }
    }
  };
}
function mergeDingtalkAccountConfig(cfg, accountId) {
  const base = cfg.channels?.dingtalk ?? {};
  const { accounts: _ignored, defaultAccount: _ignored2, ...baseConfig } = base;
  const account = resolveAccountConfig(cfg, accountId) ?? {};
  return { ...baseConfig, ...account };
}
function isConfigured(config) {
  const credentials = resolveDingtalkCredentials(config);
  return Boolean(credentials);
}
function resolveDingtalkCredentials(config) {
  const clientId = toTrimmedString(config?.clientId);
  const clientSecret = toTrimmedString(config?.clientSecret);
  if (!clientId || !clientSecret) {
    return void 0;
  }
  return {
    clientId,
    clientSecret
  };
}
function createDingtalkClient(opts) {
  const constructorOpts = {
    clientId: opts.clientId,
    clientSecret: opts.clientSecret,
    ...opts.ua ? { ua: opts.ua } : {},
    ...typeof opts.keepAlive === "boolean" ? { keepAlive: opts.keepAlive } : {},
    ...typeof opts.debug === "boolean" ? { debug: opts.debug } : {}
  };
  if (typeof opts.autoReconnect === "boolean") {
    constructorOpts.autoReconnect = opts.autoReconnect;
  }
  const client = new DWClient(constructorOpts);
  return client;
}
function createDingtalkClientFromConfig(cfg, opts) {
  const creds = resolveDingtalkCredentials(cfg);
  if (!creds) {
    throw new Error("DingTalk credentials not configured (clientId, clientSecret required)");
  }
  return createDingtalkClient({
    ...creds,
    ua: "openclaw-dingtalk",
    keepAlive: opts?.keepAlive,
    debug: opts?.debug,
    autoReconnect: opts?.autoReconnect});
}
var DINGTALK_OAUTH_URL = "https://api.dingtalk.com/v1.0/oauth2/accessToken";
var TOKEN_REQUEST_TIMEOUT = 1e4;
var TOKEN_REFRESH_BUFFER = 5 * 60 * 1e3;
var tokenCacheMap = /* @__PURE__ */ new Map();
async function getAccessToken(clientId, clientSecret) {
  const now = Date.now();
  const cached = tokenCacheMap.get(clientId);
  if (cached && cached.expiresAt > now + TOKEN_REFRESH_BUFFER) {
    return cached.accessToken;
  }
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TOKEN_REQUEST_TIMEOUT);
  try {
    const response = await fetch(DINGTALK_OAUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        appKey: clientId,
        appSecret: clientSecret
      }),
      signal: controller.signal
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to get DingTalk access token: HTTP ${response.status} - ${errorText}`
      );
    }
    const data = await response.json();
    if (!data.accessToken) {
      throw new Error("DingTalk OAuth response missing accessToken");
    }
    const expiresAt = now + data.expireIn * 1e3;
    tokenCacheMap.set(clientId, {
      accessToken: data.accessToken,
      expiresAt,
      clientId
    });
    return data.accessToken;
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(`DingTalk access token request timed out after ${TOKEN_REQUEST_TIMEOUT}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// src/send.ts
var DINGTALK_API_BASE = "https://api.dingtalk.com";
var REQUEST_TIMEOUT = 3e4;
var DEFAULT_MARKDOWN_TITLE = "Moltbot";
function extractTitle(text, defaultTitle) {
  const firstLine = text.split("\n")[0] || "";
  const cleaned = firstLine.replace(/^[#*\s\->]+/, "").slice(0, 20);
  return cleaned || defaultTitle;
}
async function sendMessageDingtalk(params) {
  const { cfg, to, text, chatType, title } = params;
  if (!cfg.clientId || !cfg.clientSecret) {
    throw new Error("DingTalk credentials not configured (clientId, clientSecret required)");
  }
  const accessToken = await getAccessToken(cfg.clientId, cfg.clientSecret);
  const msgTitle = title || extractTitle(text, DEFAULT_MARKDOWN_TITLE);
  if (chatType === "direct") {
    return sendDirectMessage({ cfg, to, text, accessToken, title: msgTitle });
  } else {
    return sendGroupMessage({ cfg, to, text, accessToken, title: msgTitle });
  }
}
async function sendDirectMessage(params) {
  const { cfg, to, text, accessToken, title } = params;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
  try {
    const response = await fetch(
      `${DINGTALK_API_BASE}/v1.0/robot/oToMessages/batchSend`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-acs-dingtalk-access-token": accessToken
        },
        body: JSON.stringify({
          robotCode: cfg.clientId,
          userIds: [to],
          msgKey: "sampleMarkdown",
          msgParam: JSON.stringify({ title, text })
        }),
        signal: controller.signal
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `DingTalk direct message send failed: HTTP ${response.status}`;
      try {
        const errorData = JSON.parse(errorText);
        if (errorData.message) {
          errorMessage = `DingTalk direct message send failed: ${errorData.message} (code: ${errorData.code ?? "unknown"})`;
        }
      } catch {
        errorMessage = `${errorMessage} - ${errorText}`;
      }
      throw new Error(errorMessage);
    }
    const data = await response.json();
    if (data.invalidStaffIdList && data.invalidStaffIdList.length > 0) {
      throw new Error(
        `DingTalk direct message send failed: invalid user IDs: ${data.invalidStaffIdList.join(", ")}`
      );
    }
    return {
      messageId: data.processQueryKey ?? `dm_${Date.now()}`,
      conversationId: to
    };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(`DingTalk direct message send timed out after ${REQUEST_TIMEOUT}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function sendGroupMessage(params) {
  const { cfg, to, text, accessToken, title } = params;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
  try {
    const response = await fetch(
      `${DINGTALK_API_BASE}/v1.0/robot/groupMessages/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-acs-dingtalk-access-token": accessToken
        },
        body: JSON.stringify({
          robotCode: cfg.clientId,
          openConversationId: to,
          msgKey: "sampleMarkdown",
          msgParam: JSON.stringify({ title, text })
        }),
        signal: controller.signal
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `DingTalk group message send failed: HTTP ${response.status}`;
      try {
        const errorData = JSON.parse(errorText);
        if (errorData.message) {
          errorMessage = `DingTalk group message send failed: ${errorData.message} (code: ${errorData.code ?? "unknown"})`;
        }
      } catch {
        errorMessage = `${errorMessage} - ${errorText}`;
      }
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return {
      messageId: data.processQueryKey ?? `gm_${Date.now()}`,
      conversationId: to
    };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(`DingTalk group message send timed out after ${REQUEST_TIMEOUT}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// ../../packages/shared/src/logger/logger.ts
function createLogger(prefix, opts) {
  const logFn = opts?.log ?? console.log;
  const errorFn = opts?.error ?? console.error;
  return {
    debug: (msg) => logFn(`[${prefix}] [DEBUG] ${msg}`),
    info: (msg) => logFn(`[${prefix}] ${msg}`),
    warn: (msg) => logFn(`[${prefix}] [WARN] ${msg}`),
    error: (msg) => errorFn(`[${prefix}] [ERROR] ${msg}`)
  };
}

// ../../packages/shared/src/policy/dm-policy.ts
function checkDmPolicy(params) {
  const { dmPolicy: dmPolicy2, senderId, allowFrom = [] } = params;
  switch (dmPolicy2) {
    case "open":
      return { allowed: true };
    case "pairing":
      return { allowed: true };
    case "allowlist":
      if (allowFrom.includes(senderId)) {
        return { allowed: true };
      }
      return {
        allowed: false,
        reason: `sender ${senderId} not in DM allowlist`
      };
    default:
      return { allowed: true };
  }
}

// ../../packages/shared/src/policy/group-policy.ts
function checkGroupPolicy(params) {
  const { groupPolicy, conversationId, groupAllowFrom = [], requireMention, mentionedBot } = params;
  switch (groupPolicy) {
    case "disabled":
      return {
        allowed: false,
        reason: "group messages disabled"
      };
    case "allowlist":
      if (!groupAllowFrom.includes(conversationId)) {
        return {
          allowed: false,
          reason: `group ${conversationId} not in allowlist`
        };
      }
      break;
  }
  if (requireMention && !mentionedBot) {
    return {
      allowed: false,
      reason: "message did not mention bot"
    };
  }
  return { allowed: true };
}

// ../../packages/shared/src/file/file-utils.ts
var MIME_TO_EXTENSION = {
  // Images
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/webp": ".webp",
  "image/bmp": ".bmp",
  // Audio
  "audio/mpeg": ".mp3",
  "audio/wav": ".wav",
  "audio/ogg": ".ogg",
  "audio/amr": ".amr",
  "audio/x-m4a": ".m4a",
  // Video
  "video/mp4": ".mp4",
  "video/quicktime": ".mov",
  "video/x-msvideo": ".avi",
  "video/webm": ".webm",
  // Documents
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "application/vnd.ms-powerpoint": ".ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx",
  "application/rtf": ".rtf",
  "application/vnd.oasis.opendocument.text": ".odt",
  "application/vnd.oasis.opendocument.spreadsheet": ".ods",
  "text/plain": ".txt",
  "text/markdown": ".md",
  "text/csv": ".csv",
  // Archives
  "application/zip": ".zip",
  "application/x-rar-compressed": ".rar",
  "application/vnd.rar": ".rar",
  "application/x-7z-compressed": ".7z",
  "application/x-tar": ".tar",
  "application/gzip": ".gz",
  "application/x-gzip": ".gz",
  "application/x-bzip2": ".bz2",
  // Code
  "application/json": ".json",
  "application/xml": ".xml",
  "text/xml": ".xml",
  "text/html": ".html",
  "text/css": ".css",
  "text/javascript": ".js",
  "application/javascript": ".js",
  "text/x-python": ".py",
  "text/x-java-source": ".java",
  "text/x-c": ".c",
  "text/x-yaml": ".yaml",
  "application/x-yaml": ".yaml"
};
var CATEGORY_BY_MIME = {
  // Documents
  "application/pdf": "document",
  "application/msword": "document",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "document",
  "application/vnd.ms-excel": "document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "document",
  "application/vnd.ms-powerpoint": "document",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "document",
  "application/rtf": "document",
  "application/vnd.oasis.opendocument.text": "document",
  "application/vnd.oasis.opendocument.spreadsheet": "document",
  "text/plain": "document",
  "text/markdown": "document",
  "text/csv": "document",
  // Archives
  "application/zip": "archive",
  "application/x-rar-compressed": "archive",
  "application/vnd.rar": "archive",
  "application/x-7z-compressed": "archive",
  "application/x-tar": "archive",
  "application/gzip": "archive",
  "application/x-gzip": "archive",
  "application/x-bzip2": "archive",
  // Code
  "application/json": "code",
  "application/xml": "code",
  "text/xml": "code",
  "text/html": "code",
  "text/css": "code",
  "text/javascript": "code",
  "application/javascript": "code",
  "text/x-python": "code",
  "text/x-java-source": "code",
  "text/x-c": "code",
  "text/x-yaml": "code",
  "application/x-yaml": "code"
};
var CATEGORY_BY_EXTENSION = {
  // Images
  ".jpg": "image",
  ".jpeg": "image",
  ".png": "image",
  ".gif": "image",
  ".webp": "image",
  ".bmp": "image",
  // Audio
  ".mp3": "audio",
  ".wav": "audio",
  ".ogg": "audio",
  ".m4a": "audio",
  ".amr": "audio",
  // Video
  ".mp4": "video",
  ".mov": "video",
  ".avi": "video",
  ".mkv": "video",
  ".webm": "video",
  // Documents
  ".pdf": "document",
  ".doc": "document",
  ".docx": "document",
  ".txt": "document",
  ".md": "document",
  ".rtf": "document",
  ".odt": "document",
  ".xls": "document",
  ".xlsx": "document",
  ".csv": "document",
  ".ods": "document",
  ".ppt": "document",
  ".pptx": "document",
  // Archives
  ".zip": "archive",
  ".rar": "archive",
  ".7z": "archive",
  ".tar": "archive",
  ".gz": "archive",
  ".bz2": "archive",
  // Code
  ".py": "code",
  ".js": "code",
  ".ts": "code",
  ".jsx": "code",
  ".tsx": "code",
  ".java": "code",
  ".cpp": "code",
  ".c": "code",
  ".go": "code",
  ".rs": "code",
  ".json": "code",
  ".xml": "code",
  ".yaml": "code",
  ".yml": "code",
  ".html": "code",
  ".css": "code"
};
function extractExtension(fileName) {
  const lastDot = fileName.lastIndexOf(".");
  if (lastDot === -1 || lastDot === fileName.length - 1) {
    return "";
  }
  return fileName.slice(lastDot).toLowerCase();
}
function resolveFileCategory(contentType, fileName) {
  const mimeType = contentType.split(";")[0].trim().toLowerCase();
  if (mimeType.startsWith("image/")) {
    return "image";
  }
  if (mimeType.startsWith("audio/")) {
    return "audio";
  }
  if (mimeType.startsWith("video/")) {
    return "video";
  }
  if (mimeType in CATEGORY_BY_MIME) {
    return CATEGORY_BY_MIME[mimeType];
  }
  if (fileName) {
    const ext = extractExtension(fileName);
    if (ext && ext in CATEGORY_BY_EXTENSION) {
      return CATEGORY_BY_EXTENSION[ext];
    }
  }
  return "other";
}
function resolveExtension(contentType, fileName) {
  {
    const ext = extractExtension(fileName);
    if (ext) {
      return ext;
    }
  }
  const mimeType = contentType.split(";")[0].trim().toLowerCase();
  if (mimeType in MIME_TO_EXTENSION) {
    return MIME_TO_EXTENSION[mimeType];
  }
  return ".bin";
}
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp",
  "bmp",
  "tiff",
  "tif",
  "heic",
  "heif",
  "svg",
  "ico"
]);
var AUDIO_EXTENSIONS = /* @__PURE__ */ new Set([
  "mp3",
  "wav",
  "ogg",
  "m4a",
  "amr",
  "flac",
  "aac",
  "wma"
]);
var VIDEO_EXTENSIONS = /* @__PURE__ */ new Set([
  "mp4",
  "mov",
  "avi",
  "mkv",
  "webm",
  "flv",
  "wmv",
  "m4v"
]);
var NON_IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  // 文档
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "csv",
  "ppt",
  "pptx",
  "txt",
  "md",
  "rtf",
  "odt",
  "ods",
  // 压缩包
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  "tgz",
  "bz2",
  // 音频
  ...AUDIO_EXTENSIONS,
  // 视频
  ...VIDEO_EXTENSIONS,
  // 数据
  "json",
  "xml",
  "yaml",
  "yml"
]);
var MARKDOWN_IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;
var MARKDOWN_LINKED_IMAGE_RE = /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g;
var HTML_IMAGE_RE = /<img\b[^>]*\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))[^>]*>/gi;
var MARKDOWN_LINK_RE = /\[([^\]]*)\]\(([^)]+)\)/g;
var BARE_IMAGE_PATH_RE = /`?((?:\/(?:tmp|var|private|Users|home|root)\/[^\s`'",)]+|[A-Za-z]:[\\/][^\s`'",)]+)\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico))`?/gi;
var NON_IMAGE_EXT_PATTERN = Array.from(NON_IMAGE_EXTENSIONS).join("|");
var WINDOWS_PATH_SEP = String.raw`(?:\\\\|\\)`;
var WINDOWS_FILE_PATH = String.raw`[A-Za-z]:${WINDOWS_PATH_SEP}(?:[^\\/:*?"<>|\r\n]+${WINDOWS_PATH_SEP})*[^\\/:*?"<>|\r\n]+`;
var UNIX_FILE_PATH = String.raw`\/(?:tmp|var|private|Users|home|root)\/[^\s'",)]+`;
var BARE_FILE_PATH_RE = new RegExp(
  String.raw`\`?((?:${UNIX_FILE_PATH}|${WINDOWS_FILE_PATH})\.(?:${NON_IMAGE_EXT_PATTERN}))\`?`,
  "gi"
);
var MEDIA_LINE_PREFIX = "MEDIA:";
function unwrapMediaLinePayload(value) {
  const trimmed = value.trim();
  if (trimmed.length < 2) return void 0;
  const first = trimmed[0];
  const last = trimmed[trimmed.length - 1];
  if (first !== last) return void 0;
  if (first !== `"` && first !== "'" && first !== "`") return void 0;
  return trimmed.slice(1, -1).trim();
}
function cleanMediaLineCandidate(value) {
  return value.replace(/^[`"'[{(<]+/, "").replace(/[`"'\])}>.,;]+$/, "");
}
function splitMediaLineCandidates(payload) {
  const unwrapped = unwrapMediaLinePayload(payload);
  if (unwrapped) return [unwrapped];
  return payload.split(/\s+/).filter(Boolean);
}
function isHttpUrl(value) {
  return /^https?:\/\//i.test(value);
}
function isFileUrl(value) {
  return /^file:\/\//i.test(value);
}
function isLocalReference(raw) {
  if (isHttpUrl(raw)) return false;
  return raw.startsWith("file://") || raw.startsWith("MEDIA:") || raw.startsWith("attachment://") || raw.startsWith("/") || raw.startsWith("~") || /^[a-zA-Z]:[\\/]/.test(raw);
}
function normalizeLocalPath(raw) {
  let p = raw.trim();
  if (isFileUrl(p)) {
    try {
      return fileURLToPath(p);
    } catch {
      p = p.replace(/^file:\/\/\/?/i, "");
    }
  }
  if (p.startsWith("MEDIA:")) {
    p = p.replace(/^MEDIA:/i, "");
  } else if (p.startsWith("attachment://")) {
    p = p.replace(/^attachment:\/\//i, "");
  }
  p = p.replace(/\\ /g, " ");
  try {
    p = decodeURIComponent(p);
  } catch {
  }
  if (p.startsWith("~/") || p === "~") {
    p = path.join(os.homedir(), p.slice(1));
  } else if (p.startsWith("~")) ;
  if (!path.isAbsolute(p)) {
    p = path.resolve(process.cwd(), p);
  }
  return p;
}
function stripTitleFromUrl(value) {
  const trimmed = value.trim();
  const match = trimmed.match(/^(\S+)\s+["'][^"']*["']\s*$/);
  return match ? match[1] : trimmed;
}
function getExtension(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ext.startsWith(".") ? ext.slice(1) : ext;
}
function isImagePath(filePath) {
  const ext = getExtension(filePath);
  return ext ? IMAGE_EXTENSIONS.has(ext) : false;
}
function isNonImageFilePath(filePath) {
  const ext = getExtension(filePath);
  return ext ? NON_IMAGE_EXTENSIONS.has(ext) : false;
}
function detectMediaType(filePath) {
  const ext = getExtension(filePath);
  if (IMAGE_EXTENSIONS.has(ext)) return "image";
  if (AUDIO_EXTENSIONS.has(ext)) return "audio";
  if (VIDEO_EXTENSIONS.has(ext)) return "video";
  return "file";
}
function createExtractedMedia(source, sourceKind, options) {
  const isHttp = isHttpUrl(source);
  const isLocal = !isHttp && isLocalReference(source);
  const cleanSource = stripTitleFromUrl(source);
  let localPath;
  let fileName;
  if (isLocal) {
    localPath = normalizeLocalPath(cleanSource);
    fileName = path.basename(localPath);
  } else if (isHttp) {
    try {
      const url = new URL(cleanSource);
      fileName = path.basename(url.pathname) || void 0;
    } catch {
    }
  }
  const type = detectMediaType(fileName || cleanSource);
  return {
    source: cleanSource,
    localPath,
    type,
    isLocal,
    isHttp,
    fileName,
    sourceKind
  };
}
function extractMediaFromText(text, options = {}) {
  const {
    removeFromText = true,
    checkExists = false,
    existsSync: existsSync5,
    parseMediaLines = false,
    parseMarkdownImages = true,
    parseHtmlImages = true,
    parseBarePaths = true,
    parseMarkdownLinks = true
  } = options;
  const images = [];
  const files = [];
  const seenSources = /* @__PURE__ */ new Set();
  let result = text;
  const addMedia = (media) => {
    const key = media.localPath || media.source;
    if (seenSources.has(key)) return false;
    if (checkExists && media.isLocal && media.localPath) {
      const exists = existsSync5 ? existsSync5(media.localPath) : fs3.existsSync(media.localPath);
      if (!exists) return false;
    }
    seenSources.add(key);
    if (media.type === "image") {
      images.push(media);
    } else {
      files.push(media);
    }
    return true;
  };
  if (parseMediaLines) {
    const lines = result.split("\n");
    const keptLines = [];
    for (const line of lines) {
      const trimmedStart = line.trimStart();
      if (!trimmedStart.startsWith(MEDIA_LINE_PREFIX)) {
        keptLines.push(line);
        continue;
      }
      const payload = trimmedStart.slice(MEDIA_LINE_PREFIX.length).trim();
      if (!payload) {
        keptLines.push(line);
        continue;
      }
      const candidates = splitMediaLineCandidates(payload);
      let addedAny = false;
      for (const raw of candidates) {
        const candidate = stripTitleFromUrl(cleanMediaLineCandidate(raw));
        if (!candidate) continue;
        if (!isHttpUrl(candidate) && !isLocalReference(candidate)) {
          continue;
        }
        const media = createExtractedMedia(candidate, "bare");
        if (addMedia(media)) {
          addedAny = true;
        }
      }
      if (!addedAny || !removeFromText) {
        keptLines.push(line);
      }
    }
    if (removeFromText) {
      result = keptLines.join("\n");
    }
  }
  const replacements = [];
  const applyReplacements = () => {
    if (replacements.length === 0) return;
    replacements.sort((a, b) => b.start - a.start);
    for (const { start, end, replacement } of replacements) {
      result = result.slice(0, start) + replacement + result.slice(end);
    }
    replacements.length = 0;
  };
  if (parseMarkdownImages) {
    const linkedMatches = [...text.matchAll(MARKDOWN_LINKED_IMAGE_RE)];
    for (const match of linkedMatches) {
      const [fullMatch, _alt, imgSrc] = match;
      const media = createExtractedMedia(imgSrc, "markdown");
      if (media.type === "image") {
        addMedia(media);
        if (removeFromText && match.index !== void 0) {
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            replacement: ""
          });
        }
      }
    }
    applyReplacements();
  }
  if (parseMarkdownImages) {
    const mdMatches = [...result.matchAll(MARKDOWN_IMAGE_RE)];
    for (const match of mdMatches) {
      const [fullMatch, _alt, src] = match;
      const media = createExtractedMedia(src, "markdown");
      if (media.type === "image") {
        addMedia(media);
        if (removeFromText && match.index !== void 0) {
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            replacement: ""
          });
        }
      }
    }
    applyReplacements();
  }
  if (parseHtmlImages) {
    const htmlMatches = [...result.matchAll(HTML_IMAGE_RE)];
    for (const match of htmlMatches) {
      const [fullMatch, src1, src2, src3] = match;
      const src = src1 || src2 || src3;
      if (src) {
        const media = createExtractedMedia(src, "html");
        if (media.type === "image") {
          addMedia(media);
          if (removeFromText && match.index !== void 0) {
            replacements.push({
              start: match.index,
              end: match.index + fullMatch.length,
              replacement: ""
            });
          }
        }
      }
    }
    applyReplacements();
  }
  if (parseMarkdownLinks) {
    MARKDOWN_LINK_RE.lastIndex = 0;
    const linkMatches = [...result.matchAll(MARKDOWN_LINK_RE)];
    for (const match of linkMatches) {
      const [fullMatch, _label, rawPath] = match;
      const idx = match.index ?? 0;
      if (idx > 0 && result[idx - 1] === "!") continue;
      if (!isLocalReference(rawPath)) continue;
      const media = createExtractedMedia(rawPath, "markdown");
      if (media.type !== "image" && isNonImageFilePath(media.localPath || rawPath)) {
        if (addMedia(media)) {
          if (removeFromText && match.index !== void 0) {
            const fileName = media.fileName || path.basename(rawPath);
            replacements.push({
              start: match.index,
              end: match.index + fullMatch.length,
              replacement: `[\u6587\u4EF6: ${fileName}]`
            });
          }
        }
      }
    }
    applyReplacements();
  }
  if (parseBarePaths && parseMarkdownImages) {
    BARE_IMAGE_PATH_RE.lastIndex = 0;
    const bareImageMatches = [...result.matchAll(BARE_IMAGE_PATH_RE)];
    const newBareImageMatches = bareImageMatches.filter((m) => {
      const idx = m.index ?? 0;
      const before = result.slice(Math.max(0, idx - 10), idx);
      return !before.includes("](");
    });
    for (const match of newBareImageMatches) {
      const [fullMatch, rawPath] = match;
      const media = createExtractedMedia(rawPath, "bare");
      if (media.type === "image") {
        addMedia(media);
        if (removeFromText && match.index !== void 0) {
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            replacement: ""
          });
        }
      }
    }
    applyReplacements();
  }
  if (parseBarePaths && parseMarkdownLinks) {
    BARE_FILE_PATH_RE.lastIndex = 0;
    const bareFileMatches = [...result.matchAll(BARE_FILE_PATH_RE)];
    for (const match of bareFileMatches) {
      const [fullMatch, rawPath] = match;
      const media = createExtractedMedia(rawPath, "bare");
      if (media.type !== "image") {
        if (addMedia(media)) {
          if (removeFromText && match.index !== void 0) {
            const fileName = media.fileName || path.basename(rawPath);
            replacements.push({
              start: match.index,
              end: match.index + fullMatch.length,
              replacement: `[\u6587\u4EF6: ${fileName}]`
            });
          }
        }
      }
    }
    applyReplacements();
  }
  if (removeFromText) {
    result = result.replace(/\n{3,}/g, "\n\n").trim();
  }
  return {
    text: result,
    images,
    files,
    all: [...images, ...files]
  };
}
var DEFAULT_TIMEOUT = 3e4;
var DEFAULT_MAX_SIZE = 100 * 1024 * 1024;
function parseContentDispositionFilename(value) {
  if (!value) return void 0;
  const utf8Match = value.match(/filename\*=UTF-8''([^;]+)/i);
  if (utf8Match?.[1]) {
    try {
      return decodeURIComponent(utf8Match[1].trim());
    } catch {
      return utf8Match[1].trim();
    }
  }
  const plainMatch = value.match(/filename=([^;]+)/i);
  if (!plainMatch?.[1]) return void 0;
  const raw = plainMatch[1].trim().replace(/^["']|["']$/g, "");
  return raw || void 0;
}
function sanitizeFileName(name) {
  const trimmed = name.trim();
  if (!trimmed) return "file";
  const normalized = trimmed.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_");
  return normalized || "file";
}
function resolveFileNameFromUrl(url) {
  try {
    const parsed = new URL(url);
    const base = path.basename(parsed.pathname);
    if (!base || base === "/") return void 0;
    return base;
  } catch {
    return void 0;
  }
}
function normalizeForCompare(value) {
  return path.resolve(value).replace(/\\/g, "/").toLowerCase();
}
function isPathUnderDir(filePath, dirPath) {
  const f = normalizeForCompare(filePath);
  const d2 = normalizeForCompare(dirPath).replace(/\/+$/, "");
  return f === d2 || f.startsWith(`${d2}/`);
}
function formatDateDir(date = /* @__PURE__ */ new Date()) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
var FileSizeLimitError = class _FileSizeLimitError extends Error {
  /** 实际文件大小（字节） */
  actualSize;
  /** 大小限制（字节） */
  limitSize;
  constructor(actualSize, limitSize) {
    super(`File size ${actualSize} bytes exceeds limit ${limitSize} bytes`);
    this.name = "FileSizeLimitError";
    this.actualSize = actualSize;
    this.limitSize = limitSize;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _FileSizeLimitError);
    }
  }
};
var MediaTimeoutError = class _MediaTimeoutError extends Error {
  /** 超时时间（毫秒） */
  timeoutMs;
  constructor(timeoutMs) {
    super(`Operation timed out after ${timeoutMs}ms`);
    this.name = "MediaTimeoutError";
    this.timeoutMs = timeoutMs;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _MediaTimeoutError);
    }
  }
};
async function downloadToTempFile(url, options = {}) {
  if (!isHttpUrl(url)) {
    throw new Error(`downloadToTempFile expects an HTTP URL, got: ${url}`);
  }
  const {
    timeout = DEFAULT_TIMEOUT,
    maxSize = DEFAULT_MAX_SIZE,
    fetch: customFetch = globalThis.fetch,
    tempDir = os.tmpdir(),
    tempPrefix = "media",
    sourceFileName
  } = options;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await customFetch(url, { signal: controller.signal });
    if (!response.ok) {
      const responseBody = await response.text().catch(() => "");
      throw new Error(`HTTP ${response.status}: ${responseBody}`);
    }
    const contentType = response.headers.get("content-type")?.split(";")[0].trim() || "application/octet-stream";
    const contentLength = response.headers.get("content-length");
    if (contentLength) {
      const declared = parseInt(contentLength, 10);
      if (!Number.isNaN(declared) && declared > maxSize) {
        throw new FileSizeLimitError(declared, maxSize);
      }
    }
    const body = response.body;
    if (!body) {
      throw new Error("Response body is null");
    }
    const chunks = [];
    let totalBytes = 0;
    const reader = body.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalBytes += value.length;
        if (totalBytes > maxSize) {
          reader.cancel();
          throw new FileSizeLimitError(totalBytes, maxSize);
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
    const sourceName = sourceFileName || parseContentDispositionFilename(response.headers.get("content-disposition")) || resolveFileNameFromUrl(url) || "file";
    const safePrefix = sanitizeFileName(tempPrefix) || "media";
    const ext = resolveExtension(contentType, sourceName);
    const random = Math.random().toString(36).slice(2, 8);
    const fileName = `${safePrefix}-${Date.now()}-${random}${ext}`;
    const fullPath = path.join(tempDir, fileName);
    await fsPromises.mkdir(tempDir, { recursive: true });
    const buffer = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
    await fsPromises.writeFile(fullPath, buffer);
    return {
      path: fullPath,
      fileName,
      contentType,
      size: totalBytes,
      sourceFileName: sourceName
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new MediaTimeoutError(timeout);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function finalizeInboundMediaFile(options) {
  const current = String(options.filePath ?? "").trim();
  if (!current) return current;
  if (!isPathUnderDir(current, options.tempDir)) {
    return current;
  }
  const datedDir = path.join(options.inboundDir, formatDateDir());
  const target = path.join(datedDir, path.basename(current));
  try {
    await fsPromises.mkdir(datedDir, { recursive: true });
    await fsPromises.rename(current, target);
    return target;
  } catch (error) {
    const code = error?.code ?? "";
    if (code === "EXDEV") {
      try {
        await fsPromises.copyFile(current, target);
        try {
          await fsPromises.unlink(current);
        } catch {
        }
        return target;
      } catch {
        return current;
      }
    }
    return current;
  }
}
async function pruneInboundMediaDir(options) {
  const keepDays = Number(options.keepDays);
  if (!Number.isFinite(keepDays) || keepDays < 0) return;
  const now = options.nowMs ?? Date.now();
  const cutoff = now - keepDays * 24 * 60 * 60 * 1e3;
  let entries = [];
  try {
    entries = await fsPromises.readdir(options.inboundDir);
  } catch {
    return;
  }
  for (const entry of entries) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry)) continue;
    const dirPath = path.join(options.inboundDir, entry);
    let dirStats;
    try {
      dirStats = await fsPromises.stat(dirPath);
    } catch {
      continue;
    }
    if (!dirStats.isDirectory()) continue;
    const dirTime = dirStats.mtimeMs || dirStats.ctimeMs || 0;
    if (dirTime >= cutoff) continue;
    let files = [];
    try {
      files = await fsPromises.readdir(dirPath);
    } catch {
      continue;
    }
    for (const file of files) {
      const fp = path.join(dirPath, file);
      try {
        const fst = await fsPromises.stat(fp);
        if (fst.isFile() && (fst.mtimeMs || fst.ctimeMs || 0) < cutoff) {
          await fsPromises.unlink(fp);
        }
      } catch {
      }
    }
  }
}

// ../../packages/shared/src/cron/index.ts
var CRON_HIDDEN_PROMPT = `
When creating or updating a cron task, always store a fixed delivery target in the job itself.
- Use the built-in cron tool (action=add/update). Do not run shell commands.
- Must use sessionTarget="isolated" for reminder jobs.
- payload.kind="agentTurn"
- payload.message must be plain user-visible reminder text only.
- You must encode runtime guardrails directly into payload.message so the cron run can follow them without extra context.
- Runtime guardrails to encode in payload.message:
  - return plain text only
  - never call any tool
  - never call the message tool
  - never send manually; delivery is handled by cron delivery settings
- Do not include tool directives, "NO_REPLY", or heartbeat markers in payload.message.
- Job name is never a message target.
- During cron run, must return plain text only and never call the message tool.
- Use top-level delivery with announce mode:
  delivery.mode="announce"
  delivery.channel=<OriginatingChannel> (example: "qqbot")
  delivery.to=<OriginatingTo> (examples: "user:<openid>" / "group:<group_openid>")
  delivery.accountId=<AccountId> when available
- Never set delivery.channel="last" for multi-channel environments.
- If OriginatingChannel/OriginatingTo are unavailable, ask a concise follow-up for channel and target.
- Do not call the message tool to send`;
var CRON_TRIGGER_KEYWORDS = [
  "\u5B9A\u65F6",
  "\u63D0\u9192",
  "\u6BCF\u5206\u949F",
  "\u6BCF\u5C0F\u65F6",
  "\u6BCF\u5929",
  "\u6BCF\u5468",
  "\u51E0\u70B9",
  "\u65E9\u4E0A",
  "\u665A\u4E0A",
  "\u5DE5\u4F5C\u65E5",
  "cron",
  "remind",
  "reminder",
  "schedule",
  "scheduled",
  "every minute",
  "every hour",
  "every day",
  "daily",
  "every week",
  "weekly",
  "weekday",
  "workday",
  "morning",
  "evening"
];
var CRON_TRIGGER_PATTERNS = [
  /提醒我/u,
  /帮我定时/u,
  /每.+提醒/u,
  /每天.+发/u,
  /remind me/iu,
  /set (a )?reminder/iu,
  /every .+ remind/iu,
  /every day .+ (send|post|notify)/iu,
  /schedule .+ (reminder|message|notification)/iu
];
var CRON_EXCLUDE_PATTERNS = [
  /是什么意思/u,
  /区别/u,
  /为什么/u,
  /\bhelp\b/iu,
  /文档/u,
  /怎么用/u,
  /what does|what's|meaning of/iu,
  /difference/iu,
  /why/iu,
  /\bdocs?\b/iu,
  /documentation/iu,
  /how to/iu,
  /usage/iu
];
function shouldInjectCronHiddenPrompt(text) {
  const normalized = text.trim();
  if (!normalized) return false;
  const lowered = normalized.toLowerCase();
  for (const pattern of CRON_EXCLUDE_PATTERNS) {
    if (pattern.test(lowered)) return false;
  }
  for (const keyword of CRON_TRIGGER_KEYWORDS) {
    if (lowered.includes(keyword.toLowerCase())) return true;
  }
  return CRON_TRIGGER_PATTERNS.some((pattern) => pattern.test(normalized));
}
function splitCronHiddenPrompt(text) {
  const idx = text.indexOf(CRON_HIDDEN_PROMPT);
  if (idx === -1) {
    return { base: text };
  }
  const base = text.slice(0, idx).trimEnd();
  return { base, prompt: CRON_HIDDEN_PROMPT };
}
function appendCronHiddenPrompt(text) {
  if (!shouldInjectCronHiddenPrompt(text)) return text;
  if (text.includes(CRON_HIDDEN_PROMPT)) return text;
  return `${text}

${CRON_HIDDEN_PROMPT}`;
}

// ../../node_modules/.pnpm/@clack+core@1.0.1/node_modules/@clack/core/dist/index.mjs
var import_picocolors = __toESM(require_picocolors());
var import_sisteransi = __toESM(require_src());
function B(t, e2, s) {
  if (!s.some((u) => !u.disabled)) return t;
  const i = t + e2, r = Math.max(s.length - 1, 0), n = i < 0 ? r : i > r ? 0 : i;
  return s[n].disabled ? B(n, e2 < 0 ? -1 : 1, s) : n;
}
var at = (t) => t === 161 || t === 164 || t === 167 || t === 168 || t === 170 || t === 173 || t === 174 || t >= 176 && t <= 180 || t >= 182 && t <= 186 || t >= 188 && t <= 191 || t === 198 || t === 208 || t === 215 || t === 216 || t >= 222 && t <= 225 || t === 230 || t >= 232 && t <= 234 || t === 236 || t === 237 || t === 240 || t === 242 || t === 243 || t >= 247 && t <= 250 || t === 252 || t === 254 || t === 257 || t === 273 || t === 275 || t === 283 || t === 294 || t === 295 || t === 299 || t >= 305 && t <= 307 || t === 312 || t >= 319 && t <= 322 || t === 324 || t >= 328 && t <= 331 || t === 333 || t === 338 || t === 339 || t === 358 || t === 359 || t === 363 || t === 462 || t === 464 || t === 466 || t === 468 || t === 470 || t === 472 || t === 474 || t === 476 || t === 593 || t === 609 || t === 708 || t === 711 || t >= 713 && t <= 715 || t === 717 || t === 720 || t >= 728 && t <= 731 || t === 733 || t === 735 || t >= 768 && t <= 879 || t >= 913 && t <= 929 || t >= 931 && t <= 937 || t >= 945 && t <= 961 || t >= 963 && t <= 969 || t === 1025 || t >= 1040 && t <= 1103 || t === 1105 || t === 8208 || t >= 8211 && t <= 8214 || t === 8216 || t === 8217 || t === 8220 || t === 8221 || t >= 8224 && t <= 8226 || t >= 8228 && t <= 8231 || t === 8240 || t === 8242 || t === 8243 || t === 8245 || t === 8251 || t === 8254 || t === 8308 || t === 8319 || t >= 8321 && t <= 8324 || t === 8364 || t === 8451 || t === 8453 || t === 8457 || t === 8467 || t === 8470 || t === 8481 || t === 8482 || t === 8486 || t === 8491 || t === 8531 || t === 8532 || t >= 8539 && t <= 8542 || t >= 8544 && t <= 8555 || t >= 8560 && t <= 8569 || t === 8585 || t >= 8592 && t <= 8601 || t === 8632 || t === 8633 || t === 8658 || t === 8660 || t === 8679 || t === 8704 || t === 8706 || t === 8707 || t === 8711 || t === 8712 || t === 8715 || t === 8719 || t === 8721 || t === 8725 || t === 8730 || t >= 8733 && t <= 8736 || t === 8739 || t === 8741 || t >= 8743 && t <= 8748 || t === 8750 || t >= 8756 && t <= 8759 || t === 8764 || t === 8765 || t === 8776 || t === 8780 || t === 8786 || t === 8800 || t === 8801 || t >= 8804 && t <= 8807 || t === 8810 || t === 8811 || t === 8814 || t === 8815 || t === 8834 || t === 8835 || t === 8838 || t === 8839 || t === 8853 || t === 8857 || t === 8869 || t === 8895 || t === 8978 || t >= 9312 && t <= 9449 || t >= 9451 && t <= 9547 || t >= 9552 && t <= 9587 || t >= 9600 && t <= 9615 || t >= 9618 && t <= 9621 || t === 9632 || t === 9633 || t >= 9635 && t <= 9641 || t === 9650 || t === 9651 || t === 9654 || t === 9655 || t === 9660 || t === 9661 || t === 9664 || t === 9665 || t >= 9670 && t <= 9672 || t === 9675 || t >= 9678 && t <= 9681 || t >= 9698 && t <= 9701 || t === 9711 || t === 9733 || t === 9734 || t === 9737 || t === 9742 || t === 9743 || t === 9756 || t === 9758 || t === 9792 || t === 9794 || t === 9824 || t === 9825 || t >= 9827 && t <= 9829 || t >= 9831 && t <= 9834 || t === 9836 || t === 9837 || t === 9839 || t === 9886 || t === 9887 || t === 9919 || t >= 9926 && t <= 9933 || t >= 9935 && t <= 9939 || t >= 9941 && t <= 9953 || t === 9955 || t === 9960 || t === 9961 || t >= 9963 && t <= 9969 || t === 9972 || t >= 9974 && t <= 9977 || t === 9979 || t === 9980 || t === 9982 || t === 9983 || t === 10045 || t >= 10102 && t <= 10111 || t >= 11094 && t <= 11097 || t >= 12872 && t <= 12879 || t >= 57344 && t <= 63743 || t >= 65024 && t <= 65039 || t === 65533 || t >= 127232 && t <= 127242 || t >= 127248 && t <= 127277 || t >= 127280 && t <= 127337 || t >= 127344 && t <= 127373 || t === 127375 || t === 127376 || t >= 127387 && t <= 127404 || t >= 917760 && t <= 917999 || t >= 983040 && t <= 1048573 || t >= 1048576 && t <= 1114109;
var lt = (t) => t === 12288 || t >= 65281 && t <= 65376 || t >= 65504 && t <= 65510;
var ht = (t) => t >= 4352 && t <= 4447 || t === 8986 || t === 8987 || t === 9001 || t === 9002 || t >= 9193 && t <= 9196 || t === 9200 || t === 9203 || t === 9725 || t === 9726 || t === 9748 || t === 9749 || t >= 9800 && t <= 9811 || t === 9855 || t === 9875 || t === 9889 || t === 9898 || t === 9899 || t === 9917 || t === 9918 || t === 9924 || t === 9925 || t === 9934 || t === 9940 || t === 9962 || t === 9970 || t === 9971 || t === 9973 || t === 9978 || t === 9981 || t === 9989 || t === 9994 || t === 9995 || t === 10024 || t === 10060 || t === 10062 || t >= 10067 && t <= 10069 || t === 10071 || t >= 10133 && t <= 10135 || t === 10160 || t === 10175 || t === 11035 || t === 11036 || t === 11088 || t === 11093 || t >= 11904 && t <= 11929 || t >= 11931 && t <= 12019 || t >= 12032 && t <= 12245 || t >= 12272 && t <= 12287 || t >= 12289 && t <= 12350 || t >= 12353 && t <= 12438 || t >= 12441 && t <= 12543 || t >= 12549 && t <= 12591 || t >= 12593 && t <= 12686 || t >= 12688 && t <= 12771 || t >= 12783 && t <= 12830 || t >= 12832 && t <= 12871 || t >= 12880 && t <= 19903 || t >= 19968 && t <= 42124 || t >= 42128 && t <= 42182 || t >= 43360 && t <= 43388 || t >= 44032 && t <= 55203 || t >= 63744 && t <= 64255 || t >= 65040 && t <= 65049 || t >= 65072 && t <= 65106 || t >= 65108 && t <= 65126 || t >= 65128 && t <= 65131 || t >= 94176 && t <= 94180 || t === 94192 || t === 94193 || t >= 94208 && t <= 100343 || t >= 100352 && t <= 101589 || t >= 101632 && t <= 101640 || t >= 110576 && t <= 110579 || t >= 110581 && t <= 110587 || t === 110589 || t === 110590 || t >= 110592 && t <= 110882 || t === 110898 || t >= 110928 && t <= 110930 || t === 110933 || t >= 110948 && t <= 110951 || t >= 110960 && t <= 111355 || t === 126980 || t === 127183 || t === 127374 || t >= 127377 && t <= 127386 || t >= 127488 && t <= 127490 || t >= 127504 && t <= 127547 || t >= 127552 && t <= 127560 || t === 127568 || t === 127569 || t >= 127584 && t <= 127589 || t >= 127744 && t <= 127776 || t >= 127789 && t <= 127797 || t >= 127799 && t <= 127868 || t >= 127870 && t <= 127891 || t >= 127904 && t <= 127946 || t >= 127951 && t <= 127955 || t >= 127968 && t <= 127984 || t === 127988 || t >= 127992 && t <= 128062 || t === 128064 || t >= 128066 && t <= 128252 || t >= 128255 && t <= 128317 || t >= 128331 && t <= 128334 || t >= 128336 && t <= 128359 || t === 128378 || t === 128405 || t === 128406 || t === 128420 || t >= 128507 && t <= 128591 || t >= 128640 && t <= 128709 || t === 128716 || t >= 128720 && t <= 128722 || t >= 128725 && t <= 128727 || t >= 128732 && t <= 128735 || t === 128747 || t === 128748 || t >= 128756 && t <= 128764 || t >= 128992 && t <= 129003 || t === 129008 || t >= 129292 && t <= 129338 || t >= 129340 && t <= 129349 || t >= 129351 && t <= 129535 || t >= 129648 && t <= 129660 || t >= 129664 && t <= 129672 || t >= 129680 && t <= 129725 || t >= 129727 && t <= 129733 || t >= 129742 && t <= 129755 || t >= 129760 && t <= 129768 || t >= 129776 && t <= 129784 || t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141;
var O = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y;
var y = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
var L = /\t{1,1000}/y;
var P = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu;
var M = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
var ct = /\p{M}+/gu;
var ft = { limit: 1 / 0, ellipsis: "" };
var X = (t, e2 = {}, s = {}) => {
  const i = e2.limit ?? 1 / 0, r = e2.ellipsis ?? "", n = e2?.ellipsisWidth ?? (r ? X(r, ft, s).width : 0), u = s.ansiWidth ?? 0, a = s.controlWidth ?? 0, l = s.tabWidth ?? 8, E = s.ambiguousWidth ?? 1, g = s.emojiWidth ?? 2, m = s.fullWidthWidth ?? 2, A = s.regularWidth ?? 1, V2 = s.wideWidth ?? 2;
  let h = 0, o = 0, p = t.length, v = 0, F = false, d2 = p, b = Math.max(0, i - n), C2 = 0, w = 0, c = 0, f = 0;
  t: for (; ; ) {
    if (w > C2 || o >= p && o > h) {
      const ut2 = t.slice(C2, w) || t.slice(h, o);
      v = 0;
      for (const Y of ut2.replaceAll(ct, "")) {
        const $ = Y.codePointAt(0) || 0;
        if (lt($) ? f = m : ht($) ? f = V2 : E !== A && at($) ? f = E : f = A, c + f > b && (d2 = Math.min(d2, Math.max(C2, h) + v)), c + f > i) {
          F = true;
          break t;
        }
        v += Y.length, c += f;
      }
      C2 = w = 0;
    }
    if (o >= p) break;
    if (M.lastIndex = o, M.test(t)) {
      if (v = M.lastIndex - o, f = v * A, c + f > b && (d2 = Math.min(d2, o + Math.floor((b - c) / A))), c + f > i) {
        F = true;
        break;
      }
      c += f, C2 = h, w = o, o = h = M.lastIndex;
      continue;
    }
    if (O.lastIndex = o, O.test(t)) {
      if (c + u > b && (d2 = Math.min(d2, o)), c + u > i) {
        F = true;
        break;
      }
      c += u, C2 = h, w = o, o = h = O.lastIndex;
      continue;
    }
    if (y.lastIndex = o, y.test(t)) {
      if (v = y.lastIndex - o, f = v * a, c + f > b && (d2 = Math.min(d2, o + Math.floor((b - c) / a))), c + f > i) {
        F = true;
        break;
      }
      c += f, C2 = h, w = o, o = h = y.lastIndex;
      continue;
    }
    if (L.lastIndex = o, L.test(t)) {
      if (v = L.lastIndex - o, f = v * l, c + f > b && (d2 = Math.min(d2, o + Math.floor((b - c) / l))), c + f > i) {
        F = true;
        break;
      }
      c += f, C2 = h, w = o, o = h = L.lastIndex;
      continue;
    }
    if (P.lastIndex = o, P.test(t)) {
      if (c + g > b && (d2 = Math.min(d2, o)), c + g > i) {
        F = true;
        break;
      }
      c += g, C2 = h, w = o, o = h = P.lastIndex;
      continue;
    }
    o += 1;
  }
  return { width: F ? b : c, index: F ? d2 : p, truncated: F, ellipsed: F && i >= n };
};
var pt = { limit: 1 / 0, ellipsis: "", ellipsisWidth: 0 };
var S = (t, e2 = {}) => X(t, pt, e2).width;
var W = "\x1B";
var Z = "\x9B";
var Ft = 39;
var j = "\x07";
var Q = "[";
var dt = "]";
var tt = "m";
var U = `${dt}8;;`;
var et = new RegExp(`(?:\\${Q}(?<code>\\d+)m|\\${U}(?<uri>.*)${j})`, "y");
var mt = (t) => {
  if (t >= 30 && t <= 37 || t >= 90 && t <= 97) return 39;
  if (t >= 40 && t <= 47 || t >= 100 && t <= 107) return 49;
  if (t === 1 || t === 2) return 22;
  if (t === 3) return 23;
  if (t === 4) return 24;
  if (t === 7) return 27;
  if (t === 8) return 28;
  if (t === 9) return 29;
  if (t === 0) return 0;
};
var st = (t) => `${W}${Q}${t}${tt}`;
var it = (t) => `${W}${U}${t}${j}`;
var gt = (t) => t.map((e2) => S(e2));
var G = (t, e2, s) => {
  const i = e2[Symbol.iterator]();
  let r = false, n = false, u = t.at(-1), a = u === void 0 ? 0 : S(u), l = i.next(), E = i.next(), g = 0;
  for (; !l.done; ) {
    const m = l.value, A = S(m);
    a + A <= s ? t[t.length - 1] += m : (t.push(m), a = 0), (m === W || m === Z) && (r = true, n = e2.startsWith(U, g + 1)), r ? n ? m === j && (r = false, n = false) : m === tt && (r = false) : (a += A, a === s && !E.done && (t.push(""), a = 0)), l = E, E = i.next(), g += m.length;
  }
  u = t.at(-1), !a && u !== void 0 && u.length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
};
var vt = (t) => {
  const e2 = t.split(" ");
  let s = e2.length;
  for (; s > 0 && !(S(e2[s - 1]) > 0); ) s--;
  return s === e2.length ? t : e2.slice(0, s).join(" ") + e2.slice(s).join("");
};
var Et = (t, e2, s = {}) => {
  if (s.trim !== false && t.trim() === "") return "";
  let i = "", r, n;
  const u = t.split(" "), a = gt(u);
  let l = [""];
  for (const [h, o] of u.entries()) {
    s.trim !== false && (l[l.length - 1] = (l.at(-1) ?? "").trimStart());
    let p = S(l.at(-1) ?? "");
    if (h !== 0 && (p >= e2 && (s.wordWrap === false || s.trim === false) && (l.push(""), p = 0), (p > 0 || s.trim === false) && (l[l.length - 1] += " ", p++)), s.hard && a[h] > e2) {
      const v = e2 - p, F = 1 + Math.floor((a[h] - v - 1) / e2);
      Math.floor((a[h] - 1) / e2) < F && l.push(""), G(l, o, e2);
      continue;
    }
    if (p + a[h] > e2 && p > 0 && a[h] > 0) {
      if (s.wordWrap === false && p < e2) {
        G(l, o, e2);
        continue;
      }
      l.push("");
    }
    if (p + a[h] > e2 && s.wordWrap === false) {
      G(l, o, e2);
      continue;
    }
    l[l.length - 1] += o;
  }
  s.trim !== false && (l = l.map((h) => vt(h)));
  const E = l.join(`
`), g = E[Symbol.iterator]();
  let m = g.next(), A = g.next(), V2 = 0;
  for (; !m.done; ) {
    const h = m.value, o = A.value;
    if (i += h, h === W || h === Z) {
      et.lastIndex = V2 + 1;
      const F = et.exec(E)?.groups;
      if (F?.code !== void 0) {
        const d2 = Number.parseFloat(F.code);
        r = d2 === Ft ? void 0 : d2;
      } else F?.uri !== void 0 && (n = F.uri.length === 0 ? void 0 : F.uri);
    }
    const p = r ? mt(r) : void 0;
    o === `
` ? (n && (i += it("")), r && p && (i += st(p))) : h === `
` && (r && p && (i += st(r)), n && (i += it(n))), V2 += h.length, m = A, A = g.next();
  }
  return i;
};
function K(t, e2, s) {
  return String(t).normalize().replaceAll(`\r
`, `
`).split(`
`).map((i) => Et(i, e2, s)).join(`
`);
}
var At = ["up", "down", "left", "right", "space", "enter", "cancel"];
var _ = { actions: new Set(At), aliases: /* @__PURE__ */ new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"], ["", "cancel"], ["escape", "cancel"]]), withGuide: true };
function H(t, e2) {
  if (typeof t == "string") return _.aliases.get(t) === e2;
  for (const s of t) if (s !== void 0 && H(s, e2)) return true;
  return false;
}
function _t(t, e2) {
  if (t === e2) return;
  const s = t.split(`
`), i = e2.split(`
`), r = Math.max(s.length, i.length), n = [];
  for (let u = 0; u < r; u++) s[u] !== i[u] && n.push(u);
  return { lines: n, numLinesBefore: s.length, numLinesAfter: i.length, numLines: r };
}
globalThis.process.platform.startsWith("win");
var z = /* @__PURE__ */ Symbol("clack:cancel");
function Ct(t) {
  return t === z;
}
function T(t, e2) {
  const s = t;
  s.isTTY && s.setRawMode(e2);
}
var rt = (t) => "columns" in t && typeof t.columns == "number" ? t.columns : 80;
var nt = (t) => "rows" in t && typeof t.rows == "number" ? t.rows : 20;
function xt(t, e2, s, i = s) {
  const r = rt(t ?? stdout);
  return K(e2, r - s.length, { hard: true, trim: false }).split(`
`).map((n, u) => `${u === 0 ? i : s}${n}`).join(`
`);
}
var x = class {
  input;
  output;
  _abortSignal;
  rl;
  opts;
  _render;
  _track = false;
  _prevFrame = "";
  _subscribers = /* @__PURE__ */ new Map();
  _cursor = 0;
  state = "initial";
  error = "";
  value;
  userInput = "";
  constructor(e2, s = true) {
    const { input: i = stdin, output: r = stdout, render: n, signal: u, ...a } = e2;
    this.opts = a, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = n.bind(this), this._track = s, this._abortSignal = u, this.input = i, this.output = r;
  }
  unsubscribe() {
    this._subscribers.clear();
  }
  setSubscriber(e2, s) {
    const i = this._subscribers.get(e2) ?? [];
    i.push(s), this._subscribers.set(e2, i);
  }
  on(e2, s) {
    this.setSubscriber(e2, { cb: s });
  }
  once(e2, s) {
    this.setSubscriber(e2, { cb: s, once: true });
  }
  emit(e2, ...s) {
    const i = this._subscribers.get(e2) ?? [], r = [];
    for (const n of i) n.cb(...s), n.once && r.push(() => i.splice(i.indexOf(n), 1));
    for (const n of r) n();
  }
  prompt() {
    return new Promise((e2) => {
      if (this._abortSignal) {
        if (this._abortSignal.aborted) return this.state = "cancel", this.close(), e2(z);
        this._abortSignal.addEventListener("abort", () => {
          this.state = "cancel", this.close();
        }, { once: true });
      }
      this.rl = ot.createInterface({ input: this.input, tabSize: 2, prompt: "", escapeCodeTimeout: 50, terminal: true }), this.rl.prompt(), this.opts.initialUserInput !== void 0 && this._setUserInput(this.opts.initialUserInput, true), this.input.on("keypress", this.onKeypress), T(this.input, true), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), T(this.input, false), e2(this.value);
      }), this.once("cancel", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), T(this.input, false), e2(z);
      });
    });
  }
  _isActionKey(e2, s) {
    return e2 === "	";
  }
  _setValue(e2) {
    this.value = e2, this.emit("value", this.value);
  }
  _setUserInput(e2, s) {
    this.userInput = e2 ?? "", this.emit("userInput", this.userInput), s && this._track && this.rl && (this.rl.write(this.userInput), this._cursor = this.rl.cursor);
  }
  _clearUserInput() {
    this.rl?.write(null, { ctrl: true, name: "u" }), this._setUserInput("");
  }
  onKeypress(e2, s) {
    if (this._track && s.name !== "return" && (s.name && this._isActionKey(e2, s) && this.rl?.write(null, { ctrl: true, name: "h" }), this._cursor = this.rl?.cursor ?? 0, this._setUserInput(this.rl?.line)), this.state === "error" && (this.state = "active"), s?.name && (!this._track && _.aliases.has(s.name) && this.emit("cursor", _.aliases.get(s.name)), _.actions.has(s.name) && this.emit("cursor", s.name)), e2 && (e2.toLowerCase() === "y" || e2.toLowerCase() === "n") && this.emit("confirm", e2.toLowerCase() === "y"), this.emit("key", e2?.toLowerCase(), s), s?.name === "return") {
      if (this.opts.validate) {
        const i = this.opts.validate(this.value);
        i && (this.error = i instanceof Error ? i.message : i, this.state = "error", this.rl?.write(this.userInput));
      }
      this.state !== "error" && (this.state = "submit");
    }
    H([e2, s?.name, s?.sequence], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
  }
  close() {
    this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), T(this.input, false), this.rl?.close(), this.rl = void 0, this.emit(`${this.state}`, this.value), this.unsubscribe();
  }
  restoreCursor() {
    const e2 = K(this._prevFrame, process.stdout.columns, { hard: true, trim: false }).split(`
`).length - 1;
    this.output.write(import_sisteransi.cursor.move(-999, e2 * -1));
  }
  render() {
    const e2 = K(this._render(this) ?? "", process.stdout.columns, { hard: true, trim: false });
    if (e2 !== this._prevFrame) {
      if (this.state === "initial") this.output.write(import_sisteransi.cursor.hide);
      else {
        const s = _t(this._prevFrame, e2), i = nt(this.output);
        if (this.restoreCursor(), s) {
          const r = Math.max(0, s.numLinesAfter - i), n = Math.max(0, s.numLinesBefore - i);
          let u = s.lines.find((a) => a >= r);
          if (u === void 0) {
            this._prevFrame = e2;
            return;
          }
          if (s.lines.length === 1) {
            this.output.write(import_sisteransi.cursor.move(0, u - n)), this.output.write(import_sisteransi.erase.lines(1));
            const a = e2.split(`
`);
            this.output.write(a[u]), this._prevFrame = e2, this.output.write(import_sisteransi.cursor.move(0, a.length - u - 1));
            return;
          } else if (s.lines.length > 1) {
            if (r < n) u = r;
            else {
              const l = u - n;
              l > 0 && this.output.write(import_sisteransi.cursor.move(0, l));
            }
            this.output.write(import_sisteransi.erase.down());
            const a = e2.split(`
`).slice(u);
            this.output.write(a.join(`
`)), this._prevFrame = e2;
            return;
          }
        }
        this.output.write(import_sisteransi.erase.down());
      }
      this.output.write(e2), this.state === "initial" && (this.state = "active"), this._prevFrame = e2;
    }
  }
};
var kt = class extends x {
  get cursor() {
    return this.value ? 0 : 1;
  }
  get _value() {
    return this.cursor === 0;
  }
  constructor(e2) {
    super(e2, false), this.value = !!e2.initialValue, this.on("userInput", () => {
      this.value = this._value;
    }), this.on("confirm", (s) => {
      this.output.write(import_sisteransi.cursor.move(0, -1)), this.value = s, this.state = "submit", this.close();
    }), this.on("cursor", () => {
      this.value = !this.value;
    });
  }
};
var Wt = class extends x {
  options;
  cursor = 0;
  get _selectedValue() {
    return this.options[this.cursor];
  }
  changeValue() {
    this.value = this._selectedValue.value;
  }
  constructor(e2) {
    super(e2, false), this.options = e2.options;
    const s = this.options.findIndex(({ value: r }) => r === e2.initialValue), i = s === -1 ? 0 : s;
    this.cursor = this.options[i].disabled ? B(i, 1, this.options) : i, this.changeValue(), this.on("cursor", (r) => {
      switch (r) {
        case "left":
        case "up":
          this.cursor = B(this.cursor, -1, this.options);
          break;
        case "down":
        case "right":
          this.cursor = B(this.cursor, 1, this.options);
          break;
      }
      this.changeValue();
    });
  }
};
var $t = class extends x {
  get userInputWithCursor() {
    if (this.state === "submit") return this.userInput;
    const e2 = this.userInput;
    if (this.cursor >= e2.length) return `${this.userInput}\u2588`;
    const s = e2.slice(0, this.cursor), [i, ...r] = e2.slice(this.cursor);
    return `${s}${import_picocolors.default.inverse(i)}${r.join("")}`;
  }
  get cursor() {
    return this._cursor;
  }
  constructor(e2) {
    super({ ...e2, initialUserInput: e2.initialUserInput ?? e2.initialValue }), this.on("userInput", (s) => {
      this._setValue(s);
    }), this.on("finalize", () => {
      this.value || (this.value = e2.defaultValue), this.value === void 0 && (this.value = "");
    });
  }
};

// ../../node_modules/.pnpm/@clack+prompts@1.0.1/node_modules/@clack/prompts/dist/index.mjs
var import_picocolors2 = __toESM(require_picocolors());
__toESM(require_src());
function me() {
  return N2.platform !== "win32" ? N2.env.TERM !== "linux" : !!N2.env.CI || !!N2.env.WT_SESSION || !!N2.env.TERMINUS_SUBLIME || N2.env.ConEmuTask === "{cmd::Cmder}" || N2.env.TERM_PROGRAM === "Terminus-Sublime" || N2.env.TERM_PROGRAM === "vscode" || N2.env.TERM === "xterm-256color" || N2.env.TERM === "alacritty" || N2.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var et2 = me();
var C = (t, r) => et2 ? t : r;
var Rt = C("\u25C6", "*");
var dt2 = C("\u25A0", "x");
var $t2 = C("\u25B2", "x");
var V = C("\u25C7", "o");
var ht2 = C("\u250C", "T");
var d = C("\u2502", "|");
var x2 = C("\u2514", "\u2014");
var Q2 = C("\u25CF", ">");
var H2 = C("\u25CB", " ");
var rt2 = C("\u2500", "-");
var mt2 = C("\u256E", "+");
var Wt2 = C("\u251C", "+");
var pt2 = C("\u256F", "+");
var W2 = (t) => {
  switch (t) {
    case "initial":
    case "active":
      return import_picocolors2.default.cyan(Rt);
    case "cancel":
      return import_picocolors2.default.red(dt2);
    case "error":
      return import_picocolors2.default.yellow($t2);
    case "submit":
      return import_picocolors2.default.green(V);
  }
};
var vt2 = (t) => {
  switch (t) {
    case "initial":
    case "active":
      return import_picocolors2.default.cyan(d);
    case "cancel":
      return import_picocolors2.default.red(d);
    case "error":
      return import_picocolors2.default.yellow(d);
    case "submit":
      return import_picocolors2.default.green(d);
  }
};
var pe = (t) => t === 161 || t === 164 || t === 167 || t === 168 || t === 170 || t === 173 || t === 174 || t >= 176 && t <= 180 || t >= 182 && t <= 186 || t >= 188 && t <= 191 || t === 198 || t === 208 || t === 215 || t === 216 || t >= 222 && t <= 225 || t === 230 || t >= 232 && t <= 234 || t === 236 || t === 237 || t === 240 || t === 242 || t === 243 || t >= 247 && t <= 250 || t === 252 || t === 254 || t === 257 || t === 273 || t === 275 || t === 283 || t === 294 || t === 295 || t === 299 || t >= 305 && t <= 307 || t === 312 || t >= 319 && t <= 322 || t === 324 || t >= 328 && t <= 331 || t === 333 || t === 338 || t === 339 || t === 358 || t === 359 || t === 363 || t === 462 || t === 464 || t === 466 || t === 468 || t === 470 || t === 472 || t === 474 || t === 476 || t === 593 || t === 609 || t === 708 || t === 711 || t >= 713 && t <= 715 || t === 717 || t === 720 || t >= 728 && t <= 731 || t === 733 || t === 735 || t >= 768 && t <= 879 || t >= 913 && t <= 929 || t >= 931 && t <= 937 || t >= 945 && t <= 961 || t >= 963 && t <= 969 || t === 1025 || t >= 1040 && t <= 1103 || t === 1105 || t === 8208 || t >= 8211 && t <= 8214 || t === 8216 || t === 8217 || t === 8220 || t === 8221 || t >= 8224 && t <= 8226 || t >= 8228 && t <= 8231 || t === 8240 || t === 8242 || t === 8243 || t === 8245 || t === 8251 || t === 8254 || t === 8308 || t === 8319 || t >= 8321 && t <= 8324 || t === 8364 || t === 8451 || t === 8453 || t === 8457 || t === 8467 || t === 8470 || t === 8481 || t === 8482 || t === 8486 || t === 8491 || t === 8531 || t === 8532 || t >= 8539 && t <= 8542 || t >= 8544 && t <= 8555 || t >= 8560 && t <= 8569 || t === 8585 || t >= 8592 && t <= 8601 || t === 8632 || t === 8633 || t === 8658 || t === 8660 || t === 8679 || t === 8704 || t === 8706 || t === 8707 || t === 8711 || t === 8712 || t === 8715 || t === 8719 || t === 8721 || t === 8725 || t === 8730 || t >= 8733 && t <= 8736 || t === 8739 || t === 8741 || t >= 8743 && t <= 8748 || t === 8750 || t >= 8756 && t <= 8759 || t === 8764 || t === 8765 || t === 8776 || t === 8780 || t === 8786 || t === 8800 || t === 8801 || t >= 8804 && t <= 8807 || t === 8810 || t === 8811 || t === 8814 || t === 8815 || t === 8834 || t === 8835 || t === 8838 || t === 8839 || t === 8853 || t === 8857 || t === 8869 || t === 8895 || t === 8978 || t >= 9312 && t <= 9449 || t >= 9451 && t <= 9547 || t >= 9552 && t <= 9587 || t >= 9600 && t <= 9615 || t >= 9618 && t <= 9621 || t === 9632 || t === 9633 || t >= 9635 && t <= 9641 || t === 9650 || t === 9651 || t === 9654 || t === 9655 || t === 9660 || t === 9661 || t === 9664 || t === 9665 || t >= 9670 && t <= 9672 || t === 9675 || t >= 9678 && t <= 9681 || t >= 9698 && t <= 9701 || t === 9711 || t === 9733 || t === 9734 || t === 9737 || t === 9742 || t === 9743 || t === 9756 || t === 9758 || t === 9792 || t === 9794 || t === 9824 || t === 9825 || t >= 9827 && t <= 9829 || t >= 9831 && t <= 9834 || t === 9836 || t === 9837 || t === 9839 || t === 9886 || t === 9887 || t === 9919 || t >= 9926 && t <= 9933 || t >= 9935 && t <= 9939 || t >= 9941 && t <= 9953 || t === 9955 || t === 9960 || t === 9961 || t >= 9963 && t <= 9969 || t === 9972 || t >= 9974 && t <= 9977 || t === 9979 || t === 9980 || t === 9982 || t === 9983 || t === 10045 || t >= 10102 && t <= 10111 || t >= 11094 && t <= 11097 || t >= 12872 && t <= 12879 || t >= 57344 && t <= 63743 || t >= 65024 && t <= 65039 || t === 65533 || t >= 127232 && t <= 127242 || t >= 127248 && t <= 127277 || t >= 127280 && t <= 127337 || t >= 127344 && t <= 127373 || t === 127375 || t === 127376 || t >= 127387 && t <= 127404 || t >= 917760 && t <= 917999 || t >= 983040 && t <= 1048573 || t >= 1048576 && t <= 1114109;
var ge = (t) => t === 12288 || t >= 65281 && t <= 65376 || t >= 65504 && t <= 65510;
var fe = (t) => t >= 4352 && t <= 4447 || t === 8986 || t === 8987 || t === 9001 || t === 9002 || t >= 9193 && t <= 9196 || t === 9200 || t === 9203 || t === 9725 || t === 9726 || t === 9748 || t === 9749 || t >= 9800 && t <= 9811 || t === 9855 || t === 9875 || t === 9889 || t === 9898 || t === 9899 || t === 9917 || t === 9918 || t === 9924 || t === 9925 || t === 9934 || t === 9940 || t === 9962 || t === 9970 || t === 9971 || t === 9973 || t === 9978 || t === 9981 || t === 9989 || t === 9994 || t === 9995 || t === 10024 || t === 10060 || t === 10062 || t >= 10067 && t <= 10069 || t === 10071 || t >= 10133 && t <= 10135 || t === 10160 || t === 10175 || t === 11035 || t === 11036 || t === 11088 || t === 11093 || t >= 11904 && t <= 11929 || t >= 11931 && t <= 12019 || t >= 12032 && t <= 12245 || t >= 12272 && t <= 12287 || t >= 12289 && t <= 12350 || t >= 12353 && t <= 12438 || t >= 12441 && t <= 12543 || t >= 12549 && t <= 12591 || t >= 12593 && t <= 12686 || t >= 12688 && t <= 12771 || t >= 12783 && t <= 12830 || t >= 12832 && t <= 12871 || t >= 12880 && t <= 19903 || t >= 19968 && t <= 42124 || t >= 42128 && t <= 42182 || t >= 43360 && t <= 43388 || t >= 44032 && t <= 55203 || t >= 63744 && t <= 64255 || t >= 65040 && t <= 65049 || t >= 65072 && t <= 65106 || t >= 65108 && t <= 65126 || t >= 65128 && t <= 65131 || t >= 94176 && t <= 94180 || t === 94192 || t === 94193 || t >= 94208 && t <= 100343 || t >= 100352 && t <= 101589 || t >= 101632 && t <= 101640 || t >= 110576 && t <= 110579 || t >= 110581 && t <= 110587 || t === 110589 || t === 110590 || t >= 110592 && t <= 110882 || t === 110898 || t >= 110928 && t <= 110930 || t === 110933 || t >= 110948 && t <= 110951 || t >= 110960 && t <= 111355 || t === 126980 || t === 127183 || t === 127374 || t >= 127377 && t <= 127386 || t >= 127488 && t <= 127490 || t >= 127504 && t <= 127547 || t >= 127552 && t <= 127560 || t === 127568 || t === 127569 || t >= 127584 && t <= 127589 || t >= 127744 && t <= 127776 || t >= 127789 && t <= 127797 || t >= 127799 && t <= 127868 || t >= 127870 && t <= 127891 || t >= 127904 && t <= 127946 || t >= 127951 && t <= 127955 || t >= 127968 && t <= 127984 || t === 127988 || t >= 127992 && t <= 128062 || t === 128064 || t >= 128066 && t <= 128252 || t >= 128255 && t <= 128317 || t >= 128331 && t <= 128334 || t >= 128336 && t <= 128359 || t === 128378 || t === 128405 || t === 128406 || t === 128420 || t >= 128507 && t <= 128591 || t >= 128640 && t <= 128709 || t === 128716 || t >= 128720 && t <= 128722 || t >= 128725 && t <= 128727 || t >= 128732 && t <= 128735 || t === 128747 || t === 128748 || t >= 128756 && t <= 128764 || t >= 128992 && t <= 129003 || t === 129008 || t >= 129292 && t <= 129338 || t >= 129340 && t <= 129349 || t >= 129351 && t <= 129535 || t >= 129648 && t <= 129660 || t >= 129664 && t <= 129672 || t >= 129680 && t <= 129725 || t >= 129727 && t <= 129733 || t >= 129742 && t <= 129755 || t >= 129760 && t <= 129768 || t >= 129776 && t <= 129784 || t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141;
var At2 = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y;
var it2 = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
var nt2 = /\t{1,1000}/y;
var wt = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu;
var at2 = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
var Fe = /\p{M}+/gu;
var ye = { limit: 1 / 0, ellipsis: "" };
var jt = (t, r = {}, s = {}) => {
  const i = r.limit ?? 1 / 0, a = r.ellipsis ?? "", o = r?.ellipsisWidth ?? (a ? jt(a, ye, s).width : 0), u = s.ansiWidth ?? 0, l = s.controlWidth ?? 0, n = s.tabWidth ?? 8, c = s.ambiguousWidth ?? 1, g = s.emojiWidth ?? 2, F = s.fullWidthWidth ?? 2, p = s.regularWidth ?? 1, E = s.wideWidth ?? 2;
  let $ = 0, m = 0, h = t.length, y2 = 0, f = false, v = h, S2 = Math.max(0, i - o), I2 = 0, B2 = 0, A = 0, w = 0;
  t: for (; ; ) {
    if (B2 > I2 || m >= h && m > $) {
      const _2 = t.slice(I2, B2) || t.slice($, m);
      y2 = 0;
      for (const D2 of _2.replaceAll(Fe, "")) {
        const T2 = D2.codePointAt(0) || 0;
        if (ge(T2) ? w = F : fe(T2) ? w = E : c !== p && pe(T2) ? w = c : w = p, A + w > S2 && (v = Math.min(v, Math.max(I2, $) + y2)), A + w > i) {
          f = true;
          break t;
        }
        y2 += D2.length, A += w;
      }
      I2 = B2 = 0;
    }
    if (m >= h) break;
    if (at2.lastIndex = m, at2.test(t)) {
      if (y2 = at2.lastIndex - m, w = y2 * p, A + w > S2 && (v = Math.min(v, m + Math.floor((S2 - A) / p))), A + w > i) {
        f = true;
        break;
      }
      A += w, I2 = $, B2 = m, m = $ = at2.lastIndex;
      continue;
    }
    if (At2.lastIndex = m, At2.test(t)) {
      if (A + u > S2 && (v = Math.min(v, m)), A + u > i) {
        f = true;
        break;
      }
      A += u, I2 = $, B2 = m, m = $ = At2.lastIndex;
      continue;
    }
    if (it2.lastIndex = m, it2.test(t)) {
      if (y2 = it2.lastIndex - m, w = y2 * l, A + w > S2 && (v = Math.min(v, m + Math.floor((S2 - A) / l))), A + w > i) {
        f = true;
        break;
      }
      A += w, I2 = $, B2 = m, m = $ = it2.lastIndex;
      continue;
    }
    if (nt2.lastIndex = m, nt2.test(t)) {
      if (y2 = nt2.lastIndex - m, w = y2 * n, A + w > S2 && (v = Math.min(v, m + Math.floor((S2 - A) / n))), A + w > i) {
        f = true;
        break;
      }
      A += w, I2 = $, B2 = m, m = $ = nt2.lastIndex;
      continue;
    }
    if (wt.lastIndex = m, wt.test(t)) {
      if (A + g > S2 && (v = Math.min(v, m)), A + g > i) {
        f = true;
        break;
      }
      A += g, I2 = $, B2 = m, m = $ = wt.lastIndex;
      continue;
    }
    m += 1;
  }
  return { width: f ? S2 : A, index: f ? v : h, truncated: f, ellipsed: f && i >= o };
};
var Ee = { limit: 1 / 0, ellipsis: "", ellipsisWidth: 0 };
var M2 = (t, r = {}) => jt(t, Ee, r).width;
var ot2 = "\x1B";
var Gt = "\x9B";
var ve = 39;
var Ct2 = "\x07";
var kt2 = "[";
var Ae = "]";
var Vt2 = "m";
var St = `${Ae}8;;`;
var Ht = new RegExp(`(?:\\${kt2}(?<code>\\d+)m|\\${St}(?<uri>.*)${Ct2})`, "y");
var we = (t) => {
  if (t >= 30 && t <= 37 || t >= 90 && t <= 97) return 39;
  if (t >= 40 && t <= 47 || t >= 100 && t <= 107) return 49;
  if (t === 1 || t === 2) return 22;
  if (t === 3) return 23;
  if (t === 4) return 24;
  if (t === 7) return 27;
  if (t === 8) return 28;
  if (t === 9) return 29;
  if (t === 0) return 0;
};
var Ut = (t) => `${ot2}${kt2}${t}${Vt2}`;
var Kt = (t) => `${ot2}${St}${t}${Ct2}`;
var Ce = (t) => t.map((r) => M2(r));
var It2 = (t, r, s) => {
  const i = r[Symbol.iterator]();
  let a = false, o = false, u = t.at(-1), l = u === void 0 ? 0 : M2(u), n = i.next(), c = i.next(), g = 0;
  for (; !n.done; ) {
    const F = n.value, p = M2(F);
    l + p <= s ? t[t.length - 1] += F : (t.push(F), l = 0), (F === ot2 || F === Gt) && (a = true, o = r.startsWith(St, g + 1)), a ? o ? F === Ct2 && (a = false, o = false) : F === Vt2 && (a = false) : (l += p, l === s && !c.done && (t.push(""), l = 0)), n = c, c = i.next(), g += F.length;
  }
  u = t.at(-1), !l && u !== void 0 && u.length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
};
var Se = (t) => {
  const r = t.split(" ");
  let s = r.length;
  for (; s > 0 && !(M2(r[s - 1]) > 0); ) s--;
  return s === r.length ? t : r.slice(0, s).join(" ") + r.slice(s).join("");
};
var Ie = (t, r, s = {}) => {
  if (s.trim !== false && t.trim() === "") return "";
  let i = "", a, o;
  const u = t.split(" "), l = Ce(u);
  let n = [""];
  for (const [$, m] of u.entries()) {
    s.trim !== false && (n[n.length - 1] = (n.at(-1) ?? "").trimStart());
    let h = M2(n.at(-1) ?? "");
    if ($ !== 0 && (h >= r && (s.wordWrap === false || s.trim === false) && (n.push(""), h = 0), (h > 0 || s.trim === false) && (n[n.length - 1] += " ", h++)), s.hard && l[$] > r) {
      const y2 = r - h, f = 1 + Math.floor((l[$] - y2 - 1) / r);
      Math.floor((l[$] - 1) / r) < f && n.push(""), It2(n, m, r);
      continue;
    }
    if (h + l[$] > r && h > 0 && l[$] > 0) {
      if (s.wordWrap === false && h < r) {
        It2(n, m, r);
        continue;
      }
      n.push("");
    }
    if (h + l[$] > r && s.wordWrap === false) {
      It2(n, m, r);
      continue;
    }
    n[n.length - 1] += m;
  }
  s.trim !== false && (n = n.map(($) => Se($)));
  const c = n.join(`
`), g = c[Symbol.iterator]();
  let F = g.next(), p = g.next(), E = 0;
  for (; !F.done; ) {
    const $ = F.value, m = p.value;
    if (i += $, $ === ot2 || $ === Gt) {
      Ht.lastIndex = E + 1;
      const f = Ht.exec(c)?.groups;
      if (f?.code !== void 0) {
        const v = Number.parseFloat(f.code);
        a = v === ve ? void 0 : v;
      } else f?.uri !== void 0 && (o = f.uri.length === 0 ? void 0 : f.uri);
    }
    const h = a ? we(a) : void 0;
    m === `
` ? (o && (i += Kt("")), a && h && (i += Ut(h))) : $ === `
` && (a && h && (i += Ut(a)), o && (i += Kt(o))), E += $.length, F = p, p = g.next();
  }
  return i;
};
function J2(t, r, s) {
  return String(t).normalize().replaceAll(`\r
`, `
`).split(`
`).map((i) => Ie(i, r, s)).join(`
`);
}
var be = (t, r, s, i, a) => {
  let o = r, u = 0;
  for (let l = s; l < i; l++) {
    const n = t[l];
    if (o = o - n.length, u++, o <= a) break;
  }
  return { lineCount: o, removals: u };
};
var X2 = (t) => {
  const { cursor: r, options: s, style: i } = t, a = t.output ?? process.stdout, o = rt(a), u = t.columnPadding ?? 0, l = t.rowPadding ?? 4, n = o - u, c = nt(a), g = import_picocolors2.default.dim("..."), F = t.maxItems ?? Number.POSITIVE_INFINITY, p = Math.max(c - l, 0), E = Math.max(Math.min(F, p), 5);
  let $ = 0;
  r >= E - 3 && ($ = Math.max(Math.min(r - E + 3, s.length - E), 0));
  let m = E < s.length && $ > 0, h = E < s.length && $ + E < s.length;
  const y2 = Math.min($ + E, s.length), f = [];
  let v = 0;
  m && v++, h && v++;
  const S2 = $ + (m ? 1 : 0), I2 = y2 - (h ? 1 : 0);
  for (let A = S2; A < I2; A++) {
    const w = J2(i(s[A], A === r), n, { hard: true, trim: false }).split(`
`);
    f.push(w), v += w.length;
  }
  if (v > p) {
    let A = 0, w = 0, _2 = v;
    const D2 = r - S2, T2 = (Y, L2) => be(f, _2, Y, L2, p);
    m ? ({ lineCount: _2, removals: A } = T2(0, D2), _2 > p && ({ lineCount: _2, removals: w } = T2(D2 + 1, f.length))) : ({ lineCount: _2, removals: w } = T2(D2 + 1, f.length), _2 > p && ({ lineCount: _2, removals: A } = T2(0, D2))), A > 0 && (m = true, f.splice(0, A)), w > 0 && (h = true, f.splice(f.length - w, w));
  }
  const B2 = [];
  m && B2.push(g);
  for (const A of f) for (const w of A) B2.push(w);
  return h && B2.push(g), B2;
};
var Re = (t) => {
  const r = t.active ?? "Yes", s = t.inactive ?? "No";
  return new kt({ active: r, inactive: s, signal: t.signal, input: t.input, output: t.output, initialValue: t.initialValue ?? true, render() {
    const i = t.withGuide ?? _.withGuide, a = `${i ? `${import_picocolors2.default.gray(d)}
` : ""}${W2(this.state)}  ${t.message}
`, o = this.value ? r : s;
    switch (this.state) {
      case "submit": {
        const u = i ? `${import_picocolors2.default.gray(d)}  ` : "";
        return `${a}${u}${import_picocolors2.default.dim(o)}`;
      }
      case "cancel": {
        const u = i ? `${import_picocolors2.default.gray(d)}  ` : "";
        return `${a}${u}${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(o))}${i ? `
${import_picocolors2.default.gray(d)}` : ""}`;
      }
      default: {
        const u = i ? `${import_picocolors2.default.cyan(d)}  ` : "", l = i ? import_picocolors2.default.cyan(x2) : "";
        return `${a}${u}${this.value ? `${import_picocolors2.default.green(Q2)} ${r}` : `${import_picocolors2.default.dim(H2)} ${import_picocolors2.default.dim(r)}`}${t.vertical ? i ? `
${import_picocolors2.default.cyan(d)}  ` : `
` : ` ${import_picocolors2.default.dim("/")} `}${this.value ? `${import_picocolors2.default.dim(H2)} ${import_picocolors2.default.dim(s)}` : `${import_picocolors2.default.green(Q2)} ${s}`}
${l}
`;
      }
    }
  } }).prompt();
};
var Ne = (t = "", r) => {
  (process.stdout).write(`${import_picocolors2.default.gray(x2)}  ${import_picocolors2.default.red(t)}

`);
};
var We = (t = "", r) => {
  (process.stdout).write(`${import_picocolors2.default.gray(ht2)}  ${t}
`);
};
var Le = (t = "", r) => {
  (process.stdout).write(`${import_picocolors2.default.gray(d)}
${import_picocolors2.default.gray(x2)}  ${t}

`);
};
var Ge = (t) => import_picocolors2.default.dim(t);
var ke = (t, r, s) => {
  const i = { hard: true, trim: false }, a = J2(t, r, i).split(`
`), o = a.reduce((n, c) => Math.max(M2(c), n), 0), u = a.map(s).reduce((n, c) => Math.max(M2(c), n), 0), l = r - (u - o);
  return J2(t, l, i);
};
var Ve = (t = "", r = "", s) => {
  const i = N2.stdout, o = Ge, u = ["", ...ke(t, rt(i) - 6, o).split(`
`).map(o), ""], l = M2(r), n = Math.max(u.reduce((p, E) => {
    const $ = M2(E);
    return $ > p ? $ : p;
  }, 0), l) + 2, c = u.map((p) => `${import_picocolors2.default.gray(d)}  ${p}${" ".repeat(n - M2(p))}${import_picocolors2.default.gray(d)}`).join(`
`), g = `${import_picocolors2.default.gray(d)}
` , F = Wt2 ;
  i.write(`${g}${import_picocolors2.default.green(V)}  ${import_picocolors2.default.reset(r)} ${import_picocolors2.default.gray(rt2.repeat(Math.max(n - l - 1, 1)) + mt2)}
${c}
${import_picocolors2.default.gray(F + rt2.repeat(n + 2) + pt2)}
`);
};
import_picocolors2.default.magenta;
var lt2 = (t, r) => t.includes(`
`) ? t.split(`
`).map((s) => r(s)).join(`
`) : r(t);
var Je = (t) => {
  const r = (s, i) => {
    const a = s.label ?? String(s.value);
    switch (i) {
      case "disabled":
        return `${import_picocolors2.default.gray(H2)} ${lt2(a, import_picocolors2.default.gray)}${s.hint ? ` ${import_picocolors2.default.dim(`(${s.hint ?? "disabled"})`)}` : ""}`;
      case "selected":
        return `${lt2(a, import_picocolors2.default.dim)}`;
      case "active":
        return `${import_picocolors2.default.green(Q2)} ${a}${s.hint ? ` ${import_picocolors2.default.dim(`(${s.hint})`)}` : ""}`;
      case "cancelled":
        return `${lt2(a, (o) => import_picocolors2.default.strikethrough(import_picocolors2.default.dim(o)))}`;
      default:
        return `${import_picocolors2.default.dim(H2)} ${lt2(a, import_picocolors2.default.dim)}`;
    }
  };
  return new Wt({ options: t.options, signal: t.signal, input: t.input, output: t.output, initialValue: t.initialValue, render() {
    const s = t.withGuide ?? _.withGuide, i = `${W2(this.state)}  `, a = `${vt2(this.state)}  `, o = xt(t.output, t.message, a, i), u = `${s ? `${import_picocolors2.default.gray(d)}
` : ""}${o}
`;
    switch (this.state) {
      case "submit": {
        const l = s ? `${import_picocolors2.default.gray(d)}  ` : "", n = xt(t.output, r(this.options[this.cursor], "selected"), l);
        return `${u}${n}`;
      }
      case "cancel": {
        const l = s ? `${import_picocolors2.default.gray(d)}  ` : "", n = xt(t.output, r(this.options[this.cursor], "cancelled"), l);
        return `${u}${n}${s ? `
${import_picocolors2.default.gray(d)}` : ""}`;
      }
      default: {
        const l = s ? `${import_picocolors2.default.cyan(d)}  ` : "", n = s ? import_picocolors2.default.cyan(x2) : "", c = u.split(`
`).length, g = s ? 2 : 1;
        return `${u}${l}${X2({ output: t.output, cursor: this.cursor, options: this.options, maxItems: t.maxItems, columnPadding: l.length, rowPadding: c + g, style: (F, p) => r(F, F.disabled ? "disabled" : p ? "active" : "inactive") }).join(`
${l}`)}
${n}
`;
      }
    }
  } }).prompt();
};
`${import_picocolors2.default.gray(d)}  `;
var Ze = (t) => new $t({ validate: t.validate, placeholder: t.placeholder, defaultValue: t.defaultValue, initialValue: t.initialValue, output: t.output, signal: t.signal, input: t.input, render() {
  const r = t?.withGuide ?? _.withGuide, s = `${`${r ? `${import_picocolors2.default.gray(d)}
` : ""}${W2(this.state)}  `}${t.message}
`, i = t.placeholder ? import_picocolors2.default.inverse(t.placeholder[0]) + import_picocolors2.default.dim(t.placeholder.slice(1)) : import_picocolors2.default.inverse(import_picocolors2.default.hidden("_")), a = this.userInput ? this.userInputWithCursor : i, o = this.value ?? "";
  switch (this.state) {
    case "error": {
      const u = this.error ? `  ${import_picocolors2.default.yellow(this.error)}` : "", l = r ? `${import_picocolors2.default.yellow(d)}  ` : "", n = r ? import_picocolors2.default.yellow(x2) : "";
      return `${s.trim()}
${l}${a}
${n}${u}
`;
    }
    case "submit": {
      const u = o ? `  ${import_picocolors2.default.dim(o)}` : "", l = r ? import_picocolors2.default.gray(d) : "";
      return `${s}${l}${u}`;
    }
    case "cancel": {
      const u = o ? `  ${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(o))}` : "", l = r ? import_picocolors2.default.gray(d) : "";
      return `${s}${l}${u}${o.trim() ? `
${l}` : ""}`;
    }
    default: {
      const u = r ? `${import_picocolors2.default.cyan(d)}  ` : "", l = r ? import_picocolors2.default.cyan(x2) : "";
      return `${s}${u}${a}
${l}
`;
    }
  }
} }).prompt();
var PROJECT_REPO = "https://github.com/BytePioneer-AI/openclaw-china";
var GUIDES_BASE = "https://github.com/BytePioneer-AI/openclaw-china/tree/main/doc/guides";
var OPENCLAW_HOME = join(homedir(), ".openclaw");
var DEFAULT_PLUGIN_PATH = join(OPENCLAW_HOME, "extensions");
var LEGACY_PLUGIN_PATH = join(OPENCLAW_HOME, "plugins");
var CONFIG_FILE_PATH = join(OPENCLAW_HOME, "openclaw.json");
var ANSI_RESET = "\x1B[0m";
var ANSI_LINK = "\x1B[1;4;96m";
var ANSI_BORDER = "\x1B[92m";
var CHANNEL_ORDER = [
  "dingtalk",
  "qqbot",
  "wecom",
  "wecom-app",
  "feishu-china"
];
var CHANNEL_DISPLAY_LABELS = {
  dingtalk: "DingTalk\uFF08\u9489\u9489\uFF09",
  "feishu-china": "Feishu\uFF08\u98DE\u4E66\uFF09",
  wecom: "WeCom\uFF08\u4F01\u4E1A\u5FAE\u4FE1-\u667A\u80FD\u673A\u5668\u4EBA\uFF09",
  "wecom-app": "WeCom App\uFF08\u81EA\u5EFA\u5E94\u7528-\u53EF\u63A5\u5165\u5FAE\u4FE1\uFF09",
  qqbot: "QQBot\uFF08QQ \u673A\u5668\u4EBA\uFF09"
};
var CHANNEL_GUIDE_LINKS = {
  dingtalk: `${GUIDES_BASE}/dingtalk/configuration.md`,
  "feishu-china": "https://github.com/BytePioneer-AI/openclaw-china/blob/main/README.md",
  wecom: `${GUIDES_BASE}/wecom/configuration.md`,
  "wecom-app": `${GUIDES_BASE}/wecom-app/configuration.md`,
  qqbot: `${GUIDES_BASE}/qqbot/configuration.md`
};
var CHINA_CLI_STATE_KEY = /* @__PURE__ */ Symbol.for("@openclaw-china/china-cli-state");
var PromptCancelledError = class extends Error {
  constructor() {
    super("prompt-cancelled");
  }
};
function isChannelId(value) {
  return typeof value === "string" && CHANNEL_ORDER.includes(value);
}
function getChinaCliState() {
  const root = globalThis;
  const cached = root[CHINA_CLI_STATE_KEY];
  if (isRecord(cached)) {
    const channels = cached.channels;
    const cliRegistered = cached.cliRegistered;
    if (channels instanceof Set && typeof cliRegistered === "boolean") {
      return {
        channels,
        cliRegistered
      };
    }
  }
  const created = {
    channels: /* @__PURE__ */ new Set(),
    cliRegistered: false
  };
  root[CHINA_CLI_STATE_KEY] = created;
  return created;
}
function normalizeChannels(channels) {
  const selected = channels && channels.length > 0 ? channels : CHANNEL_ORDER;
  const unique = /* @__PURE__ */ new Set();
  for (const channelId of selected) {
    if (isChannelId(channelId)) {
      unique.add(channelId);
    }
  }
  return CHANNEL_ORDER.filter((channelId) => unique.has(channelId));
}
function getInstalledChannels(state) {
  return CHANNEL_ORDER.filter((channelId) => state.channels.has(channelId));
}
function guardCancel(value) {
  if (Ct(value)) {
    Ne("\u5DF2\u53D6\u6D88\u914D\u7F6E\u3002");
    throw new PromptCancelledError();
  }
  return value;
}
function warn(text) {
  stdout.write(`
[warn] ${text}
`);
}
function section(title) {
  stdout.write(`
${title}
`);
}
function resolvePluginPath() {
  if (existsSync(DEFAULT_PLUGIN_PATH)) {
    return DEFAULT_PLUGIN_PATH;
  }
  if (existsSync(LEGACY_PLUGIN_PATH)) {
    return LEGACY_PLUGIN_PATH;
  }
  return DEFAULT_PLUGIN_PATH;
}
function renderReadyMessage() {
  return [
    `${ANSI_BORDER}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET}`,
    "  OpenClaw China Channels \u5DF2\u5C31\u7EEA!",
    `${ANSI_BORDER}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET}`,
    "",
    "\u63D2\u4EF6\u8DEF\u5F84:",
    `  ${resolvePluginPath()}`,
    "",
    "\u914D\u7F6E\u6587\u4EF6:",
    `  ${CONFIG_FILE_PATH}`,
    "",
    "\u66F4\u65B0\u63D2\u4EF6:",
    "  openclaw plugins update <plugin-id>",
    "",
    "\u9879\u76EE\u4ED3\u5E93:",
    `  ${ANSI_LINK}${PROJECT_REPO}${ANSI_RESET}`,
    "",
    "\u2B50 \u5982\u679C\u8FD9\u4E2A\u9879\u76EE\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u8BF7\u7ED9\u6211\u4EEC\u4E00\u4E2A Star\uFF01\u2B50",
    "",
    "\u4E0B\u4E00\u6B65:",
    "  openclaw gateway --port 18789 --verbose",
    ""
  ].join("\n");
}
function showReadyMessage() {
  stdout.write(`
${renderReadyMessage()}
`);
}
function showGuideLink(channelId) {
  const url = CHANNEL_GUIDE_LINKS[channelId];
  Ve(`\u914D\u7F6E\u6587\u6863\uFF1A${url}`, "Docs");
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function resolveWriteConfig(runtime2) {
  if (!isRecord(runtime2)) {
    return void 0;
  }
  const config = runtime2.config;
  if (!isRecord(config)) {
    return void 0;
  }
  if (typeof config.writeConfigFile !== "function") {
    return void 0;
  }
  return config.writeConfigFile;
}
function isCommandLike(value) {
  if (!isRecord(value)) {
    return false;
  }
  return typeof value.command === "function" && typeof value.description === "function" && typeof value.action === "function";
}
function toTrimmedString2(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const trimmed = value.trim();
  return trimmed || void 0;
}
function hasNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function toBoolean(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}
function toNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : void 0;
}
function cloneConfig(cfg) {
  try {
    return structuredClone(cfg);
  } catch {
    return JSON.parse(JSON.stringify(cfg));
  }
}
function getChannelConfig(cfg, channelId) {
  const channels = isRecord(cfg.channels) ? cfg.channels : {};
  const existing = channels[channelId];
  return isRecord(existing) ? existing : {};
}
function getGatewayAuthToken(cfg) {
  if (!isRecord(cfg.gateway)) {
    return void 0;
  }
  const auth = isRecord(cfg.gateway.auth) ? cfg.gateway.auth : void 0;
  return toTrimmedString2(auth?.token);
}
function getPreferredAccountConfig(channelCfg) {
  const accounts = channelCfg.accounts;
  if (!isRecord(accounts)) {
    return void 0;
  }
  const defaultAccountId = toTrimmedString2(channelCfg.defaultAccount);
  if (defaultAccountId) {
    const preferred = accounts[defaultAccountId];
    if (isRecord(preferred)) {
      return preferred;
    }
  }
  for (const value of Object.values(accounts)) {
    if (isRecord(value)) {
      return value;
    }
  }
  return void 0;
}
function hasCredentialPair(channelCfg, firstKey, secondKey) {
  if (hasNonEmptyString(channelCfg[firstKey]) && hasNonEmptyString(channelCfg[secondKey])) {
    return true;
  }
  const accountCfg = getPreferredAccountConfig(channelCfg);
  return Boolean(
    accountCfg && hasNonEmptyString(accountCfg[firstKey]) && hasNonEmptyString(accountCfg[secondKey])
  );
}
function hasTokenPair(channelCfg) {
  return hasCredentialPair(channelCfg, "token", "encodingAESKey");
}
function hasWecomWsCredentialPair(channelCfg) {
  return hasCredentialPair(channelCfg, "botId", "secret");
}
function isChannelConfigured(cfg, channelId) {
  const channelCfg = getChannelConfig(cfg, channelId);
  switch (channelId) {
    case "dingtalk":
      return hasNonEmptyString(channelCfg.clientId) && hasNonEmptyString(channelCfg.clientSecret);
    case "feishu-china":
      return hasNonEmptyString(channelCfg.appId) && hasNonEmptyString(channelCfg.appSecret);
    case "qqbot":
      return hasNonEmptyString(channelCfg.appId) && hasNonEmptyString(channelCfg.clientSecret);
    case "wecom":
      return hasWecomWsCredentialPair(channelCfg);
    case "wecom-app":
      return hasTokenPair(channelCfg);
    default:
      return false;
  }
}
function withConfiguredSuffix(cfg, channelId) {
  const base = CHANNEL_DISPLAY_LABELS[channelId];
  return isChannelConfigured(cfg, channelId) ? `${base}\uFF08\u5DF2\u914D\u7F6E\uFF09` : base;
}
function mergeChannelConfig(cfg, channelId, patch) {
  const channels = isRecord(cfg.channels) ? { ...cfg.channels } : {};
  const existing = getChannelConfig(cfg, channelId);
  channels[channelId] = {
    ...existing,
    ...patch,
    enabled: true
  };
  return {
    ...cfg,
    channels
  };
}
var SetupPrompter = class {
  async askText(params) {
    const { label, required = false, defaultValue } = params;
    while (true) {
      const value = String(
        guardCancel(
          await Ze({
            message: label,
            initialValue: defaultValue
          })
        )
      ).trim();
      if (value) {
        return value;
      }
      if (defaultValue) {
        return defaultValue;
      }
      if (!required) {
        return "";
      }
      warn("\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u3002");
    }
  }
  async askSecret(params) {
    const { label, existingValue, required = true } = params;
    return this.askText({
      label,
      required,
      defaultValue: existingValue
    });
  }
  async askConfirm(label, defaultValue = true) {
    return Boolean(
      guardCancel(
        await Re({
          message: label,
          initialValue: defaultValue
        })
      )
    );
  }
  async askNumber(params) {
    const { label, min, defaultValue } = params;
    while (true) {
      const raw = String(
        guardCancel(
          await Ze({
            message: label,
            initialValue: defaultValue !== void 0 ? String(defaultValue) : void 0
          })
        )
      ).trim();
      const parsed = Number.parseInt(raw, 10);
      if (Number.isFinite(parsed) && (min === void 0 || parsed >= min)) {
        return parsed;
      }
      warn(`\u8BF7\u8F93\u5165\u6709\u6548\u6574\u6570${min !== void 0 ? `\uFF08>= ${min}\uFF09` : ""}\u3002`);
    }
  }
  async askSelect(message, options, defaultValue) {
    const initial = options.some((opt) => opt.value === defaultValue) ? defaultValue : options[0]?.value;
    const selectOptions = options.map((option) => ({
      value: option.value,
      label: option.label
    }));
    return guardCancel(
      await Je({
        message,
        options: selectOptions,
        initialValue: initial
      })
    );
  }
};
async function configureDingtalk(prompter, cfg) {
  section("\u914D\u7F6E DingTalk\uFF08\u9489\u9489\uFF09");
  showGuideLink("dingtalk");
  const existing = getChannelConfig(cfg, "dingtalk");
  const clientId = await prompter.askText({
    label: "DingTalk clientId\uFF08AppKey\uFF09",
    defaultValue: toTrimmedString2(existing.clientId),
    required: true
  });
  const clientSecret = await prompter.askSecret({
    label: "DingTalk clientSecret\uFF08AppSecret\uFF09",
    existingValue: toTrimmedString2(existing.clientSecret),
    required: true
  });
  const enableAICard = await prompter.askConfirm(
    "\u542F\u7528 AI Card \u6D41\u5F0F\u56DE\u590D\uFF08\u63A8\u8350\u5173\u95ED\uFF0C\u4F7F\u7528\u975E\u6D41\u5F0F\uFF09",
    toBoolean(existing.enableAICard, false)
  );
  const patch = {
    clientId,
    clientSecret,
    enableAICard
  };
  if (enableAICard) {
    const gatewayToken = await prompter.askSecret({
      label: "OpenClaw Gateway Token\uFF08\u6D41\u5F0F\u8F93\u51FA\u5FC5\u9700\uFF1B\u7559\u7A7A\u5219\u4F7F\u7528\u5168\u5C40 gateway.auth.token\uFF09",
      existingValue: toTrimmedString2(existing.gatewayToken) ?? getGatewayAuthToken(cfg),
      required: false
    });
    if (gatewayToken.trim()) {
      patch.gatewayToken = gatewayToken;
    }
  }
  return mergeChannelConfig(cfg, "dingtalk", patch);
}
async function configureFeishu(prompter, cfg) {
  section("\u914D\u7F6E Feishu\uFF08\u98DE\u4E66\uFF09");
  showGuideLink("feishu-china");
  const existing = getChannelConfig(cfg, "feishu-china");
  const appId = await prompter.askText({
    label: "Feishu appId",
    defaultValue: toTrimmedString2(existing.appId),
    required: true
  });
  const appSecret = await prompter.askSecret({
    label: "Feishu appSecret",
    existingValue: toTrimmedString2(existing.appSecret),
    required: true
  });
  const sendMarkdownAsCard = await prompter.askConfirm(
    "\u4EE5\u5361\u7247\u5F62\u5F0F\u53D1\u9001 Markdown",
    toBoolean(existing.sendMarkdownAsCard, true)
  );
  return mergeChannelConfig(cfg, "feishu-china", {
    appId,
    appSecret,
    sendMarkdownAsCard
  });
}
async function configureWecom(prompter, cfg) {
  section("\u914D\u7F6E WeCom\uFF08\u4F01\u4E1A\u5FAE\u4FE1-\u667A\u80FD\u673A\u5668\u4EBA\uFF09");
  showGuideLink("wecom");
  const existing = getChannelConfig(cfg, "wecom");
  Ve("\u5F53\u524D\u5411\u5BFC\u4EC5\u63D0\u4F9B WeCom ws \u957F\u8FDE\u63A5\u914D\u7F6E\u3002", "\u63D0\u793A");
  const botId = await prompter.askText({
    label: "WeCom botId\uFF08ws \u957F\u8FDE\u63A5\uFF09",
    defaultValue: toTrimmedString2(existing.botId),
    required: true
  });
  const secret = await prompter.askSecret({
    label: "WeCom secret\uFF08ws \u957F\u8FDE\u63A5\uFF09",
    existingValue: toTrimmedString2(existing.secret),
    required: true
  });
  return mergeChannelConfig(cfg, "wecom", {
    mode: "ws",
    botId,
    secret,
    webhookPath: void 0,
    token: void 0,
    encodingAESKey: void 0
  });
}
async function configureWecomApp(prompter, cfg) {
  section("\u914D\u7F6E WeCom App\uFF08\u81EA\u5EFA\u5E94\u7528-\u53EF\u63A5\u5165\u5FAE\u4FE1\uFF09");
  showGuideLink("wecom-app");
  const existing = getChannelConfig(cfg, "wecom-app");
  const existingAsr = isRecord(existing.asr) ? existing.asr : {};
  const webhookPath = await prompter.askText({
    label: "Webhook \u8DEF\u5F84\uFF08\u9700\u4E0E\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u914D\u7F6E\u4E00\u81F4\uFF0C\u9ED8\u8BA4 /wecom-app\uFF09",
    defaultValue: toTrimmedString2(existing.webhookPath) ?? "/wecom-app",
    required: true
  });
  const token = await prompter.askSecret({
    label: "WeCom App token",
    existingValue: toTrimmedString2(existing.token),
    required: true
  });
  const encodingAESKey = await prompter.askSecret({
    label: "WeCom App encodingAESKey",
    existingValue: toTrimmedString2(existing.encodingAESKey),
    required: true
  });
  const patch = {
    webhookPath,
    token,
    encodingAESKey
  };
  const corpId = await prompter.askText({
    label: "corpId",
    defaultValue: toTrimmedString2(existing.corpId),
    required: true
  });
  const corpSecret = await prompter.askSecret({
    label: "corpSecret",
    existingValue: toTrimmedString2(existing.corpSecret),
    required: true
  });
  const agentId = await prompter.askNumber({
    label: "agentId",
    min: 1,
    defaultValue: toNumber(existing.agentId)
  });
  patch.corpId = corpId;
  patch.corpSecret = corpSecret;
  patch.agentId = agentId;
  const asrEnabled = await prompter.askConfirm(
    "\u542F\u7528 ASR\uFF08\u652F\u6301\u5165\u7AD9\u8BED\u97F3\u81EA\u52A8\u8F6C\u6587\u5B57\uFF09",
    toBoolean(existingAsr.enabled, false)
  );
  const asr = {
    enabled: asrEnabled
  };
  if (asrEnabled) {
    Ve(
      [
        "ASR \u5F00\u901A\u65B9\u5F0F\u8BF7\u67E5\u770B\u914D\u7F6E\u6587\u6863\uFF1A\u6B65\u9AA4\u4E03\uFF08\u53EF\u9009\uFF09\uFF1A\u5F00\u542F\u8BED\u97F3\u8F6C\u6587\u672C\uFF08ASR\uFF09",
        "https://github.com/BytePioneer-AI/openclaw-china/blob/main/doc/guides/wecom-app/configuration.md"
      ].join("\n"),
      "\u63D0\u793A"
    );
    asr.appId = await prompter.askText({
      label: "ASR appId\uFF08\u817E\u8BAF\u4E91\uFF09",
      defaultValue: toTrimmedString2(existingAsr.appId),
      required: true
    });
    asr.secretId = await prompter.askSecret({
      label: "ASR secretId\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString2(existingAsr.secretId),
      required: true
    });
    asr.secretKey = await prompter.askSecret({
      label: "ASR secretKey\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString2(existingAsr.secretKey),
      required: true
    });
  }
  patch.asr = asr;
  return mergeChannelConfig(cfg, "wecom-app", patch);
}
async function configureQQBot(prompter, cfg) {
  section("\u914D\u7F6E QQBot\uFF08QQ \u673A\u5668\u4EBA\uFF09");
  showGuideLink("qqbot");
  const existing = getChannelConfig(cfg, "qqbot");
  const existingAsr = isRecord(existing.asr) ? existing.asr : {};
  const appId = await prompter.askText({
    label: "QQBot appId",
    defaultValue: toTrimmedString2(existing.appId),
    required: true
  });
  const clientSecret = await prompter.askSecret({
    label: "QQBot clientSecret",
    existingValue: toTrimmedString2(existing.clientSecret),
    required: true
  });
  const asrEnabled = await prompter.askConfirm(
    "\u542F\u7528 ASR\uFF08\u652F\u6301\u5165\u7AD9\u8BED\u97F3\u81EA\u52A8\u8F6C\u6587\u5B57\uFF09",
    toBoolean(existingAsr.enabled, false)
  );
  const asr = {
    enabled: asrEnabled
  };
  if (asrEnabled) {
    Ve("ASR \u5F00\u901A\u65B9\u5F0F\u8BE6\u60C5\u8BF7\u67E5\u770B\u914D\u7F6E\u6587\u6863\u3002", "\u63D0\u793A");
    asr.appId = await prompter.askText({
      label: "ASR appId\uFF08\u817E\u8BAF\u4E91\uFF09",
      defaultValue: toTrimmedString2(existingAsr.appId),
      required: true
    });
    asr.secretId = await prompter.askSecret({
      label: "ASR secretId\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString2(existingAsr.secretId),
      required: true
    });
    asr.secretKey = await prompter.askSecret({
      label: "ASR secretKey\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString2(existingAsr.secretKey),
      required: true
    });
  }
  return mergeChannelConfig(cfg, "qqbot", {
    appId,
    clientSecret,
    asr
  });
}
async function configureSingleChannel(channel, prompter, cfg) {
  switch (channel) {
    case "dingtalk":
      return configureDingtalk(prompter, cfg);
    case "feishu-china":
      return configureFeishu(prompter, cfg);
    case "wecom":
      return configureWecom(prompter, cfg);
    case "wecom-app":
      return configureWecomApp(prompter, cfg);
    case "qqbot":
      return configureQQBot(prompter, cfg);
    default:
      return cfg;
  }
}
async function runChinaSetup(params) {
  if (!stdin.isTTY || !stdout.isTTY) {
    params.logger.error?.("\u4EA4\u4E92\u5F0F\u914D\u7F6E\u9700\u8981\u5728 TTY \u7EC8\u7AEF\u4E2D\u8FD0\u884C\u3002");
    return;
  }
  const prompter = new SetupPrompter();
  const touched = /* @__PURE__ */ new Set();
  let next = cloneConfig(params.initialConfig);
  try {
    We("OpenClaw China \u914D\u7F6E\u5411\u5BFC");
    Ve(
      [
        "\u4F7F\u7528\u65B9\u5411\u952E\u9009\u62E9\uFF0C\u6309 Enter \u786E\u8BA4\u3002",
        `\u9879\u76EE\u4ED3\u5E93\uFF1A${ANSI_LINK}${PROJECT_REPO}${ANSI_RESET}`
      ].join("\n"),
      "\u6B22\u8FCE"
    );
    if (params.availableChannels.length === 0) {
      params.logger.error?.("\u672A\u68C0\u6D4B\u5230\u53EF\u914D\u7F6E\u7684 China \u6E20\u9053\u63D2\u4EF6\u3002");
      return;
    }
    const channelOptions = params.availableChannels.map((channelId, index) => ({
      key: index === 0 ? "recommended" : "",
      value: channelId,
      label: withConfiguredSuffix(next, channelId)
    }));
    const defaultChannel = channelOptions[0]?.value ?? "save";
    let continueLoop = true;
    while (continueLoop) {
      const selected = await prompter.askSelect(
        "\u8BF7\u9009\u62E9\u8981\u914D\u7F6E\u7684\u6E20\u9053",
        [
          ...channelOptions,
          { key: "", value: "save", label: "\u4FDD\u5B58\u5E76\u9000\u51FA" },
          { key: "", value: "cancel", label: "\u4E0D\u4FDD\u5B58\u5E76\u9000\u51FA" }
        ],
        defaultChannel
      );
      if (selected === "cancel") {
        Ne("\u5DF2\u53D6\u6D88\uFF0C\u672A\u5199\u5165\u4EFB\u4F55\u914D\u7F6E\u3002");
        return;
      }
      if (selected === "save") {
        break;
      }
      next = await configureSingleChannel(selected, prompter, next);
      touched.add(selected);
      Ve(`\u5DF2\u5B8C\u6210\uFF1A${CHANNEL_DISPLAY_LABELS[selected]}`, "\u5B8C\u6210");
      continueLoop = await prompter.askConfirm("\u7EE7\u7EED\u914D\u7F6E\u5176\u4ED6\u6E20\u9053", true);
    }
    if (touched.size === 0) {
      Ne("\u672A\u8FDB\u884C\u4EFB\u4F55\u4FEE\u6539\u3002");
      return;
    }
    Ve(
      `\u5DF2\u914D\u7F6E\u6E20\u9053\uFF1A${Array.from(touched).map((channelId) => CHANNEL_DISPLAY_LABELS[channelId]).join(", ")}`,
      "\u6458\u8981"
    );
    if (!params.writeConfig) {
      params.logger.error?.("\u65E0\u6CD5\u4FDD\u5B58\u914D\u7F6E\uFF1A\u5F53\u524D\u8FD0\u884C\u65F6\u672A\u63D0\u4F9B\u914D\u7F6E\u5199\u5165\u80FD\u529B\u3002");
      return;
    }
    await params.writeConfig(next);
    Le("\u914D\u7F6E\u5DF2\u4FDD\u5B58\u3002");
    showReadyMessage();
  } catch (err) {
    if (err instanceof PromptCancelledError) {
      return;
    }
    throw err;
  }
}
function registerChinaSetupCli(api, opts) {
  const state = getChinaCliState();
  for (const channelId of normalizeChannels(opts?.channels)) {
    state.channels.add(channelId);
  }
  if (state.cliRegistered || typeof api.registerCli !== "function") {
    return;
  }
  state.cliRegistered = true;
  const writeConfig = resolveWriteConfig(api.runtime);
  const fallbackLogger = {
    info: (message) => stdout.write(`${message}
`),
    warn: (message) => warn(message),
    error: (message) => warn(message)
  };
  api.registerCli(
    (ctx) => {
      if (!isCommandLike(ctx.program)) {
        const logger = ctx.logger ?? api.logger ?? fallbackLogger;
        logger.error?.("\u65E0\u6CD5\u6CE8\u518C china \u547D\u4EE4\uFF1ACLI program \u5B9E\u4F8B\u65E0\u6548\u3002");
        return;
      }
      const root = ctx.program.command("china").description("OpenClaw China \u63D2\u4EF6\u547D\u4EE4");
      root.command("setup").description("\u4E2D\u56FD\u6E20\u9053\u4EA4\u4E92\u5F0F\u914D\u7F6E\u5411\u5BFC").action(async () => {
        const logger = ctx.logger ?? api.logger ?? fallbackLogger;
        const availableChannels = getInstalledChannels(state);
        await runChinaSetup({
          initialConfig: isRecord(ctx.config) ? ctx.config : {},
          writeConfig,
          logger,
          availableChannels
        });
      });
      root.command("about").description("\u663E\u793A\u9879\u76EE\u4FE1\u606F").action(() => {
        const installed = getInstalledChannels(state);
        We("OpenClaw China \u6E20\u9053\u63D2\u4EF6");
        Ve(
          installed.length > 0 ? `\u5F53\u524D\u5DF2\u5B89\u88C5\u6E20\u9053\uFF1A${installed.map((channelId) => CHANNEL_DISPLAY_LABELS[channelId]).join("\u3001")}` : "OpenClaw China \u6E20\u9053\u63D2\u4EF6",
          "\u5173\u4E8E"
        );
        Le(PROJECT_REPO);
        showReadyMessage();
      });
    },
    { commands: ["china"] }
  );
}

// ../../packages/shared/src/cli/install-hint.ts
var PROJECT_REPO2 = "https://github.com/BytePioneer-AI/openclaw-china";
var INSTALL_SETUP_COMMAND = "openclaw china setup";
var START_GATEWAY_COMMAND = "openclaw gateway --port 18789 --verbose";
var ANSI_RESET2 = "\x1B[0m";
var ANSI_BOLD = "\x1B[1m";
var ANSI_LINK2 = "\x1B[1;4;96m";
var ANSI_BORDER2 = "\x1B[92m";
var SUPPORTED_CHANNELS = [
  "dingtalk",
  "feishu-china",
  "wecom",
  "wecom-app",
  "qqbot"
];
var CHINA_INSTALL_HINT_SHOWN_KEY = /* @__PURE__ */ Symbol.for("@openclaw-china/china-install-hint-shown");
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function hasAnyEnabledChinaChannel(config) {
  if (!isRecord2(config)) {
    return false;
  }
  const channels = config.channels;
  if (!isRecord2(channels)) {
    return false;
  }
  return SUPPORTED_CHANNELS.some((channelId) => {
    const channelConfig = channels[channelId];
    return isRecord2(channelConfig) && channelConfig.enabled === true;
  });
}
function hasShownInstallHint() {
  const root = globalThis;
  return root[CHINA_INSTALL_HINT_SHOWN_KEY] === true;
}
function markInstallHintShown() {
  const root = globalThis;
  root[CHINA_INSTALL_HINT_SHOWN_KEY] = true;
}
function showChinaInstallHint(api) {
  if (hasShownInstallHint() || hasAnyEnabledChinaChannel(api.config)) {
    return;
  }
  markInstallHintShown();
  const lines = [
    `${ANSI_BORDER2}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET2}`,
    "  OpenClaw China Channels \u5DF2\u5C31\u7EEA!",
    `${ANSI_BORDER2}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET2}`,
    "",
    "\u9879\u76EE\u4ED3\u5E93:",
    `  ${ANSI_LINK2}${PROJECT_REPO2}${ANSI_RESET2}`,
    "",
    "\u2B50 \u5982\u679C\u8FD9\u4E2A\u9879\u76EE\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u8BF7\u7ED9\u6211\u4EEC\u4E00\u4E2A Star\uFF01\u2B50",
    "",
    "\u4E0B\u4E00\u6B65\uFF08\u914D\u7F6E\u5F15\u5BFC\uFF09:",
    "  1. \u8FD0\u884C\u4EA4\u4E92\u5F0F\u914D\u7F6E\u5411\u5BFC",
    `     ${ANSI_BOLD}${INSTALL_SETUP_COMMAND}${ANSI_RESET2}`,
    "  2. \u6309\u63D0\u793A\u586B\u5199\u6E20\u9053\u51ED\u636E\u5E76\u4FDD\u5B58\u914D\u7F6E",
    "  3. \u542F\u52A8\u7F51\u5173\u5E76\u89C2\u5BDF\u65E5\u5FD7",
    `     ${START_GATEWAY_COMMAND}`
  ];
  if (api.logger?.info) {
    for (const line of lines) {
      api.logger.info(line);
    }
    return;
  }
  if (api.logger?.warn) {
    for (const line of lines) {
      api.logger.warn(line);
    }
  }
}
var FileSizeLimitError2 = class _FileSizeLimitError extends Error {
  /** Actual file size in bytes */
  actualSize;
  /** Size limit in bytes for the message type */
  limitSize;
  /** Message type (picture, video, audio, file) */
  msgType;
  constructor(actualSize, limitSize, msgType) {
    super(
      `File size ${actualSize} bytes exceeds limit ${limitSize} bytes for ${msgType}`
    );
    this.name = "FileSizeLimitError";
    this.actualSize = actualSize;
    this.limitSize = limitSize;
    this.msgType = msgType;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _FileSizeLimitError);
    }
  }
};
var TimeoutError = class _TimeoutError extends Error {
  /** Timeout duration in milliseconds */
  timeoutMs;
  constructor(timeoutMs) {
    super(`Download timed out after ${timeoutMs}ms`);
    this.name = "TimeoutError";
    this.timeoutMs = timeoutMs;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _TimeoutError);
    }
  }
};
var DINGTALK_API_BASE2 = "https://api.dingtalk.com";
var DINGTALK_OAPI_BASE = "https://oapi.dingtalk.com";
var REQUEST_TIMEOUT2 = 3e4;
var UPLOAD_TIMEOUT = 6e4;
function detectMediaType2(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"].includes(ext)) {
    return "image";
  }
  if ([".mp3", ".wav", ".amr", ".opus", ".ogg"].includes(ext)) {
    return "voice";
  }
  if ([".mp4", ".mov", ".avi", ".mkv"].includes(ext)) {
    return "video";
  }
  return "file";
}
function detectMediaTypeFromContentType(contentType) {
  if (!contentType) return "file";
  const mime = contentType.split(";")[0].trim().toLowerCase();
  if (mime.startsWith("image/")) {
    return "image";
  }
  if (mime.startsWith("audio/")) {
    return "voice";
  }
  if (mime.startsWith("video/")) {
    return "video";
  }
  return "file";
}
function getExtensionFromContentType(contentType) {
  if (!contentType) return "";
  const mime = contentType.split(";")[0].trim().toLowerCase();
  const mimeToExt = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/bmp": ".bmp",
    "audio/mpeg": ".mp3",
    "audio/wav": ".wav",
    "audio/ogg": ".ogg",
    "audio/amr": ".amr",
    "video/mp4": ".mp4",
    "video/quicktime": ".mov",
    "video/x-msvideo": ".avi"
  };
  return mimeToExt[mime] ?? "";
}
function isLocalPath(urlOrPath) {
  if (urlOrPath.startsWith("/") || urlOrPath.startsWith("~") || /^[a-zA-Z]:/.test(urlOrPath)) {
    return true;
  }
  try {
    const url = new URL(urlOrPath);
    return url.protocol === "file:";
  } catch {
    return true;
  }
}
async function uploadMediaDingtalk(params) {
  const { cfg, media, fileName, mediaType } = params;
  if (!cfg.clientId || !cfg.clientSecret) {
    throw new Error(
      "DingTalk credentials not configured (clientId, clientSecret required)"
    );
  }
  const accessToken = await getAccessToken(cfg.clientId, cfg.clientSecret);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT);
  try {
    const formData = new FormData();
    const blob = new Blob([media], { type: "application/octet-stream" });
    formData.append("media", blob, fileName);
    formData.append("type", mediaType);
    const response = await fetch(
      `${DINGTALK_OAPI_BASE}/media/upload?access_token=${accessToken}&type=${mediaType}`,
      {
        method: "POST",
        body: formData,
        signal: controller.signal
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `DingTalk media upload failed: HTTP ${response.status} - ${errorText}`
      );
    }
    const data = await response.json();
    if (data.errcode && data.errcode !== 0) {
      throw new Error(
        `DingTalk media upload failed: ${data.errmsg ?? "unknown error"} (code: ${data.errcode})`
      );
    }
    if (!data.media_id) {
      throw new Error("DingTalk media upload failed: no media_id returned");
    }
    return {
      mediaId: data.media_id,
      type: mediaType
    };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(
        `DingTalk media upload timed out after ${UPLOAD_TIMEOUT}ms`
      );
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function sendMediaDingtalk(params) {
  const { cfg, to, mediaUrl, chatType, mediaBuffer, fileName } = params;
  if (!cfg.clientId || !cfg.clientSecret) {
    throw new Error(
      "DingTalk credentials not configured (clientId, clientSecret required)"
    );
  }
  let buffer;
  let name;
  let detectedMediaType;
  if (mediaBuffer) {
    buffer = mediaBuffer;
    name = fileName ?? "file";
  } else if (mediaUrl) {
    if (isLocalPath(mediaUrl)) {
      const filePath = mediaUrl.startsWith("~") ? mediaUrl.replace("~", process.env.HOME ?? "") : mediaUrl.replace("file://", "");
      if (!fs3.existsSync(filePath)) {
        throw new Error(`Local file not found: ${filePath}`);
      }
      buffer = fs3.readFileSync(filePath);
      name = fileName ?? path.basename(filePath);
    } else {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT2);
      try {
        const response = await fetch(mediaUrl, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch media from URL: HTTP ${response.status}`
          );
        }
        const contentType = response.headers.get("content-type");
        detectedMediaType = detectMediaTypeFromContentType(contentType);
        buffer = Buffer.from(await response.arrayBuffer());
        let baseName = fileName ?? (path.basename(new URL(mediaUrl).pathname) || "file");
        if (!path.extname(baseName) && contentType) {
          const ext = getExtensionFromContentType(contentType);
          if (ext) {
            baseName = baseName + ext;
          }
        }
        name = baseName;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          throw new Error(
            `Media download timed out after ${REQUEST_TIMEOUT2}ms`
          );
        }
        throw err;
      } finally {
        clearTimeout(timeoutId);
      }
    }
  } else {
    throw new Error("Either mediaUrl or mediaBuffer must be provided");
  }
  const mediaType = detectedMediaType ?? detectMediaType2(name);
  const uploadResult = await uploadMediaDingtalk({
    cfg,
    media: buffer,
    fileName: name,
    mediaType
  });
  const accessToken = await getAccessToken(cfg.clientId, cfg.clientSecret);
  if (chatType === "direct") {
    return sendDirectMediaMessage({
      cfg,
      to,
      mediaId: uploadResult.mediaId,
      mediaType,
      accessToken,
      fileName: name
    });
  } else {
    return sendGroupMediaMessage({
      cfg,
      to,
      mediaId: uploadResult.mediaId,
      mediaType,
      accessToken,
      fileName: name
    });
  }
}
function getMsgKeyForMediaType(mediaType) {
  switch (mediaType) {
    case "image":
      return "sampleImageMsg";
    case "voice":
      return "sampleAudio";
    case "video":
      return "sampleVideo";
    case "file":
      return "sampleFile";
    default:
      return "sampleFile";
  }
}
function buildMediaMsgParam(mediaId, mediaType, fileName) {
  switch (mediaType) {
    case "image":
      return JSON.stringify({ photoURL: mediaId });
    case "voice":
      return JSON.stringify({ mediaId, duration: "1000" });
    case "video":
      return JSON.stringify({
        videoMediaId: mediaId,
        videoType: "mp4",
        duration: "1000"
      });
    case "file":
      return JSON.stringify({ mediaId, fileName: fileName ?? "file", fileType: "file" });
    default:
      return JSON.stringify({ mediaId });
  }
}
async function sendDirectMediaMessage(params) {
  const { cfg, to, mediaId, mediaType, accessToken, fileName } = params;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT2);
  try {
    const response = await fetch(
      `${DINGTALK_API_BASE2}/v1.0/robot/oToMessages/batchSend`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-acs-dingtalk-access-token": accessToken
        },
        body: JSON.stringify({
          robotCode: cfg.clientId,
          userIds: [to],
          msgKey: getMsgKeyForMediaType(mediaType),
          msgParam: buildMediaMsgParam(mediaId, mediaType, fileName)
        }),
        signal: controller.signal
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `DingTalk direct media send failed: HTTP ${response.status} - ${errorText}`
      );
    }
    const data = await response.json();
    return {
      messageId: data.processQueryKey ?? `dm_media_${Date.now()}`,
      conversationId: to
    };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(
        `DingTalk direct media send timed out after ${REQUEST_TIMEOUT2}ms`
      );
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}
async function sendGroupMediaMessage(params) {
  const { cfg, to, mediaId, mediaType, accessToken, fileName } = params;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT2);
  try {
    const response = await fetch(
      `${DINGTALK_API_BASE2}/v1.0/robot/groupMessages/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-acs-dingtalk-access-token": accessToken
        },
        body: JSON.stringify({
          robotCode: cfg.clientId,
          openConversationId: to,
          msgKey: getMsgKeyForMediaType(mediaType),
          msgParam: buildMediaMsgParam(mediaId, mediaType, fileName)
        }),
        signal: controller.signal
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `DingTalk group media send failed: HTTP ${response.status} - ${errorText}`
      );
    }
    const data = await response.json();
    return {
      messageId: data.processQueryKey ?? `gm_media_${Date.now()}`,
      conversationId: to
    };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(
        `DingTalk group media send timed out after ${REQUEST_TIMEOUT2}ms`
      );
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}
function parseContent(content) {
  if (!content) return null;
  if (typeof content === "string") {
    try {
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  }
  if (typeof content === "object" && !Array.isArray(content)) {
    return content;
  }
  return null;
}
function extractDownloadCode(content, msgType) {
  if (content.downloadCode) {
    return content.downloadCode;
  }
  if (msgType === "picture" && content.pictureDownloadCode) {
    return content.pictureDownloadCode;
  }
  if (msgType === "video" && content.videoDownloadCode) {
    return content.videoDownloadCode;
  }
  return null;
}
function extractFileFromMessage(data) {
  if (!data || typeof data !== "object") {
    return null;
  }
  const msg = data;
  const msgtype = msg.msgtype;
  if (typeof msgtype !== "string") {
    return null;
  }
  const supportedTypes = ["picture", "video", "audio", "file"];
  if (!supportedTypes.includes(msgtype)) {
    return null;
  }
  const msgType = msgtype;
  const content = parseContent(msg.content);
  if (!content) {
    return null;
  }
  const downloadCode = extractDownloadCode(content, msgType);
  if (!downloadCode) {
    return null;
  }
  const result = {
    downloadCode,
    msgType
  };
  switch (msgType) {
    case "picture":
      break;
    case "video":
      if (typeof content.duration === "number") {
        result.duration = content.duration;
      }
      break;
    case "audio":
      if (typeof content.duration === "number") {
        result.duration = content.duration;
      }
      if (typeof content.recognition === "string") {
        result.recognition = content.recognition;
      }
      break;
    case "file":
      if (typeof content.fileName === "string") {
        result.fileName = content.fileName;
      }
      if (typeof content.fileSize === "number") {
        result.fileSize = content.fileSize;
      }
      break;
  }
  return result;
}
function parseRichText(richText) {
  if (!richText) return null;
  if (typeof richText === "string") {
    try {
      const parsed = JSON.parse(richText);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  }
  if (Array.isArray(richText)) {
    return richText;
  }
  return null;
}
function parseRichTextContent(content) {
  if (!content) return null;
  if (typeof content === "string") {
    try {
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  }
  if (typeof content === "object" && !Array.isArray(content)) {
    return content;
  }
  return null;
}
function parseRichTextMessage(data) {
  if (!data || typeof data !== "object") {
    return null;
  }
  const msg = data;
  if (msg.msgtype !== "richText") {
    return null;
  }
  const contentObj = parseRichTextContent(msg.content);
  if (!contentObj) {
    return null;
  }
  const richTextElements = parseRichText(contentObj.richText);
  if (!richTextElements || richTextElements.length === 0) {
    return null;
  }
  const textParts = [];
  const imageCodes = [];
  const mentions = [];
  const orderedElements = [];
  for (const element of richTextElements) {
    if (!element || typeof element !== "object") {
      continue;
    }
    const elementType = element.type;
    const hasText = typeof element.text === "string";
    if (!elementType && hasText) {
      textParts.push(element.text);
      orderedElements.push({ type: "text", text: element.text });
      continue;
    }
    switch (elementType) {
      case "text":
        if (hasText) {
          textParts.push(element.text);
          orderedElements.push({ type: "text", text: element.text });
        }
        break;
      case "picture": {
        const code = element.downloadCode || element.pictureDownloadCode;
        if (typeof code === "string" && code) {
          imageCodes.push(code);
          orderedElements.push({ type: "picture", downloadCode: code });
        }
        break;
      }
      case "at":
        if (typeof element.userId === "string" && element.userId) {
          mentions.push(element.userId);
          orderedElements.push({ type: "at", userId: element.userId });
        }
        break;
    }
  }
  return {
    textParts,
    imageCodes,
    mentions,
    elements: orderedElements
  };
}
var FILE_SIZE_LIMITS = {
  picture: 100 * 1024 * 1024,
  // 100MB
  video: 100 * 1024 * 1024,
  // 100MB
  audio: 100 * 1024 * 1024,
  // 100MB
  file: 100 * 1024 * 1024
  // 100MB
};
var DOWNLOAD_TIMEOUT = 12e4;
async function downloadDingTalkFile(params) {
  const { downloadCode, robotCode, accessToken, fileName, log, maxFileSizeMB } = params;
  const msgType = params.msgType ?? "file";
  const defaultLimit = FILE_SIZE_LIMITS[msgType] ?? FILE_SIZE_LIMITS.file;
  const sizeLimit = maxFileSizeMB ? maxFileSizeMB * 1024 * 1024 : defaultLimit;
  const apiController = new AbortController();
  const apiTimeoutId = setTimeout(() => apiController.abort(), REQUEST_TIMEOUT2);
  let downloadUrl;
  try {
    log?.debug?.(`Getting download URL for code: ${downloadCode.slice(0, 10)}...`);
    const apiResponse = await fetch(
      `${DINGTALK_API_BASE2}/v1.0/robot/messageFiles/download`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-acs-dingtalk-access-token": accessToken
        },
        body: JSON.stringify({
          downloadCode,
          robotCode
        }),
        signal: apiController.signal
      }
    );
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      throw new Error(
        `DingTalk API error: HTTP ${apiResponse.status} - ${errorText}`
      );
    }
    const apiData = await apiResponse.json();
    if (!apiData.downloadUrl) {
      throw new Error("DingTalk API returned no downloadUrl");
    }
    downloadUrl = apiData.downloadUrl;
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(`DingTalk API request timed out after ${REQUEST_TIMEOUT2}ms`);
    }
    throw err;
  } finally {
    clearTimeout(apiTimeoutId);
  }
  log?.debug?.(`Got download URL, starting download...`);
  try {
    const downloaded = await downloadToTempFile(downloadUrl, {
      timeout: DOWNLOAD_TIMEOUT,
      maxSize: sizeLimit,
      sourceFileName: fileName,
      tempPrefix: "dingtalk-file",
      tempDir: resolveInboundMediaTempDir()
    });
    log?.debug?.(`File saved to: ${downloaded.path} (${downloaded.size} bytes)`);
    return {
      path: downloaded.path,
      contentType: downloaded.contentType,
      size: downloaded.size,
      fileName
    };
  } catch (err) {
    if (err instanceof FileSizeLimitError) {
      throw new FileSizeLimitError2(err.actualSize, err.limitSize, msgType);
    }
    if (err instanceof MediaTimeoutError) {
      throw new TimeoutError(err.timeoutMs);
    }
    throw err;
  }
}
async function downloadRichTextImages(params) {
  const { imageCodes, robotCode, accessToken, log, maxFileSizeMB } = params;
  const results = [];
  const total = imageCodes.length;
  for (let i = 0; i < total; i++) {
    const code = imageCodes[i];
    const index = i + 1;
    log?.info?.(`downloading image ${index}/${total}`);
    try {
      const file = await downloadDingTalkFile({
        downloadCode: code,
        robotCode,
        accessToken,
        msgType: "picture",
        log,
        maxFileSizeMB
      });
      results.push(file);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      log?.warn?.(`Failed to download image ${index}/${total}: ${errorMessage}`);
    }
  }
  return results;
}

// src/runtime.ts
var runtime = null;
function setDingtalkRuntime(next) {
  runtime = next;
}
function getDingtalkRuntime() {
  if (!runtime) {
    throw new Error("Dingtalk runtime not initialized. Make sure the plugin is properly registered with Moltbot.");
  }
  return runtime;
}
function isDingtalkRuntimeInitialized() {
  return runtime !== null;
}

// src/outbound.ts
function parseTarget(to) {
  if (to.startsWith("chat:")) {
    return { targetId: to.slice(5), chatType: "group" };
  }
  if (to.startsWith("user:")) {
    return { targetId: to.slice(5), chatType: "direct" };
  }
  return { targetId: to, chatType: "direct" };
}
var dingtalkOutbound = {
  /** 投递模式: direct (直接发送) */
  deliveryMode: "direct",
  /** 文本分块限制: 4000 字符 (钉钉 Markdown 消息限制) */
  textChunkLimit: 4e3,
  /** 分块模式: markdown (不会在代码块中间断开) */
  chunkerMode: "markdown",
  /**
   * 长消息分块器
   * 利用 Moltbot 核心的 markdown-aware 分块，不会在代码块中间断开
   */
  chunker: (text, limit) => {
    try {
      const runtime2 = getDingtalkRuntime();
      if (runtime2.channel?.text?.chunkMarkdownText) {
        return runtime2.channel.text.chunkMarkdownText(text, limit);
      }
    } catch {
    }
    return [text];
  },
  /**
   * 发送文本消息
   */
  sendText: async (params) => {
    const { cfg, to, text, accountId } = params;
    if (!cfg.channels?.dingtalk) {
      throw new Error("DingTalk channel not configured");
    }
    const dingtalkCfg = mergeDingtalkAccountConfig(
      cfg,
      resolveDingtalkAccountId(cfg, accountId)
    );
    const { targetId, chatType } = parseTarget(to);
    const result = await sendMessageDingtalk({
      cfg: dingtalkCfg,
      to: targetId,
      text,
      chatType
    });
    return {
      channel: "dingtalk",
      messageId: result.messageId,
      chatId: result.conversationId,
      conversationId: result.conversationId
    };
  },
  /**
   * 发送媒体消息（含回退逻辑）
   */
  sendMedia: async (params) => {
    const { cfg, to, text, mediaUrl, accountId } = params;
    if (!cfg.channels?.dingtalk) {
      throw new Error("DingTalk channel not configured");
    }
    const dingtalkCfg = mergeDingtalkAccountConfig(
      cfg,
      resolveDingtalkAccountId(cfg, accountId)
    );
    const { targetId, chatType } = parseTarget(to);
    if (text?.trim()) {
      await sendMessageDingtalk({
        cfg: dingtalkCfg,
        to: targetId,
        text,
        chatType
      });
    }
    if (mediaUrl) {
      try {
        const result = await sendMediaDingtalk({
          cfg: dingtalkCfg,
          to: targetId,
          mediaUrl,
          chatType
        });
        return {
          channel: "dingtalk",
          messageId: result.messageId,
          chatId: result.conversationId,
          conversationId: result.conversationId
        };
      } catch (err) {
        console.error(`[dingtalk] sendMediaDingtalk failed:`, err);
        const fallbackText = `\u{1F4CE} ${mediaUrl}`;
        const result = await sendMessageDingtalk({
          cfg: dingtalkCfg,
          to: targetId,
          text: fallbackText,
          chatType
        });
        return {
          channel: "dingtalk",
          messageId: result.messageId,
          chatId: result.conversationId,
          conversationId: result.conversationId
        };
      }
    }
    return {
      channel: "dingtalk",
      messageId: text?.trim() ? `text_${Date.now()}` : "empty",
      chatId: targetId,
      conversationId: targetId
    };
  }
};

// src/card.ts
var DINGTALK_API_BASE3 = "https://api.dingtalk.com";
var AI_CARD_TEMPLATE_ID = "382e4302-551d-4880-bf29-a30acfab2e71.schema";
var AICardStatus = {
  INPUTING: "2",
  FINISHED: "3"};
var REQUEST_TIMEOUT3 = 3e4;
async function createAICard(params) {
  const { cfg, conversationType, conversationId, senderId, senderStaffId, log } = params;
  if (!cfg.clientId || !cfg.clientSecret) {
    log?.(`[AICard] Error: DingTalk credentials not configured`);
    return null;
  }
  try {
    const accessToken = await getAccessToken(cfg.clientId, cfg.clientSecret);
    const cardInstanceId = `card_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    log?.(`[AICard] Creating card instance: ${cardInstanceId}`);
    const createBody = {
      cardTemplateId: AI_CARD_TEMPLATE_ID,
      outTrackId: cardInstanceId,
      cardData: {
        cardParamMap: {}
      },
      callbackType: "STREAM",
      imGroupOpenSpaceModel: { supportForward: true },
      imRobotOpenSpaceModel: { supportForward: true }
    };
    const createController = new AbortController();
    const createTimeoutId = setTimeout(() => createController.abort(), REQUEST_TIMEOUT3);
    try {
      const createResp = await fetch(`${DINGTALK_API_BASE3}/v1.0/card/instances`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-acs-dingtalk-access-token": accessToken
        },
        body: JSON.stringify(createBody),
        signal: createController.signal
      });
      if (!createResp.ok) {
        const errorText = await createResp.text();
        log?.(`[AICard] Failed to create card: HTTP ${createResp.status} - ${errorText}`);
        return null;
      }
      log?.(`[AICard] Card instance created successfully`);
      const isGroup = conversationType === "2";
      const deliverBody = {
        outTrackId: cardInstanceId,
        userIdType: 1
      };
      if (isGroup) {
        deliverBody.openSpaceId = `dtv1.card//IM_GROUP.${conversationId}`;
        deliverBody.imGroupOpenDeliverModel = {
          robotCode: cfg.clientId
        };
      } else {
        const userId = senderStaffId || senderId;
        if (!userId) {
          log?.("[AICard] Error: missing senderStaffId/senderId for IM_ROBOT delivery");
          return null;
        }
        deliverBody.openSpaceId = `dtv1.card//IM_ROBOT.${userId}`;
        deliverBody.imRobotOpenDeliverModel = { spaceType: "IM_ROBOT" };
      }
      const deliverController = new AbortController();
      const deliverTimeoutId = setTimeout(() => deliverController.abort(), REQUEST_TIMEOUT3);
      try {
        const deliverResp = await fetch(`${DINGTALK_API_BASE3}/v1.0/card/instances/deliver`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-acs-dingtalk-access-token": accessToken
          },
          body: JSON.stringify(deliverBody),
          signal: deliverController.signal
        });
        if (!deliverResp.ok) {
          const errorText = await deliverResp.text();
          log?.(`[AICard] Failed to deliver card: HTTP ${deliverResp.status} - ${errorText}`);
          return null;
        }
        log?.(`[AICard] Card delivered successfully`);
        return {
          cardInstanceId,
          accessToken,
          inputingStarted: false
        };
      } finally {
        clearTimeout(deliverTimeoutId);
      }
    } finally {
      clearTimeout(createTimeoutId);
    }
  } catch (err) {
    log?.(`[AICard] Error creating card: ${String(err)}`);
    return null;
  }
}
async function streamAICard(card, content, finished = false, log) {
  if (!card.inputingStarted) {
    const statusBody = {
      outTrackId: card.cardInstanceId,
      cardData: {
        cardParamMap: {
          flowStatus: AICardStatus.INPUTING,
          msgContent: "",
          staticMsgContent: "",
          sys_full_json_obj: JSON.stringify({
            order: ["msgContent"]
          })
        }
      }
    };
    const statusController = new AbortController();
    const statusTimeoutId = setTimeout(() => statusController.abort(), REQUEST_TIMEOUT3);
    try {
      const statusResp = await fetch(`${DINGTALK_API_BASE3}/v1.0/card/instances`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-acs-dingtalk-access-token": card.accessToken
        },
        body: JSON.stringify(statusBody),
        signal: statusController.signal
      });
      if (!statusResp.ok) {
        const errorText = await statusResp.text();
        throw new Error(`Failed to switch to INPUTING: HTTP ${statusResp.status} - ${errorText}`);
      }
      log?.(`[AICard] Switched to INPUTING state`);
    } finally {
      clearTimeout(statusTimeoutId);
    }
    card.inputingStarted = true;
  }
  const streamBody = {
    outTrackId: card.cardInstanceId,
    guid: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    key: "msgContent",
    content,
    isFull: true,
    isFinalize: finished,
    isError: false
  };
  const streamController = new AbortController();
  const streamTimeoutId = setTimeout(() => streamController.abort(), REQUEST_TIMEOUT3);
  try {
    const streamResp = await fetch(`${DINGTALK_API_BASE3}/v1.0/card/streaming`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-acs-dingtalk-access-token": card.accessToken
      },
      body: JSON.stringify(streamBody),
      signal: streamController.signal
    });
    if (!streamResp.ok) {
      const errorText = await streamResp.text();
      throw new Error(`Failed to stream update: HTTP ${streamResp.status} - ${errorText}`);
    }
    if (!finished) {
      log?.(`[AICard] Streamed ${content.length} chars`);
    }
  } finally {
    clearTimeout(streamTimeoutId);
  }
}
async function finishAICard(card, content, log) {
  log?.(`[AICard] Finishing card with ${content.length} chars`);
  await streamAICard(card, content, true, log);
  const finishBody = {
    outTrackId: card.cardInstanceId,
    cardData: {
      cardParamMap: {
        flowStatus: AICardStatus.FINISHED,
        msgContent: content,
        staticMsgContent: "",
        sys_full_json_obj: JSON.stringify({
          order: ["msgContent"]
        })
      }
    }
  };
  const finishController = new AbortController();
  const finishTimeoutId = setTimeout(() => finishController.abort(), REQUEST_TIMEOUT3);
  try {
    const finishResp = await fetch(`${DINGTALK_API_BASE3}/v1.0/card/instances`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-acs-dingtalk-access-token": card.accessToken
      },
      body: JSON.stringify(finishBody),
      signal: finishController.signal
    });
    if (!finishResp.ok) {
      const errorText = await finishResp.text();
      log?.(`[AICard] Warning: Failed to set FINISHED state: HTTP ${finishResp.status}`);
    } else {
      log?.(`[AICard] Card finished successfully`);
    }
  } finally {
    clearTimeout(finishTimeoutId);
  }
}

// src/bot-handler.ts
var LONG_TASK_NOTICE_TEXT = "\u4EFB\u52A1\u5904\u7406\u65F6\u95F4\u8F83\u957F\uFF0C\u8BF7\u7A0D\u7B49\uFF0C\u6211\u8FD8\u5728\u7EE7\u7EED\u5904\u7406\u3002";
var DEFAULT_LONG_TASK_NOTICE_DELAY_MS = 3e4;
function startLongTaskNoticeTimer(params) {
  const { delayMs, logger, sendNotice } = params;
  let completed = false;
  let timer = null;
  const clear = () => {
    if (!timer) return;
    clearTimeout(timer);
    timer = null;
  };
  if (delayMs > 0) {
    timer = setTimeout(() => {
      if (completed) return;
      completed = true;
      timer = null;
      void sendNotice().catch((err) => {
        logger.warn(`send long-task notice failed: ${String(err)}`);
      });
    }, delayMs);
    timer.unref?.();
  } else {
    completed = true;
  }
  return {
    markReplyDelivered: () => {
      if (completed) return;
      completed = true;
      clear();
    },
    dispose: () => {
      completed = true;
      clear();
    }
  };
}
var pendingLongTaskNotices = /* @__PURE__ */ new Map();
function armLongTaskNoticeForSession(params) {
  const { sessionKey, delayMs, logger, sendNotice } = params;
  pendingLongTaskNotices.get(sessionKey)?.dispose();
  logger.debug?.(`[long-task] armed sessionKey=${sessionKey} delayMs=${delayMs}`);
  const controller = startLongTaskNoticeTimer({
    delayMs,
    logger,
    sendNotice: async () => {
      pendingLongTaskNotices.delete(sessionKey);
      logger.debug?.(`[long-task] firing sessionKey=${sessionKey}`);
      await sendNotice();
    }
  });
  const wrapped = {
    markReplyDelivered: () => {
      const active = pendingLongTaskNotices.get(sessionKey);
      if (active !== wrapped) return;
      pendingLongTaskNotices.delete(sessionKey);
      logger.debug?.(`[long-task] cleared sessionKey=${sessionKey} reason=reply-delivered`);
      controller.markReplyDelivered();
    },
    dispose: () => {
      const active = pendingLongTaskNotices.get(sessionKey);
      if (active === wrapped) {
        pendingLongTaskNotices.delete(sessionKey);
        logger.debug?.(`[long-task] cleared sessionKey=${sessionKey} reason=disposed`);
      }
      controller.dispose();
    }
  };
  pendingLongTaskNotices.set(sessionKey, wrapped);
  return wrapped;
}
function buildGatewayUserContent(inboundCtx, logger) {
  const base = inboundCtx.CommandBody ?? inboundCtx.Body ?? "";
  const { base: baseText, prompt } = splitCronHiddenPrompt(base);
  const rawPaths = [];
  if (typeof inboundCtx.MediaPath === "string") {
    rawPaths.push(inboundCtx.MediaPath);
  }
  if (Array.isArray(inboundCtx.MediaPaths)) {
    rawPaths.push(...inboundCtx.MediaPaths);
  }
  const files = /* @__PURE__ */ new Set();
  for (const raw of rawPaths) {
    const localPath = normalizeLocalPath(raw);
    if (!localPath) continue;
    if (isImagePath(localPath)) continue;
    if (!fs3.existsSync(localPath)) {
      logger.warn(`[gateway] local file not found: ${localPath}`);
      continue;
    }
    files.add(localPath);
  }
  if (files.size === 0) {
    return prompt ? `${baseText}

${prompt}` : baseText;
  }
  const list = Array.from(files).map((p) => `- ${p}`).join("\n");
  const content = `${baseText}

[local files]
${list}`;
  return prompt ? `${content}

${prompt}` : content;
}
function extractLocalMediaFromText(params) {
  const { text, logger } = params;
  const result = extractMediaFromText(text, {
    removeFromText: false,
    checkExists: true,
    existsSync: (p) => {
      const exists = fs3.existsSync(p);
      if (!exists) {
        logger?.warn?.(`[stream] local media not found: ${p}`);
      }
      return exists;
    },
    parseMediaLines: false,
    parseMarkdownImages: true,
    parseHtmlImages: false,
    // 钉钉不支持 HTML
    parseBarePaths: true,
    parseMarkdownLinks: true
  });
  const mediaUrls = result.all.filter((m) => m.isLocal && m.localPath).map((m) => m.localPath);
  return { mediaUrls };
}
function extractMediaLinesFromText(params) {
  const { text, logger } = params;
  const result = extractMediaFromText(text, {
    removeFromText: false,
    checkExists: true,
    existsSync: (p) => {
      const exists = fs3.existsSync(p);
      if (!exists) {
        logger?.warn?.(`[stream] local media not found: ${p}`);
      }
      return exists;
    },
    parseMediaLines: true,
    parseMarkdownImages: false,
    parseHtmlImages: false,
    parseBarePaths: false,
    parseMarkdownLinks: false
  });
  const mediaUrls = result.all.map((m) => m.isLocal ? m.localPath ?? m.source : m.source).filter((m) => typeof m === "string" && m.trim().length > 0);
  return { text: result.text, mediaUrls };
}
function resolveAudioRecognition(raw) {
  if (raw.msgtype !== "audio") return void 0;
  if (!raw.content) return void 0;
  const contentObj = typeof raw.content === "string" ? (() => {
    try {
      return JSON.parse(raw.content);
    } catch {
      return null;
    }
  })() : raw.content;
  if (!contentObj || typeof contentObj !== "object") return void 0;
  const recognition = contentObj.recognition;
  if (typeof recognition !== "string") return void 0;
  const trimmed = recognition.trim();
  return trimmed.length > 0 ? trimmed : void 0;
}
function resolveGatewayAuthFromConfigFile(logger) {
  try {
    const fs5 = __require("fs");
    const path5 = __require("path");
    const os4 = __require("os");
    const home = os4.homedir();
    const candidates = [
      path5.join(home, ".openclaw", "openclaw.json"),
      path5.join(home, ".openclaw", "config.json")
    ];
    for (const filePath of candidates) {
      if (!fs5.existsSync(filePath)) continue;
      const raw = fs5.readFileSync(filePath, "utf8");
      const cleaned = raw.replace(/^\uFEFF/, "").trim();
      const cfg = JSON.parse(cleaned);
      const gateway = cfg.gateway ?? {};
      const auth = gateway.auth ?? {};
      const mode = typeof auth.mode === "string" ? auth.mode : "";
      const token = typeof auth.token === "string" ? auth.token : "";
      const password = typeof auth.password === "string" ? auth.password : "";
      if (mode === "token" && token) return token;
      if (mode === "password" && password) return password;
      if (token) return token;
      if (password) return password;
    }
  } catch (err) {
    logger.debug(`[gateway] failed to read openclaw config: ${String(err)}`);
  }
  return void 0;
}
function resolveGatewayRequestParams(runtime2, dingtalkCfg, logger) {
  const runtimeRecord = runtime2;
  const gateway = runtimeRecord?.gateway;
  const gatewayPort = typeof gateway?.port === "number" ? gateway.port : 18789;
  const gatewayUrl = typeof gateway?.url === "string" ? gateway.url : `http://127.0.0.1:${gatewayPort}/v1/chat/completions`;
  const authToken = dingtalkCfg.gatewayToken ?? dingtalkCfg.gatewayPassword ?? gateway?.auth?.token ?? gateway?.authToken ?? gateway?.token ?? process.env.OPENCLAW_GATEWAY_TOKEN ?? process.env.OPENCLAW_GATEWAY_PASSWORD ?? resolveGatewayAuthFromConfigFile(logger);
  const headers = {
    "Content-Type": "application/json"
  };
  if (typeof authToken === "string" && authToken.trim()) {
    headers["Authorization"] = `Bearer ${authToken}`;
  } else {
    logger.warn("[gateway] auth token not found; request may be rejected");
  }
  return { gatewayUrl, headers };
}
function formatStreamingInterruptMessage(err) {
  const baseMessage = `\u26A0\uFE0F Response interrupted: ${String(err)}`;
  if (String(err).includes("Gateway error")) {
    return `${baseMessage}
\u8BF7\u624B\u52A8\u8BBE\u7F6E channels.dingtalk.gatewayToken\uFF0C\u6216\u786E\u8BA4 OpenClaw \u5168\u5C40 gateway.auth.token \u914D\u7F6E\u6B63\u786E\u3002`;
  }
  return baseMessage;
}
async function* streamFromGateway(params) {
  const { runtime: runtime2, sessionKey, userContent, logger, dingtalkCfg, abortSignal } = params;
  const { gatewayUrl, headers } = resolveGatewayRequestParams(runtime2, dingtalkCfg, logger);
  logger.debug(`[gateway] streaming via ${gatewayUrl}, session=${sessionKey}`);
  const response = await fetch(gatewayUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: "default",
      messages: [{ role: "user", content: userContent }],
      stream: true,
      user: sessionKey
    }),
    signal: abortSignal
  });
  if (!response.ok || !response.body) {
    const errText = response.body ? await response.text() : "(no body)";
    throw new Error(`Gateway error: ${response.status} - ${errText}`);
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let lastChunkTime = null;
  const TASK_BOUNDARY_THRESHOLD_MS = 1e3;
  while (true) {
    const { done: readDone, value } = await reader.read();
    if (readDone) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const data = line.slice(6).trim();
      if (data === "[DONE]") return;
      try {
        const chunk = JSON.parse(data);
        const choice = chunk?.choices?.[0];
        const content = choice?.delta?.content;
        if (typeof content === "string" && content) {
          const now = Date.now();
          if (lastChunkTime !== null) {
            const timeSinceLastChunk = now - lastChunkTime;
            if (timeSinceLastChunk > TASK_BOUNDARY_THRESHOLD_MS) {
              yield "\n\n---\n\n";
            }
          }
          yield content;
          lastChunkTime = now;
        }
      } catch {
        continue;
      }
    }
  }
}
function parseDingtalkMessage(raw) {
  const chatType = raw.conversationType === "2" ? "group" : "direct";
  let content = "";
  if (raw.msgtype === "text" && raw.text?.content) {
    content = raw.text.content.trim();
  } else if (raw.msgtype === "audio") {
    const recognition = resolveAudioRecognition(raw);
    if (recognition) {
      content = recognition;
    }
  }
  const mentionedBot = resolveMentionedBot(raw);
  const messageId = raw.streamMessageId ?? `${raw.conversationId}_${Date.now()}`;
  const senderId = raw.senderStaffId ?? raw.senderUserId ?? raw.senderUserid ?? raw.senderId;
  return {
    conversationId: raw.conversationId,
    messageId,
    senderId,
    senderNick: raw.senderNick,
    chatType,
    content,
    contentType: raw.msgtype,
    mentionedBot,
    robotCode: raw.robotCode
  };
}
function resolveMentionedBot(raw) {
  const atUsers = raw.atUsers ?? [];
  return atUsers.length > 0;
}
function buildInboundContext(ctx, sessionKey, accountId) {
  const isGroup = ctx.chatType === "group";
  const from = isGroup ? `dingtalk:group:${ctx.conversationId}` : `dingtalk:${ctx.senderId}`;
  const to = isGroup ? `chat:${ctx.conversationId}` : `user:${ctx.senderId}`;
  return {
    Body: ctx.content,
    RawBody: ctx.content,
    CommandBody: ctx.content,
    From: from,
    To: to,
    SessionKey: sessionKey,
    AccountId: accountId,
    ChatType: ctx.chatType,
    GroupSubject: isGroup ? ctx.conversationId : void 0,
    SenderName: ctx.senderNick,
    SenderId: ctx.senderId,
    UserId: ctx.senderId,
    ConversationId: ctx.conversationId,
    GroupId: isGroup ? ctx.conversationId : void 0,
    Provider: "dingtalk",
    MessageSid: ctx.messageId,
    Timestamp: Date.now(),
    WasMentioned: ctx.mentionedBot,
    CommandAuthorized: true,
    OriginatingChannel: "dingtalk",
    OriginatingTo: to
  };
}
function buildTargetMeta(ctx, inboundCtx) {
  const isGroup = ctx.chatType === "group";
  const from = isGroup ? `dingtalk:group:${ctx.conversationId}` : `dingtalk:${ctx.senderId}`;
  const to = isGroup ? `chat:${ctx.conversationId}` : `user:${ctx.senderId}`;
  return {
    chatType: ctx.chatType,
    senderId: ctx.senderId,
    userId: ctx.senderId,
    conversationId: ctx.conversationId,
    groupId: isGroup ? ctx.conversationId : void 0,
    targetId: isGroup ? ctx.conversationId : ctx.senderId,
    from: inboundCtx?.From ?? from,
    to: inboundCtx?.To ?? to,
    messageId: ctx.messageId
  };
}
async function handleAICardStreaming(params) {
  const { card, route, inboundCtx, dingtalkCfg, targetId, chatType, logger } = params;
  let accumulated = "";
  const streamStartAt = Date.now();
  const streamStartIso = new Date(streamStartAt).toISOString();
  let firstChunkAt = null;
  let chunkCount = 0;
  try {
    const core = getDingtalkRuntime();
    let lastUpdateTime = 0;
    const updateInterval = 100;
    const firstFrameContent = " ";
    let firstFrameSent = false;
    try {
      await streamAICard(card, firstFrameContent, false, (msg) => logger.debug(msg));
      firstFrameSent = true;
      lastUpdateTime = Date.now();
    } catch (err) {
      logger.debug(`failed to send first frame: ${String(err)}`);
    }
    const gatewayUserContent = buildGatewayUserContent(inboundCtx, logger);
    for await (const chunk of streamFromGateway({
      runtime: core,
      sessionKey: route.sessionKey,
      userContent: gatewayUserContent,
      logger,
      dingtalkCfg
    })) {
      accumulated += chunk;
      chunkCount += 1;
      if (!firstChunkAt) {
        firstChunkAt = Date.now();
        const firstChunkIso = new Date(firstChunkAt).toISOString();
        logger.debug(
          `[stream] first chunk at ${firstChunkIso} (after ${firstChunkAt - streamStartAt}ms, len=${chunk.length}, start=${streamStartIso})`
        );
      }
      const now = Date.now();
      if (!firstFrameSent || now - lastUpdateTime >= updateInterval) {
        await streamAICard(card, accumulated, false);
        lastUpdateTime = now;
        firstFrameSent = true;
      }
    }
    await finishAICard(card, accumulated, (msg) => logger.debug(msg));
    logger.info(`AI Card streaming completed with ${accumulated.length} chars`);
    const { mediaUrls: mediaFromLines } = extractMediaLinesFromText({
      text: accumulated,
      logger
    });
    const { mediaUrls: localMediaFromText } = extractLocalMediaFromText({
      text: accumulated,
      logger
    });
    const mediaQueue = [];
    const seenMedia = /* @__PURE__ */ new Set();
    const addMedia = (value) => {
      const trimmed = value?.trim();
      if (!trimmed) return;
      if (seenMedia.has(trimmed)) return;
      seenMedia.add(trimmed);
      mediaQueue.push(trimmed);
    };
    for (const url of mediaFromLines) addMedia(url);
    for (const url of localMediaFromText) addMedia(url);
    if (mediaQueue.length > 0) {
      logger.debug(`[stream] sending ${mediaQueue.length} media attachments`);
      for (const mediaUrl of mediaQueue) {
        try {
          await sendMediaDingtalk({
            cfg: dingtalkCfg,
            to: targetId,
            mediaUrl,
            chatType
          });
          logger.debug(`[stream] sent media: ${mediaUrl}`);
        } catch (fileErr) {
          logger.warn(`[stream] failed to send media ${mediaUrl}: ${String(fileErr)}`);
        }
      }
    }
  } catch (err) {
    logger.error(`AI Card streaming failed: ${String(err)}`);
    try {
      const errorMsg = formatStreamingInterruptMessage(err);
      await finishAICard(card, errorMsg, (msg) => logger.debug(msg));
    } catch (finishErr) {
      logger.error(`Failed to finish card with error: ${String(finishErr)}`);
    }
    try {
      const fallbackText = accumulated.trim() ? accumulated : formatStreamingInterruptMessage(err);
      const limit = dingtalkCfg.textChunkLimit ?? 4e3;
      for (let i = 0; i < fallbackText.length; i += limit) {
        const chunk = fallbackText.slice(i, i + limit);
        await sendMessageDingtalk({
          cfg: dingtalkCfg,
          to: targetId,
          text: chunk,
          chatType
        });
      }
      const { mediaUrls: mediaFromLines } = extractMediaLinesFromText({
        text: fallbackText,
        logger
      });
      const { mediaUrls: localMediaFromText } = extractLocalMediaFromText({
        text: fallbackText,
        logger
      });
      const mediaQueue = [];
      const seenMedia = /* @__PURE__ */ new Set();
      const addMedia = (value) => {
        const trimmed = value?.trim();
        if (!trimmed) return;
        if (seenMedia.has(trimmed)) return;
        seenMedia.add(trimmed);
        mediaQueue.push(trimmed);
      };
      for (const url of mediaFromLines) addMedia(url);
      for (const url of localMediaFromText) addMedia(url);
      for (const mediaUrl of mediaQueue) {
        await sendMediaDingtalk({
          cfg: dingtalkCfg,
          to: targetId,
          mediaUrl,
          chatType
        });
      }
      logger.info("AI Card failed; fallback message sent via SDK");
    } catch (fallbackErr) {
      logger.error(`Failed to send fallback message: ${String(fallbackErr)}`);
    }
  }
}
function buildFileContextMessage(msgType, fileName) {
  switch (msgType) {
    case "picture":
      return "[\u56FE\u7247]";
    case "audio":
      return "[\u8BED\u97F3\u6D88\u606F]";
    case "video":
      return "[\u89C6\u9891]";
    case "file": {
      const displayName = fileName ?? "\u672A\u77E5\u6587\u4EF6";
      if (fileName) {
        const category = resolveFileCategory("application/octet-stream", fileName);
        switch (category) {
          case "document":
            return `[\u6587\u6863: ${displayName}]`;
          case "archive":
            return `[\u538B\u7F29\uFFFD? ${displayName}]`;
          case "code":
            return `[\u4EE3\u7801\u6587\u4EF6: ${displayName}]`;
          default:
            return `[\u6587\u4EF6: ${displayName}]`;
        }
      }
      return `[\u6587\u4EF6: ${displayName}]`;
    }
    default:
      return `[\u6587\u4EF6: ${fileName ?? "\u672A\u77E5\u6587\u4EF6"}]`;
  }
}
async function handleDingtalkMessage(params) {
  const {
    cfg,
    raw,
    accountId = DEFAULT_ACCOUNT_ID,
    enableAICard = false
  } = params;
  const logger = createLogger("dingtalk", {
    log: params.log,
    error: params.error
  });
  const ctx = parseDingtalkMessage(raw);
  const isGroup = ctx.chatType === "group";
  const audioRecognition = resolveAudioRecognition(raw);
  const inboundTargetMeta = buildTargetMeta(ctx);
  logger.info(
    `[inbound] received=${JSON.stringify({
      ...inboundTargetMeta,
      contentType: ctx.contentType,
      mentionedBot: ctx.mentionedBot
    })}`
  );
  const pluginCfg = cfg ?? {};
  const hasChannelConfig = Boolean(pluginCfg.channels?.dingtalk);
  const channelCfg = hasChannelConfig ? mergeDingtalkAccountConfig(pluginCfg, accountId) : void 0;
  const inboundMediaDir = resolveInboundMediaDir(channelCfg);
  const inboundMediaKeepDays = resolveInboundMediaKeepDays(channelCfg);
  const inboundMediaTempDir = resolveInboundMediaTempDir();
  const archiveInboundMedia = async (file) => {
    const finalPath = await finalizeInboundMediaFile({
      filePath: file.path,
      tempDir: inboundMediaTempDir,
      inboundDir: inboundMediaDir
    });
    if (finalPath === file.path) return file;
    return { ...file, path: finalPath };
  };
  if (isGroup) {
    const groupPolicy = channelCfg?.groupPolicy ?? "open";
    const groupAllowFrom = channelCfg?.groupAllowFrom ?? [];
    const requireMention = channelCfg?.requireMention ?? true;
    const policyResult = checkGroupPolicy({
      groupPolicy,
      conversationId: ctx.conversationId,
      groupAllowFrom,
      requireMention,
      mentionedBot: ctx.mentionedBot
    });
    if (!policyResult.allowed) {
      logger.debug(
        `[policy] rejected=${JSON.stringify({
          reason: policyResult.reason,
          ...inboundTargetMeta
        })}`
      );
      return;
    }
  } else {
    const dmPolicy2 = channelCfg?.dmPolicy ?? "open";
    const allowFrom = channelCfg?.allowFrom ?? [];
    const policyResult = checkDmPolicy({
      dmPolicy: dmPolicy2,
      senderId: ctx.senderId,
      allowFrom
    });
    if (!policyResult.allowed) {
      logger.debug(
        `[policy] rejected=${JSON.stringify({
          reason: policyResult.reason,
          ...inboundTargetMeta
        })}`
      );
      return;
    }
  }
  if (!isDingtalkRuntimeInitialized()) {
    logger.warn("runtime not initialized, skipping dispatch");
    return;
  }
  let downloadedMedia = null;
  let downloadedRichTextImages = [];
  let extractedFileInfo = null;
  try {
    const core = getDingtalkRuntime();
    const coreRecord = core;
    const coreChannel = coreRecord?.channel;
    const replyApi = coreChannel?.reply;
    const routingApi = coreChannel?.routing;
    if (!routingApi?.resolveAgentRoute) {
      logger.debug("core.channel.routing.resolveAgentRoute not available, skipping dispatch");
      return;
    }
    if (!replyApi?.dispatchReplyFromConfig) {
      logger.debug("core.channel.reply.dispatchReplyFromConfig not available, skipping dispatch");
      return;
    }
    if (!replyApi?.createReplyDispatcher && !replyApi?.createReplyDispatcherWithTyping) {
      logger.debug("core.channel.reply dispatcher factory not available, skipping dispatch");
      return;
    }
    const resolveAgentRoute = routingApi.resolveAgentRoute;
    const route = resolveAgentRoute({
      cfg,
      channel: "dingtalk",
      accountId,
      peer: {
        kind: isGroup ? "group" : "dm",
        id: isGroup ? ctx.conversationId : ctx.senderId
      }
    });
    let mediaBody = null;
    let richTextParseResult = null;
    const mediaTypes = ["picture", "video", "audio", "file"];
    if (mediaTypes.includes(raw.msgtype)) {
      if (raw.msgtype === "audio" && audioRecognition) {
        logger.debug("[audio] recognition present; treat as text and skip audio file download");
      } else {
        try {
          extractedFileInfo = extractFileFromMessage(raw);
          if (extractedFileInfo && channelCfg?.clientId && channelCfg?.clientSecret) {
            const accessToken = await getAccessToken(channelCfg.clientId, channelCfg.clientSecret);
            downloadedMedia = await downloadDingTalkFile({
              downloadCode: extractedFileInfo.downloadCode,
              robotCode: channelCfg.clientId,
              accessToken,
              fileName: extractedFileInfo.fileName,
              msgType: extractedFileInfo.msgType,
              log: logger,
              maxFileSizeMB: channelCfg.maxFileSizeMB
            });
            downloadedMedia = await archiveInboundMedia(downloadedMedia);
            logger.debug(`downloaded media file: ${downloadedMedia.path} (${downloadedMedia.size} bytes)`);
            mediaBody = buildFileContextMessage(
              extractedFileInfo.msgType,
              extractedFileInfo.fileName
            );
          }
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          logger.warn(`media download failed, continuing with text: ${errorMessage}`);
          downloadedMedia = null;
          extractedFileInfo = null;
        }
      }
    }
    if (raw.msgtype === "richText") {
      try {
        richTextParseResult = parseRichTextMessage(raw);
        if (richTextParseResult && channelCfg?.clientId && channelCfg?.clientSecret) {
          if (richTextParseResult.imageCodes.length > 0) {
            const accessToken = await getAccessToken(channelCfg.clientId, channelCfg.clientSecret);
            downloadedRichTextImages = await downloadRichTextImages({
              imageCodes: richTextParseResult.imageCodes,
              robotCode: channelCfg.clientId,
              accessToken,
              log: logger,
              maxFileSizeMB: channelCfg.maxFileSizeMB
            });
            downloadedRichTextImages = await Promise.all(
              downloadedRichTextImages.map((file) => archiveInboundMedia(file))
            );
            logger.debug(`downloaded ${downloadedRichTextImages.length}/${richTextParseResult.imageCodes.length} richText images`);
          }
          const orderedLines = [];
          const imageQueue = [...downloadedRichTextImages];
          for (const element of richTextParseResult.elements ?? []) {
            if (!element) continue;
            if (element.type === "picture") {
              const file = imageQueue.shift();
              orderedLines.push(file?.path ?? "[\u56FE\u7247]");
              continue;
            }
            if (element.type === "text" && typeof element.text === "string") {
              orderedLines.push(element.text);
              continue;
            }
            if (element.type === "at" && typeof element.userId === "string") {
              orderedLines.push(`@${element.userId}`);
              continue;
            }
          }
          if (orderedLines.length > 0) {
            mediaBody = orderedLines.join("\n");
          } else if (richTextParseResult.textParts.length > 0) {
            mediaBody = richTextParseResult.textParts.join("\n");
          } else if (downloadedRichTextImages.length > 0) {
            mediaBody = downloadedRichTextImages.length === 1 ? "[\u56FE\u7247]" : `[${downloadedRichTextImages.length}\u5F20\u56FE\u7247]`;
          }
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        logger.warn(`richText processing failed: ${errorMessage}`);
        richTextParseResult = null;
        downloadedRichTextImages = [];
      }
    }
    const inboundCtx = buildInboundContext(
      ctx,
      route?.sessionKey,
      route?.accountId ?? accountId
    );
    if (audioRecognition) {
      inboundCtx.Transcript = audioRecognition;
    }
    if (downloadedMedia) {
      inboundCtx.MediaPath = downloadedMedia.path;
      inboundCtx.MediaType = downloadedMedia.contentType;
      if (mediaBody) {
        inboundCtx.Body = mediaBody;
        inboundCtx.RawBody = mediaBody;
        inboundCtx.CommandBody = mediaBody;
      }
      if (extractedFileInfo?.msgType === "file") {
        if (extractedFileInfo.fileName) {
          inboundCtx.FileName = extractedFileInfo.fileName;
        }
        if (extractedFileInfo.fileSize !== void 0) {
          inboundCtx.FileSize = extractedFileInfo.fileSize;
        }
      }
      if (extractedFileInfo?.msgType === "audio" && extractedFileInfo.recognition) {
        inboundCtx.Transcript = extractedFileInfo.recognition;
      }
    }
    if (downloadedRichTextImages.length > 0) {
      inboundCtx.MediaPaths = downloadedRichTextImages.map((f) => f.path);
      inboundCtx.MediaTypes = downloadedRichTextImages.map((f) => f.contentType);
      if (mediaBody) {
        inboundCtx.Body = mediaBody;
        inboundCtx.RawBody = mediaBody;
        inboundCtx.CommandBody = mediaBody;
      }
    } else if (richTextParseResult && richTextParseResult.textParts.length > 0) {
      const textBody = richTextParseResult.textParts.join("\n");
      inboundCtx.Body = textBody;
      inboundCtx.RawBody = textBody;
      inboundCtx.CommandBody = textBody;
    }
    const finalizeInboundContext = replyApi?.finalizeInboundContext;
    const finalCtx = finalizeInboundContext ? finalizeInboundContext(inboundCtx) : inboundCtx;
    const resolvedTargetMeta = buildTargetMeta(ctx, finalCtx);
    logger.debug(`[inbound] context=${JSON.stringify(resolvedTargetMeta)}`);
    let cronSource = "";
    let cronBase = "";
    if (typeof finalCtx.RawBody === "string" && finalCtx.RawBody) {
      cronSource = "RawBody";
      cronBase = finalCtx.RawBody;
    } else if (typeof finalCtx.Body === "string" && finalCtx.Body) {
      cronSource = "Body";
      cronBase = finalCtx.Body;
    } else if (typeof finalCtx.CommandBody === "string" && finalCtx.CommandBody) {
      cronSource = "CommandBody";
      cronBase = finalCtx.CommandBody;
    }
    if (cronBase) {
      const nextCron = appendCronHiddenPrompt(cronBase);
      const injected = nextCron !== cronBase;
      if (injected) {
        finalCtx.BodyForAgent = nextCron;
      }
    }
    const channelSession = coreChannel?.session;
    const storePath = channelSession?.resolveStorePath?.(
      cfg?.session?.store,
      { agentId: route?.agentId }
    );
    if (channelSession?.recordInboundSession && storePath) {
      const mainSessionKeyRaw = route?.mainSessionKey;
      const mainSessionKey = typeof mainSessionKeyRaw === "string" && mainSessionKeyRaw.trim() ? mainSessionKeyRaw : void 0;
      const updateLastRoute = !isGroup && mainSessionKey ? {
        sessionKey: mainSessionKey,
        channel: "dingtalk",
        to: finalCtx.OriginatingTo ?? finalCtx.To ?? `user:${ctx.senderId}`,
        accountId: route?.accountId
      } : void 0;
      const recordSessionKeyRaw = finalCtx.SessionKey ?? route.sessionKey;
      const recordSessionKey = typeof recordSessionKeyRaw === "string" && recordSessionKeyRaw.trim() ? recordSessionKeyRaw : String(recordSessionKeyRaw ?? "");
      await channelSession.recordInboundSession({
        storePath,
        sessionKey: recordSessionKey,
        ctx: finalCtx,
        updateLastRoute,
        onRecordError: (err) => {
          logger.error(`dingtalk: failed updating session meta: ${String(err)}`);
        }
      });
    }
    const dingtalkCfgResolved = channelCfg;
    if (!dingtalkCfgResolved) {
      logger.warn("channel config missing, skipping dispatch");
      return;
    }
    if (enableAICard) {
      const card = await createAICard({
        cfg: dingtalkCfgResolved,
        conversationType: ctx.chatType === "group" ? "2" : "1",
        conversationId: ctx.conversationId,
        senderId: ctx.senderId,
        senderStaffId: raw.senderStaffId,
        log: (msg) => logger.debug(msg)
      });
      if (card) {
        logger.info("AI Card created, using streaming mode");
        await handleAICardStreaming({
          card,
          cfg,
          route,
          inboundCtx: finalCtx,
          dingtalkCfg: dingtalkCfgResolved,
          targetId: isGroup ? ctx.conversationId : ctx.senderId,
          chatType: isGroup ? "group" : "direct",
          logger
        });
        return;
      } else {
        logger.warn("AI Card creation failed, falling back to normal message");
      }
    }
    const targetId = isGroup ? ctx.conversationId : ctx.senderId;
    const chatType = isGroup ? "group" : "direct";
    const routeSessionKeyRaw = route.sessionKey;
    const routeSessionKey = typeof routeSessionKeyRaw === "string" && routeSessionKeyRaw.trim() ? routeSessionKeyRaw : `dingtalk:${chatType}:${targetId}`;
    const longTaskNotice = armLongTaskNoticeForSession({
      sessionKey: routeSessionKey,
      delayMs: dingtalkCfgResolved.longTaskNoticeDelayMs ?? DEFAULT_LONG_TASK_NOTICE_DELAY_MS,
      logger,
      sendNotice: async () => {
        await sendMessageDingtalk({
          cfg: dingtalkCfgResolved,
          to: targetId,
          text: LONG_TASK_NOTICE_TEXT,
          chatType
        });
      }
    });
    try {
      const textApi = coreChannel?.text;
      const textChunkLimitResolved = textApi?.resolveTextChunkLimit?.(
        {
          cfg,
          channel: "dingtalk",
          defaultLimit: dingtalkCfgResolved.textChunkLimit ?? 4e3
        }
      ) ?? (dingtalkCfgResolved.textChunkLimit ?? 4e3);
      const chunkMode = textApi?.resolveChunkMode?.(cfg, "dingtalk");
      const tableMode = "bullets";
      const deliver = async (payload, info) => {
        logger.debug(
          `[reply] meta=${JSON.stringify({
            ...resolvedTargetMeta,
            kind: info?.kind ?? "unknown",
            hasText: typeof payload.text === "string",
            mediaCount: Array.isArray(payload.mediaUrls) ? payload.mediaUrls.length : payload.mediaUrl ? 1 : 0
          })}`
        );
        let sent = false;
        const sendMediaWithFallback = async (mediaUrl) => {
          try {
            await sendMediaDingtalk({
              cfg: dingtalkCfgResolved,
              to: targetId,
              mediaUrl,
              chatType
            });
            sent = true;
            longTaskNotice.markReplyDelivered();
          } catch (err) {
            logger.error(
              `[reply] sendMediaDingtalk failed (target=${JSON.stringify(resolvedTargetMeta)}): ${String(err)}`
            );
            const fallbackText = `\u{1F4CE} ${mediaUrl}`;
            await sendMessageDingtalk({
              cfg: dingtalkCfgResolved,
              to: targetId,
              text: fallbackText,
              chatType
            });
            sent = true;
            longTaskNotice.markReplyDelivered();
          }
        };
        const payloadMediaUrls = payload.mediaUrls ?? (payload.mediaUrl ? [payload.mediaUrl] : []);
        const rawText = payload.text ?? "";
        const { mediaUrls: mediaFromLines } = extractMediaLinesFromText({
          text: rawText,
          logger
        });
        const { mediaUrls: localMediaFromText } = extractLocalMediaFromText({
          text: rawText,
          logger
        });
        const mediaQueue = [];
        const seenMedia = /* @__PURE__ */ new Set();
        const addMedia = (value) => {
          const trimmed = value?.trim();
          if (!trimmed) return;
          if (seenMedia.has(trimmed)) return;
          seenMedia.add(trimmed);
          mediaQueue.push(trimmed);
        };
        for (const url of payloadMediaUrls) addMedia(url);
        for (const url of mediaFromLines) addMedia(url);
        for (const url of localMediaFromText) addMedia(url);
        const converted = textApi?.convertMarkdownTables?.(
          rawText,
          tableMode
        ) ?? rawText;
        const hasText = converted.trim().length > 0;
        if (hasText) {
          const chunks = textApi?.chunkTextWithMode && typeof textChunkLimitResolved === "number" && textChunkLimitResolved > 0 ? textApi.chunkTextWithMode(converted, textChunkLimitResolved, chunkMode) : [converted];
          for (const chunk of chunks) {
            await sendMessageDingtalk({
              cfg: dingtalkCfgResolved,
              to: targetId,
              text: chunk,
              chatType
            });
            sent = true;
            longTaskNotice.markReplyDelivered();
          }
        }
        for (const mediaUrl of mediaQueue) {
          await sendMediaWithFallback(mediaUrl);
        }
        if (!hasText && mediaQueue.length === 0) {
          return false;
        }
        return sent;
      };
      const humanDelay = replyApi?.resolveHumanDelayConfig?.(
        cfg,
        route?.agentId
      );
      const createDispatcherWithTyping = replyApi?.createReplyDispatcherWithTyping;
      const createDispatcher = replyApi?.createReplyDispatcher;
      const dispatchReplyWithDispatcher = replyApi?.dispatchReplyWithDispatcher;
      if (dispatchReplyWithDispatcher) {
        logger.debug(
          `[dispatch] direct=${JSON.stringify({
            sessionKey: route?.sessionKey,
            ...resolvedTargetMeta
          })}`
        );
        const deliveryState = { delivered: false, skippedNonSilent: 0 };
        const result2 = await dispatchReplyWithDispatcher({
          ctx: finalCtx,
          cfg,
          dispatcherOptions: {
            deliver: async (payload, info) => {
              const didSend = await deliver(
                payload,
                info
              );
              if (didSend) {
                deliveryState.delivered = true;
              }
            },
            humanDelay,
            onSkip: (_payload, info) => {
              if (info.reason !== "silent") {
                deliveryState.skippedNonSilent += 1;
              }
            },
            onError: (err, info) => {
              logger.error(`${info.kind} reply failed: ${String(err)}`);
            }
          }
        });
        if (!deliveryState.delivered && deliveryState.skippedNonSilent > 0) {
          await sendMessageDingtalk({
            cfg: dingtalkCfgResolved,
            to: targetId,
            text: "No response generated. Please try again.",
            chatType
          });
          longTaskNotice.markReplyDelivered();
        }
        const counts2 = result2?.counts;
        const queuedFinal2 = result2?.queuedFinal;
        logger.debug(
          `dispatch complete (queuedFinal=${typeof queuedFinal2 === "boolean" ? queuedFinal2 : "unknown"}, replies=${counts2?.final ?? 0})`
        );
        return;
      }
      const dispatcherResult = createDispatcherWithTyping ? createDispatcherWithTyping({
        deliver: async (payload, info) => {
          await deliver(payload, info);
        },
        humanDelay,
        onError: (err, info) => {
          logger.error(`${info.kind} reply failed: ${String(err)}`);
        }
      }) : {
        dispatcher: createDispatcher?.({
          deliver: async (payload, info) => {
            await deliver(payload, info);
          },
          humanDelay,
          onError: (err, info) => {
            logger.error(`${info.kind} reply failed: ${String(err)}`);
          }
        }),
        replyOptions: {},
        markDispatchIdle: () => void 0
      };
      const dispatcher = dispatcherResult?.dispatcher;
      if (!dispatcher) {
        logger.debug("dispatcher not available, skipping dispatch");
        return;
      }
      logger.debug(
        `[dispatch] legacy=${JSON.stringify({
          sessionKey: route?.sessionKey,
          ...resolvedTargetMeta
        })}`
      );
      const dispatchReplyFromConfig = replyApi?.dispatchReplyFromConfig;
      if (!dispatchReplyFromConfig) {
        logger.debug("dispatchReplyFromConfig not available");
        return;
      }
      const result = await dispatchReplyFromConfig({
        ctx: finalCtx,
        cfg,
        dispatcher,
        replyOptions: dispatcherResult?.replyOptions ?? {}
      });
      const markDispatchIdle = dispatcherResult?.markDispatchIdle;
      markDispatchIdle?.();
      const counts = result?.counts;
      const queuedFinal = result?.queuedFinal;
      logger.debug(
        `dispatch complete (queuedFinal=${typeof queuedFinal === "boolean" ? queuedFinal : "unknown"}, replies=${counts?.final ?? 0})`
      );
    } catch (err) {
      longTaskNotice.dispose();
      throw err;
    }
  } catch (err) {
    logger.error(
      `failed to dispatch message (target=${JSON.stringify(inboundTargetMeta)}): ${String(err)}`
    );
  } finally {
    try {
      await pruneInboundMediaDir({
        inboundDir: inboundMediaDir,
        keepDays: inboundMediaKeepDays
      });
    } catch (err) {
      logger.debug(`failed to prune inbound media dir: ${String(err)}`);
    }
  }
}

// src/bot-stream-handler.ts
var processedMessages = /* @__PURE__ */ new Map();
var MESSAGE_DEDUP_TTL_MS = 6e4;
var MESSAGE_DEDUP_MAX_ENTRIES = 1e4;
function trimMessageDedupeCache(now) {
  for (const [messageId, timestamp] of processedMessages) {
    if (now - timestamp > MESSAGE_DEDUP_TTL_MS) {
      processedMessages.delete(messageId);
    }
  }
  while (processedMessages.size > MESSAGE_DEDUP_MAX_ENTRIES) {
    const oldest = processedMessages.keys().next().value;
    if (typeof oldest !== "string") {
      break;
    }
    processedMessages.delete(oldest);
  }
}
function isDuplicateMessage(messageKey, now) {
  const previous = processedMessages.get(messageKey);
  if (typeof previous === "number" && now - previous < MESSAGE_DEDUP_TTL_MS) {
    return true;
  }
  if (typeof previous === "number") {
    processedMessages.delete(messageKey);
  }
  processedMessages.set(messageKey, now);
  trimMessageDedupeCache(now);
  return false;
}
function parseContentPreview(rawMessage) {
  if (rawMessage.msgtype === "text" && rawMessage.text?.content) {
    return rawMessage.text.content.trim();
  }
  if (!rawMessage.content) {
    return "";
  }
  const contentObj = typeof rawMessage.content === "string" ? (() => {
    try {
      return JSON.parse(rawMessage.content);
    } catch {
      return null;
    }
  })() : rawMessage.content;
  if (!contentObj) {
    return "";
  }
  const recognition = contentObj.recognition;
  if (typeof recognition === "string") {
    return recognition.trim();
  }
  return "";
}
function parseRawMessage(payload, streamMessageId) {
  const parsed = JSON.parse(payload);
  if (streamMessageId) {
    parsed.streamMessageId = streamMessageId;
  }
  return parsed;
}
function processDingtalkInbound(params) {
  const {
    payload,
    client,
    config,
    dingtalkCfg,
    accountId,
    logger,
    onMessageAccepted,
    onDedupeHit,
    onAckError,
    onParseError
  } = params;
  const streamMessageId = payload?.headers?.messageId;
  const dedupeKey = streamMessageId ? `${accountId}:${streamMessageId}` : void 0;
  if (streamMessageId) {
    try {
      client.socketCallBackResponse(streamMessageId, { success: true });
    } catch (err) {
      onAckError?.(err, streamMessageId);
      logger.error(`failed to ACK message ${streamMessageId}: ${String(err)}`);
    }
  }
  if (dedupeKey && isDuplicateMessage(dedupeKey, Date.now())) {
    onDedupeHit?.(streamMessageId);
    logger.debug(`duplicate message ignored: ${streamMessageId}`);
    return;
  }
  try {
    const rawMessage = parseRawMessage(payload.data, streamMessageId);
    const senderName = rawMessage.senderNick ?? rawMessage.senderId;
    const contentText = parseContentPreview(rawMessage);
    const textPreview = contentText.slice(0, 50);
    logger.info(
      `Inbound: from=${senderName} text="${textPreview}${contentText.length > 50 ? "..." : ""}"`
    );
    onMessageAccepted?.();
    void handleDingtalkMessage({
      cfg: config,
      raw: rawMessage,
      accountId,
      log: (msg) => logger.info(msg.replace(/^\[dingtalk\]\s*/, "")),
      error: (msg) => logger.error(msg.replace(/^\[dingtalk\]\s*/, "")),
      enableAICard: dingtalkCfg?.enableAICard ?? false
    }).catch((err) => {
      logger.error(`error handling message: ${String(err)}`);
    });
  } catch (err) {
    onParseError?.(err);
    logger.error(`error parsing message: ${String(err)}`);
  }
}
function registerDingtalkBotHandler(params) {
  const dingtalkCfg = params.config ? mergeDingtalkAccountConfig(params.config, params.accountId) : void 0;
  params.client.registerCallbackListener(TOPIC_ROBOT, (payload) => {
    processDingtalkInbound({
      payload,
      client: params.client,
      config: params.config,
      dingtalkCfg,
      accountId: params.accountId,
      logger: params.logger,
      onMessageAccepted: params.onMessageAccepted,
      onDedupeHit: params.onDedupeHit,
      onAckError: params.onAckError,
      onParseError: params.onParseError
    });
  });
}

// src/logger.ts
var PALE_GREEN = "\x1B[38;5;120m";
var RESET = "\x1B[0m";
function colorize(msg) {
  return `${PALE_GREEN}${msg}${RESET}`;
}
function createLogger2(prefix, opts) {
  const log = opts?.log ?? console.log;
  const error = opts?.error ?? console.error;
  return createLogger(prefix, {
    log: (msg) => log(colorize(msg)),
    error: (msg) => error(colorize(msg))
  });
}
createLogger2("dingtalk");

// src/bot-gateway.ts
var WATCHDOG_INTERVAL_MS = 5e3;
var CONNECT_TIMEOUT_MS = 3e4;
var REGISTER_TIMEOUT_MS = 3e4;
var DISCONNECT_GRACE_MS = 15e3;
var RECONNECT_BASE_DELAY_MS = 1e3;
var RECONNECT_MAX_DELAY_MS = 6e4;
var RECONNECT_JITTER_RATIO = 0.2;
var activeConnections = /* @__PURE__ */ new Map();
function getOrCreateConnection(accountId) {
  let conn = activeConnections.get(accountId);
  if (!conn) {
    conn = {
      client: null,
      promise: null,
      stop: null
    };
    activeConnections.set(accountId, conn);
  }
  return conn;
}
function toRecord(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }
  return value;
}
async function ensureGatewayHttpEnabled(params) {
  const { dingtalkCfg, logger } = params;
  if (!dingtalkCfg?.enableAICard) {
    return;
  }
  const home = os.homedir();
  const candidates = [
    path.join(home, ".openclaw", "openclaw.json"),
    path.join(home, ".openclaw", "config.json")
  ];
  for (const filePath of candidates) {
    try {
      await fsPromises.access(filePath);
    } catch {
      continue;
    }
    try {
      const raw = await fsPromises.readFile(filePath, "utf8");
      const cleaned = raw.replace(/^\uFEFF/, "").trim();
      if (!cleaned) {
        continue;
      }
      const cfg = JSON.parse(cleaned);
      const gateway = toRecord(cfg.gateway);
      const http = toRecord(gateway.http);
      const endpoints = toRecord(http.endpoints);
      const chatCompletions = toRecord(endpoints.chatCompletions);
      if (chatCompletions.enabled === true) {
        logger.debug(`[gateway] chatCompletions already enabled in ${filePath}`);
        return;
      }
      chatCompletions.enabled = true;
      endpoints.chatCompletions = chatCompletions;
      http.endpoints = endpoints;
      gateway.http = http;
      cfg.gateway = gateway;
      await fsPromises.writeFile(filePath, `${JSON.stringify(cfg, null, 2)}
`, "utf8");
      logger.info(`[gateway] enabled http.endpoints.chatCompletions in ${filePath}`);
      logger.info("[gateway] restart OpenClaw gateway to apply HTTP endpoint change");
      return;
    } catch (err) {
      logger.warn(`[gateway] failed to update ${filePath}: ${String(err)}`);
    }
  }
  logger.warn("[gateway] openclaw config not found; cannot auto-enable http endpoint");
}
function createGatewayMetrics() {
  return {
    connectedSince: null,
    lastMessageAt: null,
    lastReconnectAt: null,
    reconnectCountTotal: 0,
    ackFailCount: 0,
    dedupeHitCount: 0,
    parseErrorCount: 0,
    reconnectReasonCount: {
      connect_error: 0,
      connect_timeout: 0,
      register_timeout: 0,
      connection_lost: 0,
      session_error: 0
    }
  };
}
function safeDisconnect(client, logger) {
  try {
    client.disconnect();
  } catch (err) {
    logger.warn(`[gateway] disconnect failed: ${String(err)}`);
  }
}
function sleepWithAbort(ms, signal) {
  if (signal.aborted) {
    return Promise.resolve(false);
  }
  return new Promise((resolve3) => {
    const timeoutId = setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve3(true);
    }, ms);
    const onAbort = () => {
      clearTimeout(timeoutId);
      signal.removeEventListener("abort", onAbort);
      resolve3(false);
    };
    signal.addEventListener("abort", onAbort, { once: true });
  });
}
async function raceConnectAttempt(params) {
  let capturedError;
  const connectPromise = params.client.connect().then(
    () => "started",
    (err) => {
      capturedError = err;
      return "error";
    }
  );
  const timeoutPromise = sleepWithAbort(CONNECT_TIMEOUT_MS, params.signal).then(
    (running) => running ? "timeout" : "aborted"
  );
  const winner = await Promise.race([connectPromise, timeoutPromise]);
  if (winner === "error") {
    return { error: capturedError };
  }
  return winner;
}
function transitionState(params) {
  if (params.ref.state === params.next) {
    return;
  }
  const prev = params.ref.state;
  params.ref.state = params.next;
  const suffix = params.reason ? ` reason=${params.reason}` : "";
  params.logger.info(`[gateway] state ${prev} -> ${params.next}${suffix}`);
}
function resolveReconnectDelayMs(attempt, randomValue = Math.random()) {
  const safeAttempt = Math.max(1, attempt);
  const expoBase = RECONNECT_BASE_DELAY_MS * 2 ** (safeAttempt - 1);
  const boundedBase = Math.min(RECONNECT_MAX_DELAY_MS, expoBase);
  const normalizedRandom = Math.min(1, Math.max(0, randomValue));
  const jitter = (normalizedRandom * 2 - 1) * RECONNECT_JITTER_RATIO;
  return Math.max(RECONNECT_BASE_DELAY_MS, Math.round(boundedBase * (1 + jitter)));
}
async function runGatewaySession(params) {
  const { client, config, accountId, logger, signal, metrics, stateRef } = params;
  transitionState({ ref: stateRef, next: "connecting", logger });
  let hasInboundTraffic = false;
  let registrationWarningLogged = false;
  registerDingtalkBotHandler({
    client,
    config,
    accountId,
    logger,
    onMessageAccepted: () => {
      hasInboundTraffic = true;
      metrics.lastMessageAt = Date.now();
    },
    onDedupeHit: () => {
      metrics.dedupeHitCount += 1;
    },
    onAckError: () => {
      metrics.ackFailCount += 1;
    },
    onParseError: () => {
      metrics.parseErrorCount += 1;
    }
  });
  const connectAttempt = await raceConnectAttempt({ client, signal });
  if (connectAttempt === "aborted") {
    return { kind: "stopped" };
  }
  if (connectAttempt === "timeout") {
    logger.warn(`[gateway] connect timeout after ${CONNECT_TIMEOUT_MS}ms`);
    return { kind: "reconnect", reason: "connect_timeout" };
  }
  if (typeof connectAttempt === "object" && "error" in connectAttempt) {
    logger.warn(`[gateway] connect error: ${String(connectAttempt.error)}`);
    return { kind: "reconnect", reason: "connect_error" };
  }
  logger.info("Stream client connect invoked");
  const sessionStartAt = Date.now();
  let firstConnectedAt = null;
  let firstRegisteredAt = null;
  let disconnectedAt = null;
  while (true) {
    if (signal.aborted) {
      return { kind: "stopped" };
    }
    const now = Date.now();
    const connected = client.connected === true;
    const registered = client.registered === true;
    if (connected && firstConnectedAt === null) {
      firstConnectedAt = now;
      transitionState({ ref: stateRef, next: "connected", logger });
      logger.info("[gateway] socket connected");
    }
    if (registered && firstRegisteredAt === null) {
      firstRegisteredAt = now;
      metrics.connectedSince = now;
      transitionState({ ref: stateRef, next: "registered", logger });
      transitionState({ ref: stateRef, next: "running", logger });
      logger.info("[gateway] stream registered");
    }
    if (!connected && firstConnectedAt === null && now - sessionStartAt > CONNECT_TIMEOUT_MS) {
      return { kind: "reconnect", reason: "connect_timeout" };
    }
    if (connected && !registered && now - sessionStartAt > REGISTER_TIMEOUT_MS) {
      if (!registrationWarningLogged) {
        registrationWarningLogged = true;
        logger.warn(
          `[gateway] registration not confirmed after ${REGISTER_TIMEOUT_MS}ms; keep connection alive and continue monitoring`
        );
      }
    }
    if (connected && registered) {
      disconnectedAt = null;
      transitionState({ ref: stateRef, next: "running", logger });
    } else if (connected && hasInboundTraffic) {
      disconnectedAt = null;
      transitionState({
        ref: stateRef,
        next: "running",
        logger,
        reason: "traffic confirmed"
      });
    } else if (connected) {
      transitionState({ ref: stateRef, next: "connected", logger });
    } else if (firstConnectedAt !== null) {
      if (disconnectedAt === null) {
        disconnectedAt = now;
        transitionState({
          ref: stateRef,
          next: "reconnecting",
          logger,
          reason: "connection lost"
        });
      } else if (now - disconnectedAt >= DISCONNECT_GRACE_MS) {
        return { kind: "reconnect", reason: "connection_lost" };
      }
    }
    const keepRunning = await sleepWithAbort(WATCHDOG_INTERVAL_MS, signal);
    if (!keepRunning) {
      return { kind: "stopped" };
    }
  }
}
async function runGatewayLoop(params) {
  const { config, dingtalkCfg, accountId, logger, signal, conn, setStatus } = params;
  const metrics = createGatewayMetrics();
  const stateRef = { state: "idle" };
  let reconnectAttempt = 0;
  while (!signal.aborted) {
    let sessionResult;
    let client;
    try {
      client = createDingtalkClientFromConfig(dingtalkCfg, {
        keepAlive: true,
        autoReconnect: false,
        reuseCache: false
      });
    } catch (err) {
      logger.error(`[gateway] fatal client init error: ${String(err)}`);
      throw err;
    }
    conn.client = client;
    try {
      sessionResult = await runGatewaySession({
        client,
        config,
        accountId,
        logger,
        signal,
        metrics,
        stateRef
      });
    } catch (err) {
      logger.error(`[gateway] fatal session error: ${String(err)}`);
      sessionResult = { kind: "reconnect", reason: "session_error" };
    } finally {
      safeDisconnect(client, logger);
      if (conn.client === client) {
        conn.client = null;
      }
    }
    if (sessionResult.kind === "stopped" || signal.aborted) {
      break;
    }
    reconnectAttempt += 1;
    metrics.reconnectCountTotal += 1;
    metrics.lastReconnectAt = Date.now();
    metrics.reconnectReasonCount[sessionResult.reason] += 1;
    transitionState({
      ref: stateRef,
      next: "reconnecting",
      logger,
      reason: sessionResult.reason
    });
    const delayMs = resolveReconnectDelayMs(reconnectAttempt);
    logger.warn(
      `[gateway] reconnect scheduled in ${delayMs}ms (attempt=${reconnectAttempt}, reason=${sessionResult.reason})`
    );
    setStatus?.({
      accountId,
      state: "reconnecting",
      reconnectAttempt,
      reconnectReason: sessionResult.reason,
      lastReconnectAt: metrics.lastReconnectAt
    });
    const keepRunning = await sleepWithAbort(delayMs, signal);
    if (!keepRunning) {
      break;
    }
  }
  transitionState({ ref: stateRef, next: "stopped", logger, reason: "abort/stop" });
  setStatus?.({
    accountId,
    state: "stopped",
    reconnectCountTotal: metrics.reconnectCountTotal,
    ackFailCount: metrics.ackFailCount,
    dedupeHitCount: metrics.dedupeHitCount,
    parseErrorCount: metrics.parseErrorCount
  });
  logger.info(
    `[gateway] stopped; reconnects=${metrics.reconnectCountTotal} ackFail=${metrics.ackFailCount} dedupeHit=${metrics.dedupeHitCount} parseErr=${metrics.parseErrorCount}`
  );
}
async function monitorDingtalkProvider(opts = {}) {
  const { config, runtime: runtime2, abortSignal, accountId = DEFAULT_ACCOUNT_ID, setStatus } = opts;
  const logger = createLogger2("dingtalk", {
    log: runtime2?.log,
    error: runtime2?.error
  });
  const conn = getOrCreateConnection(accountId);
  if (conn.promise) {
    logger.debug(`existing gateway for account ${accountId} is active, reusing promise`);
    return conn.promise;
  }
  if (!config?.channels?.dingtalk) {
    throw new Error(`DingTalk configuration not found for account ${accountId}`);
  }
  const dingtalkCfg = mergeDingtalkAccountConfig(config, accountId);
  await ensureGatewayHttpEnabled({ dingtalkCfg, logger });
  const stopController = new AbortController();
  const stopSignal = stopController.signal;
  const onAbort = () => {
    stopController.abort();
  };
  if (abortSignal?.aborted) {
    stopController.abort();
  } else {
    abortSignal?.addEventListener("abort", onAbort, { once: true });
  }
  conn.stop = () => {
    logger.info("stop requested, stopping Stream gateway");
    stopController.abort();
  };
  const runPromise = runGatewayLoop({
    config,
    dingtalkCfg,
    accountId,
    logger,
    signal: stopSignal,
    conn,
    setStatus
  }).finally(() => {
    abortSignal?.removeEventListener("abort", onAbort);
    if (conn.promise === runPromise) {
      conn.client = null;
      conn.stop = null;
      conn.promise = null;
      activeConnections.delete(accountId);
    }
  });
  conn.promise = runPromise;
  return runPromise;
}
function stopDingtalkMonitorForAccount(accountId = DEFAULT_ACCOUNT_ID) {
  const conn = activeConnections.get(accountId);
  if (!conn) return;
  if (conn.stop) {
    conn.stop();
    return;
  }
  if (conn.client) {
    const logger = createLogger2("dingtalk");
    safeDisconnect(conn.client, logger);
  }
  activeConnections.delete(accountId);
}

// src/onboarding.ts
function setDingtalkDmPolicy(cfg, dmPolicy2) {
  return {
    ...cfg,
    channels: {
      ...cfg.channels,
      dingtalk: {
        ...cfg.channels?.dingtalk,
        dmPolicy: dmPolicy2
      }
    }
  };
}
function setDingtalkAllowFrom(cfg, allowFrom) {
  return {
    ...cfg,
    channels: {
      ...cfg.channels,
      dingtalk: {
        ...cfg.channels?.dingtalk,
        allowFrom
      }
    }
  };
}
function parseAllowFromInput(raw) {
  return raw.split(/[\n,;]+/g).map((entry) => entry.trim()).filter(Boolean);
}
async function promptDingtalkAllowFrom(params) {
  const existing = params.cfg.channels?.dingtalk?.allowFrom ?? [];
  await params.prompter.note(
    [
      "\u901A\u8FC7 staffId \u6216 unionId \u8BBE\u7F6E\u9489\u9489\u79C1\u804A\u767D\u540D\u5355\u3002",
      "\u4F60\u53EF\u4EE5\u5728\u9489\u9489\u5F00\u653E\u5E73\u53F0\u6216\u901A\u8FC7 API \u83B7\u53D6\u7528\u6237 ID\u3002",
      "\u793A\u4F8B:",
      "- manager1234",
      "- 0123456789012345678"
    ].join("\n"),
    "\u9489\u9489\u767D\u540D\u5355"
  );
  while (true) {
    const entry = await params.prompter.text({
      message: "\u9489\u9489\u767D\u540D\u5355 (\u7528\u6237 ID)",
      placeholder: "user1, user2",
      initialValue: existing[0] ? String(existing[0]) : void 0,
      validate: (value) => String(value ?? "").trim() ? void 0 : "\u5FC5\u586B"
    });
    if (typeof entry === "symbol") {
      return params.cfg;
    }
    const parts = parseAllowFromInput(String(entry));
    if (parts.length === 0) {
      await params.prompter.note("\u8BF7\u81F3\u5C11\u8F93\u5165\u4E00\u4E2A\u7528\u6237 ID\u3002", "\u9489\u9489\u767D\u540D\u5355");
      continue;
    }
    const unique = [
      .../* @__PURE__ */ new Set([...existing.map((v) => String(v).trim()).filter(Boolean), ...parts])
    ];
    return setDingtalkAllowFrom(params.cfg, unique);
  }
}
async function noteDingtalkCredentialHelp(prompter) {
  await prompter.note(
    [
      "1) \u8BBF\u95EE\u9489\u9489\u5F00\u653E\u5E73\u53F0 (open.dingtalk.com)",
      "2) \u521B\u5EFA\u4F01\u4E1A\u5185\u90E8\u5E94\u7528",
      "3) \u5728\u300C\u51ED\u8BC1\u4E0E\u57FA\u7840\u4FE1\u606F\u300D\u9875\u9762\u83B7\u53D6 AppKey \u548C AppSecret",
      "4) \u5728\u300C\u673A\u5668\u4EBA\u4E0E\u6D88\u606F\u63A8\u9001\u300D\u4E2D\u542F\u7528\u673A\u5668\u4EBA\u80FD\u529B",
      "5) \u9009\u62E9\u300CStream \u6A21\u5F0F\u300D\u63A5\u6536\u6D88\u606F",
      "6) \u53D1\u5E03\u5E94\u7528\u6216\u6DFB\u52A0\u5230\u6D4B\u8BD5\u7FA4",
      "",
      "\u63D0\u793A: \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF DINGTALK_CLIENT_ID / DINGTALK_CLIENT_SECRET"
    ].join("\n"),
    "\u9489\u9489\u51ED\u8BC1\u914D\u7F6E"
  );
}
function setDingtalkGroupPolicy(cfg, groupPolicy) {
  return {
    ...cfg,
    channels: {
      ...cfg.channels,
      dingtalk: {
        ...cfg.channels?.dingtalk,
        enabled: true,
        groupPolicy
      }
    }
  };
}
var dmPolicy = {
  label: "DingTalk",
  channel: "dingtalk",
  policyKey: "channels.dingtalk.dmPolicy",
  allowFromKey: "channels.dingtalk.allowFrom",
  getCurrent: (cfg) => cfg.channels?.dingtalk?.dmPolicy ?? "open",
  setPolicy: (cfg, policy) => setDingtalkDmPolicy(cfg, policy),
  promptAllowFrom: promptDingtalkAllowFrom
};
var dingtalkOnboardingAdapter = {
  channel: "dingtalk",
  /**
   * 获取渠道配置状态
   */
  getStatus: async (params) => {
    const accountIds = listDingtalkAccountIds(params.cfg);
    const configuredAccountId = accountIds.find(
      (accountId) => isConfigured(mergeDingtalkAccountConfig(params.cfg, accountId))
    );
    const configured = Boolean(configuredAccountId);
    const defaultAccountId = resolveDefaultDingtalkAccountId(params.cfg);
    const statusLines = [];
    if (!configured) {
      statusLines.push("\u9489\u9489: \u9700\u8981\u914D\u7F6E\u5E94\u7528\u51ED\u8BC1");
    } else {
      statusLines.push(
        configuredAccountId && configuredAccountId !== DEFAULT_ACCOUNT_ID ? `\u9489\u9489: \u5DF2\u914D\u7F6E (${configuredAccountId})` : `\u9489\u9489: \u5DF2\u914D\u7F6E${defaultAccountId !== DEFAULT_ACCOUNT_ID ? ` (default=${defaultAccountId})` : ""}`
      );
    }
    return {
      channel: "dingtalk",
      configured,
      statusLines,
      selectionHint: configured ? "\u5DF2\u914D\u7F6E" : "\u9700\u8981\u5E94\u7528\u51ED\u8BC1",
      quickstartScore: configured ? 2 : 0
    };
  },
  /**
   * 交互式配置向导
   */
  configure: async (params) => {
    const defaultAccountId = resolveDefaultDingtalkAccountId(params.cfg);
    const dingtalkCfg = mergeDingtalkAccountConfig(params.cfg, defaultAccountId);
    const resolved = resolveDingtalkCredentials(dingtalkCfg);
    const hasConfigCreds = Boolean(
      dingtalkCfg?.clientId?.trim() && dingtalkCfg?.clientSecret?.trim()
    );
    const canUseEnv = Boolean(
      !hasConfigCreds && process.env.DINGTALK_CLIENT_ID?.trim() && process.env.DINGTALK_CLIENT_SECRET?.trim()
    );
    let next = params.cfg;
    let clientId = null;
    let clientSecret = null;
    if (!resolved) {
      await noteDingtalkCredentialHelp(params.prompter);
    }
    if (canUseEnv) {
      const keepEnv = await params.prompter.confirm({
        message: "\u68C0\u6D4B\u5230 DINGTALK_CLIENT_ID + DINGTALK_CLIENT_SECRET \u73AF\u5883\u53D8\u91CF\uFF0C\u662F\u5426\u4F7F\u7528\uFF1F",
        initialValue: true
      });
      if (keepEnv) {
        next = {
          ...next,
          channels: {
            ...next.channels,
            dingtalk: { ...next.channels?.dingtalk, enabled: true }
          }
        };
      } else {
        const idResult = await params.prompter.text({
          message: "\u8BF7\u8F93\u5165\u9489\u9489 AppKey (clientId)",
          validate: (value) => value?.trim() ? void 0 : "\u5FC5\u586B"
        });
        if (typeof idResult === "symbol") return { cfg: next, accountId: DEFAULT_ACCOUNT_ID };
        clientId = String(idResult).trim();
        const secretResult = await params.prompter.text({
          message: "\u8BF7\u8F93\u5165\u9489\u9489 AppSecret (clientSecret)",
          validate: (value) => value?.trim() ? void 0 : "\u5FC5\u586B"
        });
        if (typeof secretResult === "symbol") return { cfg: next, accountId: DEFAULT_ACCOUNT_ID };
        clientSecret = String(secretResult).trim();
      }
    } else if (hasConfigCreds) {
      const keep = await params.prompter.confirm({
        message: "\u9489\u9489\u51ED\u8BC1\u5DF2\u914D\u7F6E\uFF0C\u662F\u5426\u4FDD\u7559\uFF1F",
        initialValue: true
      });
      if (!keep) {
        const idResult = await params.prompter.text({
          message: "\u8BF7\u8F93\u5165\u9489\u9489 AppKey (clientId)",
          validate: (value) => value?.trim() ? void 0 : "\u5FC5\u586B"
        });
        if (typeof idResult === "symbol") return { cfg: next, accountId: DEFAULT_ACCOUNT_ID };
        clientId = String(idResult).trim();
        const secretResult = await params.prompter.text({
          message: "\u8BF7\u8F93\u5165\u9489\u9489 AppSecret (clientSecret)",
          validate: (value) => value?.trim() ? void 0 : "\u5FC5\u586B"
        });
        if (typeof secretResult === "symbol") return { cfg: next, accountId: DEFAULT_ACCOUNT_ID };
        clientSecret = String(secretResult).trim();
      }
    } else {
      const idResult = await params.prompter.text({
        message: "\u8BF7\u8F93\u5165\u9489\u9489 AppKey (clientId)",
        validate: (value) => value?.trim() ? void 0 : "\u5FC5\u586B"
      });
      if (typeof idResult === "symbol") return { cfg: next, accountId: DEFAULT_ACCOUNT_ID };
      clientId = String(idResult).trim();
      const secretResult = await params.prompter.text({
        message: "\u8BF7\u8F93\u5165\u9489\u9489 AppSecret (clientSecret)",
        validate: (value) => value?.trim() ? void 0 : "\u5FC5\u586B"
      });
      if (typeof secretResult === "symbol") return { cfg: next, accountId: DEFAULT_ACCOUNT_ID };
      clientSecret = String(secretResult).trim();
    }
    if (clientId && clientSecret) {
      next = {
        ...next,
        channels: {
          ...next.channels,
          dingtalk: {
            ...next.channels?.dingtalk,
            enabled: true,
            clientId,
            clientSecret
          }
        }
      };
    }
    const enableAICard = await params.prompter.confirm({
      message: "\u662F\u5426\u542F\u7528 AI Card \u6D41\u5F0F\u54CD\u5E94\uFF1F\uFF08\u76F4\u63A5\u56DE\u8F66\u4F7F\u7528\u63A8\u8350\u503C\uFF09",
      initialValue: false
    });
    next = {
      ...next,
      channels: {
        ...next.channels,
        dingtalk: {
          ...next.channels?.dingtalk,
          enableAICard
        }
      }
    };
    const groupPolicyResult = await params.prompter.select({
      message: "\u7FA4\u804A\u7B56\u7565\uFF08\u76F4\u63A5\u56DE\u8F66\u4F7F\u7528\u9ED8\u8BA4\u503C\u300C\u5F00\u653E\u300D\uFF09",
      options: [
        { value: "open", label: "\u5F00\u653E - \u54CD\u5E94\u6240\u6709\u7FA4\u804A\uFF08\u9700\u8981 @\u673A\u5668\u4EBA\uFF09\u3010\u63A8\u8350\u3011" },
        { value: "allowlist", label: "\u767D\u540D\u5355 - \u4EC5\u54CD\u5E94\u6307\u5B9A\u7FA4\u804A" },
        { value: "disabled", label: "\u7981\u7528 - \u4E0D\u54CD\u5E94\u7FA4\u804A" }
      ],
      initialValue: next.channels?.dingtalk?.groupPolicy ?? "open"
    });
    if (typeof groupPolicyResult !== "symbol") {
      next = setDingtalkGroupPolicy(next, groupPolicyResult);
    }
    return { cfg: next, accountId: DEFAULT_ACCOUNT_ID };
  },
  dmPolicy,
  /**
   * 禁用渠道
   */
  disable: (cfg) => ({
    ...cfg,
    channels: {
      ...cfg.channels,
      dingtalk: { ...cfg.channels?.dingtalk, enabled: false }
    }
  })
};

// src/channel.ts
var meta = {
  id: "dingtalk",
  label: "DingTalk",
  selectionLabel: "DingTalk (\u9489\u9489)",
  docsPath: "/channels/dingtalk",
  docsLabel: "dingtalk",
  blurb: "\u9489\u9489\u4F01\u4E1A\u6D88\u606F",
  aliases: ["ding"],
  order: 71
};
function resolveDingtalkAccount(params) {
  const { cfg } = params;
  const accountId = resolveDingtalkAccountId(cfg, params.accountId);
  const merged = mergeDingtalkAccountConfig(cfg, accountId);
  const baseEnabled = cfg.channels?.dingtalk?.enabled !== false;
  const enabled = baseEnabled && merged.enabled !== false;
  const credentials = resolveDingtalkCredentials(merged);
  const configured = Boolean(credentials);
  return {
    accountId,
    enabled,
    configured,
    clientId: credentials?.clientId
  };
}
function canStoreDefaultAccountInAccounts(cfg) {
  return Boolean(cfg.channels?.dingtalk?.accounts?.[DEFAULT_ACCOUNT_ID]);
}
function resolveRuntimeCandidate(params) {
  const runtimeRecord = params.runtime && typeof params.runtime === "object" ? params.runtime : void 0;
  const runtimeChannel = runtimeRecord?.channel && typeof runtimeRecord.channel === "object" ? runtimeRecord.channel : void 0;
  const channelRuntime = params.channelRuntime && typeof params.channelRuntime === "object" ? params.channelRuntime : void 0;
  const resolvedChannel = channelRuntime ?? (runtimeChannel?.routing || runtimeChannel?.reply || runtimeChannel?.session || runtimeChannel?.text ? runtimeChannel : void 0);
  if (!resolvedChannel) {
    return runtimeRecord;
  }
  return {
    ...runtimeRecord ?? {},
    channel: resolvedChannel
  };
}
var dingtalkPlugin = {
  id: "dingtalk",
  /**
   * 渠道元数据
   * Requirements: 1.2
   */
  meta: {
    ...meta
  },
  /**
   * 渠道能力声明
   * Requirements: 1.3
   */
  capabilities: {
    chatTypes: ["direct", "channel"],
    media: true,
    reactions: false,
    threads: false,
    edit: false,
    reply: true,
    polls: false,
    blockStreaming: false
  },
  /**
   * 配置 Schema
   * Requirements: 1.4
   */
  configSchema: {
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        enabled: { type: "boolean" },
        name: { type: "string" },
        defaultAccount: { type: "string" },
        clientId: { type: "string" },
        clientSecret: { type: "string" },
        connectionMode: { type: "string", enum: ["stream", "webhook"] },
        dmPolicy: { type: "string", enum: ["open", "pairing", "allowlist"] },
        groupPolicy: { type: "string", enum: ["open", "allowlist", "disabled"] },
        requireMention: { type: "boolean" },
        allowFrom: { type: "array", items: { type: "string" } },
        groupAllowFrom: { type: "array", items: { type: "string" } },
        historyLimit: { type: "integer", minimum: 0 },
        textChunkLimit: { type: "integer", minimum: 1 },
        longTaskNoticeDelayMs: { type: "integer", minimum: 0 },
        enableAICard: { type: "boolean" },
        gatewayToken: { type: "string" },
        gatewayPassword: { type: "string" },
        maxFileSizeMB: { type: "number", minimum: 0 },
        inboundMedia: {
          type: "object",
          additionalProperties: false,
          properties: {
            dir: { type: "string" },
            keepDays: { type: "number", minimum: 0 }
          }
        },
        accounts: {
          type: "object",
          additionalProperties: {
            type: "object",
            additionalProperties: false,
            properties: {
              name: { type: "string" },
              enabled: { type: "boolean" },
              clientId: { type: "string" },
              clientSecret: { type: "string" },
              connectionMode: { type: "string", enum: ["stream", "webhook"] },
              dmPolicy: { type: "string", enum: ["open", "pairing", "allowlist"] },
              groupPolicy: { type: "string", enum: ["open", "allowlist", "disabled"] },
              requireMention: { type: "boolean" },
              allowFrom: { type: "array", items: { type: "string" } },
              groupAllowFrom: { type: "array", items: { type: "string" } },
              historyLimit: { type: "integer", minimum: 0 },
              textChunkLimit: { type: "integer", minimum: 1 },
              longTaskNoticeDelayMs: { type: "integer", minimum: 0 },
              enableAICard: { type: "boolean" },
              gatewayToken: { type: "string" },
              gatewayPassword: { type: "string" },
              maxFileSizeMB: { type: "number", minimum: 0 },
              inboundMedia: {
                type: "object",
                additionalProperties: false,
                properties: {
                  dir: { type: "string" },
                  keepDays: { type: "number", minimum: 0 }
                }
              }
            }
          }
        }
      }
    }
  },
  /**
   * 配置重载触发器
   */
  reload: { configPrefixes: ["channels.dingtalk"] },
  /**
   * 账户配置适配器
   * Requirements: 2.1, 2.2, 2.3
   */
  config: {
    /**
     * 列出所有账户 ID
     * Requirements: 2.1
     */
    listAccountIds: (cfg) => listDingtalkAccountIds(cfg),
    /**
     * 解析账户配置
     * Requirements: 2.2
     */
    resolveAccount: (cfg, accountId) => resolveDingtalkAccount({ cfg, accountId }),
    /**
     * 获取默认账户 ID
     */
    defaultAccountId: (cfg) => resolveDefaultDingtalkAccountId(cfg),
    /**
     * 设置账户启用状态
     */
    setAccountEnabled: (params) => {
      const accountId = resolveDingtalkAccountId(params.cfg, params.accountId);
      const seededCfg = moveDingtalkSingleAccountConfigToDefaultAccount(params.cfg);
      const existing = seededCfg.channels?.dingtalk ?? {};
      if (accountId === DEFAULT_ACCOUNT_ID && !canStoreDefaultAccountInAccounts(seededCfg)) {
        return {
          ...seededCfg,
          channels: {
            ...seededCfg.channels,
            dingtalk: {
              ...existing,
              enabled: params.enabled
            }
          }
        };
      }
      const accounts = existing.accounts ?? {};
      const account = accounts[accountId] ?? {};
      return {
        ...seededCfg,
        channels: {
          ...seededCfg.channels,
          dingtalk: {
            ...existing,
            accounts: {
              ...accounts,
              [accountId]: { ...account, enabled: params.enabled }
            }
          }
        }
      };
    },
    /**
     * 删除账户配置
     */
    deleteAccount: (params) => {
      const accountId = resolveDingtalkAccountId(params.cfg, params.accountId);
      const seededCfg = moveDingtalkSingleAccountConfigToDefaultAccount(params.cfg);
      const existing = seededCfg.channels?.dingtalk;
      if (!existing) return seededCfg;
      const accounts = existing.accounts ?? {};
      if (!accounts[accountId]) {
        if (accountId === DEFAULT_ACCOUNT_ID && Object.keys(accounts).length === 0 && !canStoreDefaultAccountInAccounts(seededCfg)) {
          const next = { ...seededCfg };
          const nextChannels = { ...seededCfg.channels };
          delete nextChannels.dingtalk;
          if (Object.keys(nextChannels).length > 0) {
            next.channels = nextChannels;
          } else {
            delete next.channels;
          }
          return next;
        }
        return seededCfg;
      }
      const { [accountId]: _removed, ...remainingAccounts } = accounts;
      const remainingIds = Object.keys(remainingAccounts).sort((a, b) => a.localeCompare(b));
      const preferred = existing.defaultAccount?.trim();
      let nextDefaultAccount = preferred;
      if (preferred && !remainingAccounts[preferred]) {
        nextDefaultAccount = remainingIds.includes(DEFAULT_ACCOUNT_ID) ? DEFAULT_ACCOUNT_ID : remainingIds[0] ?? "";
      }
      const nextChannel = {
        ...existing,
        accounts: remainingIds.length > 0 ? remainingAccounts : void 0,
        defaultAccount: nextDefaultAccount || void 0
      };
      const hasNonTrivialRootConfig = Object.entries(nextChannel).some(
        ([key, value]) => key !== "enabled" && key !== "accounts" && key !== "defaultAccount" && value !== void 0
      );
      if (remainingIds.length === 0 && !hasNonTrivialRootConfig) {
        const next = { ...seededCfg };
        const nextChannels = { ...seededCfg.channels };
        delete nextChannels.dingtalk;
        if (Object.keys(nextChannels).length > 0) {
          next.channels = nextChannels;
        } else {
          delete next.channels;
        }
        return next;
      }
      return {
        ...seededCfg,
        channels: {
          ...seededCfg.channels,
          dingtalk: nextChannel
        }
      };
    },
    /**
     * 检查账户是否已配置
     * Requirements: 2.3
     */
    isConfigured: (_account, cfg, accountId) => {
      const id = accountId ?? _account.accountId;
      const merged = mergeDingtalkAccountConfig(cfg, id);
      return Boolean(merged.clientId && merged.clientSecret);
    },
    /**
     * 描述账户信息
     */
    describeAccount: (account) => ({
      accountId: account.accountId,
      enabled: account.enabled,
      configured: account.configured
    }),
    /**
     * 解析白名单
     */
    resolveAllowFrom: (params) => {
      const accountId = resolveDingtalkAccountId(params.cfg, params.accountId);
      const merged = mergeDingtalkAccountConfig(params.cfg, accountId);
      return merged.allowFrom ?? [];
    },
    /**
     * 格式化白名单条目
     */
    formatAllowFrom: (params) => params.allowFrom.map((entry) => String(entry).trim()).filter(Boolean).map((entry) => entry.toLowerCase())
  },
  /**
   * 安全警告收集器
   */
  security: {
    collectWarnings: (params) => {
      const dingtalkCfg = params.cfg.channels?.dingtalk;
      const groupPolicy = dingtalkCfg?.groupPolicy ?? "allowlist";
      if (groupPolicy !== "open") return [];
      return [
        `- DingTalk groups: groupPolicy="open" allows any member to trigger (mention-gated). Set channels.dingtalk.groupPolicy="allowlist" + channels.dingtalk.groupAllowFrom to restrict senders.`
      ];
    }
  },
  /**
   * 设置向导适配器
   */
  setup: {
    resolveAccountId: (params) => resolveDingtalkAccountId(params.cfg, params.accountId),
    applyAccountConfig: (params) => {
      const accountId = resolveDingtalkAccountId(params.cfg, params.accountId);
      const seededCfg = moveDingtalkSingleAccountConfigToDefaultAccount(params.cfg);
      const existing = seededCfg.channels?.dingtalk ?? {};
      if (accountId === DEFAULT_ACCOUNT_ID && !canStoreDefaultAccountInAccounts(seededCfg)) {
        return {
          ...seededCfg,
          channels: {
            ...seededCfg.channels,
            dingtalk: {
              ...existing,
              ...params.config,
              enabled: true
            }
          }
        };
      }
      const accounts = existing.accounts ?? {};
      return {
        ...seededCfg,
        channels: {
          ...seededCfg.channels,
          dingtalk: {
            ...existing,
            enabled: true,
            accounts: {
              ...accounts,
              [accountId]: {
                ...accounts[accountId],
                ...params.config,
                enabled: true
              }
            }
          }
        }
      };
    }
  },
  /**
   * Onboarding 适配器
   */
  onboarding: dingtalkOnboardingAdapter,
  /**
   * 出站消息适配器
   * Requirements: 7.1, 7.6
   */
  outbound: dingtalkOutbound,
  /**
   * Gateway 连接管理适配器
   * Requirements: 3.1
   */
  gateway: {
    /**
     * 启动账户连接
     * Requirements: 3.1
     */
    startAccount: async (ctx) => {
      ctx.setStatus?.({ accountId: ctx.accountId });
      ctx.log?.info(`[dingtalk] starting provider for account ${ctx.accountId}`);
      const runtimeCandidate = resolveRuntimeCandidate({
        runtime: ctx.runtime,
        channelRuntime: ctx.channelRuntime
      });
      const candidate = runtimeCandidate;
      if (candidate?.channel?.routing?.resolveAgentRoute && candidate.channel?.reply?.dispatchReplyFromConfig) {
        setDingtalkRuntime(runtimeCandidate);
      }
      return monitorDingtalkProvider({
        config: ctx.cfg,
        runtime: ctx.runtime ?? {
          log: ctx.log?.info ?? console.log,
          error: ctx.log?.error ?? console.error
        },
        abortSignal: ctx.abortSignal,
        accountId: ctx.accountId,
        setStatus: ctx.setStatus
      });
    },
    stopAccount: async (ctx) => {
      stopDingtalkMonitorForAccount(ctx.accountId);
    },
    getStatus: () => ({ connected: true })
  }
};

// index.ts
var plugin = {
  id: "dingtalk",
  name: "DingTalk",
  description: "\u9489\u9489\u6D88\u606F\u6E20\u9053\u63D2\u4EF6",
  configSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      enabled: { type: "boolean" },
      name: { type: "string" },
      defaultAccount: { type: "string" },
      clientId: { type: "string" },
      clientSecret: { type: "string" },
      dmPolicy: { type: "string", enum: ["open", "pairing", "allowlist"] },
      groupPolicy: { type: "string", enum: ["open", "allowlist", "disabled"] },
      requireMention: { type: "boolean" },
      allowFrom: { type: "array", items: { type: "string" } },
      groupAllowFrom: { type: "array", items: { type: "string" } },
      historyLimit: { type: "integer", minimum: 0 },
      textChunkLimit: { type: "integer", minimum: 1 },
      longTaskNoticeDelayMs: { type: "integer", minimum: 0 },
      connectionMode: { type: "string", enum: ["stream", "webhook"] },
      enableAICard: { type: "boolean" },
      gatewayToken: { type: "string" },
      gatewayPassword: { type: "string" },
      maxFileSizeMB: { type: "number", minimum: 1 },
      inboundMedia: {
        type: "object",
        additionalProperties: false,
        properties: {
          dir: { type: "string" },
          keepDays: { type: "number", minimum: 0 }
        }
      },
      accounts: {
        type: "object",
        additionalProperties: {
          type: "object",
          additionalProperties: false,
          properties: {
            name: { type: "string" },
            enabled: { type: "boolean" },
            clientId: { type: "string" },
            clientSecret: { type: "string" },
            dmPolicy: { type: "string", enum: ["open", "pairing", "allowlist"] },
            groupPolicy: { type: "string", enum: ["open", "allowlist", "disabled"] },
            requireMention: { type: "boolean" },
            allowFrom: { type: "array", items: { type: "string" } },
            groupAllowFrom: { type: "array", items: { type: "string" } },
            historyLimit: { type: "integer", minimum: 0 },
            textChunkLimit: { type: "integer", minimum: 1 },
            longTaskNoticeDelayMs: { type: "integer", minimum: 0 },
            connectionMode: { type: "string", enum: ["stream", "webhook"] },
            enableAICard: { type: "boolean" },
            gatewayToken: { type: "string" },
            gatewayPassword: { type: "string" },
            maxFileSizeMB: { type: "number", minimum: 1 },
            inboundMedia: {
              type: "object",
              additionalProperties: false,
              properties: {
                dir: { type: "string" },
                keepDays: { type: "number", minimum: 0 }
              }
            }
          }
        }
      }
    }
  },
  /**
   * 注册钉钉渠道插件
   *
   * 1. 设置完整的 Moltbot 运行时（包含 core API）
   * 2. 调用 api.registerChannel 将 dingtalkPlugin 注册到 Moltbot
   *
   * Requirements: 1.1
   */
  register(api) {
    registerChinaSetupCli(api, { channels: ["dingtalk"] });
    showChinaInstallHint(api);
    if (api.runtime) {
      setDingtalkRuntime(api.runtime);
    }
    api.registerChannel({ plugin: dingtalkPlugin });
  }
};
var index_default = plugin;

export { DEFAULT_ACCOUNT_ID, index_default as default, dingtalkPlugin, getDingtalkRuntime, sendMessageDingtalk, setDingtalkRuntime };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map