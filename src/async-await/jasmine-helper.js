module.exports = {
    // current jasmine version does not support passing an async function as to `it` as the callback
    wrapAsync(asyncFunction, done) {
        return done => asyncFunction().then(done, fail);
    }
};