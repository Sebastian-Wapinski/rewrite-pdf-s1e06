const itemsList = document.querySelectorAll('section, article, h1')

const handleOutput = function (e) {
    console.log(this.tagName, e.type);
}

itemsList.forEach(function (item) {
    item.addEventListener('output',handleOutput)
    if (item.tagName === 'H1') {
        const outputEvent = new CustomEvent(
            'output', {
                detail: item.tagName,
                bubbles: false,
            }
        )
        item.dispatchEvent(outputEvent)
    }
})


