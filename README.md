# Shubham921 Repository

This repository contains a Minecraft AFK bot and a comprehensive implementation of brute-force algorithms.

## Projects

### 1. Minecraft AFK Bot

An automated bot for Minecraft that keeps your player active by performing random movements and actions.

**Features:**
- Automatic movement in random directions
- Random view angle changes
- Configurable movement intervals
- Easy configuration via JSON file

**Usage:**
```bash
npm install
npm start
```

**Configuration:**
Edit `config.json` to set your Minecraft server details:
```json
{
  "ip": "your-server.com",
  "name": "YourUsername",
  "port": "25565"
}
```

### 2. Brute-Force Algorithms

A comprehensive collection of brute-force algorithm implementations in JavaScript.

**Implemented Algorithms:**
1. String Pattern Matching - O(n*m)
2. Permutations Generator - O(n!)
3. Linear Search - O(n)
4. Subset Sum Problem - O(2^n)
5. Bubble Sort - O(n²)
6. Password Matching - O(c^l)

**Quick Start:**
```bash
# Run tests
npm run test:bruteforce

# Run interactive demo
npm run demo:bruteforce
```

**Usage Example:**
```javascript
const { bruteForceStringSearch, bruteForceBubbleSort } = require('./bruteforce');

// Search for a pattern
const index = bruteForceStringSearch('hello world', 'world');
console.log(index); // 6

// Sort an array
const sorted = bruteForceBubbleSort([5, 2, 8, 1, 9]);
console.log(sorted); // [1, 2, 5, 8, 9]
```

For detailed documentation, see [BRUTEFORCE.md](BRUTEFORCE.md).

## Installation

```bash
npm install
```

## Available Scripts

- `npm start` - Start the Minecraft AFK bot
- `npm run test:bruteforce` - Run brute-force algorithm tests
- `npm run demo:bruteforce` - Run brute-force algorithm demo

## Dependencies

- `mineflayer` - Minecraft bot framework
- `config` - Configuration management
- `fs` - File system operations

## License

ISC

## Author

MannuG / Shubham
