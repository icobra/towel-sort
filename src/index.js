
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix == "undefined" || matrix.length == 0)
  {
    return [];
  }
  let arr = [];
  let new_arr;
  for(x = 0; x < matrix.length; x++){
    if(x % 2 == 0){
      arr = arr.concat(matrix[x]);
    } else {
      new_arr = [];
      for(y=0; y < matrix[x].length; y++){
          new_arr.unshift(matrix[x][y]);
      }
      arr = [...arr,...new_arr];
    }
  }
  return arr;
}
