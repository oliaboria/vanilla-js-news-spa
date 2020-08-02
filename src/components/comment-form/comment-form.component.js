import template from './comment-form.component.template';

class CommentForm extends HTMLElement {
    #root;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));
    }
}

export default CommentForm;
