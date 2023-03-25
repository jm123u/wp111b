const madd = (a, b) => {
        if (a.length !== b.length  || a[0].length !== b[0].length) {
                throw new Error('');
        }

        return a.map((row, i) => row.map ((elem, j) => elem + b[i][j]));
}

const a = [[5, 10], [6, 12]];
const b = [[4, 8], [3, 9]];
const c = [[101, 102, 103], [104, 105, 106], [107, 108, 109]];
const d = [[110, 111, 112], [113, 114, 115], [116, 117, 118]];

console.log (madd(a, b));  // [[9, 18], [9, 21]]
console.log (madd(c, d));  // [[211, 213, 215], [217, 219, 221], [223, 225, 227]]