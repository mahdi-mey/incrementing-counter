const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        // decrement this number so that the counters speed increeses
        const increment = target / 200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout( updateCounter, 1)
        }
        else{
            counter.innerText = target
        }
    }
    updateCounter()
})