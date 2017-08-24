import * as mume from "@shd101wyy/mume";
import * as yaml from "yamljs";
import * as fs from "fs";

interface MumeCliFrontMatter {
    html?: boolean;
    phantomjs?: {
        pdf?: boolean;
        png?: boolean;
        jpg?: boolean;
    };
    ebook?: {
        html?: boolean;
        pdf?: boolean;
        epub?: boolean;
    };
    markdown?: boolean;
    options: {
        [prop:string]: any;
    }
}

export class MarkdownCompiler {
    htmlExportConfig: {
        runAllCodeChunks: boolean,
        offline: boolean
    }
    pandocExportConfig: {
        openFileAfterGeneration: boolean,
        runAllCodeChecks: boolean
    }

    constructor(public projectDir?: string, public config?: mume.MarkdownEngineConfig) {
        mume.init()
            .catch((err) => {
                throw err;
            });
    };

    private compile_single(file: string, engine: mume.MarkdownEngine, renderer: string): Promise<string> {
        switch (renderer) {
            case "html":
            default:
                return engine.htmlExport(this.htmlExportConfig);

            case "pandoc":
                return engine.pandocExport(this.pandocExportConfig);

            case "all":
                const regex = /---((.|\r?\n)*)---/gmi;
                fs.readFile(file, (err: NodeJS.ErrnoException, data: Buffer) => {
                    // tslint:disable-next-line:curly
                    if(err) {
                        console.log(`ERR: ${err.errno} - ${err.name}: ${err.message}`);
                        throw err;
                    }

                    let markdownFile = data.toString();
                    let matches = regex.exec(markdownFile);
                    let cliMatter: MumeCliFrontMatter = yaml.parse(matches[1]);

                    let promise: Promise<string>;
                    if(cliMatter.ebook)
                        promise = this.compile_single(file, engine, 'epub');
                    if(cliMatter.html)
                        promise = this.compile_single(file, engine, 'html');
                    if(cliMatter.markdown)
                        promise = this.compile_single(file, engine, 'md');
                    if(cliMatter.phantomjs) {
                        if(cliMatter.phantomjs.jpg)
                            promise = this.compile_single(file, engine, 'pjs-jpg');
                        if(cliMatter.phantomjs.pdf)
                            promise = this.compile_single(file, engine, 'pjs-pdf');
                        if(cliMatter.phantomjs.png)
                            promise = this.compile_single(file, engine, 'pjs-png');
                    }
                });
                break;
        }

        return new Promise<string>((resolve, reject) => {
            reject(new Error('This code should not be reached'));
        })
    }

    public compile(files: string[], renderers: string[]) {
        files.forEach((file) => {
            let engine = new mume.MarkdownEngine({
                filePath: file,
                config: this.config || undefined,
                projectDirectoryPath: this.projectDir
            });
            console.log(`Exporting ${file}...`);

            renderers.forEach((renderer) => {
                this.compile_single(file, engine, renderer).then((value: string) => {
                    console.log(` - ${renderer} -> ${file}\n\t${value}`);
                }, (reason: any) => {
                    console.log(`- ${renderer} error: ${reason}`);
                });
            });
        });
    }
}
