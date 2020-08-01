import { API_BASE_URL } from '../../constants';

const request = async (path, options) => {
    try {
        const resp = await fetch(`${API_BASE_URL}/${path}`, options);
        const responseBody = await resp.json();

        const isOk = resp.status >= 200 && resp.status <= 299;

        if (!isOk) {
            throw new Error(resp);
        }

        return responseBody;
    } catch (error) {
        throw new Error(error);
    }
};

export default request;
