let video;
let button;
let poseNet;
let noseX = 0;
let noseY = 0;
//let noseX1 =0;
//let noseY1 =0;
//let noseX2 =0;
//let noseY2 =0;
let eye1X= 0;
let eye1Y =0;
 let eye2X =0;
 let eye2Y =0;
let ear1X =0;
let ear1Y =0;
let ear2X =0; 
let ear2Y =0;
//let shoulder1X, shoulder1Y, shoulder2X, shoulder2Y;
let wrist1X =0;
let wrist1Y =0;
var canvas;
var song =loadsound("song.mp3");

func

function setup(){
	canvas= createCanvas(windowWidth,windowHeight);
	//background(0);
	video = createCapture(VIDEO);
	video.size(windowWidth,windowHeight);
	//video.hide();
	poseNet = ml5.poseNet(video, modelReady);
	poseNet.on('pose', gotPoses);
	//button= createButton('change nose color and play music');
	//button.position(canvas.windowWidth/2, canvas.windowHeight/2);
	//song = loadsound("song.mp3",loaded);


}
function gotPoses(poses) {
	//console.log(poses);
	if (poses.length > 0){
	 let newX = poses[0].pose.keypoints[0].position.x;
	 let newY = poses[0].pose.keypoints[0].position.y;
	noseX = lerp(noseX,newX,0.5);
	noseY = lerp(noseY,newY,0.5); //nose lerped for stable values
	//let newX1 = poses[0].pose.keypoints[0].position.x;
	 //let newY1 = poses[0].pose.keypoints[0].position.y;
	//noseX1 = lerp(noseX1,newX1,0.2);
	//noseY1 = lerp(noseY1,newY1,0.2);
	//let newX2 = poses[0].pose.keypoints[0].position.x;
	 //let newY2 = poses[0].pose.keypoints[0].position.y;
	//noseX = lerp(noseX2,newX2,0.2);
	//noseY = lerp(noseY2,newY2,0.2);
     let neweye1X = poses[0].pose.keypoints[1].position.x;
	 let neweye1Y = poses[0].pose.keypoints[1].position.y;
	eye1X = lerp(eye1X,neweye1X,0.5);
	eye1Y = lerp(eye1Y,neweye1Y,0.5);
	
	//eye1X = poses[0].pose.keypoints[1].position.x;
    //eye1Y = poses[0].pose.keypoints[1].position.y;
    let neweye2X = poses[0].pose.keypoints[2].position.x;
	 let neweye2Y = poses[0].pose.keypoints[2].position.y;
	eye2X = lerp(eye2X,neweye2X,0.5);
	eye2Y = lerp(eye2Y,neweye2Y,0.5);
    
    //eye2X = poses[0].pose.keypoints[2].position.x;
    //eye2Y = poses[0].pose.keypoints[2].position.y;
    let newear1X = poses[0].pose.keypoints[3].position.x;
	 let newear1Y = poses[0].pose.keypoints[3].position.y;
	//eye1X = lerp(eye1X,neweye1X,0.5);
	//eye1Y = lerp(eye1Y,neweye1Y,0.5);


    ear1X = lerp(ear1X,newear1X,0.5);
    ear1Y = lerp(ear1Y,newear1Y,0.5);

    let newear2X = poses[0].pose.keypoints[4].position.x;
    let newear2Y = poses[0].pose.keypoints[4].position.y;

    ear2X =lerp(ear2X,newear2X,0.5);
    ear2Y = lerp(ear2Y, newear2Y,0.5);

       //shoulder1X = poses[0].pose.keypoints[5].position.x;
       //shoulder1Y = poses[0].pose.keypoints[5].position.y;
   //let newwristX = poses[0].pose.keypoints[9].position.x;
   //let newwristY = poses[0].pose.keypoints[9].position.y;
   let newwrist1X = poses[0].pose.keypoints[9].position.x;
    let newwrist1Y = poses[0].pose.keypoints[9].position.y;
   wrist1X = lerp(wrist1X, newwrist1X,0.5);
   wrist1Y = lerp(wrist1Y,newwrist1Y,0.5);
   //wrist1X = lerp(wrist1X,newwristX,0.5);
   //wrist1Y = lerp(wrist1Y,newwristY,0.5);





}
}

//function loaded (){
//	song.play();
//}


function modelReady() {
	console.log('modelReady');
}

function draw(){

	background(220);
	image(video,0,0, windowWidth,windowHeight);
	//filter(GRAY);
	fill(255, 223,40);
	//ellipse(noseX, noseY, 50);
	console.log(button.x);
	 triangle(noseX, noseY - 25, noseX - 30, noseY + 25, noseX + 30, noseY + 25);

	 //if ((noseX > button.x) && (noseX < (button.width + button.x)) && (noseY > button.y) && ((noseY < (button.height + button.y)))) {

	 
fill(50,255,88);
	 eye(eye1X, eye1Y, 80, 1);
  eye(eye2X, eye2Y, 80, -1);

  fill(255, 255, 0);
  //ellipse(ear1X,ear1Y, 50);
  //ellipse(ear2X,ear2Y,50);
  triangle(ear1X, ear1Y - 25, ear1X - 10, ear1Y + 25, ear1X + 10, ear1Y + 25);
  triangle(ear2X, ear2Y - 25, ear2X - 10, ear2Y + 25, ear2X + 10, ear2Y + 25);



  //stroke(0, 0, 0);
  //fill(0, 100, 0);
  //ellipse(shoulder1X, shoulder1Y, 50);
	//line(200, 175, 200, 275);

	ellipse(wrist1X, wrist1Y,50);
	



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