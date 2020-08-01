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
        const listHtml = document.createDocumentFragment();
        this.listEl.innerHTML = '';

        this.listItems.forEach((listItem, index) => {
            const itemHtml = document.createElement(this.config.component);
            const dataAttr = JSON.stringify(listItem);
            const indexAttr = JSON.stringify(index);

            itemHtml.setAttribute('data-content', dataAttr);
            itemHtml.setAttribute('index', indexAttr);

            listHtml.appendChild(itemHtml);
        });

        this.listEl.append(listHtml);
    }

    get config() {
        return JSON.parse(this.getAttribute('config')) || {};
    }
}

export default ListContainer;
