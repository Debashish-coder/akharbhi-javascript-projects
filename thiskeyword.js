
function paass(x,y)
{

    console.log(x+y);
}
var obj={age:34}
paass.call(obj,1,2);
console.log(obj);

var break1=paass.bind(obj);
paass.bind(break1());
paass.applly(2,5);
