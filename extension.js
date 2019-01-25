// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "ap-utils-title" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.apImage', function () {
        var editor = vscode.window.activeTextEditor;       

        if (!editor.apImageIdx)
            editor.apImageIdx = 1;

        var newName = editor.document.fileName.replace(/.txt$/, '').replace(/^.*content/, '/images') + "_" + editor.apImageIdx + ".jpg\">";
        //vscode.window.showInformationMessage('Image index '+editor.apImageIdx+newName);

        editor.edit(function (eb) {
            eb.insert(editor.selection.active, "\n<img src=\""+newName);
        });

        editor.apImageIdx++;
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
