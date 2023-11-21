var x=(function abcd()
{ var a=10;
    function deba(){
        a++;
        console.log(a);
    }
    console.log(a);
    deba();
    return deba;

})();

console.log(x());