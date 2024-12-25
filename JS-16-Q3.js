// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const msg = document.querySelector(".message")
const close = msg.querySelector("i")
close.addEventListener("click",()=>{
msg.style.display = "none"
})
