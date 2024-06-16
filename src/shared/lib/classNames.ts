type Mods = Record<string, boolean | string>

export function classNames(mainClass: string, mods: Mods = {}, additional: string[] = []): string {
    const classMods = Object.keys(mods)
        .filter((key) => Boolean(mods[key]));

    const classes = [
        mainClass,
        classMods,
        ...additional.filter(Boolean),
    ]

    return classes.join(' ');
}

classNames("btn", {hovered: true}, ["man"])