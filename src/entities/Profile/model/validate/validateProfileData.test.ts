import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileError } from '../../model/types/ProfileSchema';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    test('empty firstname, age and city', () => {
        const data = {
            username: 'user123',
            lastname: 'asdasd',
            country: Country.England,
            currency: Currency.RUB,
            avatar: 'asdasdas',
        };

        const expectedErrors = [ProfileError.WRONG_USER_DATA, ProfileError.WRONG_AGE, ProfileError.WRONG_CITY];
        const errors = validateProfileData(data);

        expect(errors).toEqual(expectedErrors);
    });

    test('empty username', () => {
        const data = {
            first: 'dfsadas',
            lastname: 'asdasd',
            country: Country.England,
            currency: Currency.RUB,
            avatar: 'asdasdas',
            city: 'sdasdas',
            age: 23,
        };

        const expectedErrors = [ProfileError.WRONG_USER_DATA];
        const errors = validateProfileData(data);

        expect(errors).toEqual(expectedErrors);
    });

    test('undefined data', () => {
        const expectedErrors = [ProfileError.EMPTY_DATA];
        const errors = validateProfileData(undefined);

        expect(errors).toEqual(expectedErrors);
    });

    test('correct data', () => {
        const data = {
            username: 'user123',
            age: 12,
            city: 'asda',
            first: 'asdasd',
            lastname: 'asdasd',
            country: Country.England,
            currency: Currency.RUB,
            avatar: 'asdasdas',
        };

        const expectedErrors: ProfileError[] = [];
        const errors = validateProfileData(data);

        expect(errors).toEqual(expectedErrors);
    });
});
