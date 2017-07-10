function asyncFlow(generatorFunction) {
    function callback(err) {
        if (err) {
            return generator.throw(err);
        }
        const results = [].slice.call(arguments, 1);
        generator.next(results.length > 1 ? results : results[0]);
    }
    const generator = generatorFunction(callback);
    generator.next();
}


describe("some test", () => {
    it("should work", () => {
        // todo: add test
        expect(1).toBe(1);
    })
})