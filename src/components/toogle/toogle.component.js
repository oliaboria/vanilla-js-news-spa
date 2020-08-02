import template from './toogle.component.template';

class Toogle extends HTMLElement {
    #root;
    #containerEl;
    #openBtnEl;
    #closeBtnEl;
    #isOpen;

    static get observedAttributes() {
        return ['is-open'];
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

    attributeChangedCallback() {
        this.render();
    }

    render() {
        if (!this.#isOpen) {
            this.#openBtnEl.classList.add('hide');
            this.#closeBtnEl.classList.remove('hide');
        } else {
            this.#openBtnEl.classList.remove('hide');
            this.#closeBtnEl.classList.add('hide');
        }
    }

    #onToogleClick(e) {
        e.preventDefault();

        this.#isOpen = !this.#isOpen;
        this.setAttribute('is-open', JSON.stringify(this.#isOpen));

        this.dispatchEvent(
            new CustomEvent('OnToogle', { detail: { isOpen: this.#isOpen } }),
        );
    }
}

export default Toogle;
