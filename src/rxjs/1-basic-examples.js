const Rx = require("rxjs");

describe("rxjs", () => {
    describe("basic examples", () => {
        it("of creates an observable and calls the subscriber synchronously", () => {
            Rx.Observable.of(1)
                .subscribe(data => {
                    expect(data).toEqual(1);
                });
        });

        it("won't run by default if there is no subscribers", () => {
            Rx.Observable.of(1)
                .do(() => fail("this should never run because there is no subscrcription"));
        });
    });
});