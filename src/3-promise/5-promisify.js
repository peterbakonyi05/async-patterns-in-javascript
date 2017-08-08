// todo
function promisify(callbackBasedApi) {
    return function promisified() {
        const args = [].slice.call(arguments);
        return new Promise((resolve, reject) => {
            args.push((err, result) => {
                if (err) {
                    return reject(err); //[3]
                }
                if (arguments.length <= 2) { //[4]
                    resolve(result);
                } else {
                    resolve([].slice.call(arguments, 1));
                }
            });
            callbackBasedApi.apply(null, args); //[5]
        });
    }
};