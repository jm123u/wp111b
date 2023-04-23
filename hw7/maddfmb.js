function made(a, b) {
        if (a.length !== b.length || a[0].length !== b[0].length) {
          throw new Error('Matrix mismatch');
        }
      
        let result = [];
        let i = 0;
        while (i < a.length) {
          let row = [];
          let j = 0;
          while (j < a[0].length) {
            row.push(a[i][j] + b[i][j]);
            j++;
          }
          result.push(row);
          i++;
        }
        return result;
      }
      
      class Matrix {
        constructor(m) {
          this.m = m;
        }
      
        add(b) {
          return made(this.m, b);
        }
      
        mul(b) {
          if (this.m[0].length !== b.length) {
            throw new Error('Matrix mismatch');
          }
      
          let result = [];
          let i = 0;
          while (i < this.m.length) {
            let row = [];
            let j = 0;
            while (j < b[0].length) {
              let sum = 0;
              let k = 0;
              while (k < this.m[0].length) {
                sum += this.m[i][k] * b[k][j];
                k++;
              }
              row.push(sum);
              j++;
            }
            result.push(row);
            i++;
          }
          return result;
        }
      }
      
      let a = [[5, 10], [6, 12]];
      let b = [[4, 8], [3, 9]];
      let c = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      let d = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];
      
      let matrixA = new Matrix(a);
      let matrixB = new Matrix(b);
      let matrixC = new Matrix(c);
      let matrixD = new Matrix(d);
      
      console.log(matrixA.add(matrixB)); // [[9, 18], [9, 21]]
      console.log(matrixC.mul(matrixD)); // [[84, 90, 96], [201, 216, 231], [318, 342, 366]]
      