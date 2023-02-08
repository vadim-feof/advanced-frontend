import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    // Если не используем typescript - нужен babel-loader для react
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader
    ]
}
