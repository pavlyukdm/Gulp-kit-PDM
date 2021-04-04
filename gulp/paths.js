module.exports = {
  src: {
    html: 'app/[^_]*.html',
    cssMain: 'app/styles/styles.scss',
    cssLibs: 'app/styles/libs.scss',
    js: 'app/js/main.js',
    images: 'app/img/**/*',
    fonts: 'app/fonts/**/*',
  },
  watch: {
    html: 'app/**/*.html',
    css: 'app/styles/**/*',
    js: 'app/js/**/*',
    images: 'app/img/**/*',
    fonts: 'app/fonts/**/*',
  },
  build: {
    html: 'dist/',
    css: 'dist/css/',
    js: 'dist/js/',
    images: 'dist/img',
    fonts: 'dist/fonts/',
  },
  clean: './dist',
};