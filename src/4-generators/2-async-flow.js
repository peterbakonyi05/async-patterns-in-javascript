function asyncFlow(generatorFunction) {
    function callback() {
        const [err, ...args] = arguments;
        if (err) {
            return generator.throw(err);
        }
        generator.next.apply(generator, args);
    }
    const generator = generatorFunction(callback);
    generator.next();
}

function callAsync(value, callback) {
    setTimeout(() => callback(null, value));
}

describe("generators", () => {
    describe("custom async flow", () => {
        it("should let us write async code using a linear approach", done => {
            asyncFlow(function* (callback) {
                const a = yield callAsync(1, callback);
                expect(a).toBe(1);
                const b = yield callAsync(2, callback);
                expect(b).toBe(2);
                done();
            });
        });
    });
});