const {
  createConnection,
  TextDocuments,
  ProposedFeatures,
  CompletionItem,
  CompletionItemKind
} = require('vscode-languageserver');

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments();
documents.listen(connection);

connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: documents.syncKind,
      completionProvider: {
        resolveProvider: true
      }
    }
  };
});

connection.onCompletion(() => {
  return [
    
  ];
});

connection.onCompletionResolve((item) => {
  if (item.data === 1) {
    //item.detail = 'Example details';
    //item.documentation = 'Example documentation';
  }
  return item;
});

connection.listen();
