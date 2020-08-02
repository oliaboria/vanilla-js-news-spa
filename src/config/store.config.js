import Store from '../utils/store';

const storeConfig = {
    topStories: [],
    newsItem: {},
    comments: [],
};

const store = new Store(storeConfig);

export default store;
