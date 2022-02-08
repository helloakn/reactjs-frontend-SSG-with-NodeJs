// function chunkArray(myArray, chunk_size){
//     var results = [];
    
//     while (myArray.length) {
//         results.push(myArray.splice(0, chunk_size));
//     }
    
//     return results;
// }

function chunkArray(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }

export{
    chunkArray
}