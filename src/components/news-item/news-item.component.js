// import { fetchTopStories } from '../../api';

import template from './news-item.template';

class NewsItem extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.root.appendChild(template.content.cloneNode(true));
    }
}

export default NewsItem;
