const linkElement = document.querySelector('#theme')
const profileToggle = document.querySelector('.profile-color-modes-toggle-thumb')

const profileColor = localStorage.getItem('profile-color-modes')

if (profileColor === 'checked') {
    linkElement.setAttribute('href', "public/styles/lightmode.css")
    profileToggle.classList.add('checked')
}

profileToggle.addEventListener('click', (e) => {
    const isChecked = profileToggle.getAttribute('class').split(' ')[1]

    if (isChecked === 'checked') {
        linkElement.setAttribute('href', "public/styles/darkmode.css")
        profileToggle.classList.remove('checked')
        localStorage.removeItem('profile-color-modes')
    } else {
        linkElement.setAttribute('href', "public/styles/lightmode.css")
        profileToggle.classList.add('checked')
        localStorage.setItem('profile-color-modes', 'checked')
    }
});
