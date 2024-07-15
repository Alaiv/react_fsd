import { rtkApi } from '@/shared/lib/api/rtkApi';
import { Notification } from '../model/types/notificationSchema';

export const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useGetNotifications = notificationApi.useGetNotificationsQuery;
