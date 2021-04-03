var scene = 0;
var time = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  setInterval(increase, 1000)
  //textFont('inconsolata');
  translate(width / 2, height / 2);
  textAlign(CENTER);
  textSize(width / 20);
}

function increase() {
  time++;
}

function digits() {
  if (time < 60) {
    return String(time).padStart(2, '0') + ' sec';
  }
  if (time < 3600) {
    return String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0') + ' mins';
  }
  if (time < 86400) {
    return String(Math.floor(time / 3600)).padStart(2, '0') + ':' + String((time % 3600) / 60).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0') + ' hours';
  }

}

function draw() {
  background(0);
  fill(200);
  text(digits(), width / 2, height / 2);
}
