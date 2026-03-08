let bg;

function preload() {
  bg = loadImage('assets/example.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bg);
}