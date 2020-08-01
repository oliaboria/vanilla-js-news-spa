const getUrlHost = (url) => {
    const host = url && url.replace(/.+:\/\//, '').replace(/\/.*$/, '');
    const hostWithoutWWW = host && host.replace(/www\./, '');

    return hostWithoutWWW;
};

export default getUrlHost;
