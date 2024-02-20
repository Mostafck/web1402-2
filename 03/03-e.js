let fs=require('fs')
let data=process.argv
function x(err)
{
    if(err)
    {
        console.log("file copyed")
    }
    else
    {
        console.log("error",err)
    }
}
fs.copyFile(data[2],data[3],x)