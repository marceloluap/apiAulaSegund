const app = require('./app');  // importando módulo app
const Loaders = require('./loaders/index');

Loaders.start();

app.listen(3333, () => console.log('Servidor está Rodando!!!')); 