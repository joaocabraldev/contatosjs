/*
 * grunt-sub
 * https://github.com/Ramon/grunt-subgrunt
 *
 * Copyright (c) 2015 ramon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('sub', 'Run subtask on another file', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      log: true
    });
    var that = this;
    var start = Date.now();
    var gruntfile=this.data.gruntfile;
    var task=this.data.task;
    var done=this.async();
    var param = {
      cmd: 'grunt',
      args: [task,'--gruntfile',gruntfile],
      opts: {
        env: process.env
      }
    };

  // make a child
    grunt.log.writeln('Sub start');
    grunt.log.write(gruntfile);
    grunt.log.write(" ");
    grunt.log.writeln(task);

  var fail=true;
  var child = grunt.util.spawn(param,
    function (err, res, code) {
        grunt.log.writeln('Sub done ');
        grunt.log.writeln(String(res));
      if (err || code !== 0) {
        fail = true;
      }
      else {
        fail = false;
      }
      // bye
      done();
    }
  );

  });

};
