//
// Helper Functions
//


function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}

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
function getPB(yearLevel, level) {
    return localStorage.getItem(yearLevel + "." + level + '.PB')
}

// Store PB
function storePB(yearLevel, level, PB) {
    return localStorage.setItem(yearLevel + "." + level + '.PB', PB)
}

// Get the selected puzzle Id
function getSelectedPuzzle() {
    return localStorage.getItem('selectedPuzzle')
}

// Store the selected puzzled Id
function storeSelectedPuzzle(puzzleId) {
    localStorage.setItem('selectedPuzzle', puzzleId);
} 

// Store the level in local storage
function storeNewPB(newPB) {
    localStorage.setItem('newPB', newPB);
} 

// Get latest Result
function getNewPB() {
    return localStorage.getItem('newPB')
}
