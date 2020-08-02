import timeSince from '../../utils/timeSince';

import template from './comment-item.component.template';

class CommentItem extends HTMLElement {
    #root;
    #titleEl;
    #toogleEl;
    #descriptionEl;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));

        this.#titleEl = this.#root.querySelector('.title');
        this.#toogleEl = this.#root.querySelector('toogle-btn');
        this.#descriptionEl = this.#root.querySelector('.description');

        this.#toogleEl.addEventListener(
            'OnToogle',
            this.#onToogleHandler.bind(this),
        );

        this.render();
    }

    render() {
        this.#renderTitle();
        this.#renderDesciption();
    }

    #renderTitle() {
        const { by, time } = this.#data;
        const byStr = by ? `${by}` : '';
        const timeStr = time ? `${timeSince(time)} ago` : '';

        this.#titleEl.innerText = `${byStr} | ${timeStr}`;
    }

    #renderDesciption() {
        const { text } = this.#data;
        this.#descriptionEl.innerHTML = `${text}`;
    }

    #onToogleHandler(e) {
        const { isOpen } = e.detail;

        if (isOpen) {
            this.#descriptionEl.classList.remove('hide');
        } else {
            this.#descriptionEl.classList.add('hide');
        }
    }

    get #data() {
        return JSON.parse(this.getAttribute('data-content')) || {};
    }
}

export default CommentItem;
