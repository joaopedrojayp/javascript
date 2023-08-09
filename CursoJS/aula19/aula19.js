let btn = document.getElementById('btn')

let randomNum = () => {
    return Math.floor(Math.random() * 400)
}

function changeColor() {
  let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
  document.body.style.backgroundColor = randomColor
}