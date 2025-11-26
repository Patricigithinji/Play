const colors = [
    "#ff9a9e",
    "#fad0c4",
    "#a1c4fd",
    "#c2e9fb",
    "#fbc2eb",
    "#a6c1ee",
    "#fda085",
    "#f6d365"
];

let index = 0;
function changeBackground() {
    document.body.style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[(index + 1) % colors.length]})`;
    index = (index + 1) % colors.length;
}

// Change every 3 seconds
setInterval(changeBackground, 3000);

// Initial color
changeBackground();
