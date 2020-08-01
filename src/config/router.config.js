import Renderer from '../utils/renderer';
import Router from '../utils/router';

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
        template: '<comment-page />',
    },
];

const router = new Router(routerConfig);

router.onRouteChange((template) => {
    const rootElement = document.getElementById('root');
    Renderer.render(rootElement, template);
});

export default router;
