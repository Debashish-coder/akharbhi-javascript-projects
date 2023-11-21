function print()
{
    
    console.log(this.age);
    console.log(this.height);
}

var bh={height:9,age:90};
console.log(bh.height);
print.apply(bh);