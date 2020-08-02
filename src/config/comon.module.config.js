import HeaderNav from '../components/header-nav';
import ListContainer from '../components/list-container';
import LoadMore from '../components/load-more';
import NewsItem from '../components/news-item';
import Spinner from '../components/spinner';
import Toogle from '../components/toogle';

const module = () => {
    window.customElements.define('header-nav', HeaderNav);
    window.customElements.define('v-spinner', Spinner);
    window.customElements.define('news-item', NewsItem);
    window.customElements.define('list-container', ListContainer);
    window.customElements.define('load-more', LoadMore);
    window.customElements.define('toogle-btn', Toogle);
};

export default module;
