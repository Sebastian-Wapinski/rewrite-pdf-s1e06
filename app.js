const emailEl = document.querySelector('.email')

const getValue = function () {
    console.log(emailEl.value);
}

emailEl.addEventListener('keyup', getValue)

