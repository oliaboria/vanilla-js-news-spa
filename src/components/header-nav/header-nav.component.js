import router from '../../config/router.config';

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

        setTimeout(() => {
            /* workakound: wired-listbox box model isn't working properly with custom font faces */
            this.#list.click();
        });

        this.#list.addEventListener('click', this.#onClick.bind(this));
    }

    #onClick(e) {
        const { target } = e;
        if (target.tagName !== 'WIRED-ITEM') {
            e.stopImmediatePropagation();
        }

        if (target === this.#list) {
            return;
        }

        const newSelected = target.getAttribute('value');
        this.#list.setAttribute('selected', newSelected);

        const url = target.getAttribute('href');
        router.navigateTo(url);
    }
}

export default HeaderNav;
