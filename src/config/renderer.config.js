import sanitizeHtml from 'sanitize-html';

const allowedTags = [
    ...sanitizeHtml.defaults.allowedTags,
    'news-item',
    'home-page',
    'list-container',
    'comment-page',
    'comment-item',
];

export default allowedTags;
