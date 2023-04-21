const btnElement = document.querySelector('button')
const handleClick = function (e) {
    console.log('button was clicked');
    console.log(e.isTrusted);
}

btnElement.addEventListener('click', handleClick)
btnElement.click()



