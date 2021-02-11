fetch('public/data.json')
    .then(res => res.json())
    .then(file => {
        const keys = file.about_me.split('')

        let i = 0
        const _frame = setInterval(frame, 10);
        function frame() {
            if (i < keys.length) {
                document.querySelector('#txt-about').innerHTML += keys[i]
                i++
            } else if (i == keys.length) {
                clearInterval(_frame)
            }
        }

        file.skills.map(skll => {
            document.querySelector('.technologies ul').innerHTML += 
            `<li><img src="${skll.src}" alt="${skll.title}" title="${skll.title}"></img></li>`
        })

        file.projects.map(project => {
            const containerProject = document.createElement('div')
            containerProject.className = 'container-project'

            const carouselImages = project.carousel_img.map(url => `<div><img style="object-fit: scale-down;max-height: 300px; width:100%" src="${url}" alt=""></div>`)

            const tecnologies = project.tecnologies.map(tec =>
                `<li><img src="${tec.src}" alt="${tec.title}" title="${tec.title}"></li>`
            )

            const linkPage =  project.link == "" ? "" : 
                `<a class="link-pro" href="${project.link}" target="_blank" rel="">Veja você mesmo.</a>`
                
            containerProject.innerHTML = `
                    <div class="container-info">
                        <div>
                            <h1 class="project-title">${project.name}</h1>
                            <a class="repo-git" href="${project.link_git}" target="_blank" rel="">Repositório</a>
                        </div>
                        <p class="project-description">${project.desc}</p>
                        ${linkPage}
                        <div class="project-footer-tecnologies">
                            <h2>Tecnologias utilizadas</h2>
                            <ul>${tecnologies.join('')}</ul>
                        </div>
                    </div>
                    <div class="project-container-img">
                    <div class="container-carousel">
                        <div class="carousel">${carouselImages.join('')}</div>
                    </div>
                </div>
`

            document.querySelector('.container').appendChild(containerProject)
        })

    })