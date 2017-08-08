// promise: pending, fulfilled, rejected
// if it is fulfilled or rejected, it means it is settled

describe("promise", () => {
    describe("resolving a promise", () => {
        it("should call the success callback (always!) async", done => {
            let isAsync = false;
            Promise.resolve(1).then(data => {
                expect(data).toBe(1);
                expect(isAsync).toBe(true);
                done();
            });
            isAsync = true;
        });
    });

    describe("chaining", () => {
        it("should allow chaining multiple promises", done => {
            Promise.resolve(1)
                .then(i => i * 2)
                .then(i => {
                    expect(i).toBe(2);
                    // returning a new promise
                    return Promise.resolve(i * 2);
                })
                .then(value => {
                    // here it is the value
                    expect(value).toBe(4);
                    done();
                });
        });
    });
});