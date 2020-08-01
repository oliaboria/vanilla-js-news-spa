class Store {
    constructor() {
        this._store = {
            topStories: [],
        };
    }

    setItem(key, value) {
        this._store[key] = value;
    }

    getItem(key) {
        return this._store[key];
    }
}

const store = new Store();

export default store;
