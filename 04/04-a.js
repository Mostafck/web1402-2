//read a file 
let fs=require('fs')
function Error(err , data)
{
    if(err)
    {
        console.log("folder not read")
    }
    else
    {
        console.log("error",data)
    }
}
fs.readFile('./info.txt','utf8',Error);