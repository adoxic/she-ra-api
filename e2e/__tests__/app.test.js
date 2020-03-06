require('dotenv').config();
const request = require('../request');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');

describe('core app api', () => {

  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('is alive', () => {
    return request
      .get('/hello')
      .expect(200)
      .then(res => {
        expect(res.text).toBe('hello express');
      });
  });

  it('returns 404 on non-api bad path', () => {
    return request
      .get('/bad-path')
      .expect(404)
      .expect('Content-Type', /text/);
  });

  it('returns application/json 404 on bad api path', () => {
    return request
      .post('/api/bad-path')
      .expect(404)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.error).toMatch(/not found/i);
      });
  });
});
