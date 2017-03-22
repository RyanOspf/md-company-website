//引入gulp
var gulp = require("gulp");

//引入组件
var htmlmin = require("gulp-htmlmin"), //html压缩
      imagemin = require("gulp-imagemin"), //图片压缩
      pngcrush = require("imagemin-pngcrush"),
      minifycss = require("gulp-minify-css"), //css压缩
      jshint = require("gulp-jshint"), //js检测
      uglify = require("gulp-uglify"), //js压缩
      concat = require("gulp-concat"), //文件合并
      rename = require("gulp-rename"), //文件更名
      less = require("gulp-less"), //less转换
      notify = require("gulp-notify"); //提示信息

//压缩html
gulp.task("html",function(){
	return gulp.src("*.html") //*代表所有,也可以写具体的html文件名
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest("MDmin/"))
	.pipe(notify({message:"html task ok"}))
});

//压缩图片(感觉没有变化，看来不是很适用啊,放弃了)
gulp.task('images',function() {
    return gulp.src('img/*')
//  .pipe(imagemin()) //压缩图片时总会报错，还没找到原因
    .pipe(gulp.dest('MDmin/img'))
    .pipe(notify({ message: 'Images task ok' }))
});

//压缩、重命名css文件
gulp.task("css",function(){
	return gulp.src("css/*.css") //找到要处理的css文件
	//.pipe(rename({suffix:".min"})) //重命名
	.pipe(minifycss()) //执行压缩
	.pipe(gulp.dest("MDmin/css")) //放到新文件夹下
	.pipe(notify({message:"css is ok"})) //成功的提示
});

//合并、压缩、重命名css
/*gulp.task('hebing',function(){
	return gulp.src('css/*.css')
	.pipe(concat('main.css')) //把css文件夹下的所有css文件合并到main.css
	.pipe(gulp.dest('MDmin/css')) //放到MDmin/css文件夹下
	.pipe(rename({suffix:'.min'})) //再重命名一下xx.min.css
	.pipe(minifycss())//执行压缩
	.pipe(gulp.dest('MDmin/css')) //把压缩的css放到MDmin/css下
	.pipe(notify({message:'hebing is ok!'})) //成功提示
})*/

//压缩、重命名js文件
gulp.task("js",function(){
	return gulp.src("js/*.js")
//	.pipe(rename({suffix:".min"})) //重命名
	.pipe(uglify())
	.pipe(gulp.dest("MDmin/js"))
	.pipe(notify({message:"js is ok!"}))
})

// 合并、重命名、压缩js文件
/*gulp.task('js', function() {
  return gulp.src('js/*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('MDmin/js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('MDmin/js'))
  .pipe(notify({ message: 'js task ok' }));
});*/


//less转css
gulp.task("less",function(){
	return gulp.src("less/*.less")
	.pipe(less())
	.pipe(gulp.dest("MDmin/css"))
	.pipe(notify({message:"less 转 css is ok!"}))
})


/*
默认任务名为default 可以取其他名字
启动监听事件：命令提示符执行gulp default
注意：该命令符执行需打开状态，关闭后监听事件结束(ctrl+c)
*/

gulp.task("default",function(){
	gulp.run("html","css","js","images","less"); //运行各种任务

	//监听单个html文件变化
	gulp.watch("index.html",function(){
		gulp.run("html");
	});

	//watch .less files
	gulp.watch("less/*.less",["less"]);//后面的参数应该是上面的任务名称(task)

	//watch .css files
	gulp.watch("css/*.css",["css"]);

	//watch .js files
	gulp.watch("js/*.js",["js"]);

	//watch image files
	//gulp.watch("images/*",["images"]);

})


 




