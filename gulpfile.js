var gulp = require('gulp'),
    server = require('gulp-express');
    console.log("Gulp file working maybe");

gulp.task('server', function () {
    return server.run({
        file: './app.js'
    });
});

gulp.task('default', ['server']);