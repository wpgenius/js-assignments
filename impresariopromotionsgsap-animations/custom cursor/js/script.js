var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
 
main.addEventListener("mousemove", function(dets){
 // console.log(dets)
 gsap.to(cursor ,{
     x: dets.x,
     y:dets.y,
     duration:0.5
 })
})