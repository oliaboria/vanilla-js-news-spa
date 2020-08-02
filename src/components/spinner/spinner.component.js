import template from './spinner.component.template';

class Spinner extends HTMLElement {
    #root;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));
    }
}

export default Spinner;
