function count(arr, fn) {
        const result = {};
        for(let i = 0; i < arr.length; i++) {
                const word = arr[i];
                if (!result.hasOwnProperty(word)) {
                        result[word] = fn(word);
                }
        }
        return result;
}

const list =['a', 'dog', 'chase', 'a', 'cat'];
const wordLength = function(word) {
        return word.length;
};

const cmap = count(list, wordLength);
console.log(cmap);