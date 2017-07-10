const { wrapAsync } = require("./jasmine-helper");

describe("async-await", () => {
    describe("parallel execution", () => {
        it("should allow us to run tasks in parallel", wrapAsync(async () => {
            const values = await Promise.all([
                getValueAsync(1),
                getValueAsync(2),
                getValueAsync(3)
            ]);
            expect(values).toEqual([1, 2, 3]);
        }));
    });
});