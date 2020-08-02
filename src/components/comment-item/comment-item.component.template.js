const template = document.createElement('template');

template.innerHTML = `
    <li class="comment-item">
        <p>
            <span class="title"></span>
            <toogle-btn></toogle-btn>
        </p>
        <p class="description"></p>
    </li>
`;

export default template;
