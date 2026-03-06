function maxOccurring(arr) {
  let count = {};
  let max = 0;
  let result;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > max) {
      max = count[num];
      result = num;
    }
  }

  return result;
}

console.log(maxOccurring([1,2,2,3,3,3,4]));