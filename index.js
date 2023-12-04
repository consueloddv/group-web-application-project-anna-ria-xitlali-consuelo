
//express
const express = require('express')
const dbOperations = require('./database.js');
const axios = require('axios').default;

const app = express()
const port = 3000

/**To serve static files such as images, CSS files, and JavaScript files, create a folders
* and include the below statement.  The below statement assumes that I have a folder named assets
**/

// Deliverable 4
// Middlewares

// Middleware is implemented for static files
app.use(express.static('assets'))

// Middleware is implemented for viewing template engine
app.set("view engine", "hbs");
// allows our application to use .html extension | *Create a views folder and add your HTML documents
app.engine('html', require('hbs').__express);

// Middleware is implemented to parse json data
// parse application/json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Application has minimum 5 routes implemented

// Route #1
// Renders data back to the client (Welcome Firstname, Lastname) (1)
// submit login details
app.get('/submit', async(req, res) => {
  dbOperations.getUserByUserName(req.query.Uname, req.query.password, res)
})

// Route #2
// Renders data back to the client (Book details) (2)
// Makes call to external REST Api
// Returns JSON Data from external REST Api
// Route to get all books
app.get('/books', async (req, res) => {
   try {
     const response = await axios.get('https://gutendex.com/books/'); // Make an API call to Open Library
     const books = response.data.results;
     res.render('books.hbs', { books }); // Render the books template with the retrieved books
   } catch (error) {
     console.error('Error fetching books:', error);
     res.status(500).send('Error retrieving books');
   }
});
 
// Route #3
// Renders data back to the client (User details - Username, Firstname, Lastname, Email) (3)
// routing to profile 
app.get('/profileAccount', function (req,res){
  res.render('profileAccount.hbs', {title:"Your Profile"})
});

// Route #4
// Routing button updatemail
app.get('/changeMail', function (req, res) {
  res.render('changeMail.hbs', { title: "Update Your Email" });
});

// Route #5
// Form to create new account
app.get('/createAccount', function (req, res) {
   res.render('createAccount.hbs', { title: "Create Account" });
});

// Route #5
// Form to create new account
app.post('/createUser', function (req, res) {
  dbOperations.createUser(req.body.userName, req.body.password, req.body.firstName, req.body.lastName, req.body.email, res)
});

// Route #6
// Success message after new account creation
app.get('/accountCreated', function (req, res) {
  res.render('accountCreated.hbs', { title: "Account Created Successfully! Welcome to BookHub!" });
});


app.get('/get_all_users', function (req, res) {
    // Call the function to get all users
    dbOperations.getAllUsers(res);
});

app.post('/delete_user', function (req, res) {
   const {userName, password, firstName, lastName, email, userId} = req.query;
   // Calling the 'deleteAccount'
   dbOperations.deleteAccount(userName, password, firstName, lastName, email, userId, res);
});

app.get('/deleteAccount', function (req, res) {
   res.render('deleteAccount.hbs', { title: "Account Created Successfully! Welcome to BookHub!" });
});

//routing  database
app.get('/', function (req, res) {
	res.render('index.hbs', {title: "BookHub"})
   
   //dbOperations.getAllUsers(res);

});



// listen port 
 app.listen(3000, () => {
   console.log('BookHub started on port 3000');
 });



