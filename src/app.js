const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World FLY!' });
});

app.post('/echo', (req, res) => {
    res.json(req.body);
});

// Frontend
app.get('/frontend', (req, res) => {
    res.json({ image: 'alepellereca/imagenfront:latest', description: 'Frontend' });
});

// Backend
app.get('/backend', (req, res) => {
    res.json({ image: 'alepellereca/imagenback:latest', description: 'Backend' });
});

// Función para iniciar el servidor en un puerto específico
const startServer = (port, description) => {
    const server = express();
    server.get('/', (req, res) => {
        res.json({ message: `Server running on port ${port}: ${description}` });
    });
    
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

startServer(3000, 'Frontend');
startServer(8080, 'Backend');

module.exports = app;
