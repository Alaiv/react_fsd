import { IProfile } from 'entities/Profile';

export enum ProfileError {
    WRONG_USER_DATA = 'WRONG_USER_DATA',
    WRONG_AGE = 'WRONG_AGE',
    WRONG_CITY = 'WRONG_CITY',
    EMPTY_DATA = 'EMPTY_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    profileInfo: IProfile | undefined,
    formData?: IProfile | undefined,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validationErrors?: ProfileError[]
}
