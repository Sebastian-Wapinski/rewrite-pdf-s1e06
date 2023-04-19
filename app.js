const itemsList = document.querySelectorAll(
    'section, article, h1'
)
const showInfo = function (e) {
    let text = e.target.tagName + ': '
    text += this.tagName
    console.log(text);
}

itemsList.forEach(function (item) {
    item.addEventListener('click', showInfo)
})




