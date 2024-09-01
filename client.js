const path = require('path');
const vscode = require('vscode');
const {
  LanguageClient,
  TransportKind
} = require('vscode-languageclient/node');

function activate(context) {
  const serverModule = context.asAbsolutePath(path.join('server', 'server.js'));
  const serverOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: { module: serverModule, transport: TransportKind.ipc }
  };

  const clientOptions = {
    documentSelector: [{ scheme: 'file', language: 'present' }],
    synchronize: {
      fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
    }
  };

  const client = new LanguageClient(
    'languageServerPresent',
    'Language Server for present',
    serverOptions,
    clientOptions
  );

  context.subscriptions.push(client.start());
}

exports.activate = activate;
