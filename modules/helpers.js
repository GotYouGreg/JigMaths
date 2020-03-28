//
// Helper Functions
//

// Get the year level from local storage
function getYearLevel() {
    return localStorage.getItem('yearLevel')
}

// Store the year level in local storage
function storeYearLevel(level) {
    localStorage.setItem('yearLevel', level);
} 