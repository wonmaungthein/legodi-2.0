const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')
const index = require('./routes/index')
const languageApi = require('./routes/api/languages')
const weegieApi = require('./routes/api/weegie')
const weegieAdmin = require('./routes/admin/weegie')
const languageAdmin = require('./routes/admin/language')

const fileUpload = require('express-fileupload')
const users = require('./routes/admin/users')

const app = express()
app.use(cors())
app.use(fileUpload())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Express Session
app.use(
  session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  })
)

// Passport init
app.use(passport.initialize())
app.use(passport.session())

// Express Validator
app.use(
  expressValidator({
    errorFormatter: (param, msg, value) => {
      var namespace = param.split('.')
      var root = namespace.shift()
      var formParam = root

      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']'
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      }
    }
  })
)

// Connect Flash
app.use(flash())

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  next()
})

app.use('/', index)
app.use('/api/languages', languageApi)
app.use('/api/weegie', weegieApi)
app.use('/admin/weegie', weegieAdmin)
app.use('/admin/users', users)
app.use('/admin/language', languageAdmin)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app