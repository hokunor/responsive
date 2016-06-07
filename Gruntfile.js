'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.initConfig({
	clean: {
		build: ['build']
	},
	watch: {
		css: {
				files: [
					'**/*.scss'
				],
				tasks: ['compass']
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'sass',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		}

	});


	grunt.registerTask('default', [
		'sass:dist'
	]);
	grunt.registerTask('watch', [
		'watch:css'
	]);
	

};
