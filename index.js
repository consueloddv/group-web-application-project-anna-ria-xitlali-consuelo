
//express
const express = require('express')
const dbOperations = require('./database.js');
const axios = require('axios').default;

const app = express()
const port = 3000

/**To serve static files such as images, CSS files, and JavaScript files, create a folders
* and include the below statement.  The below statement assumes that I have a folder named assets
**/
app.use(express.static('assets'))


// view engine setup
app.set("view engine", "hbs");

// allows our application to use .html extension | *Create a views folder and add your HTML documents
app.engine('html', require('hbs').__express);


// parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




/*
// Function to welcome a user
function welcomeUser(userName) {
    console.log("Welcome " + userName + " ! Enjoy your literary journey.");
 }
 //Define the variable
 var user = "Shuvrajit";
 
 
 //call the function
 welcomeUser(user);
 
 
 
 
 // Function to search for a book
 function searchBook(bookTitle) {
    console.log("Searching for " + bookTitle);
 }
 //Define the variable
 var bookName = "The God of Small Things";
 
 
 //call the function
 searchBook(bookName);
 
 
 
 
 // Function to add a review
 function addReview(bookTitle, review) {
    console.log("Adding review for " + bookTitle + " : " + review);
 }
 //Define the variable
 var comment = "The Characters are just so realistic and full of life along with the beautiful poetic writing style with the wonderful atmosphere built in just for the perfect book. Esthappen, Rahel and Ammu are just my absolute favourites and I love them by all means.";
 
 
 //call the function
 addReview(bookName,comment);
 
 
 // Function to join a book club or fandom
 function joinCommunity(userName, communityType) {
    console.log(userName + " has joined the " + communityType);
 }
 //Define the variable
 var community  = "Fiction Lover";
 
 
 //call the function
 joinCommunity(user, community);*/
 

// Routes
app.get('/', (req, res) => {
   dbOperations.getAllUsers(res)
   //res.render('index.hbs', { title: 'BookHub' });
 });

//Route to submit info
app.get('/submit', (req, res) => {
   // the statement below assigns the paramters passed from the from via the name attribute to the variable formInfo.  
   var formInfo = req.query;
   
   // the second argument passes data back to the 
   res.render('user', {firstname: formInfo.firstName, lastname : formInfo.lastName})
})


/*Route to submit
app.get('/submit', async(req, res) => {
   console.log("submit: ", req.query)
   user = dbOperations.getUserByUserName(req.query.Uname, req.query.passowrd, res)
   if (!user) {
      res.render("User not found!")
   }
   res.render("user", {user})
})*/
 


 // Route to get all books
 app.get('/books', async (req, res) => {
   try {

     const response = await axios.get('https://openlibrary.org/api/books?limit=10'); // Make an API call to Open Library
     console.log("books: ", response.data)

     const books = response.data.docs;
     res.render('books.hbs', { books }); // Render the books template with the retrieved books
   } catch (error) {
     console.error('Error fetching books:', error);
     res.status(500).send('Error retrieving books');
   }
 });
 
 // Route to get a specific book by ID
 app.get('/book/:id', async (req, res) => {
   const bookId = req.params.id;
 
   try {
     const response = await axios.get(`https://openlibrary.org}`); // Make an API call to Open Library
     const book = response.data;
     res.render('book.hbs', { BookHub }); // Render the book template with the retrieved book
   } catch (error) {
     console.error('Error fetching book:', error);
     res.status(404).send('Book not found');
   }
 });
 
 // Route to add a new book review
 app.post('/review', (req, res) => {
   const bookId = req.body.bookId;
   const rating = req.body.rating;
   const reviewText = req.body.reviewText;
 
   // Process review data
   console.log(`Book ID: ${bookId}, Rating: ${rating}, Review Text: ${reviewText}`);
 
   res.send('Thank you for your review!');
 });



//routing  database

app.get('/', function (req, res) {
	res.render('index.hbs', {title: "BookHub"})
   
   //dbOperations.getAllUsers(res);

});

//routing to profile 
   app.get('/profileAccount', function (req,res){
   res.render('profileAccount.hbs', {title:"Your Profile"})
   });
      //Routing  button updatemail
      app.get('/changeMail', function (req, res) {
      res.render('changeMail.hbs', { title: "Update Your Email" });
      });




//routing to create account 

app.get('/createAccount', function (req, res) {
   res.render('createAccount.hbs', { title: "Create Account" });
});

   //Routing to AccountCreated

   app.get('/accountCreated', function (req, res) {
   res.render('accountCreated.hbs', { title: "Account Created Successfully! Welcome to BookHub!" });
   });

   //create account button 
   app.post('/create_User', function (req, res) {
   const {userName, password, firstName, lastName, email} = req.query;

   dbOperations.createUser(userName, password, firstName, lastName, email);
   
   });



// routing to get all users (show all the user on local:host3000/get_all_users)

app.get('/get_all_users', function (req, res) {
    // Call the function to get all users
    dbOperations.getAllUsers(res);
});



//routing to delete

app.post('/delete_user', function (req, res) {
 
   const {userName, password, firstName, lastName, email, userId} = req.query;
   // Calling the 'deleteAccount'
   dbOperations.deleteAccount(userName, password, firstName, lastName, email, userId, res);
 });

 app.get('/deleteAccount', function (req, res) {
   res.render('deleteAccount.hbs', { title: "Account Created Successfully! Welcome to BookHub!" });
});

// listen port 
 app.listen(3000, () => {
   console.log('BookHub started on port 3000');
 });



