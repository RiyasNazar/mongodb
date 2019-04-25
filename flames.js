var partner1 = "riyas";
var partner2 = "riy"; 
var str1 = partner1;
var str2 = partner2;
var array = ["Friends","Love","Affection","Marriage","Enemy","Sibling"];
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
console.log(count);
while(j != 1) {
  var temp = count % j;
  order = order + temp;
  if (order > 5) order = order % 6;
  array.splice(order,1);
  j--;
switch (count) {
    case "Friends":
        console.log("friendship");
        break;
    case "Love":
        console.log("Lovers");
        break;
    case "Affection":
        console.log("Affection");
        break;
    case "Marriage":
        console.log("Marriage");
        break;
    case "Enemy":
        console.log("Enemity");
        break;
    case "Sibling":
        console.log("Siblings");
        break;
    default:
        console.log("FLAME Test works only for different names");
        break;
}     
}   
