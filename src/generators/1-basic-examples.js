describe("basic generator example", () => {
    it("should work", () => {
        function* fruitGenerator() {
            yield 1;
            yield 2;
            return 3;
        }

        const newFruitGenerator = fruitGenerator();
        expect(newFruitGenerator.next()).toEqual({
            value: 1,
            done: false
        });
        expect(newFruitGenerator.next()).toEqual({
            value: 2,
            done: false
        });
        expect(newFruitGenerator.next()).toEqual({
            value: 3,
            done: true
        });
    });
});

describe("two way generator", () => {
    it("should work", () => {
        function* twoWayGenerator() {
            const what = yield null;
            return `Hello ${what}`;
        }
        const twoWay = twoWayGenerator();
        twoWay.next();
        expect(twoWay.next('world')).toEqual({
            value: "Hello world",
            done: true
        });
    });
});

describe("throw exception", () => {
    it("should work", () => {
        function* gen() {
            while (true) {
                try {
                    yield 42;
                } catch (e) {
                    return e;
                }
            }
        }

        var g = gen();
        g.next();
        g.next();
        const e = new Error('Something went wrong');
        expect(g.throw(e)).toEqual({
            value: e,
            done: true
        });

    });
});
