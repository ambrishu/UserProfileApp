var express = require('express');
var path = require('path');
var http = require('http');
var multer = require('multer');
var session = require('express-session');

//var favicon = require('static-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

//app.use(favicon());
//app.use(logger('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use('/img',express.static(path.join(__dirname, 'public/images')));
app.use('/javascripts',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/stylesheets',express.static(path.join(__dirname, 'public/stylesheets')));
app.use(session({secret:'ishita'}));
app.use(multer({dest: __dirname + '/public/images/', rename : function(fieldname, filename) { console.log("Old File name"+filename); return filename.toLowerCase()+Date.now() }, onFileUploadComplete: function (file) { console.log(file.fieldname + ' uploaded to  ' + file.path); upload_success=true;}}));



var routes = require('./routes/index');
app.use('/', routes);
app.use('/index', routes);
app.use('/registration', routes);
app.use('/loginsubmit', routes);
app.use('/user', routes);
app.use('/registrationsubmit', routes);
app.use('/updateProfile', routes);
app.use('/getProfileData', routes);
app.use('/updateProfleSubmit', routes);
app.use('/imageUpload', routes);
var server=http.createServer(app);
server.listen(app.get('port'), function ()
	{
		 console.log(
       'Express.js server listening on port ' +
        app.get('port')
      );
	} );

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
