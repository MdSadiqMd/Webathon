const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Replace with the path to your server file
const expect = chai.expect;

chai.use(chaiHttp);

describe('Request API', () => {
  // Test the GET /requests route
  describe('GET /requests', () => {
    it('should return a list of requests', (done) => {
      chai
        .request(app)
        .get('/requests')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  // Test the POST /requests route
  describe('POST /requests', () => {
    it('should create a new request', (done) => {
      const newRequest = {
        facultyName: 'John Doe',
        requestType: 'Swap',
        date: '2023-12-31',
        roomNo: '123',
        status: 'Pending',
      };

      chai
        .request(app)
        .post('/requests')
        .send(newRequest)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message').that.includes('created successfully');
          done();
        });
    });
  });

  // Test a function for updating request status
  describe('updateRequestStatus', () => {
    it('should update the status of a request', () => {
      const request = {
        facultyName: 'Jane Doe',
        requestType: 'Leave',
        date: '2023-11-15',
        roomNo: '456',
        status: 'Pending',
      };

      const updatedStatus = 'Successful'; // New status

      // Replace the following line with a function call that updates the request status
      const updatedRequest = updateRequestStatus(request, updatedStatus);

      expect(updatedRequest.status).to.equal(updatedStatus);
    });
  });
});
