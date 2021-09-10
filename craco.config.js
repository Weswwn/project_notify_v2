module.exports = {
    style: {
        postcss: {
            plugins: [
                require('@tailwindcss/jit'),
                require('autoprefixer'),
            ],
        },
    },
}
