/**
 * Brute-Force Algorithms Module
 * This module contains various brute-force algorithm implementations
 */

/**
 * Brute-force string pattern matching
 * Searches for a pattern in a text using brute-force approach
 * @param {string} text - The text to search in
 * @param {string} pattern - The pattern to search for
 * @returns {number} - Index of first occurrence, or -1 if not found
 */
function bruteForceStringSearch(text, pattern) {
    if (!text || !pattern || pattern.length > text.length) {
        return -1;
    }
    
    const n = text.length;
    const m = pattern.length;
    
    // Check each possible starting position
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        
        // Check if pattern matches at position i
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }
        
        // If we matched the entire pattern
        if (j === m) {
            return i;
        }
    }
    
    return -1;
}

/**
 * Generate all permutations of an array using brute-force
 * @param {Array} arr - Input array
 * @returns {Array} - Array of all permutations
 */
function bruteForcePermutations(arr) {
    if (arr.length === 0) return [[]];
    if (arr.length === 1) return [arr];
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPerms = bruteForcePermutations(remaining);
        
        for (let perm of remainingPerms) {
            result.push([current].concat(perm));
        }
    }
    
    return result;
}

/**
 * Brute-force linear search
 * Searches for a target value in an array
 * @param {Array} arr - Array to search in
 * @param {*} target - Value to find
 * @returns {number} - Index of target, or -1 if not found
 */
function bruteForceLinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

/**
 * Brute-force subset sum problem
 * Finds if there's a subset that sums to target
 * @param {Array} arr - Array of numbers
 * @param {number} target - Target sum
 * @returns {boolean} - True if subset exists, false otherwise
 */
function bruteForceSubsetSum(arr, target) {
    const n = arr.length;
    
    // Check all possible subsets using bit manipulation
    for (let i = 0; i < (1 << n); i++) {
        let sum = 0;
        
        for (let j = 0; j < n; j++) {
            // Check if jth bit is set
            if (i & (1 << j)) {
                sum += arr[j];
            }
        }
        
        if (sum === target) {
            return true;
        }
    }
    
    return false;
}

/**
 * Brute-force bubble sort
 * Sorts an array using bubble sort (a brute-force sorting approach)
 * @param {Array} arr - Array to sort
 * @returns {Array} - Sorted array
 */
function bruteForceBubbleSort(arr) {
    const sorted = [...arr]; // Create a copy
    const n = sorted.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                // Swap elements
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    
    return sorted;
}

/**
 * Brute-force password matching
 * Generates all possible combinations to match a target
 * @param {string} charset - Characters to use
 * @param {number} maxLength - Maximum length to try
 * @param {string} target - Target string to match
 * @returns {string|null} - Matched string or null
 */
function bruteForcePasswordMatch(charset, maxLength, target) {
    function generateCombinations(current, length) {
        if (current === target) {
            return current;
        }
        
        if (length === 0) {
            return null;
        }
        
        for (let char of charset) {
            const result = generateCombinations(current + char, length - 1);
            if (result !== null) {
                return result;
            }
        }
        
        return null;
    }
    
    for (let len = 1; len <= maxLength; len++) {
        const result = generateCombinations('', len);
        if (result !== null) {
            return result;
        }
    }
    
    return null;
}

// Export all functions
module.exports = {
    bruteForceStringSearch,
    bruteForcePermutations,
    bruteForceLinearSearch,
    bruteForceSubsetSum,
    bruteForceBubbleSort,
    bruteForcePasswordMatch
};
