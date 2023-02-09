import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        port: options.port,
        // открывать в браузере
        open: true,
        historyApiFallback: true
    }
}
