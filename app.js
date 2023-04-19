const btnEl = document.querySelector('.btn')
const textEl = document.querySelector('.text')

const onEnter = function () {
    textEl.textContent = 'enter...'
}

const onLeave = function () {
    textEl.textContent = 'leave...'
}

btnEl.addEventListener('mouseenter', onEnter)
btnEl.addEventListener('mouseleave', onLeave)
