import { fetchItem } from '../../api';
import store from '../../config/store.config';

class CommentPage extends HTMLElement {
    #root;

    static get observedAttributes() {
        return ['loading'];
    }

    constructor() {
        super();
        console.log(1);
        this.#root = this.attachShadow({ mode: 'open' });
        console.log(1);
    }

    async connectedCallback() {
        await this.#fetchNewsItem();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        if (this.#loading) {
            this.#root.innerHTML = `Loading...`;
        } else {
            this.#root.innerHTML = 'comm';
            // const homeHtml = document.createDocumentFragment();
            // const listEl = this.#renderList();
            // const loadMoreEl = this.#renderLoadMore();
            // homeHtml.appendChild(listEl);
            // homeHtml.appendChild(loadMoreEl);
            // this.#root.appendChild(homeHtml);
        }
    }

    async #fetchNewsItem() {
        store.setItem('newsItem', {});
        this.#loading = true;

        this.#getItemId();
        // const item = await fetchItem('$key', pageSize);
        // store.setItem('topStories', stories);

        this.#loading = false;
    }

    #getItemId() {
        console.log(window.location.pathname);
    }

    get #loading() {
        return JSON.parse(this.getAttribute('loading'));
    }

    set #loading(value) {
        this.setAttribute('loading', JSON.stringify(value));
    }
}

export default CommentPage;
