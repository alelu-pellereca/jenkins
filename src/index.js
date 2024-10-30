const app = require('./app');

const PORT = 8080//process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ---- ${PORT}`);
});