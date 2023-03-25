function vdot(a, b) {
        if (a.length !== b.length){
                throw""
        }


var sum = 0;
for (var i = 0; i < a.length; i++) {
        sum += a[i] * b[i]
}

return sum;
}

var a = [12, 14, 16]
var b = [11, 13, 15]
var c = vdot(a, b);

console.log(c) //554