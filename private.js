var y=(function()
{
    var x=10;
    return {getter:function(){console.log(x);
        return x;},
             setter:function(value)
    {x=value;console.log(x)}};
    
})();
console.log(y.getter());
