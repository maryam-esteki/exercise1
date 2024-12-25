// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
const starEl = document.querySelectorAll(".fa-star");
starEl.forEach((star) => {
    star.addEventListener("click", () => {
       if(star.style.color = "#e6e6e6"){
        star.style.color = "#FFD700"
       }else if( star.style.color = "#FFD700"){
        star.style.color = ""
       }
})

});