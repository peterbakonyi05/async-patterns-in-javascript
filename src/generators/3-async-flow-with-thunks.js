
function asyncFlowWithThunks(generatorFunction) {
    function callback() {
        const [err, ...args] = arguments;
        if (err) {
            return generator.throw(err);
        }
        const thunk = generator.next.apply(generator, args).value;
        thunk && thunk(callback);
    }
    const generator = generatorFunction();
    callback();
}

// a thunk is just a function that partially applies all the arguments
// of the original function except its callback
function callAsyncThunk(value) {
    return function (callback) {
        setTimeout(() => callback(null, value));
    };
}

describe("async flow using thunks", () => {
    it("should let us write async code using a linear approach without passing callbacks", done => {
        asyncFlowWithThunks(function* () {
            const a = yield callAsyncThunk(1);
            expect(a).toBe(1);
            const b = yield callAsyncThunk(2);
            expect(b).toBe(2);
            done();
        });
    });
});