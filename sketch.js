var scene = 0;
var time = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  setInterval(increase, 1000)
  textFont('monospace');
  translate(window.innerWidth/2, window.innerHeight/2);
  textAlign(CENTER, CENTER);
}

function increase() {
  time++;
}

function digits() {
  if (time < 60) {
    return String(time).padStart(2, '0') + ' secs';
  }
  if (time < 3600) {
    return String(Math.floor(time / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0') + ' mins';
  }
  if (time < 86400) {
    return String(Math.floor(time / 3600)).padStart(2, '0') + ':' + String(Math.floor((time % 3600) / 60)).padStart(2, '0') + ':' + String(time % 60).padStart(2, '0') + ' hours';
  }
  return 'Too much xD';

}

function draw() {
  textSize(window.innerWidth / (digits().length/1.8));
  background(0);
  fill(200);
  text(digits(), width / 2, height / 2);
}
