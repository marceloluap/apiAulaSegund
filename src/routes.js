// arquivo para requisições para o servidor processar

const { Router } = require('express'); // importando do express o Router

const ProductController = require('./Controllers/ProductController');

const routes = Router(); // criando a instância de Router


// rota para checagem se está funcionando a api no endereço: http://localhost:3333/health
routes.get('/health', (req, res) => {
    return res.status(200).json({message:"Servidor está online"});
});

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes