import sanitizeHtml from 'sanitize-html';

import allowedTags from '../../config/renderer.config';

class Renderer {
    static render(element, unsafeHtmlString) {
        const sanitized = sanitizeHtml(unsafeHtmlString, { allowedTags });
        element.innerHTML = sanitized;
    }
}

export default Renderer;
