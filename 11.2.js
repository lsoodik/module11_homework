const x=+prompt ("введите число");
console.log(x);
function checkPrime(x){
   
   if ((x < 0 || x > 1000)||isNaN(x)){
      console.log("данные неверны, попробуйте заново");
      return;
   }
   for (let i=2; i< x; i++){
     if (x%i===0){
       return "составное число";
     } 
   }
   return "простое число";
}

console.log(checkPrime(x));