var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-ruby-sass': 'sass',
            'gulp-minify-css': 'minifyCss'
        }
    });

// Pass name of environment to gulp as an argument `gulp --type=production`
var environment = plugins.util.env.type || 'development';
var inProduction = environment == 'production';

gulp.task('js', function () {
    var webpackConfig = require('./webpack.config.js').getConfig(environment);

    return gulp.src(webpackConfig.entry)
        .pipe(plugins.webpack(webpackConfig))
        .pipe(inProduction ? plugins.uglifyjs() : plugins.util.noop())
        .pipe(gulp.dest('dist/'))
        .pipe(plugins.size({title: 'js'}));
});

gulp.task('sass', function () {
    var s = plugins.sass('./assets/sass/auja.sass', {
        sourcemap: true
    });

    return s.pipe(inProduction ? plugins.minifyCss({compatibility: 'ie8'}) : plugins.util.noop())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/css/auja.css'))
        .pipe(plugins.size({title: 'sass'}));
});

gulp.task('default', ['sass', 'js']);