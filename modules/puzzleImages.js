// Puzzle Images
var puzzleImages =
[
    ["../puzzleImages/unicornio.jpg", 762, 572],
    ["../puzzleImages/minecraft.jpg", 762, 429],
    ["../puzzleImages/dog.jpg", 762, 506],
    ["../puzzleImages/painting.jpg", 762, 508],
    ["../puzzleImages/popStar.jpg", 762, 592],
    ["../puzzleImages/ironMan.jpeg", 762, 507],
    ["../puzzleImages/instrument.jpeg", 762, 507],
    ["../puzzleImages/sportsBalls.jpg", 762, 381],
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