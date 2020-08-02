import template from './comment-item.component.template';

class CommentItem extends HTMLElement {
    #root;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));
    }

    // render(){

    // }
}

export default CommentItem;
