var partner1 = "riyas";
var partner2 = "riy";
var str1 = [...partner1];
var str2 = [...partner2];
var array = ["Friends","Lovers","Affection","Marriage","Enemy","Siblings"];
var length = str1.length;
for(var i = 0; i < length; i++) {
  if(str2.includes(str1[i])) {
    var order = str2.indexOf(str1[i]);
    str2.splice(order,1);
    str1.splice(i,1);
    i--;
  }
}
var order = 0;
var count = str1.length + str2.length,j = 6;
while(j != 1) {
  var temp = count % j;
  order = order + temp-1;
  if (order > j) 
  order = order % j;
  array.splice(order,1);
  j--;
}
console.log(array[0]);