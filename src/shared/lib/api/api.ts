import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/localStorageConst';

export const $api = axios.create({
    baseURL: __API_URL__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '';
    }
    return config;
});
