import getUrlHost from '../../utils/getUrlHost';
import timeSince from '../../utils/timeSince';

import template from './news-item.template';

class NewsItem extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.root.appendChild(template.content.cloneNode(true));

        this.titleEl = this.root.querySelector('.title-link');
        this.siteEl = this.root.querySelector('.site-link');
        this.additionalInfEl = this.root.querySelector(
            '.additional-information',
        );
        this.commentsEl = this.root.querySelector('.comments');

        this.commentsEl.addEventListener(
            'click',
            this.commentsClickHandler.bind(this),
        );
        this.siteEl.addEventListener('click', this.siteClickHandler.bind(this));

        this.render();
    }

    render() {
        const { title, url, descendants } = this.data;
        const host = getUrlHost(url);

        this.titleEl.innerText = title;
        this.titleEl.setAttribute('href', url);

        this.siteEl.innerText = `(${host})`;

        this.additionalInfEl.innerText = this.getAdditionalInformationText();

        this.commentsEl.innerText = `${descendants} comments`;
    }

    get data() {
        return JSON.parse(this.getAttribute('data-content')) || {};
    }

    get index() {
        return JSON.parse(this.getAttribute('index')) || {};
    }

    // eslint-disable-next-line class-methods-use-this
    commentsClickHandler(e) {
        e.preventDefault();
    }

    // eslint-disable-next-line class-methods-use-this
    siteClickHandler(e) {
        e.preventDefault();
    }

    getAdditionalInformationText() {
        const { score, by, time } = this.data;
        const timeSinceStr = timeSince(time);

        return `${score} points by ${by} ${timeSinceStr} ago`;
    }
}

export default NewsItem;
