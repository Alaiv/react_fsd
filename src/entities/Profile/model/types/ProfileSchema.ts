import { Country, Currency } from 'shared/const/commonTypes';
import errorBoundary from 'app/providers/errorBoundary/ui/ErrorBoundary';

export interface IProfile{
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    profileInfo: IProfile | undefined,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
