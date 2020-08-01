import { fetchItemById } from '../../api';
import router from '../../config/router.config';
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

        const { id } = router.getParams(window.location.pathname);
        const item = await fetchItemById(id);
        console.log(item);
        // store.setItem('topStories', stories);

        this.#loading = false;
    }

    get #loading() {
        return JSON.parse(this.getAttribute('loading'));
    }

    set #loading(value) {
        this.setAttribute('loading', JSON.stringify(value));
    }
}

export default CommentPage;
