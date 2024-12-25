// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
const change = document.querySelector(".cards__card__img__icon i")
const counter = document.querySelector("#counter")
change.addEventListener("click",()=>{
    change.style.color = "red"
    let count = parseInt(counter.innerText)
    let newValue = count + 1
    counter.innerText = newValue

})