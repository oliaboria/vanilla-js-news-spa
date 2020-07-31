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
        console.log(template);
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
