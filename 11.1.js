const arr = [0,1,6,8,10,32,37,39,46];
let k= 0;
let odd = 0;
let even = 0;
function checkParity(){
  for (let i = 0; i < arr.length; i++){
    if (arr[i]===0){
      k++;
    }
    else if(arr[i] % 2 === 0){
      odd++;
    }
    else if(arr[i] % 2 !== 0){
      even++;
    }
  }
  console.log(`количество нулей: ${k}\n количество четных чисел: ${odd}\n количество нечетных чисел: ${even}`);
};

checkParity();