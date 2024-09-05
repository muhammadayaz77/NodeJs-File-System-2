// Read Files Syncronously
// import {readFileSync} from 'node:fs'

// let data = readFileSync('read-file-sync.txt','utf8')
// console.log(data)

// Read Files Asynronously

// import {readFile} from 'node:fs/promises'

// async function readFileAsync(){
//   try{
//     let data = await readFile('read-file-sync.txt','utf8');
//     console.log(data)
//   }
//   catch(err){
//     console.err('Error Found : ',err);
//   }
// }
// readFileAsync();

// Write a File Syncronously

// import {writeFileSync} from 'node:fs';

// writeFileSync('write-file-sync.txt','Hello World');


// Append File the write-file-sync.txt

// import {appendFile} from 'node:fs'

// appendFile('write-file-sync.txt','\nupdates here',(err) => {
//   if(err) throw err;
//   console.log('the data is appended')
// });

import {unlink} from 'node:fs'

unlink('example.txt',(err) => {
  if(err) throw err;
  console.log('example.txt is deleted successfully');
})