// File system module
// const fs = require("fs").promises;

// Create file
// fs.writeFile("./app.txt", "This is a Node Module .txt File", (err) => {
//   if (err) console.log(err);
//   else console.log("File created successfully");
// });

// Read File
// fs.readFile("./app.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// Rename file
// fs.rename("./app.txt", "./helper.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("File Renamed Successfully");
// });

// Delete File
// fs.unlink("./helper.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("File Deleted Successfully");
// });

// Read and Write Exercise
// async function getSum() {
//   let data = await fs.readFile("./data.json", "utf-8");
//   data = JSON.parse(data);

//   let sum = 0;
//   for (let user of data) {
//     sum = sum + user.salary;
//   }
//   console.log(sum);
// }
// getSum();

// <---------------------- -------------------->

// HTTP Method
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Server Is Now Running");

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1> Hi, This is Node.js HTTP Server</h1>");
// });

// server.listen(3000);

// <---------------------- -------------------->

// create new server
// read html file
// send this data as a response from server

const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  const data = await fs.readFile("./new.html");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});

server.listen(3000);
