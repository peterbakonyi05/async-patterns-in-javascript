const { wrapAsync } = require("./jasmine-helper");

async function getValueAsync(value) {
    return Promise.resolve(value);
}

describe("basic async-await examples", () => {
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

    it("should allow us to run tasks sequentially", wrapAsync(async () => {
        const values = [
            await getValueAsync(1),
            await getValueAsync(2),
            await getValueAsync(3)
        ];
        expect(values).toEqual([1, 2, 3]);
    }));

    it("should allow us to run tasks in parallel", wrapAsync(async () => {
        const values = await Promise.all([
            getValueAsync(1),
            getValueAsync(2),
            getValueAsync(3)
        ]);
        expect(values).toEqual([1, 2, 3]);
    }));
});