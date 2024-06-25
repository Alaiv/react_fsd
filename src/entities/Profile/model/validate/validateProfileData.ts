import { IProfile, ProfileError } from '../types/ProfileSchema';

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) {
        return [ProfileError.EMPTY_DATA];
    }

    const {
        username,
        age,
        first,
        city,
    } = profile;

    const errors: ProfileError[] = [];

    if (!first || !username) {
        errors.push(ProfileError.WRONG_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ProfileError.WRONG_AGE);
    }

    if (!city) {
        errors.push(ProfileError.WRONG_CITY);
    }

    return errors;
};
