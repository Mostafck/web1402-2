let fs=require('fs')
let data=process.argv
function x(err)
{
    if(err)
    {
        if(err.cod==='EPERM')
        {
            fs.unlink(data[2],x)        }
        else
        {
            console.log("Err",err)
        }
        
    }
    else
    {
        console.log("FILE DELETED")
    }
}
fs.unlink(data[2],x)