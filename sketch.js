let bg;

function preload() {
    bg = loadImage("alien_website.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

let countX = 179302;
let countY = 34768;
let incrementsPerFrame = 7;

function draw() {
    bg.resize(windowWidth, windowHeight);
    image(bg, 0, 0);
    
    textSize(25);
    fill('#ddddff');
    textFont('Special Elite');
    textStyle(BOLDITALIC);
    text('COMET TRACKER', windowWidth/3 - 50, windowHeight/3 * 2 + 20);
    
    textSize(18);
    textStyle(NORMAL);
    text("Time your ascent with the comet's \narrival for optimal results!", windowWidth/3 - 50, windowHeight/3 * 2 + 60);
    text("When the timer reaches 0, you \nwill be ready for the ascension!", windowWidth/3 - 50, windowHeight/3 * 2 + 120);

    for (let i = 0; i < incrementsPerFrame; i++) {
        countX++;
        countY++;
    }

    // Display counter
    textSize(20);
    fill('#ddddff');
    textFont('Special Elite');
    textStyle(ITALIC);
    text("x: " + nf(countX, 8), windowWidth/3 * 2 + 10, windowHeight/2 - 10);
    text("y: " + nf(countY, 8), windowWidth/3 * 2 + 10, windowHeight/2 + 10);
    noFill();
    stroke('#ddddff');
    rect(windowWidth/3 * 2 - 20, windowHeight/2 - 35, 180, 60);

}