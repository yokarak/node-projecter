// Node.js program to demonstrate the 
// fs.readdir() method 

// Import the filesystem module 
const fs = require('fs'); 
const path = require('path'); 

var dir = path.dirname('C:\Users\andbi\nodeProjects\learningGit\node-projecter')
// Function to get current filenames 
// in directory with specific extension
//__dirname is the path of the directory 
fs.readdir(dir, (err, files) => { 
if (err) 
	console.log(err); 
else { 
	console.log("\Filenames with the .md extension:"); 
	files.forEach(file => { 
	if (path.extname(file) == ".md") 
		console.log(file); 
	}) 
} 
}) 
