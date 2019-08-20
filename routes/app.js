const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

var articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // JSON error
    res.status(err.status || 500);
    res.json({ errors: [{ msg: err.message }] }); // change render to json method
  });
