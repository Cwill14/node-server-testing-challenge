const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    // beforeEach(async () => {
    //     await db('dwarves').truncate();
    // })
    describe('server test route', () => {
        it('should return 200 OK', async () => {
            const response = await request(server).get('/');
            expect(response.status).toEqual(200);
        })
        it('should return JSON object', async () => {
            const response = await request(server).get('/');
            expect(response.type).toEqual('application/json');
        })
    })
    describe('GET /dwarves', () => {
        it('return array', () => {
            return request(server)
                .get('/dwarves')
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                })
        })
    })
    describe('POST /dwarves', () => {
        it('should insert a dwarf into the db', () => {
            return request(server)
                .post('/dwarves')
                .send({
                    name: "Thror"
                })
                .then(res => {
                    expect(res.body).toBe(9);
                })
        })
    })
    describe('POST /dwarves', () => {
        it('returns 200 ok', () => {
            return request(server)
                .post('/dwarves')
                .send({
                    name: "tester2"
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })
    })
})