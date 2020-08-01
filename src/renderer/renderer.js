import sanitizeHtml from 'sanitize-html';

const allowedTags = [
    ...sanitizeHtml.defaults.allowedTags,
    'news-item',
    'home-page',
    'list-container',
];

class Renderer {
    static render(element, unsafeHtmlString) {
        const sanitized = sanitizeHtml(unsafeHtmlString, { allowedTags });
        element.innerHTML = sanitized;
    }
}

export default Renderer;
