const { wrapAsync } = require("./async-jasmine-helper");

async function getValueAsync(value) {
    return Promise.resolve(value);
}

describe("async-await", () => {
    describe("basic examples", () => {
        it("should always resolve with a promise", wrapAsync(async () => {
            expect(await Promise.resolve(1)).toEqual(1);
            expect(await getValueAsync(2)).toEqual(2);
        }));

        it("should let us use try-catch", wrapAsync(async () => {
            try {
                await Promise.resolve(1);
                await Promise.reject(new Error("ooops"));
            } catch (err) {
                expect(err.message).toEqual("ooops");
            }
        }));
    });
});