# 🔐 SecureToken Decoder Engine

A dynamic decoding engine that analyzes numeric security tokens and calculates all possible valid interpretations using intelligent state tracking.

---

## 📌 Project Overview

**SecureToken Decoder Engine** is a conceptual software system designed to interpret encoded numeric identifiers where each number represents a possible character mapping.

The engine determines how many valid decoding combinations exist while ensuring invalid sequences are detected and rejected.

This project demonstrates how dynamic programming can be applied to real-world parsing, validation, and sequence interpretation problems.

---

## 🌍 Real-World Conceptual Scenario

Imagine a secure communication system where messages are stored as numerical sequences.

Each digit or pair of digits represents a possible symbol:

```
1 → A
2 → B
...
26 → Z
```

The system receives an encoded token and needs to calculate how many possible readable messages can be generated.

Example:

```
121

Possible interpretations:

1-2-1  → ABA
12-1   → LA
1-21   → AU
```

The engine identifies the total number of valid interpretations.

---

# 🧠 Core Concept

The project focuses on:

- Dynamic Programming
- State transition tracking
- Sequence validation
- Memory-efficient computation

Instead of checking every possible combination recursively, the system stores previous results and reuses them.

---

# ⚙️ How The System Works

The decoder processes the token from left to right.

For every position, it checks:

1. Can the current digit represent a valid character?
2. Can the current two digits represent a valid character?
3. Add the number of valid previous interpretations.

The final state contains the total possible decoding paths.

---

# 🚀 Algorithm / Data Structure Used

## Dynamic Programming Array

The engine uses a DP table:

```
dp[i] = Number of valid interpretations for first i characters
```

Example:

```
Input:
121

DP states:

dp[0] = 1
dp[1] = 1
dp[2] = 2
dp[3] = 3

Answer = 3
```

---

# 🔎 Step-by-Step Logic

### Step 1: Initialize Base Cases

An empty sequence has one possible interpretation.

```
dp[0] = 1
```

The first digit is checked.

```
If first digit is 0:
    invalid
Else:
    one possible decoding
```

---

### Step 2: Process Each Character

For every position:

### Single Digit Validation

Check if current digit is between:

```
1 - 9
```

If valid:

```
dp[current] += dp[previous]
```

---

### Two Digit Validation

Check if two connected digits create a valid character:

```
10 - 26
```

If valid:

```
dp[current] += dp[two positions before]
```

---

### Step 3: Return Final Result

The last DP state represents the total number of possible interpretations.

---

# ✨ Key Features

✅ Numeric token decoding  
✅ Invalid sequence detection  
✅ Dynamic programming optimization  
✅ Handles zero restrictions  
✅ Efficient state calculation  
✅ Clean modular implementation  
✅ Scalable decoding logic  

---

# 📚 Example Use Case

## Secure Message Parsing

A company stores encrypted numeric identifiers:

```
Input:
226
```

Possible interpretations:

```
2-2-6
22-6
2-26
```

Output:

```
3 possible interpretations
```

---

# 💻 Example Input / Output

## Input

```javascript
"226"
```

## Output

```javascript
3
```

Explanation:

```
2 2 6
22 6
2 26
```

---

# ⏱️ Time and Space Complexity

| Operation | Complexity |
|---|---|
| Time Complexity | O(n) |
| Space Complexity | O(n) |

Where:

```
n = length of encoded token
```

The algorithm scans the input once and stores intermediate results.

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| JavaScript | Core implementation |
| Dynamic Programming | Decision optimization |
| Git & GitHub | Version control |

---

# 📂 Project Structure

```
secure-token-decoder-engine/
│
├── src/
│   └── decoder.js
│
├── README.md
│
├── package.json
│
└── LICENSE
```

---

# ▶️ How To Run The Project

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/secure-token-decoder-engine.git
```

### Navigate Into Project

```bash
cd secure-token-decoder-engine
```

### Run Example

```bash
node src/decoder.js
```

---

# 🔗 Repository

GitHub:

https://github.com/mirhamzarahman/secure-token-decoder-engine

---

# 🎯 Learning Outcomes

Through this project, you will understand:

- How dynamic programming solves overlapping subproblems
- How state transitions work in real systems
- How to optimize recursive problems
- How validation rules affect algorithm design
- How mathematical concepts become practical software solutions

---

# 🔮 Future Improvements

Possible enhancements:

- Add full decoded message generation
- Support custom character mappings
- Build a web-based decoder interface
- Add encryption/decryption simulation
- Create API endpoints for token processing
- Add visualization of DP state changes

---

# 📜 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project.
