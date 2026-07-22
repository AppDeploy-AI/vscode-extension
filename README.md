# AppDeploy for VS Code

AppDeploy lets you create and deploy real web apps directly from VS Code. Describe what you want, and AppDeploy turns it into a live public app.

Go far beyond static landing pages and websites. With AppDeploy, you can build and deploy dashboards, internal tools, collaborative workspaces, games, AI apps, and full web apps.

Built-in app features include:

- Hosting and public links
- User authentication and databases
- File uploads and storage
- Secure secrets management
- Real-time updates and notifications
- Custom domains
- AI capabilities and scheduled jobs

Ship and iterate with confidence. AppDeploy helps you test, improve, and republish your app with automated QA, visual bug reports, version history, source code access, and rollbacks.

Zero setup required. No Git, command line, hosting provider, or infrastructure setup. Just chat and publish.

## Install

Install **AppDeploy** from the Visual Studio Marketplace (or Open VSX for VSCodium-family editors), and the AppDeploy MCP server is registered with VS Code automatically - there is nothing to run locally and no configuration.

The server requires standard OAuth authentication, which VS Code handles once you start the server.

Requires VS Code 1.101 or later.

## Usage

Open Copilot Chat in **Agent** mode and ask it to build and deploy. For example:

> Build a Hello VS Code webpage with a global visitor counter and deploy it with AppDeploy.

The agent uses AppDeploy to build, deploy, and return a live public URL.

To manage the server, run **MCP: List Servers** from the Command Palette.

## Support & Legal

- **License:** MIT (SPDX: MIT) for this extension; the AppDeploy MCP server is a hosted service governed by the [AppDeploy Terms of Service](https://appdeploy.ai/terms)
- **Privacy Policy:** https://appdeploy.ai/privacy
- **Support:** support@appdeploy.ai or https://appdeploy.ai/mcp-docs
