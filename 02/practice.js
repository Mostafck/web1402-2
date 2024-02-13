
// let arglist
// arglist=process.argv
// let array=[]
// function print (val,index)
// {
//     if(index>=2)
//     {
//         array.push(val)
//     }
// }
// arglist.array.forEach(print)
// console.log("foreach-array",array)
// let array2=[]
// for (let index = 2; index < arglist.length; index++){
//     array2.push(arglist[index])
   
// }
// console.log("for-array",array2)


let arrayinput=process.argv
let PersonalInfo=[]
for (let i = 2; i < arrayinput.length; i+=2) 
{
  person={
    name:arrayinput[i]
    ,
    age:arrayinput[i+1]
  }  
  PersonalInfo.push(person)
    
}
console.log(PersonalInfo)