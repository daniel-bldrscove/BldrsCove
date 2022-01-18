module.exports = (ctx) => ({
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
    'postcss-import': {},
    cssnano: ctx.env === 'production' ? {} : false,
  },
})
