function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}


function Barreira( reversa = false){
    this.elemento = novoElemento('div','barreira')

    const borda = novoElemento('div','borda')
    const corpo = novoElemento('div','corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.heigth = `${altura}px`
}

//const b = new Barreira ()
//b.setAltura(3000)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x){
    this.elemento = novoElemento('div','par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX =( )=> parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth


    this.sortearAbertura()
    this.setX(x)
}


//const b = new ParDeBarreiras ( 700,100,800)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)
//

function Barreiras (altura,largura,abertura,espaco,notificarPonto){
    this.pares = [
        new ParDeBarreiras(altura,abertura,largura)
        new ParDeBarreiras(altura,abertura,largura + espaco)
        new ParDeBarreiras(altura,abertura,largura + espaco*2)
        new ParDeBarreiras(altura,abertura,largura + espaco *3)
    ]

    const descolamento = 3
    this.animar = ()=>{
        this.pares.forEach(par=>{
            par.setX(par.getX()- descolamento)

            if(par.getX()< -par.getLargura()){
                par.setX(par.getX()+espaco * this.pares.length)
                par.sortearAbertura
            }
            const meio = largura /2
            const cruzouOmeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOmeio) notificarPonto()

        })
    }
    function Passaro(alturaJogo){
        let voando = false
        this.elemento = novoElemento('img','passaro')
        this.elemento.src = 'img/passaro.png'

        this.getY= () => parseInt(this.elemento.style.bottom.split('px')[0])
        this.setY= y => this.elemento.style.bottom = `${y}px`

        window.onkeydown = e => voando = true
        window.onkeyup = e => voando = false

        this.animar = () =>{
            const novoY = this.getY() + (voando ? 8:-5)
            const alturaMaxima = alturaJogo - this.elemento.clienthHeight
            if (novoY <=0){
                this.setY(0)
            } else if ( novoY >= alturaMaxima){
                this.setY(alturaMaxima)

            } else {
                this.setY(novoY)
            }
        }

    }

    this.setY(alturaJogo)/2
}

// Deu nao