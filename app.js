const btnsList = document.querySelectorAll('button')

const showInformation = function (e) {
    console.log(e.type, this.innerText);
}

btnsList.forEach(function (item) {
    item.addEventListener('mouseenter', showInformation)
    item.addEventListener('click', showInformation)
})


