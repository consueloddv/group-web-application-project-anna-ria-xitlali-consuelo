
// Deliverable 5
// file named database.js, contains all SQL queries

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

// data base routes

// Query #1
// CREATE operation
// Function to create user in the database
let createUser = (userName, password, firstName, lastName, email, res) => {
    var createNewUser= 'INSERT INTO user (userName, password, firstName, lastName, email, userId) VALUES (?, ?, ?, ?, ?, ?)';
    var userId = generateUUID()
    var params= [userName, password, firstName, lastName, email, userId];
    if (!userName || userName == '') {
        res.render('error', {
            message: "userName is Empty or undefined"
        })
    }
    if (!password || password == '') {
        res.render('error', {
            message: "password is Empty or undefined"
        })
    }
    if (!firstName || firstName == '') {
        res.render('error', {
            message: "firstName is Empty or undefined"
        })
    }
    if (!lastName || lastName == '') {
        res.render('error', {
            message: "lastName is Empty or undefined"
        })
    }
    if (!email || email == '') {
        res.render('error', {
            message: "email is Empty or undefined"
        })
    }
    
    db.run(createNewUser, params, function(err) {
        if (err) {
            res.render('error', {
                message: err.message
            })
        } else {
           res.render('accountCreated', {})
        }
    });
};

// Query #2
// RETRIEVE operation
// Get a user and validate password
let getUserByUserName = (username, password, res) => {
    var params = [username]
    var getAll = 'SELECT firstName, lastName, email, userId, userName, password FROM user WHERE userName=?';
    if (!username || username == '') {
        res.render('error', {
            message: "userName is Empty or undefined"
        })
    }
    if (!password || password == '') {
        res.render('error', {
            message: "password is Empty or undefined"
        })
    }
    db.get(getAll, params, function (err, user) {
        if (err) {
            res.render('error', {
                message: err.message
            })
        }
        if (!user) {
            res.render('userNotFound',({
                username : username
            }));
        }
        else if (user.password != password) {
            res.render('incorrectPassword',({
                username : username
            }));
        }
        else {
            res.render('user',(user));
        }
       
    });
};

let logIn = (username, password, res) => {
    
    var params = [username, password]
    var getAll = 'SELECT firstName, lastName, email, userId, userName, password FROM user WHERE userName = ? AND password = ?';
    
    db.all(getAll, params, function (err, rows) {
        if (!rows || (rows.length == 0)) {
            // user not found or password error
            console.log('Check your username and password')
        } else if (err) {
            // error callback
            throw err;
        } else {
            //success logged in
            console.log("logged in user: ", rows)
            res.render('user.hbs', {rows})
        }

        
    });
  };

// Query #3
// RETRIEVE operation
// Get a list of all users
let getAllUsers = (res) => {
  var getAll = 'SELECT username, firstName FROM user';
  db.all(getAll, function (err, rows) {
      if (err) {
        res.render('error', {
            message: err.message
        })
      }
      
      // Send the retrieved data back to the client
      res.render('index',(rows));
  });
};

// Query #4
// UPDATE operation
// update user information - email
let updateMail = (email, res) => {
  const updateQuery = 'UPDATE user SET  email=? WHERE id=?';
  db.run(updateQuery, [email], (err) => {
      if (err) {
        res.render('error', {
            message: err.message
        })
      } else {
          return('User updated successfully!');
      }
  });
};

// Query #5
// DELETE operation
// delete a user entry
let deleteAccount = (userId, res) => {
  var deleteA ='DELETE FROM user WHERE userId = ?';

  var params = [userId];

  db.run(deleteA, params, (err) => {
    if (err) {
        res.render('error', {
            message: err.message
        })
  } else {
      return('Account deleted successfully!');
  }
 }); 
};

//clear all nulls
let clearAllNulls = (res) => {
    var deleteAllNull ='DELETE FROM user WHERE userId is null';
  
  
    db.run(deleteAllNull, (err) => {
      if (err) {
        console.error(err.message);
        return('Error deleting all nulls.');
    } else {
        return('all nulls deleted successfully!');
    }
   }); 
  };

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

let showUser = (res) => {
    res.render('user.hbs', {res})
}


module.exports = { getAllUsers, createUser, updateMail, deleteAccount, getUserByUserName, showUser, logIn,clearAllNulls};

