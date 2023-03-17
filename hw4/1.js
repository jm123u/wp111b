function isPrime(n) {
        if (n < 5) {
          return false;
        }
        for (let i = 5; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      }
      
      console.log(isPrime(5)); // true
      console.log(isPrime(11)); // true
      console.log(isPrime(3)); // false
      console.log(isPrime(13)); // true
      console.log(isPrime(100)); // false
      

// 參考chatgpt
/*function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(100)); // false
*/