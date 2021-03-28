async function generateChart() {
    const file = await fetch('script/json/forms.json')

    const json = await file.json()
    const forms = json.forms
    let i = 0;
    let questoes

    // Pegar todas as questões
    for (quest of forms) {
        questoes = Object.getOwnPropertyNames(quest)
        i++
    }

    // Pegas as questões so com respostas do noturno
    let Noturno = forms.filter(function (periodo) {
        return periodo[questoes[3]] === 'Noturno'
    })

    // Pegas as questões so com respostas do matutino
    let Matutino = forms.filter(function (periodo) {
        return periodo[questoes[3]] === 'Matutino'
    })

    let respostas = new Array(questoes.length)
    let respMatutino = new Array(Matutino.length)
    let respNoturno = new Array(Noturno.length)

    for (let j = 0; j < questoes.length; j++) {
        respMatutino[j] = new Array(Matutino.length)
        respNoturno[j] = new Array(Noturno.length)
        respostas[j] = new Array(forms.length)
    }

    // Array com todas as questões
    for (let k = 0; k < forms.length; k++) {
        for (let j = 0; j < questoes.length; j++) {
            respostas[j][k] = forms[k][questoes[j]]
        }
    }

    // Array com todas as questões Matutino
    for (let k = 0; k < Matutino.length; k++) {
        for (let j = 0; j < questoes.length; j++) {
            respMatutino[j][k] = Matutino[k][questoes[j]]
        }
    }

    // Array com todas as questões Noturno
    for (let k = 0; k < Noturno.length; k++) {
        for (let j = 0; j < questoes.length; j++) {
            respNoturno[j][k] = Noturno[k][questoes[j]]
        }
    }

    let data = [];

    //for (quest of forms) {
    // 7 - Data Nascimento
    /*let k = 3
    let data = ""
    console.log(respostas[8][k])
    for (let j = 0; j < 2; j++) {
        //data += respostas[8][k][respostas[8][k].length - 2] + respostas[8][k][respostas[8][k].length - 1]
        data += respostas[8][k][respostas[8][k].length - 2 + j]

    }
    if (data[0] === "0") {
        console.log("20" + data)
    } else {
        console.log(Number("19" + data))
    }

    let DataNascimento = [];
    let DadosDataNasciemnto = [];
    let labelsDataNascimento = [];*/
    console.log(respostas[8])
    for (let i = 0; i < respostas[8].length; i++) {
        data[i] =(respostas[8][i].split('/'))
    }
    console.log('Data',data)
    console.log('Data posção 0',data[0][2])


}

generateChart()