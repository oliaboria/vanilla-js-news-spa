const template = document.createElement('template');

template.innerHTML = `
    <style>
        p {
            width: 100%;
            white-space: normal;
        }

        p,
        a {
             margin-bottom: 3px;
        }

        wired-link {
            --wired-link-decoration-color: darkred;
        }
    </style>
    <li class="news-item">
        <p>
            <wired-link class="title-link" target="_blank" rel="noopener noreferrer"></wired-link>
            <span class="site-link"></span>
        </p>
        <p>
            <span class="additional-information"></span>
            |
            <wired-link class="comments"></wired-link>
        </p>
    </li>
`;

export default template;
