const itemsList = document.querySelectorAll(
    'section, article, h1'
)
const showInfo = function (e) {
    let text = e.currentTarget.tagName + ': '
    text += (e.currentTarget === this) ? 'Y' : 'N'

    console.log(text);
}

itemsList.forEach(function (item) {
    item.addEventListener('click', showInfo)
})




