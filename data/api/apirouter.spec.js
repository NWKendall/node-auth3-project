const request = require("supertest");

const server = require("./server.js");

describe('gets /api ', function() {
  it('should get res.status 200 OK from end point', function() {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200)
      });
  });

  it("should return JSON formatted body", function() {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });
  
})