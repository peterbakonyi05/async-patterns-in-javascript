module.exports = {
    // current jasmine version does not support passing an async function to `it` as the callback
    wrapAsync(asyncFunction) {
        return done => asyncFunction().then(done, fail);
    }
};