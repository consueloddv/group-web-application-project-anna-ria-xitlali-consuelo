
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

// Route #7
// Success message after new account creation
app.get('/changeMail', function (req, res) {

  res.render('changeMail', req.body)
  // dbOperations
});

app.post('/update_email', function (req, res) {
  dbOperations.updateMail(req.body.email, req.body.userName, res)
  // dbOperations
})


app.get('/get_all_users', function (req, res) {
    // Call the function to get all users
    dbOperations.getAllUsers(res);
});

app.post('/delete_user', function (req, res) {
   const {userId} = req.body;
  
   console.log(req.body)
   // Calling the 'deleteAccount'
   dbOperations.deleteAccount(userId, res);
});

app.get('/deleteAccount', function (req, res) {
   res.render('deleteAccount.hbs', { title: "Account Created Successfully! Welcome to BookHub!" });
});

//routing  database
app.get('/', function (req, res) {
	res.render('index.hbs', {title: "BookHub"})
   
   //dbOperations.getAllUsers(res);

});

//ADDITIONAL ROUTES THAT MAY BE USED LATER IN OUR APP

// Route to get a specific book by ID (ISBNs, OCLC numbers, lccns & OLIDs) call the external API and return JSON
app.get('/book/:id', async (req, res) => {
  const bookId = req.params.id;
 
try {
  const identifierType = getIdentifierType(bookId);
  const response = await axios.get(`http://openlibrary.org/api/volumes/brief/${identifierType}/${bookId}.json`); // Make an API call to Open Library
  console.log(response.data); // To log the API response     
  const bookInfo = response.data;

if (!bookInfo || Object.keys(bookInfo).length === 0) {
  return res.status(404).json({error: 'Book not found'});
}

res.json({bookInfo}); // Render the book template with the retrieved book
} catch (error) {
  console.error('Error fetching book:', error);
  res.status(500).json({error: 'Internal Server Error'});
  }
});
 
 // Function to determine the type of identifiers allowed
function getIdentifierType(identifier) {
  if (identifier.startsWith('ISBN:')) {
  return 'isbn';
  }else if (identifier.startsWith('oclc')){
  return 'oclc';
  }else if(identifier.startsWith('lccn')){
  return 'lccn';
  }else {
  return 'olid';
  }
};

 // Route to add a new book review
app.post('/review', async (req, res) => {
  try{
  const {bookId, rating, reviewText} = req.body;
  if (!bookID || !rating || !reviewText) {
    return res.status(400).json({error: 'Invalid input data'});
  }
  
  const result = await dbOperations.addReview(bookId, rating, reviewText);
    
  if (result.success) {
    res.status(201).json({message: 'Review added successfully'});
    console.log(`Book ID: ${bookId}, Rating: ${rating}, Review Text: ${reviewText}`);
  }else{
    res.status(500).json({error: 'Failed to add review to the database'});
  }
}catch (error) {
  console.error('Error adding review;', error);
  res.status(500).json({error: 'Internal Server Error'});
}
});


// listen port 
 app.listen(3000, () => {
   console.log('BookHub started on port 3000');
 });


