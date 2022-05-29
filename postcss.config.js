module.exports = {
    plugins: {
        'autoprefixer': {
            grid: true,
        },
        'postcss-import': {},
        'postcss-simple-vars': {},
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 3
        },
        'cssnano': {},
    }
}