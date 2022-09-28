function preload(){

}
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video, 0,0,640,480);
    tint(tint_color);
    circle(0,0,150,0,)
    circle(645,0,150,0)
    circle(645,470,150,0)
    circle(0,470,150,0)
}
function take_snapshot(){
    save('student_name.png');
}