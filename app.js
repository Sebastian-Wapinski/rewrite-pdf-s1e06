const btnList = document.querySelectorAll('button')

const changeText = function() {
    this.innerText = 'clicked';
}

btnList.forEach(function(btnEl) {
    btnEl.addEventListener('click', changeText)
})




