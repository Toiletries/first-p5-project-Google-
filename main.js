var tintcolor=""
function preload(){

}
function setup(){
canvas=createCanvas(500, 500);
canvas.position(150,250)

video=createCapture(VIDEO)
video.hide()

}
function draw(){
    image(video,150,150,200,200)
    fill("green")
    rect(30, 37, 420, 30);
    rect(440, 37, 30, 420);
    rect(40, 37, 30, 420);
    rect(30, 430, 420, 30);
    fill("red")
    circle(55,55,80)
    circle(455,55,80)
    circle(55,445,80)
    circle(455,455,80)
    tint(tintcolor)
}
function ApplyFilter(){
tintcolor=document.getElementById("FilterColour").value
}
function take_snapshot(){
    save("img.png")
}