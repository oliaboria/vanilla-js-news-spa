import { fetchItemById, fetchComments } from '../../api';
import router from '../../config/router.config';
import store from '../../config/store.config';

class CommentPage extends HTMLElement {
    #root;
    #listConfig;

    static get observedAttributes() {
        return ['loading'];
    }

    constructor() {
        super();

        this.#root = this.attachShadow({ mode: 'open' });
        this.#listConfig = {
            storeKey: 'comments',
            component: 'comment-item',
        };
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
            const listWrapperEl = document.createElement('ul');
            const newsItemEl = this.#renderNews();
            const commentsListEl = this.#renderCommentsList();

            listWrapperEl.appendChild(newsItemEl);
            commentPageHtml.appendChild(listWrapperEl);
            commentPageHtml.appendChild(commentsListEl);
            this.#root.appendChild(commentPageHtml);
        }
    }

    #renderNews() {
        const el = document.createElement('news-item');
        const data = store.getItem('newsItem');

        el.setAttribute('data-content', JSON.stringify(data));

        return el;
    }

    #renderCommentsList() {
        const listEl = document.createElement('list-container');

        listEl.setAttribute('config', JSON.stringify(this.#listConfig));

        return listEl;
    }

    async #fetchNewsItem() {
        store.setItem('newsItem', {});
        this.#loading = true;

        const { id } = router.getParams(window.location.pathname);
        const item = await fetchItemById(id);
        store.setItem('newsItem', item);

        const comments = await fetchComments(item.kids);
        store.setItem('comments', comments);

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
