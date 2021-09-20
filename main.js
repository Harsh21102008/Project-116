function preload() {
    mustache = loadImage('https://i.postimg.cc/3N5j1bXG/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.mustache.x;
        mustacheY = results[0].pose.mustache.y;
        console.log("mustache x = " + results[0].pose.mustache.x);
        console.log("mustache y = " + results[0].pose.mustache.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(mustacheX, mustacheY, 20);
    image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}

mustacheX=0;
mustacheY=0;