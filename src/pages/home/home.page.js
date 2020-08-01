import { fetchTopStories } from '../../api';

import template from './home.page.template';

class HomePage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.root.appendChild(template.content.cloneNode(true));
        fetchTopStories('$key', 30);
    }
}

export default HomePage;
