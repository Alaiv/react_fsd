import { Currency } from 'entities/Currency/model/types/types';
import { Country } from 'entities/Country/model/types/types';

export enum ProfileError {
    WRONG_USER_DATA = 'WRONG_USER_DATA',
    WRONG_AGE = 'WRONG_AGE',
    WRONG_CITY = 'WRONG_CITY',
    EMPTY_DATA = 'EMPTY_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    profileInfo: IProfile | undefined,
    formData?: IProfile | undefined,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validationErrors?: ProfileError[]
}
