import { PAGE_SIZE } from '../../constants';

import template from './load-more.component.template';

class LoadMore extends HTMLElement {
    #root;
    #loadMore;
    #currentPage;
    #limitTo = PAGE_SIZE;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));

        this.#loadMore = this.#root.querySelector('.load-more-btn');
        this.#currentPage = JSON.parse(this.getAttribute('page'));

        this.#loadMore.addEventListener('click', this.#nextPage.bind(this));
    }

    #nextPage(e) {
        e.preventDefault();
        const page = this.#currentPage + 1;
        const pageSize = page * this.#limitTo;

        this.dispatchEvent(
            new CustomEvent('onLoadMore', { detail: { pageSize, page } }),
        );
    }
}

export default LoadMore;
