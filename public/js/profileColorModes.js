const profileColor = localStorage.getItem('profile-color-modes')

if (profileColor === 'checked') {
    document.querySelector('#theme').setAttribute('href', "public/styles/lightmode.css")
    document.querySelector('.profile-color-modes-toggle-thumb').classList.add('checked')
}

document.querySelector('.profile-color-modes-toggle-thumb').addEventListener('click', (e) => {
    const isChecked = document.querySelector('.profile-color-modes-toggle-thumb').getAttribute('class').split(' ')[1]

    if (isChecked === 'checked') {
        document.querySelector('#theme').setAttribute('href', "public/styles/darkmode.css")
        document.querySelector('.profile-color-modes-toggle-thumb').classList.remove('checked')
        localStorage.removeItem('profile-color-modes')
    } else {
        document.querySelector('#theme').setAttribute('href', "public/styles/lightmode.css")
        document.querySelector('.profile-color-modes-toggle-thumb').classList.add('checked')
        localStorage.setItem('profile-color-modes', 'checked')
    }
});
