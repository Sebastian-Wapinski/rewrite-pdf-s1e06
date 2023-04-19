const linksList = document.querySelectorAll('a')

const confirmRedirect = function (e) {
    const newUrl = this.getAttribute('href')
    const userDecision = confirm('Are you sure? -> ' + newUrl)

    if (!userDecision) {
        e.preventDefault()
    }
}

linksList.forEach(function (item) {
    item.addEventListener('click', confirmRedirect)
})




