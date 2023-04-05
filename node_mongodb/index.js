const dbConnect = require("./db_connect");

// Using promises
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

// Using async await

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};

main();
