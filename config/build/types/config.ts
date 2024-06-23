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
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number,
    apiUrl: string;
}
