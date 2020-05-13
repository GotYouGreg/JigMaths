//
// List of puzzle Images
// In future, stored in DB on server, allow more image options 
// and allow users to use their own images
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

// Get image for a puzzle
function getPuzzleImage(selectedPuzzle) {
    return puzzleImages[selectedPuzzle][0];
}

// Get width for a puzzle
function getPuzzleImageWidth(selectedPuzzle) {
    return puzzleImages[selectedPuzzle][1];
}

// Gets height for a puzzle
function getPuzzleImageHeight(selectedPuzzle) {
    return puzzleImages[selectedPuzzle][2];
}