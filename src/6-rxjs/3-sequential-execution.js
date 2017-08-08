const Rx = require("rxjs");

describe("rxjs", () => {
    describe("sequential execution using concat operator", () => {
        it("should emit values sequentially independent of if it is promise/observable sync/async", done => {
            Rx.Observable.concat(
                Promise.resolve(1),
                Rx.Observable.from([2, 3, 4]).delay(1),
                Rx.Observable.timer(0, 1).take(2).mapTo(5)
            )
                .bufferCount(6)
                .subscribe(data => {
                    expect(data).toEqual([1, 2, 3, 4, 5, 5]);
                    done();
                });
        });
    });
});