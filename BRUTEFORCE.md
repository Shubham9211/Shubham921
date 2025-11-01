# Brute-Force Algorithms

This repository includes a comprehensive implementation of various brute-force algorithms in JavaScript.

## Overview

Brute-force algorithms solve problems by trying all possible solutions until the correct one is found. While not always the most efficient approach, they are straightforward to implement and guarantee finding a solution if one exists.

## Implemented Algorithms

### 1. String Pattern Matching
**Function:** `bruteForceStringSearch(text, pattern)`

Searches for a pattern in a text using the brute-force approach by checking every possible position.

**Time Complexity:** O(n*m) where n is text length and m is pattern length

**Example:**
```javascript
const { bruteForceStringSearch } = require('./bruteforce');
console.log(bruteForceStringSearch('hello world', 'world')); // Output: 6
```

### 2. Permutations Generator
**Function:** `bruteForcePermutations(arr)`

Generates all possible permutations of an array using recursive brute-force.

**Time Complexity:** O(n!)

**Example:**
```javascript
const { bruteForcePermutations } = require('./bruteforce');
console.log(bruteForcePermutations([1, 2, 3]));
// Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
```

### 3. Linear Search
**Function:** `bruteForceLinearSearch(arr, target)`

Searches for a target value in an array by checking each element sequentially.

**Time Complexity:** O(n)

**Example:**
```javascript
const { bruteForceLinearSearch } = require('./bruteforce');
console.log(bruteForceLinearSearch([1, 2, 3, 4, 5], 3)); // Output: 2
```

### 4. Subset Sum Problem
**Function:** `bruteForceSubsetSum(arr, target)`

Determines if there exists a subset of the array that sums to the target value by checking all possible subsets.

**Time Complexity:** O(2^n)

**Example:**
```javascript
const { bruteForceSubsetSum } = require('./bruteforce');
console.log(bruteForceSubsetSum([1, 2, 3, 4], 7)); // Output: true
```

### 5. Bubble Sort
**Function:** `bruteForceBubbleSort(arr)`

Sorts an array using bubble sort, a classic brute-force sorting algorithm.

**Time Complexity:** O(n²)

**Example:**
```javascript
const { bruteForceBubbleSort } = require('./bruteforce');
console.log(bruteForceBubbleSort([5, 2, 8, 1, 9])); // Output: [1, 2, 5, 8, 9]
```

### 6. Password Matching
**Function:** `bruteForcePasswordMatch(charset, maxLength, target)`

Generates all possible combinations from a charset to match a target string.

**Time Complexity:** O(c^l) where c is charset size and l is max length

**Example:**
```javascript
const { bruteForcePasswordMatch } = require('./bruteforce');
console.log(bruteForcePasswordMatch('abc', 3, 'ab')); // Output: 'ab'
```

## Running Tests

To run the test suite:

```bash
node test-bruteforce.js
# or using npm
npm run test:bruteforce
```

## Running the Demo

To see all algorithms in action:

```bash
node demo-bruteforce.js
# or using npm
npm run demo:bruteforce
```

## Usage

Include the module in your JavaScript code:

```javascript
const bruteforce = require('./bruteforce');

// Use any of the functions
const result = bruteforce.bruteForceStringSearch('hello', 'llo');
console.log(result); // 2
```

## Performance Considerations

Brute-force algorithms are generally:
- **Simple to implement and understand**
- **Guaranteed to find a solution** (if one exists)
- **Inefficient for large inputs** due to high time complexity

For production use with large datasets, consider more efficient algorithms like:
- Boyer-Moore or KMP for string searching
- Binary search for sorted arrays
- Dynamic programming for subset sum
- QuickSort or MergeSort for sorting

## License

ISC
