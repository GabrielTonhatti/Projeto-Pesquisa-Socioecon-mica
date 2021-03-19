async function generateChart() {
    const file = await fetch('script/json/forms.json')

    const json = await file.json()
    const forms = json.forms

    let ADS = 0;
    let GPI = 0;
    let GRH = 0;
    let DSM = 0;
    let Matutino = 0;
    let Noturno = 0;
    let i = 0;

    // Matutino

    // Estados
    let MatutinoAC = 0;
    let MatutinoAL = 0;
    let MatutinoAP = 0;
    let MatutinoAM = 0;
    let MatutinoBA = 0;
    let MatutinoCE = 0;
    let MatutinoDF = 0;
    let MatutinoES = 0;
    let MatutinoGO = 0;
    let MatutinoMA = 0;
    let MatutinoMT = 0;
    let MatutinoMS = 0;
    let MatutinoMG = 0;
    let MatutinoPR = 0;
    let MatutinoPB = 0;
    let MatutinoPA = 0;
    let MatutinoPE = 0;
    let MatutinoPI = 0;
    let MatutinoRJ = 0;
    let MatutinoRN = 0;
    let MatutinoRS = 0;
    let MatutinoRO = 0;
    let MatutinoRR = 0;
    let MatutinoSC = 0;
    let MatutinoSE = 0;
    let MatutinoSP = 0;
    let MatutinoTO = 0;

    // Cidades
    let MatutinoCBA = 0;
    let MatutinoCBU = 0;
    let MatutinoCCPT = 0;
    let MatutinoCCA = 0;
    let MatutinoCCL = 0;
    let MatutinoCCP = 0;
    let MatutinoCDF = 0;
    let MatutinoCET = 0;
    let MatutinoCFR = 0;
    let MatutinoCGU = 0;
    let MatutinoCGR = 0;
    let MatutinoCIBI = 0;
    let MatutinoCIG = 0;
    let MatutinoCIP = 0;
    let MatutinoCIT = 0;
    let MatutinoCITU = 0;
    let MatutinoCJR = 0;
    let MatutinoCMG = 0;
    let MatutinoCMA = 0;
    let MatutinoCNU = 0;
    let MatutinoCO = 0;
    let MatutinoCPA = 0;
    let MatutinoCPP = 0;
    let MatutinoCPE = 0;
    let MatutinoCPEI = 0;
    let MatutinoCPRA = 0;
    let MatutinoCRE = 0;
    let MatutinoCRC = 0;
    let MatutinoCRP = 0;
    let MatutinoCRI = 0;
    let MatutinoCSA = 0;
    let MatutinoCSO = 0;
    let MatutinoCSJB = 0;
    let MatutinoCSJBV = 0;
    let MatutinoCSTA = 0;

    // Gênero
    let Masculino = 0;
    let Feminino = 0;
    let Htrangenero = 0;
    let Htransexual = 0;
    let Mtrangenero = 0;
    let Mtransexual = 0;
    let Nseiresponder = 0;
    let PrefiroNaodizer = 0;
    let Outrogenero = 0;

    // Estado Civil
    let Solteiro = 0;
    let Casado = 0;
    let Separado = 0;
    let Viuvo = 0;

    // Portadores de necessidades especiais
    let nenhuma = 0;
    let visual = 0;
    let fisica = 0;
    let auditiva = 0;
    let autismo = 0;
    let deFAla = 0;

    // Noturno

    // Estados
    let NoturnoAC = 0;
    let NoturnoAL = 0;
    let NoturnoAP = 0;
    let NoturnoAM = 0;
    let NoturnoBA = 0;
    let NoturnoCE = 0;
    let NoturnoDF = 0;
    let NoturnoES = 0;
    let NoturnoGO = 0;
    let NoturnoMA = 0;
    let NoturnoMT = 0;
    let NoturnoMS = 0;
    let NoturnoMG = 0;
    let NoturnoPR = 0;
    let NoturnoPB = 0;
    let NoturnoPA = 0;
    let NoturnoPE = 0;
    let NoturnoPI = 0;
    let NoturnoRJ = 0;
    let NoturnoRN = 0;
    let NoturnoRS = 0;
    let NoturnoRO = 0;
    let NoturnoRR = 0;
    let NoturnoSC = 0;
    let NoturnoSE = 0;
    let NoturnoSP = 0;
    let NoturnoTO = 0;

    // Cidades
    let NoturnoCBA = 0;
    let NoturnoCBU = 0;
    let NoturnoCCPT = 0;
    let NoturnoCCA = 0;
    let NoturnoCCL = 0;
    let NoturnoCCP = 0;
    let NoturnoCDF = 0;
    let NoturnoCET = 0;
    let NoturnoCFR = 0;
    let NoturnoCGU = 0;
    let NoturnoCGR = 0;
    let NoturnoCIBI = 0;
    let NoturnoCIG = 0;
    let NoturnoCIP = 0;
    let NoturnoCIT = 0;
    let NoturnoCITU = 0;
    let NoturnoCJR = 0;
    let NoturnoCMG = 0;
    let NoturnoCMA = 0;
    let NoturnoCNU = 0;
    let NoturnoCO = 0;
    let NoturnoCPA = 0;
    let NoturnoCPP = 0;
    let NoturnoCPE = 0;
    let NoturnoCPEI = 0;
    let NoturnoCPRA = 0;
    let NoturnoCRE = 0;
    let NoturnoCRC = 0;
    let NoturnoCRP = 0;
    let NoturnoCRI = 0;
    let NoturnoCSA = 0;
    let NoturnoCSO = 0;
    let NoturnoCSJB = 0;
    let NoturnoCSJBV = 0;
    let NoturnoCSTA = 0;

    for (quest of forms) {

        // Curso
        if (forms[i]["1. Qual o seu curso?"] == 'Análise e Desenvolvimento de Sistemas (ADS)') {
            ADS++
        } else if (forms[i]["1. Qual o seu curso?"] == 'Gestão da Produção Industrial (GPI)') {
            GPI++
        } else if (forms[i]["1. Qual o seu curso?"] == 'Gestão de Recursos Humanos') {
            GRH++
        } else if (forms[i]["1. Qual o seu curso?"] == 'Desenvolvimento de Software Multiplataforma') {
            DSM++
        }

        if (forms[i]["2. Qual o período que cursa?"] == 'Matutino') {
            // Periodo
            Matutino++

            //Estado
            if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Acre (AC)') {
                MatutinoAC++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Alagoas (AL)') {
                MatutinoAL++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amapá (AP)') {
                MatutinoAP++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amazonas (AM)') {
                MatutinoAM++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Bahia (BA)') {
                MatutinoBA++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Ceará (CE)') {
                MatutinoCE++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Distrito Federal (DF)') {
                MatutinoDF++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Espírito Santo (ES)') {
                MatutinoES++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Goiás (GO)') {
                MatutinoGO++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Maranhão (MA)') {
                MatutinoMA++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso (MT)') {
                MatutinoMT++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso do Sul (MS)') {
                MatutinoMS++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Minas Gerais (MG)') {
                MatutinoMG++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraná (PR)') {
                MatutinoPR++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraíba (PB)') {
                MatutinoPB++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pará (PA)') {
                MatutinoPA++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pernambuco (PE)') {
                MatutinoPE++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Piauí (PI)') {
                MatutinoPI++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio de Janeiro (RJ)') {
                MatutinoRJ++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Norte (RN)') {
                MatutinoRN++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Sul (RS)') {
                MatutinoRS++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rondônia (RO)') {
                MatutinoRO++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Roraima (RR)') {
                MatutinoRR++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Santa Catarina (SC)') {
                MatutinoSC++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Sergipe (SE)') {
                MatutinoSE++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'São Paulo (SP)') {
                MatutinoSP++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Tocantins (TO)') {
                MatutinoTO++
            }

            // Cidade
            if (forms[i]["5. Qual sua cidade de residência?"] == 'Batatais') {
                MatutinoCBA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Buritizal') {
                MatutinoCBU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Capetinga') {
                MatutinoCCPT++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cássia') {
                MatutinoCCA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Claraval') {
                MatutinoCCL++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cristais Paulista') {
                MatutinoCCP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Delfinópolis') {
                MatutinoCDF++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Estreito') {
                MatutinoCET++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Franca') {
                MatutinoCFR++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guaíra') {
                MatutinoCGU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guará') {
                MatutinoCGR++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ibiraci') {
                MatutinoCIBI++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Igarapava') {
                MatutinoCIG++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ipuã') {
                MatutinoCIP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Itirapuã') {
                MatutinoCIT++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ituverava') {
                MatutinoCITU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Jeriquara') {
                MatutinoCJR++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Miguelópolis') {
                MatutinoCMG++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Morro Agudo') {
                MatutinoCMA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Nuporanga') {
                MatutinoCNU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Orlândia') {
                MatutinoCO++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Passos') {
                MatutinoCPA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Patrocínio Paulista') {
                MatutinoCPP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pedregulho') {
                MatutinoCPE++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Peixoto') {
                MatutinoCPEI++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pratápolis') {
                MatutinoCPRA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Restinga') {
                MatutinoCRE++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Corrente') {
                MatutinoCRC++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Preto') {
                MatutinoCRP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Rifaina') {
                MatutinoCRI++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sacramento') {
                MatutinoCSA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sales Oliveira') {
                MatutinoCSO++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. Joaquim da Barra)') {
                MatutinoCSJB++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. José da Bela Vista') {
                MatutinoCSJBV++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'São Tomaz de Aquino') {
                MatutinoCSTA++
            }



        } else if (forms[i]["2. Qual o período que cursa?"] == 'Noturno') {
            // Periodo
            Noturno++

            // Estado
            if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Acre (AC)') {
                NoturnoAC++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Alagoas (AL)') {
                NoturnoAL++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amapá (AP)') {
                NoturnoAP++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amazonas (AM)') {
                NoturnoAM++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Bahia (BA)') {
                NoturnoBA++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Ceará (CE)') {
                NoturnoCE++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Distrito Federal (DF)') {
                NoturnoDF++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Espírito Santo (ES)') {
                NoturnoES++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Goiás (GO)') {
                NoturnoGO++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Maranhão (MA)') {
                NoturnoMA++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso (MT)') {
                NoturnoMT++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso do Sul (MS)') {
                NoturnoMS++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Minas Gerais (MG)') {
                NoturnoMG++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraná (PR)') {
                NoturnoPR++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraíba (PB)') {
                NoturnoPB++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pará (PA)') {
                NoturnoPA++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pernambuco (PE)') {
                NoturnoPE++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Piauí (PI)') {
                NoturnoPI++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio de Janeiro (RJ)') {
                NoturnoRJ++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Norte (RN)') {
                NoturnoRN++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Sul (RS)') {
                NoturnoRS++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rondônia (RO)') {
                NoturnoRO++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Roraima (RR)') {
                NoturnoRR++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Santa Catarina (SC)') {
                NoturnoSC++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Sergipe (SE)') {
                NoturnoSE++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'São Paulo (SP)') {
                NoturnoSP++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Tocantins (TO)') {
                NoturnoTO++
            }

            // Cidade
            if (forms[i]["5. Qual sua cidade de residência?"] == 'Batatais') {
                NoturnoCBA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Buritizal') {
                NoturnoCBU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Capetinga') {
                NoturnoCCPT++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cássia') {
                NoturnoCCA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Claraval') {
                NoturnoCCL++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cristais Paulista') {
                NoturnoCCP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Delfinópolis') {
                NoturnoCDF++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Estreito') {
                NoturnoCET++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Franca') {
                NoturnoCFR++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guaíra') {
                NoturnoCGU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guará') {
                NoturnoCGR++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ibiraci') {
                NoturnoCIBI++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Igarapava') {
                NoturnoCIG++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ipuã') {
                NoturnoCIP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Itirapuã') {
                NoturnoCIT++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ituverava') {
                NoturnoCITU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Jeriquara') {
                NoturnoCJR++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Miguelópolis') {
                NoturnoCMG++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Morro Agudo') {
                NoturnoCMA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Nuporanga') {
                NoturnoCNU++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Orlândia') {
                NoturnoCO++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Passos') {
                NoturnoCPA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Patrocínio Paulista') {
                NoturnoCPP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pedregulho') {
                NoturnoCPE++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Peixoto') {
                NoturnoCPEI++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pratápolis') {
                NoturnoCPRA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Restinga') {
                NoturnoCRE++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Corrente') {
                NoturnoCRC++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Preto') {
                NoturnoCRP++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Rifaina') {
                NoturnoCRI++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sacramento') {
                NoturnoCSA++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sales Oliveira') {
                NoturnoCSO++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. Joaquim da Barra)') {
                NoturnoCSJB++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. José da Bela Vista') {
                NoturnoCSJBV++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'São Tomaz de Aquino') {
                NoturnoCSTA++
            }
        }


        // Estado Civil
        if (forms[i]["8. Qual é o seu estado civil?"] == 'Solteiro(a)') {
            Solteiro++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Casado(a) ou União Estável") {
            Casado++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Separado(a), desquitado(a), divorciado(a)") {
            Separado++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Viúvo(a)") {
            Viuvo++
        }

        // Portadores de Necessidades especiais
        if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == 'Nenhuma') {
            nenhuma++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Visual") {
            visual++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Física") {
            fisica++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Auditiva") {
            auditiva++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Autismo") {
            autismo++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "De fala") {
            deFAla++
        }

        // Gênero
        if (forms[i]["6. Qual o seu gênero?"] == "Masculino") {
            Masculino++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Feminino") {
            Feminino++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Homem transgênero") {
            Htrangenero++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Mulher Transgênero") {
            Mtrangenero++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Homem Transexual") {
            Htransexual++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Homem Transexual") {
            Mtransexual++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Não sei responder") {
            Nseiresponder++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Prefiro não responder") {
            PrefiroNaodizer++
        } else {
            Outrogenero++
        }

        i++
    }

    // Grafico Cursos
    var ctx = document.getElementById('curso').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['ADS', 'GPI', 'GHR', 'DSM'],
            datasets: [{
                label: 'ADS',
                backgroundColor: ['#003AAA', 'rgb(31, 255, 69)', '#AA0000', '#F0660C'],
                borderColor: ['#003AAA', 'rgb(31, 255, 69)', '#AA0000', '#F0660C'],
                data: [ADS, GPI, GRH, DSM]
            }]
        },

        options: {
            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: "Cursos"
            },
            legend: {
                position: 'left',
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            }
        }
    });

    // Grafico Periodos
    var ctx = document.getElementById('periodo').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Matutino', 'Noturno'],
            datasets: [{
                label: 'Periodo',
                backgroundColor: ['#003AAA', '#001A56'],
                borderColor: ['#003AAA', '#001A56'],
                data: [Matutino, Noturno]
            }]
        },

        options: {
            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: "Período"
            },
            legend: {
                position: 'left',
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            }
        }
    });



    // Grafico Estados
    var ctx = document.getElementById('estado').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'bar',

        data: {
            labels: ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'],
            datasets: [{
                label: 'Matutino',
                backgroundColor: '#003AAA',
                borderColor: '#003AAA',
                data: [MatutinoAC, MatutinoAL, MatutinoAP, MatutinoAM, MatutinoBA, MatutinoCE, MatutinoDF, MatutinoES, MatutinoGO, MatutinoMA, MatutinoMT, MatutinoMS, MatutinoMG, MatutinoPR, MatutinoPB, MatutinoPA, MatutinoPE, MatutinoPI, MatutinoRJ, MatutinoRN, MatutinoRS, MatutinoRO, MatutinoRR, MatutinoSC, MatutinoSE, MatutinoSP, MatutinoTO],
            },
            {
                label: 'Noturno',
                backgroundColor: '#001A56',
                borderColor: '#001A56',
                data: [NoturnoAC, NoturnoAL, NoturnoAP, NoturnoAM, NoturnoBA, NoturnoCE, NoturnoDF, NoturnoES, NoturnoGO, NoturnoMA, NoturnoMT, NoturnoMS, NoturnoMG, NoturnoPR, NoturnoPB, NoturnoPA, NoturnoPE, NoturnoPI, NoturnoRJ, NoturnoRN, NoturnoRS, NoturnoRO, NoturnoRR, NoturnoSC, NoturnoSE, NoturnoSP, NoturnoTO],
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: "Estados"
            },
            legend: {
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: false,
                    gridLines: {
                        display: true,
                        color: "#8B8B8C"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: true,
                        color: '#8B8B8C',
                    }
                }]
            }
        },
    });

    // Grafico Cidades
    var ctx = document.getElementById('cidade').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'bar',

        data: {
            labels: ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino',],
            datasets: [{
                label: 'Matutino',
                backgroundColor: '#003AAA',
                borderColor: '#003AAA',
                data: [MatutinoCBA, MatutinoCBU, MatutinoCCPT, MatutinoCCA, MatutinoCCL, MatutinoCCP, MatutinoCDF, MatutinoCET, MatutinoCFR, MatutinoCGU, MatutinoCGR, MatutinoCIBI, MatutinoCIG, MatutinoCIP, MatutinoCIT, MatutinoCITU, MatutinoCJR, MatutinoCMG, MatutinoCMA, MatutinoCNU, MatutinoCO, MatutinoCPA, MatutinoCPP, MatutinoCPE, MatutinoCPEI, MatutinoCPRA, MatutinoCRE, MatutinoCRC, MatutinoCRP, MatutinoCRI, MatutinoCSA, MatutinoCSO, MatutinoCSJB, MatutinoCSJBV, MatutinoCSTA]
            },
            {
                label: 'Noturno',
                backgroundColor: '#001A56',
                borderColor: '#001A56',
                data: [NoturnoCBA, NoturnoCBU, NoturnoCCPT, NoturnoCCA, NoturnoCCL, NoturnoCCP, NoturnoCDF, NoturnoCET, NoturnoCFR, NoturnoCGU, NoturnoCGR, NoturnoCIBI, NoturnoCIG, NoturnoCIP, NoturnoCIT, NoturnoCITU, NoturnoCJR, NoturnoCMG, NoturnoCMA, NoturnoCNU, NoturnoCO, NoturnoCPA, NoturnoCPP, NoturnoCPE, NoturnoCPEI, NoturnoCPRA, NoturnoCRE, NoturnoCRC, NoturnoCRP, NoturnoCRI, NoturnoCSA, NoturnoCSO, NoturnoCSJB, NoturnoCSJBV, NoturnoCSTA]
            }]
        },

        options: {
            title: {
                display: true,
                fontSize: 40,
                fontColor: '#BFBFBF',
                text: "Cidades"
            },
            legend: {
                display: true,
                labels: {
                    fontColor: '#BFBFBF',
                }
            },
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: false,
                    gridLines: {
                        display: true,
                        color: "#8B8B8C"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: true,
                        color: '#8B8B8C',
                    }
                }]
            }
        },
    });
    // Generos
    var ctx = document.getElementById('genero').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'],
            datasets: [{
                label: 'Matutino',
                backgroundColor: ['#003AAA','#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#038C8C'],
                borderColor: ['#003AAA', '#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#038C8C'],
                data: [Masculino, Feminino, Htrangenero, Mtrangenero,Htransexual, Mtransexual, Nseiresponder, PrefiroNaodizer, Outrogenero]
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: "Gênero"
            },
            legend: {
                position: 'left',
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            },
        },
    });

    var ctx = document.getElementById('estado_civil').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Solteiro', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'],
            datasets: [{
                label: 'Matutino',
                backgroundColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64'],
                borderColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64'],
                data: [Solteiro, Casado, Separado, Viuvo],
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: "Estado Civil"
            },
            legend: {
                position: 'left',
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            }
        }
    });

    var ctx = document.getElementById('Portador_de_Necessidade').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Nenhuma', 'Visual', 'Física', 'Auditiva', 'Autismo', 'De fala'],
            datasets: [{
                label: 'Portadores de Necessidades Especiais',
                backgroundColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#EA4335'],
                borderColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#EA4335'],
                data: [nenhuma, visual, fisica, auditiva, autismo, deFAla],
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 30,
                text: "Portadores de Necessidades Especiais"
            },
            legend: {
                position: 'left',
                display: true,
                labels: {
                    fontColor: '#BFBFBF'
                }
            }
        }
    });



}

generateChart()