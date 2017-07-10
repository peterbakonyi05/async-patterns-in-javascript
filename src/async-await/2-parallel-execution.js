const { wrapAsync } = require("./async-jasmine-helper");

describe("async-await", () => {
    describe("parallel execution", () => {
        it("should allow us to run tasks in parallel", wrapAsync(async () => {
            const values = await Promise.all([
                Promise.resolve(1),
                Promise.resolve(2),
                Promise.resolve(3)
            ]);
            expect(values).toEqual([1, 2, 3]);
        }));
    });
});