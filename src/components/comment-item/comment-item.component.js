import timeSince from '../../utils/timeSince';

import template from './comment-item.component.template';

class CommentItem extends HTMLElement {
    #root;
    #titleEl;
    #toogleState;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));

        this.#titleEl = this.#root.querySelector('.title');

        this.render();
    }

    render() {
        const listHtml = document.createDocumentFragment();
        this.#renderTitle();
        const toogleEl = this.#renderToggle();
        // this.#renderDesciption();
    }

    #renderTitle() {
        const titleEl = this.#root.querySelector('.title');
        const { by, time } = this.#data;
        const byStr = by ? `${by}` : '';
        const timeStr = time ? `${timeSince(time)} ago` : '';

        this.#titleEl.innerText = `${byStr}${timeStr}`;
    }

    #renderToggle() {
        const toogleEl = document.createElement('toogle');

        return toogleEl;
    }

    #renderDesciption() {}

    #onToogleClick() {
        this.#toogleState = !this.#toogleState;
    }

    get #data() {
        return JSON.parse(this.getAttribute('data-content')) || {};
    }
}

export default CommentItem;
