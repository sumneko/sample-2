import * as vscode from 'vscode';

vscode.languages.registerHoverProvider('lua', {
	provideHover() {
		return new vscode.Hover(markupContent)
	}
})

const markupContent = new vscode.MarkdownString('[Hello World](command:extension.helloWorld)')
markupContent.isTrusted = true;
