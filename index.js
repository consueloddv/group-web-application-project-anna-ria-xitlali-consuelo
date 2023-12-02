//express
const express = require('express')
const dbOperations = require('./database.js');
const app = express()
const port = 3000

/**To serve static files such as images, CSS files, and JavaScript files, create a folders
* and include the below statement.  The below statement assumes that I have a folder named assets
**/
app.use(express.static('assets'))

// view engine setup
app.set("view engine", "hbs");

// parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//checking 

app.get('/', function (req, res) {
	res.render('index.hbs', {title: "BookHub"})
   
   //dbOperations.getAllUsers(res);

});

//create account 


app.get('/createAccount', function (req, res) {
   res.render('createAccount.hbs', { title: "Create Account" });
});

//create accoubnt button 
app.post('/createAccountForm', function (req, res) {
   const {userName, password, firstName, lastName, email} = req.query;

   dbOperations.createUser(userName, password, firstName, lastName, email,);
   
});



//get all users 

app.get('/get_all_users', function (req, res) {
    // Call the function to get all users
    dbOperations.getAllUsers(res);
});

// update  user email and password

//app.post('/', funtion(req,res){

//});


   // Start the server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
 });