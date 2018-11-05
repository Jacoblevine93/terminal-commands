const fs = require('fs');

 module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
   });
 };

 module.exports.touch = (userInput) => {
  fs.writeFile(userInput, data, (err) => {
  	if (err) throw err;
  		console.log('File created');
  });
};

module.exports.mkdir = (userInput) => {
  fs.mkdir('./' + '${userInput}', {recursive: true}, (err) => {
  	if (err) throw err;
  	console.log('Directory made')
  });
};