module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
		},
		jasmine: {
			src: 'test/**/*.js'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('default', ['jshint', 'jasmine']);
}