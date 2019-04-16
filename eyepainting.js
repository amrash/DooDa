let video;
let poseNet;
let noseX = 0;
let noseY = 0;
//let noseX1 =0;
//let noseY1 =0;
//let noseX2 =0;
//let noseY2 =0;
let eye1X, eye1Y, eye2X, eye2Y;


function setup(){
	createCanvas(640,480);
	background(51);
	video = createCapture(VIDEO);
	//video.size(330,300);
	video.hide();
	poseNet = ml5.poseNet(video, modelReady);
	poseNet.on('pose', gotPoses);


}
function gotPoses(poses) {
	//console.log(poses);
	if (poses.length > 0){
	 let newX = poses[0].pose.keypoints[0].position.x;
	 let newY = poses[0].pose.keypoints[0].position.y;
	noseX = lerp(noseX,newX,0.5);
	noseY = lerp(noseY,newY,0.5);
	//let newX1 = poses[0].pose.keypoints[0].position.x;
	 //let newY1 = poses[0].pose.keypoints[0].position.y;
	//noseX1 = lerp(noseX1,newX1,0.2);
	//noseY1 = lerp(noseY1,newY1,0.2);
	//let newX2 = poses[0].pose.keypoints[0].position.x;
	 //let newY2 = poses[0].pose.keypoints[0].position.y;
	//noseX = lerp(noseX2,newX2,0.2);
	//noseY = lerp(noseY2,newY2,0.2);
	eye1X = poses[0].pose.keypoints[1].position.x;
    eye1Y = poses[0].pose.keypoints[1].position.y;
    
    eye2X = poses[0].pose.keypoints[2].position.x;
    eye2Y = poses[0].pose.keypoints[2].position.y;
}
}

function modelReady() {
	console.log('modelReady');
}

function draw(){

	background(220);
	image(video,0,0);
	//filter(GRAY);
	fill(60,200,100);
	//ellipse(noseX, noseY, 50);
	 triangle(noseX, noseY - 25, noseX - 30, noseY + 25, noseX + 30, noseY + 25);
	 
	 }
	 function draw(){
fill(53,250,120)
	 eye(eye1X, eye1Y, 80, 1);
  eye(eye2X, eye2Y, 80, -1);

}
function eye(x, y, size, n) {

  let angle = frameCount * 2;

    
    fill(190);
    noStroke();
    ellipse(x, y, size, size);
    
    fill(0, 244, 66);
    noStroke();
    ellipse(x+cos(angle*n)*size/5, y+sin(angle*n)*size/5, size/2, size/2);	
}