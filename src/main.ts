import { ArgumentParser } from "argparse";
import { name, version, description } from "pjson";

let parser = new ArgumentParser({
    version: version,
    prog: name,
    description: description
});

parser.addArgument(['-c', '--compiler'], {
    help: "Select compiler to render with (default: remarkable).",
    defaultValue: 'remarkable'
});
parser.addArgument(['-m', '--math-engine'], {
    help: "Sets math engine (default: KeTeX).",
    defaultValue: "KeTeX"
});
parser.addArgument(['file'], {
    metavar: 'FILE',
    nargs: '+',
    help: 'File(s) to convert.'
})

console.log(parser.parseArgs());