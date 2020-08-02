const template = document.createElement('template');

template.innerHTML = `
    <li class="comment-item">
        <p>
            <span class="title"></span>
            <button class="more-btn"></button>
            <button class="more-btn">[-]</button>
        </p>
        <p class="description"></p>
    </li>
`;

export default template;
