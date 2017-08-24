var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", () => {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .js.pipe(gulp.dest("./dist"));
});

gulp.task('watch', ['compile'], function() {
    return gulp.watch('src/**/*.ts', ['compile']);
});
