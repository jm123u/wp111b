var list = ['a', 'dog', 'chase', 'a', 'cat'];

function count(arr) {
  var cmap = {};
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    cmap[word] = cmap[word] ? cmap[word] + 1 : 1;
  }
  return cmap;
}

var cmap = count(list);
console.log(cmap); 