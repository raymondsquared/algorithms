let oneItem = [1];
let fewItems = [3, 1];
let duplicatetems = [3, 1, 3, 1];
let items = [3, 1, 5, 6, 2, 10, 7];

function sort(collections) {

  // loop through the collection
  for (let x = 1; x <= collections.length; x++) {

    // compare it to its left
    for (let y = main; y >= 0; y--) {

      // swap to the left if the current number is bigger
      let currentPos = sec;
      let leftPos = sec - 1;

      if (collections[currentPos] < collections[leftPos]) {
        let temp = collections[currentPos];
        collections[currentPos] = collections[leftPos];
        collections[leftPos] = temp;
      }
    }
  }
  return collections;
}

console.log(sort(oneItem));
console.log(sort(fewItems));
console.log(sort(duplicatetems));
console.log(sort(items));
