let bg;

function preload(){
  bg = loadImage("https://fastly.picsum.photos/id/861/1920/1080.jpg?hmac=b2bwytCdkwyzZLP-EqUCh2r2-qkCY-dlkw0UtYyIElM")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  bg.resize(windowWidth, 0);
  image(bg, 0, 0);
}