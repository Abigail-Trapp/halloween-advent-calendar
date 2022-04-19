let day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
for(let i = 0; i < day.length; i++){
    let days = document.querySelector("div")
    document.body.append(days)
    let printOut = document.createElement("button")
    printOut.innerHTML=`${day[i]}`
    days.append(printOut)

    printOut.addEventListener("click", function(){
        printOut.style.background = 'white'
        printOut.style.border = 'white'
        var images = new Array()
        images[0] = new Image()
        images[0] =  `<img src='./images/candy.png'/>`
        images[1] = new Image()
        images[1] =  `<img src='./images/candy-corn.png'/>`
        images[2] = new Image()
        images[2] = `<img src='./images/bats.jpg'/>`
        images[3] = new Image()
        images[3] = `<img src='./images/pumpkin.png'/>`
        printOut.innerHTML = `${images[Math.floor(Math.random()*images.length)]}`
    })
}



