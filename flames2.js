
let st1="riyas";
let st2="riy";
let str1 = [...st1];
let str2 = [...st2];
let arr = ["f","l","a","m","e","s"];
let l= str1.length;
for(let i=0;i<l;i++){
    if(str2.includes(str1[i])){
        let pos = str2.indexOf(str1[i]);
        str2.splice(pos,1);
        str1.splice(i,1);
        i--;
    }
}
let pos =0;
let count = str1.length+str2.length,k=6;
console.log(count);
while(k!=1){
    let temp = count%k;
    pos = pos+temp;
    if (pos>5) pos = pos%6;
    //console.log(arr[pos]);
    arr.splice(pos,1);
    k--;
}
console.log(arr[0]);