var express = require("express"),
    app = express(),
    Imagemin = require('imagemin'),
    serveIndex = require('serve-index');


app.use(express.static(__dirname + '/public'));
app.use('/public', serveIndex(__dirname + '/public'));

new Imagemin()
    .src('images/test.jpg')
    .dest('./public/')
    .use(Imagemin.jpegtran({progressive: true}))
    .run(function (err, files) {
        console.log(files[0]);
        // => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
    });
    

    
    
    
    
    app.listen(process.env.PORT || 123465);