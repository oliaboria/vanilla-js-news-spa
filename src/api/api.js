import { API_PATH_NAMES, PRETTY_PRINT } from '../contsants';
import request from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
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
