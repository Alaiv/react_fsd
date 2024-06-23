import { classNames } from './classNames';

describe('classNames', () => {
    test('test only main class', () => {
        expect(classNames('stuff')).toBe('stuff');
    });

    test('test with extra classes', () => {
        const expected = 'stuff first second';
        expect(classNames('stuff', {}, ['first', 'second'])).toBe(expected);
    });

    test('test with mods true', () => {
        const expected = 'stuff do da first';
        expect(classNames('stuff', { do: true, da: true }, ['first']))
            .toBe(expected);
    });

    test('test with mods false', () => {
        const expected = 'stuff do';
        expect(classNames('stuff', { do: true, da: false }, [])).toBe(expected);
    });

    test('test with mods undefined and null', () => {
        const expected = 'stuff';
        expect(classNames('stuff', { do: undefined }, []))
            .toBe(expected);
    });

    test('test with no params', () => {
        expect(classNames('')).toBe('');
    });
});
