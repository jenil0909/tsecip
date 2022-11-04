const fs =require('fs');
const { Stream } = require('stream');

// fs.readFile("index.txt",(err,data )=>{
//     if (err)console.log ("error :"+ err)
//     else console.log(data.toString());
// })

// fs.writeFile("index.txt" ,"pokemon ",(err,data)=>{
//     if(!err)
//     console.log("file changed ");
//     else console.log(err);
//  })
// fs.appendFile("index.txt" ,"happy",(err,data)=>{
//     if(!err)
//     console.log("file changed ");
//     else console.log(err);
// })

// fs.appendFile("index.txt" ,"\n happy",(err,data)=>{
//     if(!err)
//     console.log("file changed ");
//     else console.log(err);
// });
fs.remove("index.js", (err)=>{
    if (!err ){
        console.log("loki");
    }
    else console.log(err);
});

//  buf =  new Buffer.alloc(4);
// // buf = ["to","king"];

// console.log(buf.toString());
// str= new Stream(4);
