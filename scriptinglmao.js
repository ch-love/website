// Array of taglines
const taglines = [
    "Creating the future, one line of code at a time.",
    "Turning ideas into reality.",
    "Coding with passion.",
    "Where creativity meets code.",
    "Innovating through technology.",
    "Building a better web.",
    "Dreaming in code.",
    "Designing for the future.",
    "Crafting digital experiences.",
    "Empowering through technology.",
    "Your friendly neighborhood developer.",
    "Making the web a better place.",
    "Transforming concepts into code.",
    "Developing solutions for real-world problems.",
    "Code is my canvas.",
    "Creating seamless user experiences.",
    "Building the web, one project at a time."
];

let displayedTaglines = [];

// Function to set a random tagline
function setRandomTagline() {
    if (displayedTaglines.length === taglines.length) {
        document.getElementById('tagline').innerText = "UwU you found them all!";
        return;
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * taglines.length);
    } while (displayedTaglines.includes(randomIndex));
    
    displayedTaglines.push(randomIndex);
    document.getElementById('tagline').innerText = taglines[randomIndex];
}

// Change color function
function changeColor(color) {
    document.documentElement.style.setProperty('--accent-color', color);
}

// Call the function on load
window.onload = function() {
    setRandomTagline();
};

// Close modal function
function closeModal(event) {
    if (event.target === document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}
