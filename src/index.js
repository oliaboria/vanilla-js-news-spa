import 'wired-elements/lib/wired-elements-iife';

import './styles/fonts.css';
import './styles/index.css';

import commonModule from './config/comon.module.config';
import commentModule from './pages/comment/comment.module';
import homeModule from './pages/home/home.module';

document.addEventListener('DOMContentLoaded', () => {
    commonModule();
    commentModule();
    homeModule();
});
