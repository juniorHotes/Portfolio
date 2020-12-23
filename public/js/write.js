const $ = document.querySelector.bind(document)

fetch('README.md')
    .then(res => res.text())
    .then(file => {
        const data = file.split('#')

        $('.about-me h1').innerHTML = data[2].split('\n')[0]
        const About = data[2].split('\n')[1]
        const keys = About.split('')

        let i = 0
        const _frame = setInterval(frame, 10);
        function frame() {
            if (i < keys.length) {
                $('#txt-about').innerHTML += keys[i]
                i++
            } else if (i == keys.length) {
                clearInterval(_frame)
            }
        }

        $('.technologies h1').innerHTML = data[3].split('\n')[0]
        const TechnologiesMaster = data[3].split('Key-skills')[1].split('\n')
        TechnologiesMaster.map(item => {
            return item.search('<img') != -1 ? $('.technologies ul').innerHTML += "<li>" + item + "</li>" : null
        })

        const projects = data[4].split('<h3>')
        projects.forEach((item, idx) => {
            if (idx == 0) return

            const title = item.split('</h3>')[0]
            const desc = item.split('</h3>')[1].split('alt="">')[1].split('*')[0].trim()
            const img = item.split('</h3>')[1].split('\n')[1]
            const tecnology = item.split('</h3>')[1].split('alt="">')[1].split('*')[2].trim()

            const containerProject = document.createElement('div')
            containerProject.className = 'container-project'

            containerProject.innerHTML = `
                <div class="project-container-img">
                    <h1 class="project-title">${title}</h1>
                    ${img}
                </div>
                <div class="container-info">
                    <div></div>
                    <p class="project-description">${desc}</p>
                    <div class="project-footer-tecnologies">
                        <ul>${tecnology}</ul>
                    </div>
                </div>`

            $('.container').appendChild(containerProject)
        })

    });