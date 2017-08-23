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
    
    constructor(public projectDir?: string, public config?: mume.MarkdownEngineConfig, public compiler?: string) {
        mume.init()
        .catch((err) => {
            throw err;
        });
    };

    private compile_single(file: string, engine: mume.MarkdownEngine): Promise<string> {
        switch (this.compiler) {
            case "html":
            default:
                return engine.htmlExport(this.htmlExportConfig);

            case "pandoc":
                return engine.pandocExport(this.pandocExportConfig);
        }
    }

    public compile(files: string[]) {
        files.forEach((value) => {
            let engine = new mume.MarkdownEngine({
                filePath: value,
                config: this.config || undefined,
                projectDirectoryPath: this.projectDir
            });
            console.log(`Exporting ${value}...`);

            this.compile_single(value, engine).then((value: string) => {
                console.log("Done. "+value);
            }, (reason: any) => {
                console.log("Error: Couldn't process file: "+reason);
            });
        });
    }
}