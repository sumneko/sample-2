import * as vscode from 'vscode';

vscode.commands.registerCommand("extension.helloWorld", () => {
	console.log("test1")
})
vscode.commands.registerCommand("helloWorld", () => {
	console.log("test2")
})

vscode.languages.registerHoverProvider('lua', {
	provideHover() {
		return new vscode.Hover(markupContent)
	}
})

const markupContent = new vscode.MarkdownString('[Hello World](command:extension.helloWorld)')
markupContent.isTrusted = true;
