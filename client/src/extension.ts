import { languages } from 'vscode';

export function activate() {
languages.registerCompletionItemProvider([{ language: 'typescript'}], {
		provideCompletionItems: () => {
			return null;
		}
	}, '\n')
}
