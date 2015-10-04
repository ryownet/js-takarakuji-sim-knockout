gulp         = require 'gulp'
gulpif       = require 'gulp-if'
path         = require 'path'
fs           = require 'fs'
sass         = require 'gulp-sass'
webpack      = require 'gulp-webpack'
$            = (require 'gulp-load-plugins')()

# FIXME 全体的にエラー対策してません

paths =
  srcDir : 'src'
  dstDir : 'public/assets'
  tstDir : 'test'


# scss to css
gulp.task 'scss', ->
  gulp
    .src "#{paths.srcDir}/**/*.scss"
    .pipe sass
      outputStyle: 'compressed'
#    .pipe $.header('@charset "utf-8";\n')
    .pipe gulp.dest "#{paths.dstDir}"

# make JS
webpackConfig = require './webpack.config.js'
gulp.task 'webpack:js', ->
  gulp.src webpackConfig.webpack.entry
    .pipe webpack webpackConfig.webpack
    .pipe $.if(webpackConfig.js.uglify, $.uglify())
    .pipe gulp.dest webpackConfig.js.dest



# --------------------------------------------
# npm run から呼ばれるpublicタスク

gulp.task 'css', ['scss']


gulp.task 'javascript', ['webpack:js']

gulp.task 'default', ['watch']
gulp.task 'dest', ['css', 'webpack:js']

