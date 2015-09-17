# -----------------------------------
#   project config
# -----------------------------------

gulp         = require('gulp')

# browser refresh
browserSync  = require('browser-sync')

# css compile
sass         = require('gulp-sass')
autoprefixer = require('gulp-autoprefixer')
csso         = require('gulp-csso')
csscomb      = require('gulp-csscomb')
cssbeautify  = require('gulp-cssbeautify')
cmq          = require('gulp-combine-media-queries')

# html compile
jade         = require('gulp-jade')
HTMLprettify = require('gulp-html-prettify')

# js compile
coffeex      = require('gulp-coffee-react')
uglify       = require('gulp-uglify')
clean        = require('gulp-clean')

# browserify
browserify   = require('browserify')
source       = require('vinyl-source-stream')

# -----------------------------------
#   project config
# -----------------------------------

AUTOPREFIXER_CONFIG =
  browsers: ['ie >= 8', 'last 3 versions', '> 2%']
  cascade: no

CSS_BEAUTIFY_CONFIG =
  autosemicolon: on

SASS_CONFIG =
  outputStyle: 'nested'

HTML_PRETTIFY_CONFIG =
  indent_char: '  '
  indent_size: 2

# -----------------------------------
#   gulp tasks
# -----------------------------------

gulp.task 'scss', ->
  gulp.src 'scss/**/!(_)*.scss'
    .pipe sass SASS_CONFIG
    .on 'error', sass.logError
    .pipe autoprefixer AUTOPREFIXER_CONFIG
    .pipe do cmq
    .pipe do csso
    .pipe cssbeautify CSS_BEAUTIFY_CONFIG
    .pipe do csscomb
    .pipe gulp.dest 'app/css'
    .pipe browserSync.stream()

gulp.task 'jade', ->
  gulp.src './jade/**/!(_)*.jade'
    .pipe do jade
    .on 'error', console.log
    .pipe HTMLprettify HTML_PRETTIFY_CONFIG
    .pipe gulp.dest 'app'
    .on 'end', browserSync.reload

gulp.task 'coffee', ->
  gulp.src 'coffee/**/*.coffee'
    .pipe do coffeex
    .pipe gulp.dest 'js'

gulp.task 'browserify', ["coffee"], ->
  browserify './js/main.js'
    .bundle()
    .pipe source "main.js"
    .pipe gulp.dest './app/js'
    .pipe browserSync.stream()

gulp.task 'app',["browserify"], ->
  gulp.src './app/js/main.js'
    .pipe do uglify
    .pipe gulp.dest './app/js'
    .pipe browserSync.stream()

  gulp.src 'js/', read: no
    .pipe do clean

gulp.task 'server', ['scss', 'jade', 'app'], ->
  browserSync.init
    server: './app'
    open: false

  # gulp watch tack
  gulp.watch 'jade/**/*.jade', ['jade']
  gulp.watch 'scss/**/*.scss', ['scss']
  gulp.watch 'coffee/**/*.coffee', ['browserify']

gulp.task 'default', ['server']
