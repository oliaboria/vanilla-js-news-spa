const template = document.createElement('template');

template.innerHTML = `
    <style>
        wired-textarea {
            margin: 20px 0;
        }
        wired-button {
            display: block;
            margin-bottom: 30px;
        }
    </style>
    <div>
        <wired-textarea placeholder="Enter text" rows="6"></wired-textarea>
        <wired-button>Add comment</wired-button>
    </div>
`;

export default template;
