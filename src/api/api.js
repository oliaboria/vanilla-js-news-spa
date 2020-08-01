import { API_PATH_NAMES, PRETTY_PRINT } from '../constants';
import request from '../utils/request';

export const fetchItemById = async (id) => {
    const item = await request(
        `${API_PATH_NAMES.item}/${id}.json?${PRETTY_PRINT}`,
    );

    return item;
};

export const fetchTopStories = async (orderBy, limitToFirst) => {
    const storiesIds = await request(
        `${API_PATH_NAMES.topstories}?${PRETTY_PRINT}&orderBy="${orderBy}"&limitToFirst=${limitToFirst}`,
    );

    const stories = await Promise.all(
        storiesIds.map(async (storyId) => {
            const story = await fetchItemById(storyId);
            return story;
        }),
    );

    return stories;
};
