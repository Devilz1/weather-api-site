let isProd = process.env.NODE_ENV === 'production';

module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
        '@babel/preset-typescript',
    ],
    plugins: [[[!isProd && require.resolve('react-refresh/babel')].filter(Boolean)]]
};
