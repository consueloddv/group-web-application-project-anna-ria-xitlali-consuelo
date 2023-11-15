const bcrypt = require('./bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'password01';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
    });
});

// Load hash from your password DB.
bcrypt.compare(someOtherPlaintextPassword, "$2b$10$uoOxtw7rsgl7uOulogX0X.KEjmRphZx.xsVnwaMvc7uVdse6w6Elm", function(err, result) {
    // result == true
    console.log(result);
});