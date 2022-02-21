stats = "";
iboxval = "";
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(80,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    background(0);
    image(video,0,0,500,500);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stats").innerHTML = "Status: Detecting";
    iboxval = document.getElementById("input_box").value;
}
function modelLoaded(){
    console.log("model Loaded");
    stats = "true";
}