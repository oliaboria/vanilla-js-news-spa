import CommentPage from './comment.page';
import CommentForm from './components/comment-form';
import CommentItem from './components/comment-item';

const module = () => {
    window.customElements.define('comment-form', CommentForm);
    window.customElements.define('comment-item', CommentItem);
    window.customElements.define('comment-page', CommentPage);
};

export default module;
