  
  
# `mume-cli`: A CLI that compiles your enhanced Markdown
  
  
## Preface
  
  
### What is `mume`?
  
  
`mume` is an enhanced Markdown framework that allows you to include working code snippets, generate images and charts on the fly, and import other pieces of data into your Markdown file, making it one of the fastest way to create rich text documents.  
The framework allows exporting directly to PDF, to HTML, Office documents (Microsoft Office or LibreOffice), and even back to (standard and less-enhanced) Markdown files. As an example, this README file has been generated from a `mume`-enhanced framework.
  
### Why such a program?
  
  
There exists extensions powered by `mume` for VS Code and Atom that superpowers Markdown preview. I wanted to make a more general version of it available to everyone, because not everyone uses VS Code nor Atom (or any Electron-based editor, for the technophobes among us). For example, I plan not to use VS Code for note-taking during my engineering classes and rather use Vim - but Vim doesn't have such an extension, and I'd have to fire VS Code just to generate PDF compiled versions of my notes or reports.
  
## Using `mume-cli`
  
  
Warning: This will be subject to change.
  
### Content of the help page
  
  

<pre class="language-text">usage: mume-cli [-h] [-v] [-c COMPILER] [-m MATH_ENGINE]

A CLI that packages mume - allowing you to process your Markdown-enhanced 
files from any editor.

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -c COMPILER, --compiler COMPILER
                        Select compiler to render with (default: remarkable).
  -m MATH_ENGINE, --math-engine MATH_ENGINE
                        Sets math engine (default: KeTeX).
</pre>
  