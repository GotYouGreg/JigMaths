//
// Helper Functions
//

// Get the year level from local storage
function getYearLevel() {
    return localStorage.getItem('yearLevel')
}

// Store the year level in local storage
function storeYearLevel(yearLevel) {
    localStorage.setItem('yearLevel', yearLevel);
} 

// Get the level from local storage
function getLevel() {
    return localStorage.getItem('level')
}

// Store the level in local storage
function storeLevel(level) {
    localStorage.setItem('level', level);
} 

// Get latest Result
function getLatestResult() {
    return localStorage.getItem('latestResult')
}

// Store Latest Result
function storeLatestResult(latestResult) {
    localStorage.setItem('latestResult', latestResult)
}

// Get PB
function getPB() {
    return localStorage.getItem('PB')
}

// Store PB
function storePB(PB) {
    return setItem.setItem('PB', PB)
}

// Get the puzzle image from local storage
function getPuzzleImage() {
    return localStorage.getItem('puzzleImage')
}

// Store the puzzle image in local storage
function storePuzzleImage(puzzleImage) {
    localStorage.setItem('puzzleImage', puzzleImage);
} 