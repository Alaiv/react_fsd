import { Currency } from 'entities/Currency/model/types/types';
import { Country } from 'entities/Country/model/types/types';

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
    readonly: boolean
}
