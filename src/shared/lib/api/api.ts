import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorageConst';

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY),
    },
});
