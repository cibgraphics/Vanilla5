module.exports = function(grunt) {
  
  // Make sure when installing plugins to use 'npm install <module> --save-dev' to have it add automatically to package.json
  // When installing from a already setup project, use 'npm install' to install dependencies 

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Add plugin tasks
    
  });

  // Load the plugin 
  

  // Default task(s).
  grunt.registerTask('default', ['']);

};