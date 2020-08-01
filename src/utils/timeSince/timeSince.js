const timeSince = (date) => {
    const between = Date.now() / 1000 - Number(date);

    if (between < 3600) {
        return `${Math.floor(between / 60)} minutes `;
    }

    if (between < 86400) {
        return `${Math.floor(between / 3600)} hours `;
    }

    return `${Math.floor(between / 86400)} days`;
};

export default timeSince;
