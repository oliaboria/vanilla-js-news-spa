import sanitizeHtml from 'sanitize-html';

class Renderer {
    static render(element, unsafeHtmlString) {
        const sanitized = sanitizeHtml(unsafeHtmlString);
        element.innerHTML = sanitized;
    }
}

export default Renderer;
