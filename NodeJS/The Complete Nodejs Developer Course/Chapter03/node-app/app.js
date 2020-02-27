
//import file system module: https://nodejs.org/dist/latest-v12.x/docs/api/fs.html
const fs = require('fs');

//imports are required to use other files, standard language feature(as this) or npm packages
fs.writeFileSync('appo.txt','wrote by node.js');

//it's a best practice to mantain the same import name (fs) as show in the documentation page

//////////////////////////////////////////////////////////////////////////////
fs.appendFileSync('appo.txt','\n--- --- --- --- --- --- --- --- --- --- --- --- ');
fs.appendFileSync('appo.txt','\nWe append all the day long');