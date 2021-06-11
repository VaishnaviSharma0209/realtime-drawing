noseX=0;
noseY=0;
difference=0;
lwristX=0;
rwristX=0;
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(400,400)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background("springgreen");
    fill("palevioletred");
    stroke("palevioletred");
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("Posenet loaded")
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        lwrisrtX=results[0].pose.leftWrist.x;
        rwrisrtX=results[0].pose.rightWrist.x;
        difference=floor(lwrisrtX-rwrisrtX);
        document.getElementById("size").innerHTML=difference;
    }
}