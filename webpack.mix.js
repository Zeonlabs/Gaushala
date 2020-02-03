// Pull in Laravel Mix
const mix = require('laravel-mix');

// Configure what it does
mix.setPublicPath('./public/build')
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter'),
          },
        },
      ],
    },
  })
  .copy('assets', 'public/build/assets')
  .react('src/index.jsx', 'js')
  .sass('scss/style.scss', 'css');


// mix.browserSync({
//   proxy: 'city.api.test',
//   files: [
//     'public/build/js/index.js',
//     'public/build/css/style.css',
//   ],
//   reloadOnRestart: false,
//   startPath: '/',
//   notify: false,
//   logPrefix: 'knovator',
//   logLevel: 'debug',
//   port: 2222,
//   ui: {
//     port: 8080,
//   },
// });
