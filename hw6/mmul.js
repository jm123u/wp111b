const mmul = (a, b) => {
        const rowsA = a.length, colsA = a[0].length; //cols=columns 
        const rowsB = b.length, colsB = b[0].length;
        
        if (colsA !== rowsB) {
                throw new Error('Cannot multiply matrices with dimensions ${rowsA}x${colsA} and ${rowsB}x${colsB}`')
        }

        return Array.from({ length: rowsA }, (_, i) => 
        Array.from({ length: colsB }, (_, j) => 
          a[i].reduce((sum, _, k) => sum + a[i][k] * b[k][j], 0)
        )
      );
    };
const a = [[7, 9], [11, 13]];
const b = [[6, 8], [10, 12]];
const product = mmul(a, b);


console.log (product)  // [ [ 132, 164 ], [ 196, 244 ] ]