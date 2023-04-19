const btnsList = document.querySelectorAll('button')

const showObject = function (e) {
    console.log(e)
}

btnsList.forEach(function (item) {
    item.addEventListener('click', showObject)
})


