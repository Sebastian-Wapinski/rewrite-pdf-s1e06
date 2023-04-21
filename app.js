const btnElement = document.querySelector('button')
const handleClick = function (e) {
    console.log('button was clicked');
    console.log(e.isTrusted);
}

btnElement.addEventListener('click', handleClick)


const eventClick = new MouseEvent('click', {
    'bubbles': true,
    'cancelable': true,
})

btnElement.dispatchEvent(eventClick)



