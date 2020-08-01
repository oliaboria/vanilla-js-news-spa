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

const storeConfig = {
    topStories: [],
};

const store = new Store(storeConfig);

export default store;
