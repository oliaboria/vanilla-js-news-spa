class Store {
    #store;

    constructor(storeConfig) {
        this.#store = {
            ...storeConfig,
        };
    }

    setItem(key, value) {
        this.#store[key] = value;
    }

    getItem(key) {
        return this.#store[key];
    }
}

export default Store;
