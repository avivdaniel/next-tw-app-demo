module.exports = {
    plugins: {
        tailwindcss: {
            // Add the `@tailwindcss/aspect-ratio` plugin here
            config: './tailwind.config.js',
            plugins: [
                require('@tailwindcss/aspect-ratio'),
            ],
        },
        autoprefixer: {},
    },
};