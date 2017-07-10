const { wrapAsync } = require("./jasmine-helper");

describe("async-await", () => {
    describe("sequential execution", () => {
        it("should allow us to run tasks sequentially", wrapAsync(async () => {
            const values = [
                await getValueAsync(1),
                await getValueAsync(2),
                await getValueAsync(3)
            ];
            expect(values).toEqual([1, 2, 3]);
        }));
    });
});