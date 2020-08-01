import template from './load-more.component.template';

class LoadMore extends HTMLElement {
    #root;
    #loadMore;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));

        this.#loadMore = this.#root.querySelector('.load-more-btn');

        this.#loadMore.addEventListener('click', this.#onClick.bind(this));
    }

    #onClick(e) {
        e.preventDefault();
        console.log('onClick');
        this.dispatchEvent(new CustomEvent('onLoadMore'));
    }
}

export default LoadMore;
