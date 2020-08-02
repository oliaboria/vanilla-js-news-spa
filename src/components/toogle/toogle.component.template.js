const template = document.createElement('template');

template.innerHTML = `
    <style>
        .toogle-container {
            display: inline-block;
        }

        .hide {
            display: none;
        }
        wired-toggle {
            --wired-toggle-on-color: pink;
        }
    </style>
    <span class="toogle-container">
        <wired-toggle class="more-btn-open" checked></wired-toggle>
        <wired-toggle class="more-btn-close"></wired-toggle>
    </span>
`;

export default template;
