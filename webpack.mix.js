const mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('assets/js/app.js', 'dist/js')
