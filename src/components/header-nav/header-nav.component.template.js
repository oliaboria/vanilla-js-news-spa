const template = document.createElement('template');

template.innerHTML = `
    <header>
        <wired-listbox
            horizontal="true"
            selected="news"
            style="--wired-item-selected-color:darkred; --wired-item-selected-bg:pink;"
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
