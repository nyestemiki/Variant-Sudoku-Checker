# Variant Sudoku Checker

This is a JS application to check Variant Sudoku puzzle solutions

## Supported variations

- ✔️ Appear in the surrounding cells
- ✔️ Arrow
- ✔️ Arrow (with repeats)
- ✔️ Between line
- ✔️ Black Kropkis
- ✔️ Cages
- ✔️ Cages (with repeats)
- ✔️ Custom rules
- ✔️ Difference
- ✔️ Diagonals
- ✔️ Dutch Whisper
- ❌ Entropy line
- ✔️ Even squares
- ✔️ German Whisper line
- ❌ Killer Arrow
- ❌ Low, middle, high line
- ✔️ Normal sudoku rules
- ✔️ Odd circles
- ✔️ Parity line
- ✔️ Ratio
- ❌ Relative location
- ✔️ Renban
- ❌ Same Sum (borders)
- ❌ Same Sum (segments)
- ✔️ Sandwhich
- ❌ Skyscraper
- ✔️ Slow Thermo
- ✔️ Smaller
- ✔️ Thermo
- ✔️ V
- ✔️ White Kropki
- ✔️ X

## Setup

### Install (optional)

```
npm install
```

### Run

```
npm start
```

## How it works

The application currently checks the src/data/sudokuInput.js file's rules.

## Architecture

There is a distinct class for every kind of rule that extends the base Rule class.

Each rule has a name and a title and an **evaluate(sudoku, config)** function.

All the rules are instantiated in the input file's **rules** field and they get evaluated sequentially.
