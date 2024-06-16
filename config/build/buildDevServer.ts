import type { Configuration as DevServConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServConfiguration {
    return {
        port: options.port,
        open: true,
        // to correct work with SPA
        historyApiFallback: true,
        hot: true,
    };
}
