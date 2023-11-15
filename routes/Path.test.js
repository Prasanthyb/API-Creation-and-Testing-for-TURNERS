
const request = require('supertest');
const express = require('express');
const router = require('./Path'); 

const app = express();
app.use(express.json());
app.use('/cars', router); 


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST CASE FOR VALID INPUTS~~~~~~~~~~~~~~~~~~~~~~~~~~`//

describe('POST /cars/carvalue', () => {
  test('should return car value when valid input is provided', async () => {
    const response = await request(app)
      .post('/cars/carvalue')
      .send({ model: 'Toyota', year: 2020 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('car_value');
    expect(typeof response.body.car_value).toBe('number');
  });
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST CASE FOR INVALID INPUT~~~~~~~~~~~~~~~~~~~~~~~~~~```//
  
  test('should return 400 with error message for invalid input', async () => {
    const response = await request(app)
      .post('/cars/carvalue')
      .send({ model: 123, year: 'invalid' });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid input data');
  });

  
});
