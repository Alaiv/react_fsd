import path from 'path';
import { buildWebPackConfig } from './config/build/buildWebPackConfig';
import { EnvConfig } from './config/build/types/config';

export default (env: EnvConfig) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    return buildWebPackConfig({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },
        isDev,
        port: PORT,
    });
};
