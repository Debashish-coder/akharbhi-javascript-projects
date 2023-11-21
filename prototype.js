var boy={
    name:"Debashish",
    weight:89,
    height:5.9
}
var student={
    class:9,
    school:"tact",
    course:"MCA"
}
console.log(boy);
console.log(student);
student.__prototype__=boy;
console.log(student);