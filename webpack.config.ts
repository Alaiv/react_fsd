import path from 'path'
import {buildWebPackConfig} from "./config/build/buildWebPackConfig";
import {EnvConfig} from "./config/build/types/config";


export default (env: EnvConfig) => {
    const mode = env.mode || "development";
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    return buildWebPackConfig({
        mode: mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
        isDev,
        port: PORT,
    });
};