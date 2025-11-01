/**
 * Demo script for brute-force algorithms
 * This script demonstrates the usage of all implemented brute-force algorithms
 */

const {
    bruteForceStringSearch,
    bruteForcePermutations,
    bruteForceLinearSearch,
    bruteForceSubsetSum,
    bruteForceBubbleSort,
    bruteForcePasswordMatch
} = require('./bruteforce');

console.log('═'.repeat(60));
console.log('BRUTE-FORCE ALGORITHMS DEMONSTRATION');
console.log('═'.repeat(60));
console.log('');

// Demo 1: String Search
console.log('1. STRING PATTERN MATCHING');
console.log('─'.repeat(60));
const text = 'The quick brown fox jumps over the lazy dog';
const pattern = 'fox';
const searchResult = bruteForceStringSearch(text, pattern);
console.log(`Text: "${text}"`);
console.log(`Pattern: "${pattern}"`);
console.log(`Result: Found at index ${searchResult}`);
console.log('');

// Demo 2: Permutations
console.log('2. GENERATE PERMUTATIONS');
console.log('─'.repeat(60));
const array = [1, 2, 3];
const perms = bruteForcePermutations(array);
console.log(`Input: [${array}]`);
console.log(`Generated ${perms.length} permutations:`);
perms.forEach((perm, idx) => {
    console.log(`  ${idx + 1}. [${perm}]`);
});
console.log('');

// Demo 3: Linear Search
console.log('3. LINEAR SEARCH');
console.log('─'.repeat(60));
const searchArray = [10, 23, 45, 12, 78, 34, 56];
const target = 34;
const searchIdx = bruteForceLinearSearch(searchArray, target);
console.log(`Array: [${searchArray}]`);
console.log(`Target: ${target}`);
console.log(`Result: Found at index ${searchIdx}`);
console.log('');

// Demo 4: Subset Sum
console.log('4. SUBSET SUM PROBLEM');
console.log('─'.repeat(60));
const numbers = [3, 5, 8, 2, 7];
const targetSum = 10;
const subsetExists = bruteForceSubsetSum(numbers, targetSum);
console.log(`Numbers: [${numbers}]`);
console.log(`Target Sum: ${targetSum}`);
console.log(`Result: ${subsetExists ? 'Subset exists!' : 'No subset found'}`);
console.log(`  (Example subset: [3, 5, 2] or [8, 2])`);
console.log('');

// Demo 5: Bubble Sort
console.log('5. BUBBLE SORT');
console.log('─'.repeat(60));
const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = bruteForceBubbleSort(unsorted);
console.log(`Unsorted: [${unsorted}]`);
console.log(`Sorted:   [${sorted}]`);
console.log('');

// Demo 6: Password Matching
console.log('6. PASSWORD MATCHING');
console.log('─'.repeat(60));
const charset = '01';
const maxLen = 4;
const targetPass = '101';
console.log(`Charset: "${charset}"`);
console.log(`Max Length: ${maxLen}`);
console.log(`Target: "${targetPass}"`);
console.log('Attempting to find match...');
const matchResult = bruteForcePasswordMatch(charset, maxLen, targetPass);
console.log(`Result: ${matchResult ? `Found "${matchResult}"` : 'Not found'}`);
console.log('');

console.log('═'.repeat(60));
console.log('DEMONSTRATION COMPLETE');
console.log('═'.repeat(60));
console.log('');
console.log('Note: All algorithms use brute-force approach, which means');
console.log('they try all possible solutions until finding the answer.');
console.log('While simple and reliable, they may be slow for large inputs.');
console.log('');
