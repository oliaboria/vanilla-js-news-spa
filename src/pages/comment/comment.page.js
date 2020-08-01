import { fetchItem } from '../../api';
import store from '../../config/store.config';

class CommentPage extends HTMLElement {
    #root;

    static get observedAttributes() {
        return ['loading'];
    }

    constructor() {
        super();

        this.#root = this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        await this.#fetchNewsItem();
    }

    // render() {
    // if (this.#loading) {
    //     this.#root.innerHTML = `Loading...`;
    // } else {
    //     this.#root.innerHTML = '';
    //     const homeHtml = document.createDocumentFragment();
    //     const listEl = this.#renderList();
    //     const loadMoreEl = this.#renderLoadMore();
    //     homeHtml.appendChild(listEl);
    //     homeHtml.appendChild(loadMoreEl);
    //     this.#root.appendChild(homeHtml);
    // }
    // }

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
