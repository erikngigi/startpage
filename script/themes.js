const themes = ["guts"];
let currentThemeIndex = 0;

// Function to get the next theme in the sequence
const nextTheme = () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    return themes[currentThemeIndex];
};

const setTheme = () => {
    const selector = document.getElementsByClassName("image")[0];
    let savedTheme = localStorage.getItem('theme');
    
    // Set the saved theme if it exists
    if (savedTheme) {
        document.documentElement.className = savedTheme;
        currentThemeIndex = themes.indexOf(savedTheme);
    }

    // Add click event listener to change theme on click
    selector.addEventListener("click", () => {
        let theme = nextTheme();
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    });
};

// Initialize the theme on page load
setTheme();
