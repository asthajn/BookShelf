var gulp = require('gulp'),
    server = require('gulp-express');
    console.log("Guld file working maybe");

gulp.task('server', function () {
    return server.run({
        file: 'app.js'
    });
});

gulp.task('default', ['server']);