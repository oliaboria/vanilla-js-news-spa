import ListContainer from './components/list-container';
import LoadMore from './components/load-more';
import NewsItem from './components/news-item';
import router from './config/router.config';
import CommentPage from './pages/comment';
import HomePage from './pages/home';

document.addEventListener('DOMContentLoaded', () => {
    window.customElements.define('news-item', NewsItem);
    window.customElements.define('home-page', HomePage);
    window.customElements.define('list-container', ListContainer);
    window.customElements.define('load-more', LoadMore);
    window.customElements.define('comment-page', CommentPage);

    const navLinks = document.querySelectorAll('.navigation-item');

    navLinks.forEach((link) => {
        const url = link.getAttribute('href');

        link.addEventListener('click', (event) => {
            event.preventDefault();
            router.navigateTo(url);
        });
    });
});
