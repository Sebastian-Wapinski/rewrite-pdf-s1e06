const itemsList = document.querySelectorAll(
    'section, article, h1'
)

const showTagName = function () {
    console.log(this.tagName.toLowerCase());
}

itemsList.forEach(function (item) {
    item.addEventListener('click', showTagName, false)
})


