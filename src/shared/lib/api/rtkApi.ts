import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localStorageConst';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API_URL__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '';

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
});
