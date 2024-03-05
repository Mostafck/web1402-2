let fs = require('fs')
let data=process.argv
if(data[2]==='create')
{
    function x(err)
{
    if(err)
    {
        console.log("file created")
    }
    else
    {
        console.log("error",err)
    }
}
    fs.writeFile(data[3],data[4],x)
}
else if(data[2]==='append')
{
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
    fs.appendFile(data[3],data[4],x)
}
else if(data[2]==='deletei')
{
    function x(err)
{
    if(err)
    {
        console.log("file deleted")
    }
    else
    {
        console.log("error",err)
    }
}
    fs.unlink(data[3],x)
}
else if(data[2]==='deleteo')
{
    function x(err)
{
    if(err)
    {
        console.log("folder deleted")
    }
    else
    {
        console.log("error",err)
    }
}
    fs.rmdir(data[3],x)
}

else if(data[2]==='copy')
{
    function x(err)
{
    if(err)
    {
        console.log("copy succses")
    }
    else
    {
        console.log("error",err)
    }
}
    fs.copyFile(data[3],data[4],x)
}
function Error(err, data) {
  if (err) {
    console.log("folder not read")
  }
  else {
    console.log("error", data)
  }
}
function CreatRecord() {
  let data = {
    name: process.argv[3],
    family: process.argv[4],
    id: process.argv[5],
  }
  
  fs.WriteFile(DataBase.JSON, { encoding: "utf8" }, function (err, fileData) {
    if (err) {
      console.log("Err", err)
    }
    else {
      fileData = JSON.parse(fileData)
      fileData.Records.push(data)
      fileData = JSON.stringify(fileData)
      fs.writeFile("DataBase.JSON", fileData, Error)
    }
  });
  fs.readFile('./info.txt','utf8',Error);

}