const bcrypt = require('bcrypt');
let hash = bcrypt.hashSync('123456',12);
console.log(hash);