let fs=require('fs')
let data=process.argv
function x(err)
{
    if(err)
    {
        console.log("file saved")
    }
    else
    {
        console.log("error",err)
    }
}
fs.appendFile(data[2],data[3],x)