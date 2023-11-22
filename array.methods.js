var array=new Array(1,2,3,4,5);
console.log(array);
console.log(typeof array);
console.log("the array length is=",array.length);
array.push(9);
console.log(array);
console.log("after delation the array lenh is",array.length);
array.pop();
console.log(array);
console.log(array.pop(2));
console.log(array);
array.forEach(function(val)
{
    console.log(val+5);
    
})
console.log(array);
for(let i=0;i<array.length;i++)
{
    array[i]=array[i]+10;
}
console.log(array);
array[-1]=90;
console.log(array);
console.log(array.length);
array.forEach(function(value)
{
    console.log(value);
})
