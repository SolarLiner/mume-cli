import { ArgumentParser } from "argparse";
import { MarkdownCompiler } from "./compilers";
import * as pjson from "pjson";
import * as process from "process";


let parser = new ArgumentParser({
    version: pjson.version,
    prog: pjson.name,
    description: pjson.description
});

parser.addArgument(['-r', '--renderers'], {
    help: "Format(s) to render (default: markdown).",
    nargs: '+',
    defaultValue: 'markdown'
});
parser.addArgument(['--project-dir-path'], {
    help: "Sets the project directory root (default: current directory)",
    defaultValue: process.cwd()
});
parser.addArgument(['files'], {
    metavar: 'FILE',
    nargs: '+',
    help: 'File(s) to convert.'
});

let args = parser.parseArgs();


let compiler = new MarkdownCompiler(args.projectDirPath, {});

compiler.compile(args.files, args.renderers);
