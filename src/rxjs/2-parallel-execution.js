const Rx = require("rxjs");

describe("rxjs", () => {
    describe("parallel execution using forkJoin operator", () => {
        it("should support promises", done => {
            Rx.Observable.forkJoin(
                Promise.resolve(1),
                Promise.resolve(2),
                Promise.resolve(3)
            )
                .subscribe(data => {
                    expect(data).toEqual([1, 2, 3]);
                    done();
                });
        });

        it("should support sync and async observables mixed with promises", done => {
            Rx.Observable.forkJoin(
                Rx.Observable.from([1, 2, 3]).delay(1), // latest value will be used
                Rx.Observable.of(2),
                Promise.resolve(3)
            )
                .subscribe(data => {
                    expect(data).toEqual([3, 2, 3]);
                    done();
                });
        });
    });
});