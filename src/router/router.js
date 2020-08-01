import PubSub from '../pubsub';

class Router extends PubSub {
    constructor(routes) {
        super();

        this.routes = routes.map(({ path, template }) => {
            const regexp = path.replace(/:.+/g, '(\\d+)').replace(/\//g, '\\/');

            return {
                pattern: new RegExp(`^${regexp}$`),
                template,
            };
        });

        this._listenForPopstate();
        this._initializeFirstLoad();
    }

    _matchRoute() {
        const uri = window.location.pathname;

        const foundRoute = this.routes.find((route) => {
            return route.pattern.test(uri);
        });

        return foundRoute;
    }

    _listenForPopstate() {
        window.addEventListener('popstate', () => {
            this._matchRoute();
            this._handleRouteChange();
        });
    }

    _handleRouteChange() {
        const route = this._matchRoute();
        this.notify(route.template);
    }

    navigateTo(path, data = {}) {
        window.history.pushState(data, '', path);
        this._handleRouteChange();
    }

    onRouteChange(fn) {
        this.subscribe(fn);
    }

    _initializeFirstLoad() {
        setTimeout(() => this._handleRouteChange());
    }
}

export default Router;
