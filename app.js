const itemsList = document.querySelectorAll(
    'section, article, h1'
)

const showTagName = function (e) {
    console.log(this.tagName);
    if (this.tagName === 'ARTICLE') {
        this.removeEventListener(
            'click', showTagName, true
        )
    }
}

itemsList.forEach(function (item) {
    item.addEventListener('click', showTagName, true)
})


