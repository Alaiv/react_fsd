export type BuildMode = 'production' | 'development';

export interface EnvConfig {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string,
    locales: string,
    buildLocales: string
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
    apiUrl: string,
    project: 'storybook' | 'frontend' | 'jest'
}
