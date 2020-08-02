const template = document.createElement('template');

template.innerHTML = `
    <style>
        .comment-item {
            margin-bottom: 50px;
        }

        .hide {
            display: none;
        }

        .comment-heading {
            display: flex;
            align-items: center;
        }

        .title {
            font-weight: bold;
            margin-right: 10px;
        };
    </style>
    <li class="comment-item">
        <p class="comment-heading">
            <span class="title"></span>
            <toogle-btn></toogle-btn>
        </p>
        <p class="description hide"></p>
        <wired-divider></wired-divider>
    </li>
`;

export default template;
