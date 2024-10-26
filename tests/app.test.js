const request = require('supertest');
const app = require('./app'); // Ruta correcta a tu app.js

describe('API Tests', () => {
    it('should return Hello World on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello World FLY!');
    });

    it('should echo back the posted data on POST /echo', async () => {
        const data = { name: 'Test User' };
        const response = await request(app).post('/echo').send(data);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(data);
    });

    it('Frontend', async () => {
        const response = await request(app).get('/frontend');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            image: 'alepellereca/imagenfront:latest',
            description: 'Frontend',
        });
    });

    it('Backend', async () => {
        const response = await request(app).get('/backend');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            image: 'alepellereca/imagenback:latest',
            description: 'Backend',
        });
    });
});
