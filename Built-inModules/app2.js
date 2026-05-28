const path = require('path');


console.log(path.sep);
const filePath = path.join(__dirname,'../Content','/Subfolder', 'new.txt');
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.extname(filePath));
