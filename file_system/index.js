const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// To Create a file
// fs.writeFileSync("apple.txt", "I love apple's Iphone 15 pro max ultra");

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     `${dirPath}/apple${i}.txt`,
//     "I love apple's Iphone 15 pro max ultra"
//   );
// }

// Read files
// fs.readdir (dirPath, (err, files) => {
//   files.forEach((element) => {
//     console.log(element);
//   });
// });

// console.log(__dirname);

// fs.rena;

// fs.writeFileSync(filePath, "this is simple text file");
// fs.readFile(filePath, { encoding: "utf-8" }, (err, item) => {
//   console.log(item);
// });
// fs.appendFile(filePath, "add file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("FIle is updated");
//   }
// });

// fs.rename(filePath, `${dirPath}/fruits.txt`, (err) => {
//   if (!err) {
//     console.log("File Renamed Successfully");
//   }
// });

fs.unlinkSync(`${dirPath}/fruits.txt`);

// Buffer = Temperory memory location its needed by nodejs to perform operations
