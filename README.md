  
  
# `mume-cli`: A CLI that compiles your enhanced Markdown
  
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e2ccea841a4647a9bf46dfcddf4dc438 )](https://www.codacy.com/app/solarliner/mume-cli?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SolarLiner/mume-cli&amp;utm_campaign=Badge_Grade)
  
  
* [`mume-cli`: A CLI that compiles your enhanced Markdown](#mume-cli-a-cli-that-compiles-your-enhanced-markdown )
	* [Preface](#preface )
		* [What is `mume`?](#what-is-mume )
		* [Why such a program?](#why-such-a-program )
	* [Using `mume-cli`](#using-mume-cli )
		* [Content of the help page](#content-of-the-help-page )
	* [Project roadmap](#project-roadmap )
  
## Preface
  
  
### What is `mume`?
  
  
`mume` is an enhanced Markdown framework that allows you to include working code snippets, generate images and charts on the fly, and import other pieces of data into your Markdown file, making it one of the fastest way to create rich text documents.  
The framework allows exporting directly to PDF, to HTML, Office documents (Microsoft Office or LibreOffice), and even back to (standard and less-enhanced) Markdown files. As an example, this README file has been generated from a `mume`-enhanced framework.
  
### Why such a program?
  
  
There exists extensions powered by `mume` for VS Code and Atom that superpowers Markdown preview. I wanted to make a more general version of it available to everyone, because not everyone uses VS Code nor Atom (or any Electron-based editor, for the technophobes among us). For example, I plan not to use VS Code for note-taking during my engineering classes and rather use Vim - but Vim doesn't have such an extension, and I'd have to fire VS Code just to generate PDF compiled versions of my notes or reports.
  
## Using `mume-cli`
  
  
Warning: This will be subject to change.
  
### Content of the help page
  
  
  
## Project roadmap
  
  
```todo
Implementing CLI:
    ☐ Populating arguments
    ☐ Linking arguments to internal modules
  
Implementing compilers:
    ☐ Use default settings
    ☐ Implement overrides (links to arguments)
        ☐ Pandoc
        ☐ Remarkable
        ☐ LaTeX
```  
  