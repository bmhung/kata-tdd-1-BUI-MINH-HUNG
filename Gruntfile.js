module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
		},
		jasmine: {
			src : 'src/**/*.js',
			options : {
				specs : 'spec/**/*.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('default', ['jshint', 'jasmine']);
}