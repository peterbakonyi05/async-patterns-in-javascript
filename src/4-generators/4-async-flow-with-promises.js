
function asyncFlowWithPromises(generatorFunction) {
    function callback() {
        const promise = generator.next.call(generator, ...arguments).value;
        if (promise) {
            promise
                .then(callback)
                .catch(err => generator.throw(err));
        }
    }
    const generator = generatorFunction();
    callback();
}

describe("generators", () => {
    describe("async flow using promises", () => {
        it("should let us write async code using a linear approach", done => {
            asyncFlowWithPromises(function* () {
                const a = yield Promise.resolve(1);
                expect(a).toBe(1);
                const b = yield Promise.resolve(2);
                expect(b).toBe(2);
                done();
            });
        });
    });
});