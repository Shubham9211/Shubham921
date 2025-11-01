/**
 * Test suite for brute-force algorithms
 */

const {
    bruteForceStringSearch,
    bruteForcePermutations,
    bruteForceLinearSearch,
    bruteForceSubsetSum,
    bruteForceBubbleSort,
    bruteForcePasswordMatch
} = require('./bruteforce');

// Test counter
let passed = 0;
let failed = 0;

function assert(condition, testName) {
    if (condition) {
        console.log(`✓ ${testName}`);
        passed++;
    } else {
        console.log(`✗ ${testName}`);
        failed++;
    }
}

console.log('Running Brute-Force Algorithm Tests...\n');

// Test bruteForceStringSearch
console.log('Testing bruteForceStringSearch:');
assert(bruteForceStringSearch('hello world', 'world') === 6, 'Should find "world" at index 6');
assert(bruteForceStringSearch('hello world', 'hello') === 0, 'Should find "hello" at index 0');
assert(bruteForceStringSearch('hello world', 'xyz') === -1, 'Should return -1 for non-existent pattern');
assert(bruteForceStringSearch('', 'test') === -1, 'Should handle empty text');
assert(bruteForceStringSearch('test', '') === -1, 'Should handle empty pattern');
console.log('');

// Test bruteForceLinearSearch
console.log('Testing bruteForceLinearSearch:');
assert(bruteForceLinearSearch([1, 2, 3, 4, 5], 3) === 2, 'Should find 3 at index 2');
assert(bruteForceLinearSearch([1, 2, 3, 4, 5], 1) === 0, 'Should find 1 at index 0');
assert(bruteForceLinearSearch([1, 2, 3, 4, 5], 5) === 4, 'Should find 5 at index 4');
assert(bruteForceLinearSearch([1, 2, 3, 4, 5], 10) === -1, 'Should return -1 for non-existent value');
assert(bruteForceLinearSearch([], 1) === -1, 'Should handle empty array');
console.log('');

// Test bruteForcePermutations
console.log('Testing bruteForcePermutations:');
const perms = bruteForcePermutations([1, 2, 3]);
assert(perms.length === 6, 'Should generate 6 permutations for 3 elements');
assert(JSON.stringify(perms[0]) === JSON.stringify([1, 2, 3]) || 
       JSON.stringify(perms[0]) === JSON.stringify([1, 3, 2]), 'Should generate valid permutations');
const perms2 = bruteForcePermutations([1, 2]);
assert(perms2.length === 2, 'Should generate 2 permutations for 2 elements');
const perms3 = bruteForcePermutations([1]);
assert(perms3.length === 1 && perms3[0][0] === 1, 'Should handle single element');
console.log('');

// Test bruteForceSubsetSum
console.log('Testing bruteForceSubsetSum:');
assert(bruteForceSubsetSum([1, 2, 3, 4], 7) === true, 'Should find subset {3, 4} that sums to 7');
assert(bruteForceSubsetSum([1, 2, 3, 4], 10) === true, 'Should find subset {1, 2, 3, 4} that sums to 10');
assert(bruteForceSubsetSum([1, 2, 3, 4], 15) === false, 'Should return false when no subset sums to 15');
assert(bruteForceSubsetSum([5, 10, 15], 25) === true, 'Should find subset {10, 15} that sums to 25');
console.log('');

// Test bruteForceBubbleSort
console.log('Testing bruteForceBubbleSort:');
const sorted1 = bruteForceBubbleSort([5, 2, 8, 1, 9]);
assert(JSON.stringify(sorted1) === JSON.stringify([1, 2, 5, 8, 9]), 'Should sort array correctly');
const sorted2 = bruteForceBubbleSort([3, 2, 1]);
assert(JSON.stringify(sorted2) === JSON.stringify([1, 2, 3]), 'Should sort descending array');
const sorted3 = bruteForceBubbleSort([1]);
assert(JSON.stringify(sorted3) === JSON.stringify([1]), 'Should handle single element');
const sorted4 = bruteForceBubbleSort([1, 2, 3]);
assert(JSON.stringify(sorted4) === JSON.stringify([1, 2, 3]), 'Should handle already sorted array');
console.log('');

// Test bruteForcePasswordMatch
console.log('Testing bruteForcePasswordMatch:');
const match1 = bruteForcePasswordMatch('abc', 3, 'ab');
assert(match1 === 'ab', 'Should find "ab" in charset "abc" with max length 3');
const match2 = bruteForcePasswordMatch('01', 4, '10');
assert(match2 === '10', 'Should find "10" in charset "01"');
const match3 = bruteForcePasswordMatch('xyz', 2, 'abc');
assert(match3 === null, 'Should return null when target cannot be matched');
console.log('');

// Print summary
console.log('='.repeat(50));
console.log(`Test Summary: ${passed} passed, ${failed} failed`);
if (failed === 0) {
    console.log('All tests passed! ✓');
} else {
    console.log('Some tests failed. ✗');
    process.exit(1);
}
