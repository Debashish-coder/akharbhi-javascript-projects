function biscuit(){
    this.size=4;
    this.color="brown";
    this.shape="triangel";
    this.price=10;
};
var x=new biscuit();
console.log(x);
console.log(typeof x);
var y=new biscuit();
console.log(x===y);