let container2 = document.getElementsByClassName("container2")[0]
let container3 = document.getElementsByClassName("container3")[0]
let checkIcon = document.getElementById("check-icon")
let xIcon = document.getElementById("x-icon")
var i = 0

xIcon.addEventListener('click', function(){
   typeNote()
})

checkIcon.addEventListener('click', function(){
    createNote()
})


function typeNote(){
if(container3.style.display == "none") {
    container3.style.display == "block"
}else{
    ontainer3.style.display == ""
}
}

function createNote(){

}

function margin(){
  let randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"]

  return randomMargin[Math.floor(Math.random() * randomMargin.length)]
}


function rotate(){
let randomRotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)","rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"]

return randomRotate[Math.floor(Math.random() * randomRotate.length)]
}

function color(){
  let randomColor = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"]

  if(i < randomColor.length - 1) {
  i= 0
  }
   return randomColor[i++]
}
