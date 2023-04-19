const btnEl = document.querySelector('button')
const sectionEl = document.querySelector('section')

const addClassToElement = function() {
    const className = this.tagName.toLowerCase();
    this.classList.add(className)
    console.log(className + ' was clicked');
}

if (btnEl&&sectionEl) {
    btnEl.addEventListener('click', addClassToElement)

    sectionEl.addEventListener('click', addClassToElement)


}




