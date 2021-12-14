// import a from './index';
// this way is ok but only work in mjs file maybe

// 1 <---------- file base modules --------->
// 1st example import 
// file based modules imported here.. 
// const a = require("./index");
// console.log(a);

// 2nd example import 
//  const a = require("./index");
//  a.addon(2,7);
//  a.multon(2,7);

// 2 <---------- Buidin modules ---------------->
// example 
// const fs = require("fs");
// console.log(fs);

// const fs = require("fs");
// fs.readFile("./sample.txt","utf-8",(err,data) => {
// if(err){
//     console.log(err);
// }else{
//     console.log(data);
// }
// });
// console.log("return first then upper function");
// this is a asyncronus funtion (fs.readFile) so you could make it sync forcefully

// const fs = require("fs");
// const a = fs.readFileSync("./sample.txt","utf-8");
// // not need to declare call back function 
// console.log(a);
// console.log("return first then upper function");

// const {readFileSync} = require("fs");
// const a = readFileSync("./sample.txt","utf-8");
// console.log(a);

// write a file using fs 
// const fs = require("fs");
// const a = "write this in a file name of write.txt";
// fs.writeFile("./write.txt",a,()=>{
//     console.log("written");
// });
// it created a file WritableStreamDefaultController.txt with a data a in it written 

// same method but now using sync method 
// const fs = require("fs");
// const a = "write this in a file name of write.txt";
// fs.writeFileSync("./sritefilesync.txt",a);
// console.log("i am first");

// let's see path module 
// const path = require("path");
// const a = path.extname("./MERN/nodeJS/index.js");
// console.log(a);
// return the extension of the index.js 

// const path = require("path");
// const a = path.basename("C:/Users/am1tg/Desktop/MERN/nodeJS");
// console.log(a);
// return the base folder name that is nodeJS 

// const path = require("path");
// const a = path.dirname("C:/Users/am1tg/Desktop/MERN/nodeJS");
// console.log(a);
// return the directory name that is nodeJS 

// const path = require("path");
// const b ="./app";
// const a = path.join("C:/Users/am1tg/Desktop/MERN/nodeJS"+b);
// console.log(a);
// join the two path 

// let's see os module 
// const os = require("os");

// const os = require("os");
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// let's talk about http module most important 
// const http = require("http");
// http. and you will see all other modules of it
// we will talk about it later first let see 3rd party modules 

// 3 <---------- Third party modules ---------------->
// my extension cal size of this module. 
// const pokemon = require("pokemon");
// console.log(pokemon.random());
// console.log(pokemon.all());

// ok so you have to write node every time to run a node file but you can skip it using a package npm i nodemon
// npm i nodemon 
// npm i nodemon -g    for system -g


// now create a server and http module 
// it's not for local host server , for when you host online 
// const http = require("http");
// http.createServer((request, response, next) => {
// // request is request by user
// // response is response by server 
// // next is call back function not need here new 
// // request.paramas, request.url, response.
// })

// we have creatd server but we have to listen Now 
// const http = require("http");
// const server = http.createServer((request, response, next) => {})
// server.listen(4000,"localhost",()=>{
//     console.log("server started at localhost http://localhost:4000");
// })

// add some response in it now 
// const http = require("http");
// const server = http.createServer((request, response, next) => {
//     response.end("working");  //write here it will shown on page
// })
// server.listen(4000,"localhost",()=>{
//     console.log("server started at localhost http://localhost:4000");
// })

// so writing port number and hostname in listener directly is not good so improve it
// const http = require("http");
// const PORT = 2000;
// const HOSTNAME = "localhost";
// const server = http.createServer((request, response, next) => {
//     console.log(request.url); // show the url of the page
//     response.end("<h1>Hello</h1>");  //write here it will shown on page
// })
// server.listen(PORT,"localhost",()=>{
//     console.log(`server started at localhost http://${HOSTNAME}:${PORT}`);
// })

// use request method
// const http = require("http");
// const PORT = 2000;
// const HOSTNAME = "localhost";
// const server = http.createServer((request, response, next) => {
//     console.log(request.url); // show the url of the page

// if(request.url === "/about"){
//     response.end("<h1>About</h1>");  //write here it will shown on page
// }else{
//     response.end("<h1>Home</h1>");  //write here it will shown on page
// }

    
// })
// server.listen(PORT,"localhost",()=>{
//     console.log(`server started at localhost http://${HOSTNAME}:${PORT}`);
// })

// now stop pushing these text , now try pages 
// so we have to read the sample html file then send it to the end request 
const http = require("http");
const PORT = 2000;
const HOSTNAME = "localhost";
const fs = require("fs");
const home = fs.readFileSync("./samplefile.html","utf-8",()=>{
    console.log("working home page");
})
const server = http.createServer((request, response, next) => {
    console.log(request.url); // show the url of the page

if(request.url === "/home"){
  return  response.end(home);  //write here it will shown on page
}else{
    return response.end("<h1>not home</h1>");  //write here it will shown on page
} 
})
server.listen(PORT,"localhost",()=>{
    console.log(`server started at localhost http://${HOSTNAME}:${PORT}`);
})

// default commands 
// console.log(__dirname);
// console.log(__filename);

// now server build complete , time to deploy it now 
// const http = require("http");
// const PORT = 2000;
// const HOSTNAME = "localhost";
// const fs = require("fs");
// const home = fs.readFileSync("./samplefile.html","utf-8",()=>{
//     console.log("working home page");
// })
// const server = http.createServer((request, response, next) => {
//     console.log(request.url); // show the url of the page

// if(request.url === "/home"){
//   return  response.end(home);  //write here it will shown on page
// }else{
//     return response.end("<h1>not home</h1>");  //write here it will shown on page
// } 
// })
// server.listen(PORT,"localhost",()=>{
//     console.log(`server started at localhost http://${HOSTNAME}:${PORT}`);
// })

// go to the package . json script tag and the add "start" : "node app.js" the file we have to run,
// to deploy on heroku add cli and login , then don't push node package to it as you know heroku already build it by self using package.json file 

// add a new file Procfile write web: node index.js
// change the port for heroku
// so PORT = process.env.PORT , remove hostname

// after changes look like this
// const http = require("http");
// const PORT = process.env.PORT;

// const fs = require("fs");
// const home = fs.readFileSync("./samplefile.html","utf-8",()=>{
//     console.log("working home page");
// })
// const server = http.createServer((request, response, next) => {
//     console.log(request.url); // show the url of the page

// if(request.url === "/home"){
//   return  response.end(home);  //write here it will shown on page
// }else{
//     return response.end("<h1>not home</h1>");  //write here it will shown on page
// } 
// })
// server.listen(PORT,()=>{
//     console.log("server started");
// })
