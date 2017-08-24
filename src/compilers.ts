import * as mume from "@shd101wyy/mume";

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
        }
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