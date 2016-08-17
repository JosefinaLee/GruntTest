module.exports = function(grunt){

	grunt.initConfig({
		task2:{
			name: "name2"
		},
		task3:{
			name: "lik"
		},
		task4:{
			target: "data",
			name: "lik",
			age: "44",
			height: "199"
		},
		task7:{
			content: "fudgksaluvn",
			pkg: grunt.file.readJSON("package.JSON")
		},
		pkg: grunt.file.readJSON("package.JSON")

	});

	grunt.registerTask("task1", function(){
		console.log("uu");
	});
	grunt.registerTask("task2", function(){
		// if(name.length < 3){
		// 	// grunt.warn("too short");
		// 	// grunt.fatal(" short");
		// }
		name = grunt.config.get('task2.name');
		console.log(name);
	});
	grunt.registerTask("all", ["task1", "task2"]);




	grunt.registerMultiTask("task3", function(){
		console.log(grunt.config.get('task3.name'));
	});

	grunt.registerMultiTask("task4", function(){
		console.log(this.target + ": " + this.data);
	});

	grunt.registerTask("task5", function(){
		grunt.file.mkdir("css/style");
	});

	grunt.registerTask("task6", function(){
		grunt.file.delete("css/style/dist.txt");
	});

	grunt.registerTask("task7", function(){
		// var content = grunt.template.process('<%=task7.pkg.version%>');
		// var content = grunt.template.process('<%=task7.content%>');
		// grunt.file.write('css/style/dist.txt', content);
		grunt.file.write('css/style/dist.txt', grunt.template.process('<%=task7.content%>'));
	});

	grunt.registerTask("task7", function(){
		var content = grunt.template.process('<%=task7.pkg.version%>');
		var content = grunt.template.process('<%=task7.content%>');
		grunt.file.write('css/style/dist.txt', content);
	});

	grunt.registerTask("task9", function(){
		console.log(grunt.file.read('css/style/dist.txt'));
	});

	grunt.registerTask("task10", function(){
		console.log(grunt.file.readJSON('package.JSON'));
	});



	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-connect");

	grunt.registerTask("default", ["connect", "watch:html"]);

	grunt.initConfig({
		connect:{
			xx:{
				options:{
					port: 8001,
					base: "dest/",
					livereload: true
				}
			}
		},
		copy:{
			html:{
				src: "index.html",
				dest: "dest/index.html"
			}
		},
		sass:{
			cs:{
				src: "css/scss.scss",
				dest: "css/style.css"
			},
			css:{
				files:[{
					expand: true,
					cwd: "css/style/",
					src: ["*.scss"],
					dest: "dest/",
					ext: ".css"
				}]
			}
		},
		watch:{
			css:{
				files: "css/scss.scss",
				tasks: ["sass", "copy"]
			},
			html:{
				files: "index.html",
				tasks: "copy",
				options: {
					livereload: true
				}
			}
		},
		concat:{
			con:{
				src: ["css/style.css", 'css/style/dist.txt', "css/st.css"],
				dest: "target.txt"
			}
		},
		cssmin:{
			css:{
				src: "css/style.css",
				dest: "style-min.css"
			}
		}
	});






















}