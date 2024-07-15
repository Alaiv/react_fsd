import { IProfile } from '@/entities/Profile';
import { ProfileError } from '../const/constants';

export interface ProfileSchema {
    profileInfo: IProfile | undefined,
    formData?: IProfile | undefined,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validationErrors?: ProfileError[]
}
