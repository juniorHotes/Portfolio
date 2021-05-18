const profileColor = localStorage.getItem('profile-color-modes')

if (profileColor === 'checked') {
    $$('#theme').setAttribute('href', "public/styles/lightmode.css")
    $$('.profile-color-modes-toggle-thumb').classList.add('checked')
}

$$('.profile-color-modes-toggle-thumb').addEventListener('click', (e) => {
    const isChecked = $$('.profile-color-modes-toggle-thumb').getAttribute('class').split(' ')[1]

    if (isChecked === 'checked') {
        $$('#theme').setAttribute('href', "public/styles/darkmode.css")
        $$('.profile-color-modes-toggle-thumb').classList.remove('checked')
        localStorage.removeItem('profile-color-modes')
    } else {
        $$('#theme').setAttribute('href', "public/styles/lightmode.css")
        $$('.profile-color-modes-toggle-thumb').classList.add('checked')
        localStorage.setItem('profile-color-modes', 'checked')
    }
});
