async function generateChart() {
    const file = await fetch('script/json/forms.json')

    const json = await file.json()
    const forms = json.forms

    let Solteiro = 0;
    let Casado = 0;
    let Separado = 0;
    let Viuvo = 0;
    let i = 0;
    let tempoMoradia = [];
    for (quest of forms) {
        /*if (forms[i]["8. Qual é o seu estado civil?"] == 'Solteiro(a)') {
            Solteiro++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Casado(a) ou União Estável") {
            Casado++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Separado(a), desquitado(a), divorciado(a)") {
            Separado++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Viúvo(a)") {
            Viuvo++
        }*/

        tempoMoradia[i] = forms[i]['15. Tempo de moradia neste domicílio (Em anos)']

        console.log(tempoMoradia[i])


        i++
    }

    /*/console.log(Solteiro)
    console.log(Casado)
    console.log(Separado)
    console.log(Viuvo)*/


}

generateChart()