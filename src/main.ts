import { ArgumentParser } from "argparse";
import { MarkdownCompiler } from "./compilers";
import * as pjson from "pjson";


let parser = new ArgumentParser({
    version: pjson.version,
    prog: pjson.name,
    description: pjson.description
});

parser.addArgument(['-r', '--render'], {
    help: "Format(s) to render (default: html).",
    nargs: '+',
    defaultValue: 'html'
});
parser.addArgument(['-m', '--math-engine'], {
    help: "Sets math engine (default: KeTeX). WARNING: Unimplemented.",
    defaultValue: "KeTeX"
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


let compiler = new MarkdownCompiler(args.projectDirPath, {}, args.compiler);
compiler.htmlExportConfig = {
    runAllCodeChunks: true,
    offline: true
}
compiler.pandocExportConfig = {
    runAllCodeChecks: true,
    openFileAfterGeneration: false
}

compiler.compile(args.files);
