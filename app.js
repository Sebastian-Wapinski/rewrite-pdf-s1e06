const btnsList = document.querySelectorAll('button')
const pElement = document.querySelector('p')

const renderInfo = function (e) {
    if (pElement) {
        let text = parseInt(e.timeStamp / 1000)
        text += ': ' + this.tagName;
        text += ' -> ' + e.type;
        pElement.innerText = text
    }
}

btnsList.forEach(function (item) {
    item.addEventListener('click', renderInfo)
    item.addEventListener('mouseenter', renderInfo)
})


