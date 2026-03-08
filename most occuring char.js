function count(str) {
  let freq = {};
  let max = 0;

  // Count frequency of characters
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > max) {
      max = freq[char];
    }
  }

  // Store characters with maximum frequency
  let result = [];
  for (let char in freq) {
    if (freq[char] === max) {
      result.push(char);
    }
  }

  // Return single character or array
  return result.length === 1 ? result[0] : result;
}

// Calling the function
console.log(count("abbccc"));      // 'c'
console.log(count("abbcccddd"));   // ['c','d']