## ♟️ hir0 – A JavaScript Chess Engine

**hir0** is a minimal yet elegant chess engine written in pure JavaScript, capable of evaluating positions, generating legal moves, and conducting deep recursive searches. It includes a pixel-art UI with animations and an embedded thinking bot for a delightful user experience.

---

### 🔧 Features

* ✅ Move generation and validation
* ✅ Alpha-beta pruning with iterative deepening
* ✅ Quiescence search
* ✅ Board evaluation with piece-square tables
* ✅ Principal variation tracking
* ✅ UCI-like move input (via FEN and GUI)
* ✅ Perft testing for debugging
* ✅ En passant, castling, promotions, and all chess rules
* ✅ Interactive animated robot UI with move feedback

---

### 🧠 Algorithms Used

#### 1. **Move Generation (`movegen.js`)**

* **Sliding & non-sliding piece move logic**
* **En passant, pawn promotions, and castling**
* **MVV-LVA (Most Valuable Victim, Least Valuable Attacker)** scoring for move ordering
* **Quiet vs. capture move separation**
* Adds moves to `GameBoard.moveList` and scores them based on heuristics

#### 2. **Make/Undo Moves (`makemove.js`)**

* Updates board state, material counts, and history
* Supports:

  * Promotions
  * En passant
  * Castling (both sides)
* Includes `TakeMove()` to revert to a previous position
* Handles **Zobrist hashing** via `HASH_PCE`, `HASH_CA`, etc.

#### 3. **Evaluation Function (`evaluate.js`)**

* **Material-based scoring** (piece values)
* **Piece-square tables** for positional bonuses:

  * Custom tables for pawns, knights, bishops, rooks
* **Bishop pair bonus**
* Returns evaluation relative to side to move

#### 4. **Search Engine (`search.js`)**

* **Alpha-beta pruning** with iterative deepening
* **Quiescence search** to reduce horizon effect
* **Principal Variation Table (PVTable)** to retrieve best move line
* Implements:

  * Move ordering (via history and killer heuristics)
  * Search depth/time control
  * Mate scoring & repetition detection
* Outputs best line, depth, score, and node count

#### 5. **Perft Testing (`perft.js`)**

* For validating move generation
* Recursively explores all positions to a fixed depth
* Useful for debugging engine correctness

#### 6. **Principal Variation Table (`pvtable.js`)**

* Used for storing and retrieving best lines from search
* Simple hash table using position keys

---

### 🚀 Getting Started

#### Run Locally

```bash
git clone https://github.com/Hargun-Preet/hir0.git
cd hir0
open index.html # or use Live Server in VS Code
```

### 🧪 Example FENs to Try

* Starting position:

  ```
  rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
  ```
* Checkmate in 1:

  ```
  6k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1
  ```

---

### 🤖 Inspiration

Built from scratch to learn the inner mechanics of chess engines, from board representation to alpha-beta pruning. Inspired by classic engines like **Micro-Max** and tutorials by **Bluefever Software**.

---

### 📜 License

MIT License

---
