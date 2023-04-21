const btnElement = document.querySelector('button')
const pElement = document.querySelector('p')
const handleRender = function (e) {
    this.innerText = e.detail;
}

const handleClick = function() {
    const renderEvent = new CustomEvent (
        'render', {detail: 'new content!'}
    )
    pElement.dispatchEvent(renderEvent)
}

btnElement.addEventListener('click', handleClick)
pElement.addEventListener('render', handleRender)



