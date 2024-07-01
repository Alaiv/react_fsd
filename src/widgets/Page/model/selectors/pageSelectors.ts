import { StateSchema } from 'app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getPageScroll = (state: StateSchema) => state.page.scroll;
export const getPageScrollByPath = createSelector(
    getPageScroll,
    (_: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
