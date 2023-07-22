const clock = document.querySelector('.clock')
const start = document.querySelector('.start')
const stop  = document.querySelector('.stop')
const reset = document.querySelector('.reset')
let seconds = 0
let timer = 0
let turnedOn = false

function getTimeFromSeconds(seconds){
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BT',{
        hour12: false,
        timeZone: 'GMT'
    })
}

function startClock(){
    if (!turnedOn){
        timer = setInterval(function(){
            seconds++
            clock.innerHTML = getTimeFromSeconds(seconds)
        }, 1000)
    }
    turnedOn = true
}

start.addEventListener('click', (e) =>{
    startClock()
})
stop.addEventListener('click', (e) =>{
    clearInterval(timer)
    turnedOn = false
})
reset.addEventListener('click', (e) =>{
    seconds = 0
    clock.innerHTML = getTimeFromSeconds(seconds)
})
