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
        printOut.innerHTML = `<img src='candy.png'/>`
    })
}

