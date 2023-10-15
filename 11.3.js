function example(n1){
  return function(n2){
    console.log(n1+n2)
  }
}
const sum=example(-7);
console.log(sum(10));