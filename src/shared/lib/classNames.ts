export type Mods = Record<string, boolean | string | undefined>;
export type AdditionalMods = Array<string | undefined>;

export function classNames(
    mainClass: string,
    mods: Mods = {},
    additional: AdditionalMods = [],
): string {
    const classMods = Object.keys(mods)
        .filter((key) => Boolean(mods[key]));

    const classes = [
        mainClass,
        ...classMods,
        ...additional.filter(Boolean),
    ];

    return classes.join(' ');
}
