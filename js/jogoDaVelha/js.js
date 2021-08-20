let jogador = 'x'

function checkJogo(id) {
    const src = checkSrc(id)

    if(src === 'branco.png') {
        document.getElementById(id).src = 'img/'+ jogador + '.png'
        if (jogador === 'x') {
            jogador = 'o'
        } else {
            jogador = 'x'
        }
    }
}

function checkSrc(id) {
    const src = document.getElementById(id).src
    return src.substring(src.length - 10, src.length)
}