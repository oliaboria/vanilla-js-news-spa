const template = document.createElement('template');

template.innerHTML = `
    <style>
        .comment-item {
            margin-bottom: 50px;
        }

        .hide {
            display: none;
        }

        .title {
            font-weight: bold;
        };
    </style>
    <li class="comment-item">
        <p>
            <span class="title"></span>
            <toogle-btn></toogle-btn>
        </p>
        <p class="description hide"></p>
        <wired-divider></wired-divider>
    </li>
`;

export default template;
