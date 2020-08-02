const template = document.createElement('template');

template.innerHTML = `
    <style>
        .list-container {
            list-style: none;
            padding-left: 0;
        }
    </style>
    <ol class="list-container"></<ol>
`;

export default template;
