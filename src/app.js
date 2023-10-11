const PORT = 3002;

// ** Requires's ----------------------------------------------------------------------------------------------
const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main-router');
const methodOverride = require("method-override"); 	
const session = require('express-session');
const viewUtils = require('./utils/view-utils');


//  ** Express instances --------------------------------------------------------------------------------------
const app = express();

// ** Middlewares ---------------------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));  
app.use(session({
    secret: "DevVision_secret",
    resave: false,
    saveUninitialized: false
}));


// Template Engine --------------------------------------------------------------------------------------------
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Locals ----------------------------------------------------------------------------------------------------
app.locals = viewUtils;

// Route System require and use() -----------------------------------------------------------------------------
app.use("/", mainRouter);


// Server start on Port
app.listen(PORT, () => console.log('Se prendió en el puerto ' + PORT));

