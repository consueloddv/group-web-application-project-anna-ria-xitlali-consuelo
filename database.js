

// data base route

var sqlite3 = require('sqlite3').verbose(); // npm install sqlite3

// Creating a new database instance - Indication of connected database
// Before performing any operations on the database, make sure the database is connected.
let db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    } else {
        // Successful database connection
        console.log('Connected to the SQLite database.');
    }
});

//Get users 

let getAllUsers = (res) => {
  var getAll = 'SELECT username, firstName FROM user';
  db.all(getAll, function (err, rows) {
      if (err) {
          throw err;
      }
      
      // Send the retrieved data back to the client
      res.render('index',(rows));
  });
};

let getUserByUserName = (username, password, res) => {
    var params = [username]
    var getAll = 'SELECT firstName, lastName, email, userId, userName, password FROM user WHERE userName=?';
    
    db.get(getAll, params, function (err, rows) {
        if (!rows || (rows.length == 0)) {
            return "Username not found"
        }

        if (rows.length > 1) {
            return "User name not unique"
        } 
        console.log("users: ", rows)
        // Send the retrieved data back to the client
        // res.render('userdetails',(rows));
        if (err) {
            throw err;
        }
        return rows;
    });
  };


// Function to create user in the database
let createUser = (userName, password, firstName, lastName, email, res) => {
    var createNewUser= 'INSERT INTO user (userName, password, firstName, lastName, email) VALUES (?, ?, ?, ?, ?)';
    var params= [userName, password, firstName, lastName, email];
    
    db.run(createNewUser, params, function(err) {
        if (err) {
           return console.log (err.message);
            
        } else {
           return console.log ('Account created successfully!');
        }
    });
};


// update user information mail and password 
let updateMail = (email, res) => {
  const updateQuery = 'UPDATE user SET  email=? WHERE id=?';
  db.run(updateQuery, [email], (err) => {
      if (err) {
          console.error(err.message);
          return('Error updating user.');
      } else {
          return('User updated successfully!');
      }
  });
};


//deleteaccount
let deleteAccount = (userId, res) => {
  var deleteA ='DELETE FROM user WHERE userId=?';

  var params = [userId];

  db.run(deleteA, params, (err) => {
    if (err) {
      console.error(err.message);
      return('Error deleting account.');
  } else {
      return('Account deleted successfully!');
  }
 }); 
};


let showUser = (res) => {
    res.render('user.hbs', {res})
}


module.exports = { getAllUsers, createUser, updateMail, deleteAccount, getUserByUserName, showUser};

