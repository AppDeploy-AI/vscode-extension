import * as vscode from 'vscode';

const SERVER_URL = 'https://api-v2.appdeploy.ai/mcp';

export function activate(context: vscode.ExtensionContext) {
	// Register the hosted AppDeploy MCP server. Authentication is VS Code's
	// standard MCP OAuth flow - no configuration or API key required.
	context.subscriptions.push(
		vscode.lm.registerMcpServerDefinitionProvider('appdeploy', {
			provideMcpServerDefinitions(): vscode.McpServerDefinition[] {
				return [
					new vscode.McpHttpServerDefinition(
						'AppDeploy',
						vscode.Uri.parse(SERVER_URL)
					),
				];
			},
		})
	);
}

export function deactivate() {}
