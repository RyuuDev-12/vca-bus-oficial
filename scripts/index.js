const links = document.querySelectorAll('.links')

links.forEach(link =>{
    link.addEventListener('click', scrollSuave)
})

botaoMobile()

function botaoMobile(){
    const mobile = document.querySelector('.btn-mobile')
    const nav = document.querySelector('header nav')

    mobile.addEventListener('click', () =>{
        mobile.classList.toggle('ativo')
        nav.classList.toggle('nav-on')
    })
}

function scrollSuave(evento){
    evento.preventDefault()
    const href = evento.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
