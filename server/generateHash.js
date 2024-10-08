const bcrypt = require('bcrypt');

const password = '123teste';
bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(hash); 
});
