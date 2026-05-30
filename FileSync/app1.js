//file sync will block the code ececution it is like synchronous way
const { readFileSync, writeFileSync} = require('fs');
const { join } = require('path');

const path = join(__dirname, '../Content', '/Subfolder', 'new.txt');

console.log('starting');


const read = readFileSync(path, 'utf-8');

console.log(read);

const write = writeFileSync(path, 'This is a new version line\n', {flag: 'a'});

const read2 = readFileSync(path, 'utf-8');
console.log(read2);

console.log('ended');