function clock(){
    const clock = document.querySelector('.clock')
    let seconds = 0
    let timer = 0
    let turnedOn = false

    //Responsável por retornar um valor no padrão 'hh:mm:ss'
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

    document.addEventListener('click', (e)=>{
        if(e.target.classList.contains('start')){
            startClock()
        }
        if(e.target.classList.contains('stop')){
            clearInterval(timer)
            turnedOn = false
        }
        if(e.target.classList.contains('reset')){
            seconds = 0
            clock.innerHTML = getTimeFromSeconds(seconds)
        }
    })
}

clock()