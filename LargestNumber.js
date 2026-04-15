let a =5;
let b=10;

function determineLargest(a ,b){
   if(a>b){
       return a + " is the largest number";
   }
   else{
       return b + " is the largest number";
   }
} 
console.log(determineLargest(a ,b));