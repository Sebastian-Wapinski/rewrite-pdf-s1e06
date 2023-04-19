const counterEl = document.querySelector('.counter')

const incrementCounter = function () {
    let value = parseInt(counterEl.innerText)

    counterEl.innerText = ++value;

    if (value > 3) {
        counterEl.removeEventListener(
            'click', incrementCounter
        )
    }
}

counterEl.addEventListener('click', incrementCounter)

