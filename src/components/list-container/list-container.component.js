import store from '../../config/store.config';

import template from './list-container.component.template';

class ListContainer extends HTMLElement {
    #root;
    #listEl;
    #listItems;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));
        this.#listEl = this.#root.querySelector('.list-container');

        this.#listItems = store.getItem(this.#config.storeKey);

        this.render();
    }

    render() {
        const listHtml = document.createDocumentFragment();
        this.#listEl.innerHTML = '';

        this.#listItems.forEach((listItem) => {
            const itemHtml = this.#renderListItem(listItem);

            listHtml.appendChild(itemHtml);
        });

        this.#listEl.append(listHtml);
    }

    #renderListItem(listItem) {
        const itemHtml = document.createElement(this.#config.component);
        const dataAttr = JSON.stringify(listItem);

        itemHtml.setAttribute('data-content', dataAttr);

        const { isDeviderVisible } = this.#config;
        itemHtml.setAttribute('config', JSON.stringify({ isDeviderVisible }));

        return itemHtml;
    }

    get #config() {
        return JSON.parse(this.getAttribute('config')) || {};
    }
}

export default ListContainer;
