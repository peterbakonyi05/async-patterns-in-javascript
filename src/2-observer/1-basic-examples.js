// The observer pattern defines an object (called subject)
// which can notify a set of observers (or listeners), when a change in its state happens.
const EventEmitter = require('events').EventEmitter;
let eventEmitter;

describe("EventEmitter", () => {
    beforeEach(() => {
        eventEmitter = new EventEmitter();
    });
    describe("basic examples", () => {
        it("can notify multiple subscribers", () => {
            const spy1 = jasmine.createSpy("listener1");
            const spy2 = jasmine.createSpy("listener2");
            eventEmitter.on("login", spy1);
            eventEmitter.on("login", spy2);

            const payload = { username: "a", password: "b" };
            eventEmitter.emit("login", payload);
            expect(spy1).toHaveBeenCalledWith(payload);
            expect(spy2).toHaveBeenCalledWith(payload);
        });

        it("can notitfy a subscriber once", () => {
            const spy = jasmine.createSpy("listener");
            eventEmitter.once("login", spy);
            eventEmitter.emit("login");
            eventEmitter.emit("login");
            expect(spy.calls.count()).toBe(1);
        });
    });
});
