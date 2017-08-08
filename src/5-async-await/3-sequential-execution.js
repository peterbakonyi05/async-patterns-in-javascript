const { wrapAsync } = require("./async-jasmine-helper");

describe("async-await", () => {
    describe("sequential execution", () => {
        it("should allow us to run tasks sequentially", wrapAsync(async () => {
            const values = [
                await Promise.resolve(1),
                await Promise.resolve(2),
                await Promise.resolve(3)
            ];
            expect(values).toEqual([1, 2, 3]);
        }));
    });
});