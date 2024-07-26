// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("easy/test.txt","\nHi this the new line //writing to the file",(err)=>{
    if(err){
        console.error("Error writing to the file",err);
    }
    console.log("Write to file was successfull");
})
