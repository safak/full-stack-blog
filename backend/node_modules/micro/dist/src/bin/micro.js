#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require("module"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const arg_1 = __importDefault(require("arg"));
const lib_1 = require("../lib");
const handler_1 = require("../lib/handler");
const package_json_1 = require("../../package.json");
const error_1 = require("../lib/error");
const parse_endpoint_1 = require("../lib/parse-endpoint");
const args = (0, arg_1.default)({
    '--listen': parse_endpoint_1.parseEndpoint,
    '-l': '--listen',
    '--help': Boolean,
    '--version': Boolean,
    '-v': '--version',
});
if (args['--help']) {
    console.error(`
  micro - Asynchronous HTTP microservices

  USAGE

      $ micro --help
      $ micro --version
      $ micro [-l listen_uri [-l ...]] [entry_point.js]

      By default micro will listen on 0.0.0.0:3000 and will look first
      for the "main" property in package.json and subsequently for index.js
      as the default entry_point.

      Specifying a single --listen argument will overwrite the default, not supplement it.

  OPTIONS

      --help                              shows this help message

      -v, --version                       displays the current version of micro

      -l, --listen listen_uri             specify a URI endpoint on which to listen (see below) -
                                          more than one may be specified to listen in multiple places

  ENDPOINTS

      Listen endpoints (specified by the --listen or -l options above) instruct micro
      to listen on one or more interfaces/ports, UNIX domain sockets, or Windows named pipes.

      For TCP (traditional host/port) endpoints:

          $ micro -l tcp://hostname:1234

      For UNIX domain socket endpoints:

          $ micro -l unix:/path/to/socket.sock

      For Windows named pipe endpoints:

          $ micro -l pipe:\\\\.\\pipe\\PipeName
`);
    process.exit(2);
}
if (args['--version']) {
    console.log(package_json_1.version);
    process.exit();
}
if (!args['--listen']) {
    args['--listen'] = [String(3000)];
}
let file = args._[0];
if (!file) {
    try {
        const req = module_1.default.createRequire(module.filename);
        const packageJson = req(path_1.default.resolve(process.cwd(), 'package.json'));
        if (hasMain(packageJson)) {
            file = packageJson.main;
        }
        else {
            file = 'index.js';
        }
    }
    catch (err) {
        if (isNodeError(err) && err.code !== 'MODULE_NOT_FOUND') {
            (0, error_1.logError)(`Could not read \`package.json\`: ${err.message}`, 'invalid-package-json');
            process.exit(1);
        }
    }
}
if (!file) {
    (0, error_1.logError)('Please supply a file!', 'path-missing');
    process.exit(1);
}
if (!file.startsWith('/')) {
    file = path_1.default.resolve(process.cwd(), file);
}
if (!(0, fs_1.existsSync)(file)) {
    (0, error_1.logError)(`The file or directory "${path_1.default.basename(file)}" doesn't exist!`, 'path-not-existent');
    process.exit(1);
}
function registerShutdown(fn) {
    let run = false;
    const wrapper = () => {
        if (!run) {
            run = true;
            fn();
        }
    };
    process.on('SIGINT', wrapper);
    process.on('SIGTERM', wrapper);
    process.on('exit', wrapper);
}
function startEndpoint(module, endpoint) {
    const server = new http_1.default.Server((0, lib_1.serve)(module));
    server.on('error', (err) => {
        console.error('micro:', err.stack);
        process.exit(1);
    });
    server.listen(endpoint, () => {
        const details = server.address();
        registerShutdown(() => {
            console.log('micro: Gracefully shutting down. Please wait...');
            server.close();
            process.exit();
        });
        if (typeof details === 'string') {
            console.log(`micro: Accepting connections on ${details}`);
        }
        else if (isAddressInfo(details)) {
            console.log(`micro: Accepting connections on port ${details.port}`);
        }
        else {
            console.log('micro: Accepting connections');
        }
    });
}
async function start() {
    if (file && args['--listen']) {
        const loadedModule = await (0, handler_1.handle)(file);
        for (const endpoint of args['--listen']) {
            startEndpoint(loadedModule, endpoint);
        }
    }
}
start()
    .then()
    .catch((error) => {
    if (error instanceof Error) {
        (0, error_1.logError)(error.message, 'STARTUP_FAILURE');
    }
    process.exit(1);
});
function hasMain(packageJson) {
    return (typeof packageJson === 'object' &&
        packageJson !== null &&
        'main' in packageJson);
}
function isNodeError(error) {
    return error instanceof Error && 'code' in error;
}
function isAddressInfo(obj) {
    return 'port' in obj;
}
