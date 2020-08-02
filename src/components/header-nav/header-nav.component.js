import template from './header-nav.component.template';

class HeaderNav extends HTMLElement {
    #root;

    #list;
    #listEls;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));

        this.#list = this.#root.querySelector('wired-listbox');
        this.#listEls = this.#root.querySelectorAll('wired-item');

        const selectedItem =
            window.location.pathname.split('/')[1] || 'default';

        this.#list.setAttribute('selected', selectedItem);

        this.#list.addEventListener('click', this.#onClick.bind(this));
    }

    #onClick(e) {
        if (e.target.tagName !== 'WIRED-ITEM') {
            e.stopImmediatePropagation();
        }

        const newSelected = e.target.getAttribute('value');
        this.#list.setAttribute('selected', newSelected);
    }
}

export default HeaderNav;
