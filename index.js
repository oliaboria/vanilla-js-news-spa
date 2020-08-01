import Renderer from './src/renderer';
import Router from './src/router';

document.addEventListener('DOMContentLoaded', () => {
    const routerConfig = [
        {
            path: '/news',
            template: '<div>news</div>',
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
