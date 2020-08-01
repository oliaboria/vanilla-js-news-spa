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
            this.#root.innerHTML = '';
            const commentPageHtml = document.createDocumentFragment();
            const newsItemEl = this.#renderNews();
            // const listEl = this.#renderList();
            // const loadMoreEl = this.#renderLoadMore();
            commentPageHtml.appendChild(newsItemEl);
            // homeHtml.appendChild(loadMoreEl);
            this.#root.appendChild(commentPageHtml);
        }
    }

    #renderNews() {
        const el = document.createElement('news-item');
        const data = store.getItem('newsItem');

        el.setAttribute('data-content', JSON.stringify(data));

        return el;
    }

    async #fetchNewsItem() {
        store.setItem('newsItem', {});
        this.#loading = true;

        const { id } = router.getParams(window.location.pathname);
        const item = await fetchItemById(id);
        store.setItem('newsItem', item);

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
