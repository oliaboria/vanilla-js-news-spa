import 'wired-elements/lib/wired-elements-iife';

import CommentForm from './components/comment-form';
import CommentItem from './components/comment-item';
import HeaderNav from './components/header-nav';
import ListContainer from './components/list-container';
import LoadMore from './components/load-more';
import NewsItem from './components/news-item';
import Spinner from './components/spinner';
import Toogle from './components/toogle';
import CommentPage from './pages/comment';
import HomePage from './pages/home';

document.addEventListener('DOMContentLoaded', () => {
    window.customElements.define('header-nav', HeaderNav);
    window.customElements.define('news-item', NewsItem);
    window.customElements.define('v-spinner', Spinner);
    window.customElements.define('home-page', HomePage);
    window.customElements.define('list-container', ListContainer);
    window.customElements.define('load-more', LoadMore);
    window.customElements.define('comment-page', CommentPage);
    window.customElements.define('comment-item', CommentItem);
    window.customElements.define('toogle-btn', Toogle);
    window.customElements.define('comment-form', CommentForm);
});
