const $$ = document.querySelector.bind(document)

fetch('public/data.json')
    .then(res => res.json())
    .then(async file => {

        const where = sessionStorage.getItem('where') || '@'
        console.log(where)

        if (where == '@') {
            const keys = await file.about_me.split('')

            let i = 0
            const _frame = setInterval(frame, 10);
            function frame() {
                if (i < keys.length) {
                    $$('#txt-about').innerHTML += keys[i]
                    i++
                } else if (i == keys.length) {
                    clearInterval(_frame)
                }
            }

        } else {
            $$('#txt-about').innerHTML = file.about_me
        }

        file.skills.map(skill => {
            $$('.technologies ul').innerHTML +=
                `<li><img src="${skill.src}" alt="${skill.title}" title="${skill.title}"></img></li>`
        })

        const categorys = await file.projects.filter(cat => {
            function filterItems(query) {
                return cat.category.find(el => {
                    return el.indexOf(query.toLowerCase()) > -1;
                })
            }
            return filterItems(where)
        })

        let order1 = 1
        let order2 = 2
        categorys.map(project => {
            const containerProject = document.createElement('div')
            containerProject.className = 'container-project'

            const carouselImages = project.carousel_img.map(url =>
                `<div><img style="object-fit: scale-down;max-height: 300px; width:100%" data-lazy="${url}" alt=""></div>`
            )

            const tecnologies = project.tecnologies.map(tec =>
                `<li><img src="${tec.src}" alt="${tec.title}" title="${tec.title}"></li>`
            )

            const linkPage = project.link == "" ? "<div></div>" :
                `<a class="link-pro" href="${project.link}" target="_blank" rel="">Veja você mesmo.</a>`

            if (order1 == 1) order1 = 2; else if (order1 == 2) order1 = 1
            if (order2 == 1) order2 = 2; else if (order2 == 2) order2 = 1
            
            containerProject.innerHTML = `
                    <div class="container-info" style="order:${order1}">
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
                    <div class="project-container-img" style="order:${order2}">
                    <div class="container-carousel">
                        <div class="carousel">${carouselImages.join('')}</div>
                    </div>
                </div>`

            $$('.container').appendChild(containerProject)

            $(document).ready(function () {
                $('.carousel').slick({
                    lazyLoad: 'ondemand',
                    autoplay: true,
                    focusOnSelect: false,
                    dots: true,
                    infinite: true,
                    speed: 200,
                    fade: true,
                    cssEase: 'linear',
                    pauseOnHover: true,
                    adaptiveHeight: true
                });
            })
        })

        document.querySelectorAll('ul button').forEach(button => {
            button.addEventListener('click', async (e) => {
                sessionStorage.setItem('where', e.target.value)
                location.reload()
            })
        })
    })