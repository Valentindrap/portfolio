const { src, watch,  dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function css(){
    return src('src/scss/app.scss')
    
    .pipe(sass())
    .pipe(dest('build/css'))
}

function ver(){
    watch('src/scss/app.scss', css)
}

exports.css = css
exports.ver = ver