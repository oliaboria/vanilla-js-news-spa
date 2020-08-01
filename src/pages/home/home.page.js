import { fetchTopStories } from '../../api';
import store from '../../utils/store';

class HomePage extends HTMLElement {
    #root;
    #listConfig;

    static get observedAttributes() {
        return ['loading'];
    }

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
        this.#listConfig = {
            storeKey: 'topStories',
            component: 'news-item',
        };
    }

    async connectedCallback() {
        await this.#fetchStories();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        if (this.loading) {
            this.#root.innerHTML = `Loading...`;
        } else {
            this.#root.innerHTML = '';
            const homeHtml = document.createDocumentFragment();
            const listEl = document.createElement('list-container');
            const loadMoreEl = document.createElement('load-more');

            listEl.setAttribute('config', JSON.stringify(this.#listConfig));
            loadMoreEl.addEventListener(
                'onLoadMore',
                this.onLoadMore.bind(this),
            );

            homeHtml.appendChild(listEl);
            homeHtml.appendChild(loadMoreEl);
            this.#root.appendChild(homeHtml);
        }
    }

    get #loading() {
        return JSON.parse(this.getAttribute('loading'));
    }

    set #loading(value) {
        this.setAttribute('loading', JSON.stringify(value));
    }

    async #fetchStories() {
        console.log('fetchStories');
        this.#loading = true;

        const stories = await fetchTopStories('$key', 30);
        store.setItem('topStories', stories);

        this.#loading = false;
    }

    onLoadMore(e) {
        console.log('load');
        this.#fetchStories();
    }
}

export default HomePage;
