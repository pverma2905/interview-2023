const fs = require("fs");

///////////////////////////////////////// Read And Write File //////////////////////////////////
// file write synchrous

// fs.writeFileSync('myfile.txt','thisis content of file1');
// console.log('file write done');


// fie write async
// fs.writeFile('myfile.txt','hello', function(err){
// if(err){
//     console.log("error occured", err)
// }
// console.log("file created successfully")
// })

//console.log("after file write")


// read file sync
// let data = fs.readFileSync("myfile.txt");
// console.log("data of file this is ",data.toString())


// read File async
// fs.readFile("myfile.txt", function(err,data){
//     if(err){
//       console.log('error occured',err);
//       return
//     }else{
//         console.log("content of file is ",data.toString())
//     }
// });

////////////////////////////////////////////// delete file in node js //////////////////////////////
// file remove synchrously
// try{
//     fs.unlinkSync('myfile.txt')
// }catch(err){
//     console.log("error occured", err)
    
//  }



// file remove async
// fs.unlink('myfile.txt', (err)=>{
// if(err){
//     console.log('error occured', err)
// }
// console.log('file deleted successfully')
// })

///////////////////////////////////////////////////// create directory //////////////////////////////


// fs.mkdirSync()
// create directory sync
// try{

//     if(!fs.existsSync('foo')){
//         fs.mkdirSync('foo')
//     }
// }catch(error){
//     console.log("error occured", error)
// }


// fs.mkdir()
fs.mkdir('foo',function(err){
    if(err){
        console.log("error occured", err)
        return
    }
    console.log("directory  created")
})







// create directory async



////////////////////////////////////////////// directory//////////////////////////////////////

// console.log("before removing directory")
// if(fs.existsSync('foo')){
//     fs.rmdirSync('foo') // sync
// }else{
//     console.log('directory not exist')
// }
// console.log("after removing directory")



// async
// console.log("before removing directory")
// fs.rmdir('foo', function(err){
// if(err){
//     console.log("error occured", err)
//     return;
// }
// console.log("directory deleted")
// }) 




fs.writeFileSync()
fs.writeFile()

fs.readFileSync()
fs.readFile()

fs.unlinkSync()
fs.unlink()

fs.mkdirSync()
fs.mkdir()

fs.rmdirSync()
fs.rmdir()

fs.readdirSync()
fs.readdir()

fs.renameSync()
fs.rename()