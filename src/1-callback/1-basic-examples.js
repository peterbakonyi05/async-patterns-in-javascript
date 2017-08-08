describe("callbacks", () => {
    let readFileSuccess;
    let readFileError;
    let writeFileSuccess;
    let writeFileError;
    beforeEach(() => {
        readFileSuccess = (path, callback) => setTimeout(() => callback(null, `${path} content`));
        readFileError = (path, callback) => setTimeout(() => callback(new Error(`${path} not found`)));
        writeFileSuccess = (path, callback) => setTimeout(() => callback(null));
        writeFileError = (path, callback) => setTimeout(() => callback(new Error(`${path} not found`)));
    });

    describe("callback hell", () => {
        function copy(path, newPath, callback) {
            readFileSuccess(path, (err, data) => {
                if (err) {
                    callback(err);
                }
                writeFileSuccess(newPath, (err) => {
                    if (err) {
                        callback(err);
                    }
                    callback(null);
                })
            });
        }

        it("should work", done => {
            copy("a.txt", "b.txt", () => {
                done();
            })
        });

    });
});