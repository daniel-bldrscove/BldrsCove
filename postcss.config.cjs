module.exports = (ctx) => ({
  plugins: {
    tailwindcss: {},
    'postcss-import': {},
    autoprefixer: {},
    cssnano: ctx.env === 'production' ? {} : false,
  },
})
