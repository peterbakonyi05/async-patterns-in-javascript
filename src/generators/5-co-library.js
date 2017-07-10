// `co` is a generator based control flow goodness for nodejs and the browser
const co = require('co');

describe("generators with co library", () => {
    describe("basic sequential example", () => {
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

    describe("running parallel", () => {
        it("should resolve values in parallel", done => {
            co(function* () {
                var res = yield [
                    Promise.resolve(1),
                    Promise.resolve(2),
                    Promise.resolve(3),
                ];
                expect(res).toEqual([1, 2, 3]);
                done();
            });
        });
    });
});

