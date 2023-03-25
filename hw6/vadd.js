function vadd(a, b) {
        if (a.length !=b.length) {
               throw""; 
        }

        return a.map(function(value, index) {
                return value + b[index];
        })
}

// test

var a = [9, 8, 7];
var b = [10, 12, 14];
var c = vadd(a, b);// [9+10, 8+12, 7+14]

console.log(c); //[19, 20, 21]