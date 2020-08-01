import getUrlHost from '../../utils/getUrlHost';
import timeSince from '../../utils/timeSince';

import template from './news-item.template';

class NewsItem extends HTMLElement {
    #root;
    #titleEl;
    #siteEl;
    #additionalInfEl;
    #commentsEl;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));

        this.#titleEl = this.#root.querySelector('.title-link');
        this.#siteEl = this.#root.querySelector('.site-link');
        this.#additionalInfEl = this.#root.querySelector(
            '.additional-information',
        );
        this.#commentsEl = this.#root.querySelector('.comments');

        this.#commentsEl.addEventListener(
            'click',
            this.commentsClickHandler.bind(this),
        );
        this.#siteEl.addEventListener(
            'click',
            this.siteClickHandler.bind(this),
        );

        this.render();
    }

    render() {
        this.#renderTitle();
        this.#renderSite();
        this.#renderAdditionalInformationText();
        this.#renderComments();
    }

    #renderTitle() {
        const { title, url } = this.#data;

        this.#titleEl.innerText = title;
        url && this.#titleEl.setAttribute('href', url);
    }

    #renderSite() {
        const { url } = this.#data;
        const host = getUrlHost(url);

        if (host) {
            this.#siteEl.innerText = `(${host})`;
        }
    }

    #renderComments() {
        const { descendants } = this.#data;
        if (descendants) {
            this.#commentsEl.innerText = `${descendants} comments`;
        }
    }

    #renderAdditionalInformationText() {
        const { score, by, time } = this.#data;
        const scoreStr = score ? `${score} points ` : '';
        const byStr = by ? `by ${by} ` : by;
        const timeStr = time ? `${timeSince(time)} ago` : '';

        this.#additionalInfEl.innerText = `${scoreStr}${byStr}${timeStr}`;
    }

    get #data() {
        return JSON.parse(this.getAttribute('data-content')) || {};
    }

    // eslint-disable-next-line class-methods-use-this
    commentsClickHandler(e) {
        e.preventDefault();
    }

    // eslint-disable-next-line class-methods-use-this
    siteClickHandler(e) {
        e.preventDefault();
    }
}

export default NewsItem;
