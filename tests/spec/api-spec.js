var request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:3000';

describe("API test suite", () => {
    describe("GET /", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url + "/hobbies", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return description", function(done) {
            request.get(base_url + "/hobbies", (error, response, body) => {
                expect(body).toBe('[{"id":1,"hobby":"swimming","numer":10},{"id":2,"hobby":"diving","numer":12}');
                done();
            });
        });
    });
    describe("GET /", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url + "/hobbies/1", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return description", function(done) {
            request.get(base_url + "/hobbies/1", (error, response, body) => {
                expect(body).toBe('[{"id":1,"hobby":"swimming","numer":10}]');
                done();
            });
        });
    });
    describe("GET /", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url + "/hobbies/numer/avarage", (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return description", function(done) {
            request.get(base_url + "/hobbies/numer/avarage", (error, response, body) => {
                expect(body).toBe('[{"avg":"11"}]');
                done();
            });
        });
    });
});