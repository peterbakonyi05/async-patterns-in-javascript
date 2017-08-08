// `co` is a generator based control flow goodness for nodejs and the browser
const co = require('co');

describe("generators", () => {
    describe("sequential example using co", () => {
        it("should get the correct value with a linear approach", done => {
            co(function* () {
                try {
                    var result = yield Promise.resolve(true);
                    expect(result).toEqual(true);
                    yield Promise.reject(new Error("ooops"));
                } catch (err) {
                    expect(err.message).toEqual("ooops");
                }
                done();
            });
        });
    });
});

