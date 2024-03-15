
const vscode = require("vscode");
const axios = require("axios");
// const xmlParser = require("fast-xml-parser")
const xml2js = require("xml2js")
/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	const res = await axios.get("https://blog.webdevsimplified.com/rss.xml");
	// console.log(res.data);
	// console.log(xmlParser.parse(res.data))
	xml2js.parseString(res.data, (err, result) => {
		if (err) {
		  console.error("Error parsing XML:", err);
		} else {
		  console.log("Parsed XML:", result);
		}
	    });	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(
		'Congratulations, your extension "intelligent-paste" is now active!'
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		"intelligent-paste.myPaste",
		function () {
			// The code you place here will be executed every time your command is executed

			// Display a message box to the user
			vscode.window.showInformationMessage(
				"Hello World from intelligent paste!"
			);
		}
	);

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
