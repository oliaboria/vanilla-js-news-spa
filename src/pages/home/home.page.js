import { fetchTopStories } from '../../api';
import store from '../../config/store.config';
import { PAGE_SIZE } from '../../constants';

class HomePage extends HTMLElement {
    #root;
    #listConfig;
    #currentPage = 1;
    #isError = false;

    get #loading() {
        return JSON.parse(this.getAttribute('loading'));
    }

    set #loading(value) {
        this.setAttribute('loading', JSON.stringify(value));
    }

    static get observedAttributes() {
        return ['loading'];
    }

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
        this.#listConfig = {
            storeKey: 'topStories',
            component: 'news-item',
            isDeviderVisible: true,
        };
    }

    async connectedCallback() {
        await this.#fetchStories();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        if (this.#loading) {
            this.#root.innerHTML = `<v-spinner></v-spinner>`;
        } else if (this.#isError) {
            this.#root.innerHTML = 'Oops... Something went wrong';
        } else {
            this.#root.innerHTML = '';
            const homeHtml = document.createDocumentFragment();
            const listEl = this.#renderList();
            const loadMoreEl = this.#renderLoadMore();

            homeHtml.appendChild(listEl);
            homeHtml.appendChild(loadMoreEl);
            this.#root.appendChild(homeHtml);
        }
    }

    #renderLoadMore() {
        const loadMoreEl = document.createElement('load-more');

        loadMoreEl.setAttribute('page', JSON.stringify(this.#currentPage));
        loadMoreEl.addEventListener('onLoadMore', this.#onLoadMore.bind(this));

        return loadMoreEl;
    }

    #renderList() {
        const listEl = document.createElement('list-container');

        listEl.setAttribute('config', JSON.stringify(this.#listConfig));

        return listEl;
    }

    async #fetchStories(pageSize = PAGE_SIZE) {
        store.setItem('topStories', []);
        this.#isError = false;
        this.#loading = true;

        try {
            const stories = await fetchTopStories('$key', pageSize);
            store.setItem('topStories', stories);
        } catch (e) {
            this.#isError = true;
        } finally {
            this.#loading = false;
        }
    }

    #onLoadMore(e) {
        const { pageSize, page } = e.detail;

        this.#currentPage = page;
        this.#fetchStories(pageSize);
    }
}

export default HomePage;
