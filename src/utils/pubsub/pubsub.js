class PubSub {
    constructor() {
        this.listeners = [];
    }

    subscribe(fn) {
        this.listeners.push(fn);
    }

    notify(payload) {
        this.listeners.forEach((listener) => listener(payload));
    }

    unsubscribe(fn) {
        const index = this.listeners.findIndex((listener) => listener === fn);

        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
}

export default PubSub;
