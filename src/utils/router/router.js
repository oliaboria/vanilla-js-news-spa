import PubSub from '../pubsub';

class Router extends PubSub {
    #routes;

    constructor(routes) {
        super();

        this.#routes = routes.map(({ path, template }) => {
            const regexp = path.replace(/:.+/g, '(\\d+)').replace(/\//g, '\\/');

            return {
                pattern: new RegExp(`^${regexp}$`),
                template,
            };
        });

        this.#listenForPopstate();
        this.#initializeFirstLoad();
    }

    #matchRoute() {
        const uri = window.location.pathname;

        const foundRoute = this.#routes.find((route) => {
            return route.pattern.test(uri);
        });

        return foundRoute;
    }

    #listenForPopstate() {
        window.addEventListener('popstate', () => {
            this.#matchRoute();
            this.#handleRouteChange();
        });
    }

    #handleRouteChange() {
        const route = this.#matchRoute();
        this.notify(route.template);
    }

    #initializeFirstLoad() {
        setTimeout(() => this.#handleRouteChange());
    }

    navigateTo(path, data = {}) {
        window.history.pushState(data, '', path);
        this.#handleRouteChange();
    }

    onRouteChange(fn) {
        this.subscribe(fn);
    }
}

export default Router;
