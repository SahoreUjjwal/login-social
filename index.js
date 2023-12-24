const express = require('express');
const app = express();
const port = 8002;

const passport  = require('passport');
const passLocal = require('./config/passportLocal');
const passportGoogle = require('./config/passportSocial');

const cookieParser = require('cookie-parser');
const connectMongo = require('connect-mongo');
const expressLayouts = require('express-ejs-layouts');
const MongoStore = require('connect-mongo');
const db = require('./config/mongoose'); 
app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', './views');

const session = require('express-session');

app.use(session({
    name: 'login',
    // TODO change the secret before deployment in production mode
    secret: 'helloworld',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({  
       mongoUrl:'mongodb://127.0.0.1:27017/login' 
    },
    function(err){
        console.log(err || 'Connected to mongo-store');
    }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticated);

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        //log
    }
    else{
        //log
    }
})