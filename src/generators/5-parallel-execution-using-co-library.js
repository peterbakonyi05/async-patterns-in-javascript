// `co` is a generator based control flow goodness for nodejs and the browser
const co = require('co');

describe("generators", () => {
    describe("parallel example using co", () => {
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

