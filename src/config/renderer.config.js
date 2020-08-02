import sanitizeHtml from 'sanitize-html';

const allowedTags = [
    ...sanitizeHtml.defaults.allowedTags,
    'header-nav',
    'list-container',
    'load-more',
    'toogle-btn',
    'comment-item',
    'news-item',
    'home-page',
    'comment-page',
];

export default allowedTags;
