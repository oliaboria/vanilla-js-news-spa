import ListContainer from './src/components/list-container';
import NewsItem from './src/components/news-item';
import HomePage from './src/pages/home';
import Renderer from './src/renderer';
import Router from './src/router';

document.addEventListener('DOMContentLoaded', () => {
    window.customElements.define('news-item', NewsItem);
    window.customElements.define('home-page', HomePage);
    window.customElements.define('list-container', ListContainer);

    const routerConfig = [
        {
            path: '/',
            template: '<home-page />',
        },
        {
            path: '/news',
            template: '<news-item />',
        },
        {
            path: '/comments/:id',
            template: '<div>comments</div>',
        },
    ];
    const router = new Router(routerConfig);

    router.onRouteChange((template) => {
        const rootElement = document.getElementById('root');
        Renderer.render(rootElement, template);
    });

    const navLinks = document.querySelectorAll('.navigation-item');

    navLinks.forEach((link) => {
        const url = link.getAttribute('href');

        link.addEventListener('click', (event) => {
            event.preventDefault();
            router.navigateTo(url);
        });
    });
});
