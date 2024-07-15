import { Currency } from '@/entities/Currency/model/types/types';
import { Country } from '@/entities/Country/model/types/types';

export interface IProfile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}
