import { API_PATH_NAMES, PRETTY_PRINT } from '../constants';
import request from '../utils/request';

export const fetchTopStories = async (orderBy, limitToFirst) => {
    const storiesIds = await request(
        `${API_PATH_NAMES.topstories}?${PRETTY_PRINT}&orderBy="${orderBy}"&limitToFirst=${limitToFirst}`,
    );

    const stories = await Promise.all(
        storiesIds.map(async (storyId) => {
            const story = await request(
                `${API_PATH_NAMES.item}/${storyId}.json?${PRETTY_PRINT}`,
            );
            return story;
        }),
    );

    return stories;
};

export const fetchItem = async (id) => {
    const item = await request(
        `${API_PATH_NAMES.item}/${id}.json${PRETTY_PRINT}`,
    );

    return item;
};
