import store from '../../utils/store';

import template from './list-container.component.template';

class ListContainer extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.root.appendChild(template.content.cloneNode(true));
        this.listEl = this.root.querySelector('.list-container');

        this.listItems = store.getItem(this.config.storeKey);

        this.render();
    }

    render() {
        const listItemHtml = document.createDocumentFragment();
        this.listEl.innerHTML = '';

        this.listItems.forEach((listItem) => {
            const itemHtml = document.createElement(this.config.component);
            const attr = JSON.stringify(listItem);
            itemHtml.setAttribute('data-content', attr);

            listItemHtml.appendChild(itemHtml);
        });

        this.listEl.append(listItemHtml);
    }

    get config() {
        return JSON.parse(this.getAttribute('config')) || {};
    }
}

export default ListContainer;
