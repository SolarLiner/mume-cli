var gulp= require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./dist"));
});

gulp.task('watch', ['compile'], function() {
    gulp.watch('src/**/*.ts', ['compile']);
});