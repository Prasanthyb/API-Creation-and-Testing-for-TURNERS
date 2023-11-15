
const { createCar } = require('./controls');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST CASE FOR NO INPUTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

test('should return 400 status for invalid input data', async () => {
    const req = {
      body: {
        
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
  
    await createCar(req, res);
  
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid input data' });
  });


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST CASE FOR INVALID MODEL DATATYPE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


it("should return 400 status for invalid model data type", () => {
    const request = {
        body: {
            model: 123, // Invalid data type for model (should be a string)
            year: 2014,
        },
    };

    const res = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    createCar(request, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Invalid input data" });
  
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`TEST CASE FOR INVALID DATATYPE OF YEAR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

describe('createCar function', () => {
    test('should return 400 status for invalid year data type', async () => {
      const req = {
        body: {
          model: 'civic',
          year: 'invalidYear', // Invalid year data type
        },
      };
  
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
  
      await createCar(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid input data' });
    });
  
    
  });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`TEST CASE FOR TESTING THE CARVALUE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


it("should send a result 6614", () => {
    const request = {
        body: {
            model: "civic",
            year: 2014,
        },
    };

    const res = {
        send: jest.fn(),
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    createCar(request, res);

    
    expect(res.send).toHaveBeenCalledWith({ car_value: 6614 });

});
