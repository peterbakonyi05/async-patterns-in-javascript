function readFile(path) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${path} content`), 0);
    });
}

describe("promise", () => {
    describe("parallel execution", () => {
        it("should run promises code", done => {
            Promise.all([
                readFile("a.txt"),
                readFile("b.txt")
            ])
                .then(data => {
                    expect(data).toEqual([
                        "a.txt content",
                        "b.txt content"
                    ]);
                    done();
                });
        });
    });
})