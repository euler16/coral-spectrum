/**
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = function(gulp) {
  const plumb = require('./plumb');
  const eslint = require('gulp-eslint');
  const conf = require('../configs/eslint.conf.js');
  const util = require('../helpers/util');
  
  let src = 'src/scripts/**/*.js';
  
  // Lint all components if we're in the top level builder
  if (util.isTLB()) {
    src = `coral-*/${src}`;
  }
  
  gulp.task('lint', function() {
    return gulp.src(src)
      .pipe(plumb())
      .pipe(eslint(conf))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });
};
