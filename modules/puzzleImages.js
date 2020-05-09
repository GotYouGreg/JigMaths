// Puzzle Images
var puzzleImages =
[
    ["../puzzleImages/unicorn.jpg", 762, 436],
    ["../puzzleImages/unicorn.jpg", 762, 436],
    ["../puzzleImages/unicorn.jpg", 762, 436],
    ["../puzzleImages/unicorn.jpg", 762, 436],
]

function getPuzzleImage(selectedPuzzle) {
    return puzzleImages[selectedPuzzle][0];
}

function getPuzzleImageWidth(selectedPuzzle) {
    return puzzleImages[selectedPuzzle][1];
}

function getPuzzleImageHeight(selectedPuzzle) {
    return puzzleImages[selectedPuzzle][2];
}