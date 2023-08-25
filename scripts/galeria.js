const selecionada = document.querySelector('#selecionada')
const lista = document.querySelector('#lista')
const info = document.querySelectorAll('#info p')
let imgsDados = []

// Para cadastrar a imagem, copie o seguinte texto sem as barras do começo: 
// cadastrarImg('url', 'empresa', 'linha', 'prefixo', 'chassi')
// e depois cole abaixo do ultimo cadastro substituindo o que estiver dentro das aspas pelos respectivos dados

cadastrarImg('https://a.imagem.app/bPVV1X.jpeg', 'Atlântico VCA', 'R19 - Centro x Rodoviária', '8885', 'Mercedes-Benz Of1721 Bluetec 5')
cadastrarImg('../imgs/destaque4.jpg', 'Aguia Branca', 'Vitória da Conquista(BA) x São Paulo(SP)', '26250', 'Mercedes-Benz O-500RSD')
cadastrarImg('../imgs/destaque7.jpg', 'Emtram', 'São Paulo(SP) x Pritiba (BA)', '5450', 'Scania K440LB')
cadastrarImg('../imgs/destaque.jpg', 'Rosa VDC', 'R02 Centro x Cidade Maravilhosa', '9500', 'Mercedes-Benz Of-1721 Bluetec 5')

function cadastrarImg(url, empresa, linha, prefixo, chassi){
    let infoLista = [empresa, linha, prefixo, chassi]
    const novaImg = document.createElement('img')
    
    novaImg.setAttribute('src', url)
    lista.appendChild(novaImg)
    imgsDados.push(infoLista)
    const imgsLista = document.querySelectorAll('#lista img')
    
    
    imgsLista.forEach((img, index) =>{
        img.addEventListener('click', () =>{
            selecionada.setAttribute('src', img.getAttribute('src'))
            conectarInfo(index)
        })
    })
}
function conectarInfo(imgIndex){
    let acc = 0
    info.forEach(dado =>{
        dado.textContent = imgsDados[imgIndex][acc]
        acc ++
    })
}
selecionada.setAttribute('src', 'https://a.imagem.app/bPVV1X.jpeg')
conectarInfo(0)


zoom()

function zoom(){
    if(window.innerWidth > 710){
        selecionada.addEventListener('mousemove', (evento)=>{
            const x = evento.clientX - evento.target.offsetLeft
            const y = evento.clientY - evento.target.offsetTop

            selecionada.style.transformOrigin = `${x}px ${y}px`
            selecionada.style.transform = 'scale(2)'
        })

        selecionada.addEventListener('mouseout', ()=>{  
            selecionada.style.transform = 'scale(1)'
        })
    }else{
        selecionada.style.transformOrigin = 'auto'
    }
}