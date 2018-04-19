var gulp = require('gulp');
const fs = require('fs-extra');
const inlineResources = require('angular-inline-resources');


gulp.task('angular:inline', () => {
  return Promise.resolve()
  	.then(() => fs.copy('chat/main', 'tmp'))
    .then(() => inlineResources('tmp'));
});