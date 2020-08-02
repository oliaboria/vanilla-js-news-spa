const template = document.createElement('template');

template.innerHTML = `
    <style>
        wired-listbox {
            --wired-item-selected-color: darkred;
            --wired-item-selected-bg: pink;
        }

        /* workakound: wired-listbox box model isn't working properly with custom font faces */
        wired-listbox { width: 301.5px; }
        wired-item:nth-last-of-type(1) { width: 105.25px; }
    </style>
    <header>
        <wired-listbox
            horizontal="true"
            selected="news"
            role="listbox"
            tabindex="0"
            class="wired-rendered wired-horizontal"
        >
            <wired-item value="default" role="option" href="/" class="navigation-item">
                Hacker News
            </wired-item>

            <wired-item value="news" role="option" href="/news" class="navigation-item">
                News
            </wired-item>

            <wired-item value="comments" role="option" href="/comments/1?id=123" class="navigation-item">
                Comments
            </wired-item>
        </wired-listbox>
    </header>
`;

export default template;
