

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
      res.send(rows);
  });
};


// Function to create user in the database
let createUser = (res) => {
    var createNewUser= 'INSERT INTO user (userName, password, firstName, lastName, email) VALUES (?, ?, ?, ?, ?)';
    var params= [userName, password, firstName, lastName, email, callback]
    db.run(createNewUser, params, function(err) {
        if (err) {
           return console.log (err.message);
            
        } else {
           return console.log ('Account created successfully!');
        }
    });
};


// update user information mail and password 
let updateMailPass = (userId,updatedData, res) => {
  const updateQuery = 'UPDATE user SET password=?, email=? WHERE id=?';
  db.run(updateQuery, [ updatedData.password, updatedData.email], (err) => {
      if (err) {
          console.error(err.message);
          return('Error updating user.');
      } else {
          return('User updated successfully!');
      }
  });
};

  //PROVE IF WORKS 
  /*const userIdToUpdate = 1; // Replace with the actual user ID you want to update
  const updatedMailPassData = {
      password: 'otherpassword',
      email: 'newemail@mail.com'
  };*/
  
  dbOperations.updateMailPass(userIdToUpdate, updatedMailPassData, (result) => {
      console.log(result);
  });

//deleteaccountt
let deleteAccount = (userId, res) => {
  var deleteA ='DELETE FROM user WHERE id=?'
  db.run(deleteA, [userId], (err) => {
    if (err) {
      console.error(err.message);
      return('Error deleting user.');
  } else {
      return('User deleted successfully!');
  }
});
};


module.exports = { getAllUsers, createUser, updateMailPass, deleteAccount};