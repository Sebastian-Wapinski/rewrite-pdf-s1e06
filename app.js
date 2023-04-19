const btnEl = document.querySelector('button')
const sectionEl = document.querySelector('section')

if (btnEl&&sectionEl) {
    btnEl.addEventListener('click', function () {
        console.log('button was clicked');
    })

    sectionEl.addEventListener('click', function () {
        console.log('section was clicked too!');
    })


}




