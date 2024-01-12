const textArray = [
    'Проснитесь и пойте, мистер Фримен.\nПроснитесь и пойте. Нет, я не хочу сказать, что Вы спите на работе. \nНикто не заслуживает отдыха больше вашего.\nИ все усилия мира пропали бы даром, пока... скажем просто, что Ваш час снова пробил.\nНужный человек не в том месте может перевернуть мир.\nТак проснитесь же, мистер Фримен. Проснитесь, вас снова ждут великие дела.'
]

function selfPrint() {
    let line = 0
    let count = 0
    let out = ''
    let outElem = document.querySelector('#out')

    function intervalFunc () {
        let interval = setTimeout(() => {
            out += textArray[line][count]
            outElem.innerText = out
            count++
            
            if (count >= textArray[line].length) {
                count = 0
                line++
                if (line == textArray.length) {
                    clearInterval(interval)
                }
            }
            intervalFunc()
        }, 100)
    }
    intervalFunc()
}

selfPrint()