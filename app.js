const userEl = document.querySelector('[name="user"]')

const showCurrentUserId = function () {
    console.log(userEl.value);
}

if (userEl) {
    userEl.addEventListener('change', showCurrentUserId,)
}

