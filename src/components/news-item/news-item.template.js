const template = document.createElement('template');

template.innerHTML = `
    <style>
        p {
            width: 100%;
            white-space: normal;
        }
    </style>
    <li class="news-item">
        <p>
            <a class="title-link"></a>
            <a class="site-link"></a>
        </p>
        <p>
            <span class="additional-information"></span>
            |
            <a class="comments"></a>
        </p>
    </li>
`;

export default template;
