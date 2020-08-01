import { fetchTopStories } from '../../api';
import store from '../../utils/store';

class HomePage extends HTMLElement {
    static get observedAttributes() {
        return ['loading'];
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.listConfig = {
            storeKey: 'topStories',
            component: 'news-item',
        };
    }

    async connectedCallback() {
        await this.fetchStories();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        if (this.loading) {
            this.root.innerHTML = `Loading...`;
        } else {
            this.root.innerHTML = '';
            const homeHtml = document.createDocumentFragment();
            const listEl = document.createElement('list-container');

            listEl.setAttribute('config', JSON.stringify(this.listConfig));

            homeHtml.appendChild(listEl);
            this.root.appendChild(homeHtml);
        }
    }

    get loading() {
        return JSON.parse(this.getAttribute('loading'));
    }

    set loading(value) {
        this.setAttribute('loading', JSON.stringify(value));
    }

    async fetchStories() {
        this.loading = true;

        const stories = await fetchTopStories('$key', 30);
        store.setItem('topStories', stories);

        this.loading = false;
    }
}

export default HomePage;
