import template from './list-container.component.template';

class ListContainer extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.root.appendChild(template.content.cloneNode(true));
        this.listEl = this.root.getSelector('list-container');

        this.render();
    }

    render() {
        const todosHtml = document.createDocumentFragment();
        this.listEl.innerHTML = 'List';

        this.listEl.append(todosHtml);
    }
}

export default ListContainer;
