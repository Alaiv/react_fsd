import { getQueryParams } from './addQueryParams';

describe('classNames', () => {
    test('One param', () => {
        const params = getQueryParams({
            key: 'value',
        });

        expect(params).toBe('?key=value');
    });

    test('many params', () => {
        const params = getQueryParams({
            key: 'value',
            two: '2',
        });

        expect(params).toBe('?key=value&two=2');
    });

    test('undefined param', () => {
        const params = getQueryParams({
            key: 'value',
            ud: undefined,
        });

        expect(params).toBe('?key=value');
    });
});
