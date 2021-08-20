let jogador = 'x'
let jogadas = 0

function checkJogo(id) {
    const src = checkSrc(id)
    const cpu = document.getElementById('cpu').checked
    if(src === 'branco.png') {
        document.getElementById(id).src = 'img/'+ jogador + '.png';
        jogadas++
        if (checkVitoria()) {
            alert(`=======  O jogador '${jogador}' venceu  =======`)
            location.reload()
        }
        if (jogadas >= 9) {
            alert('======= Empate =======')
            location.reload()
        }
        if (jogador === 'x') {
            jogador = 'o'
        } else {
            jogador = 'x'
        }
    }
    if(cpu && jogador === 'o') {
        checkJogo(jogoCpu())
    }
}

function checkSrc(id) {
    const src = document.getElementById(id).src
    return src.substring(src.length - 10, src.length)
}

function checkVitoria() {
    if ((checkSrc("cel1")) === checkSrc('cel2') && checkSrc('cel1') === checkSrc('cel3') && checkSrc('cel1') !== 'branco.png') {
        return true
    }
    if ((checkSrc("cel4")) === checkSrc('cel5') && checkSrc('cel4') === checkSrc('cel6') && checkSrc('cel4') !== 'branco.png') {
        return true
    }
    if ((checkSrc("cel7")) === checkSrc('cel8') && checkSrc('cel7') === checkSrc('cel9') && checkSrc('cel7') !== 'branco.png') {
        return true
    }
    if ((checkSrc("cel1")) === checkSrc('cel4') && checkSrc('cel1') === checkSrc('cel7') && checkSrc('cel1') !== 'branco.png') {
        return true
    }
    if ((checkSrc("cel2")) === checkSrc('cel5') && checkSrc('cel2') === checkSrc('cel8') && checkSrc('cel2') !== 'branco.png') {
        return true
    }
    if ((checkSrc("cel3")) === checkSrc('cel6') && checkSrc('cel3') === checkSrc('cel9') && checkSrc('cel3') !== 'branco.png') {
        return true
    }
    if ((checkSrc("cel1")) === checkSrc('cel5') && checkSrc('cel1') === checkSrc('cel9') && checkSrc('cel1') !== 'branco.png') {
        return true
    }
    if ((checkSrc("cel3")) === checkSrc('cel5') && checkSrc('cel3') === checkSrc('cel7') && checkSrc('cel3') !== 'branco.png') {
        return true
    }
}

function jogoCpu() {
    if(checkSrc('cel5') === 'branco.png'){
        return 'cel5'
    }
    return 'cel' + Math.floor((Math.random() * 9) + 1)

}