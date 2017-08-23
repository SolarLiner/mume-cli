import { ArgumentParser } from "argparse";
import * as pjson from "pjson";


let parser = new ArgumentParser({
    version: pjson.version,
    prog: pjson.name,
    description: pjson.description
});

parser.addArgument(['-c', '--compiler'], {
    help: "Select compiler to render with (default: html).",
    defaultValue: 'html'
});
parser.addArgument(['-m', '--math-engine'], {
    help: "Sets math engine (default: KeTeX).",
    defaultValue: "KeTeX"
});
parser.addArgument(['--project-dir-path'], {
    help: "Sets the project directory root (default: current directory)",
    defaultValue: process.cwd()
});
parser.addArgument(['file'], {
    metavar: 'FILE',
    nargs: '+',
    help: 'File(s) to convert.'
});

let args = parser.parseArgs();
