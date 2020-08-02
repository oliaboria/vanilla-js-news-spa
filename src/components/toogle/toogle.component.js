import template from './toogle.component.template';

class Toogle extends HTMLElement {
    #root;
    #containerEl;
    #openBtnEl;
    #closeBtnEl;

    static get observedAttributes() {
        return ['isOpen'];
    }

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
        this.#isOpen = false;
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));

        this.#containerEl = this.#root.querySelector('.toogle-container');
        this.#openBtnEl = this.#root.querySelector('.more-btn-open');
        this.#closeBtnEl = this.#root.querySelector('.more-btn-close');

        this.#containerEl.addEventListener(
            'click',
            this.#onToogleClick.bind(this),
        );

        this.render();
    }

    render() {
        if (this.#isOpen) {
            this.#openBtnEl.classList.add('display');
            this.#closeBtnEl.classList.remove('display');
        } else {
            this.#openBtnEl.classList.remove('display');
            this.#closeBtnEl.classList.add('display');
        }
    }

    #onToogleClick(e) {
        e.preventDefault();

        this.isOpen = !this.isOpen;
        this.dispatchEvent(
            new CustomEvent('OnToogle', { detail: { isOpen: this.isOpen } }),
        );
    }

    get #isOpen() {
        return JSON.parse(this.getAttribute('isOpen'));
    }

    set #isOpen(value) {
        this.setAttribute('isOpen', JSON.stringify(value));
    }
}

export default Toogle;
