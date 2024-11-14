const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.post('/orders', (req, res) => {
    const order = req.body;
    console.log("New order received:", order);
    res.status(201).json({ message: 'Order received!' });
});

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
    console.log('JSON Server is running on port 3001');
});