"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var argparse_1 = require("argparse");
var pjson_1 = require("pjson");
var parser = new argparse_1.ArgumentParser({
    version: pjson_1.version,
    prog: pjson_1.name,
    description: pjson_1.description
});
parser.addArgument(['-c', '--compiler'], {
    help: "Select compiler to render with (default: remarkable).",
    defaultValue: 'remarkable'
});
parser.addArgument(['-m', '--math-engine'], {
    help: "Sets math engine (default: KeTeX).",
    defaultValue: "KeTeX"
});
console.log(parser.parseArgs());
