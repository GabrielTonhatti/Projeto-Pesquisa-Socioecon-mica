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

    // Convive com Portadores de necessidades especiais
    let ConviveAutismo = 0;
    let ConviveDown = 0;
    let ConviveDeficiencia = 0;
    let ConviveAuditiva = 0;
    let ConviveVisual = 0
    let ConviveDeFala = 0;
    let ConviveFisica = 0;
    let NaoConvive = 0;

    // Quantidades de filhos
    let NenhumFilho = 0;
    let umFilho = 0;
    let doisFilhos = 0;
    let tresFilhos = 0;
    let quatrofilhos = 0;
    let maisDeQuatroFilhos = 0;

    // Mora com
    let moraComPai = 0;
    let moraComEsposa = 0;
    let moraComAmigos = 0;
    let moraSozinho = 0;

    // Quantidade de pessoas que moram com cada
    let moraUm = 0;
    let moraDois = 0;
    let moraTres = 0;
    let moraQuatro = 0;
    let moraCinco = 0;
    let moraSeis = 0;
    let moraSete = 0;
    let moraMaisQueSete = 0;

    // Situação do domicilio
    let proprio = 0;
    let alugado = 0;
    let cedido = 0;
    let financiado = 0;
    let arrendado = 0;
    let mensalista = 0;

    // Tempo de moradia
    let ateDezAnos = 0;
    let ateVinteAnos = 0;
    let ateTrintaAnos = 0;
    let ateQuarentaAnos = 0;
    let ateCinquentaAnos = 0;
    let ateSessentaAnos = 0;
    let tempoMoradia = [];

    // Faixa de renda mensal
    let DoisSalarios = 0;
    let CincoSalarios = 0;
    let DezSalarios = 0;
    let VinteSalarios = 0;
    let MaisDeVinteSalarios = 0;
    let PrefiroNaoResponder = 0;

    // Quantidade de geladeiras
    let UmaGeladeira = 0;
    let DuasGeladeira = 0;
    let TresGeladeira = 0;
    let QuatroGeladeira = 0;
    let MaisQueQuatroGeladeira = 0;

    // Quantidade de celulares comuns
    let NenhumCelular = 0;
    let UmCelular = 0;
    let DoisCelular = 0;
    let TresCelular = 0;
    let QuatroCelular = 0;
    let MaisQueQuatroCelular = 0;

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


        // Convive com Portadores de Necessidades especiais
        if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == 'Autismo') {
            ConviveAutismo++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Síndrome de Down") {
            ConviveDown++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Deficiência") {
            ConviveDeficiencia++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Auditiva") {
            ConviveAuditiva++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Visual") {
            ConviveVisual++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "De fala") {
            ConviveDeFAla++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Física") {
            ConviveFisica++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Não convivo ou não moro com alguém com deficiência") {
            NaoConvive++
        }

        // Quantidade de filhos
        if (forms[i]['11. Quantos filhos você tem?'] == 'Nenhum') {
            NenhumFilho++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Um") {
            umFilho++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Dois") {
            doisFilhos++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Três") {
            tresFilhos++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Quatro") {
            quatrofilhos++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Mais de quatro") {
            maisDeQuatroFilhos++
        }

        // Moram com
        if (forms[i]['12. Com quem você mora atualmente?'] == 'Com pais e(ou) parentes') {
            moraComPai++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Com esposa(o) e(ou) filho(s)") {
            moraComEsposa++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Com amigos (compartilhando despesas) ou de favor") {
            moraComAmigos++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Sozinho") {
            moraSozinho++
        }

        if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == '1') {
            moraUm++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "2") {
            moraDois++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "3") {
            moraTres++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "4") {
            moraQuatro++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "5") {
            moraCinco++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "6") {
            moraSeis++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "7") {
            moraSete++
        } else {
            moraMaisQueSete++
        }

        // Situação do domicilio
        if (forms[i]['14. Qual a situação do domicílio onde mora?'] == 'Próprio') {
            proprio++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Alugado") {
            alugado++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Cedido") {
            cedido++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Financiado") {
            financiado++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Arrendado") {
            arrendado++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Mensalista") {
            mensalista++
        }

        // Tempo de moradia
        tempoMoradia[i] = forms[i]['15. Tempo de moradia neste domicílio (Em anos)']
        if (tempoMoradia[i] >= '1' && tempoMoradia[i] <= '10') {
            ateDezAnos++
        } else if (tempoMoradia[i] >= '11' && tempoMoradia[i] <= '20') {
            ateVinteAnos++
        } else if (tempoMoradia[i] >= '21' && tempoMoradia[i] <= '30') {
            ateTrintaAnos++
        } else if (tempoMoradia[i] >= '31' && tempoMoradia[i] <= '40') {
            ateQuarentaAnos++
        } else if (tempoMoradia[i] >= '41' && tempoMoradia[i] <= '50') {
            ateCinquentaAnos++
        } else if (tempoMoradia[i] >= '51' && tempoMoradia[i] <= '60') {
            ateSessentaAnos++
        }

        if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Até dois salários mínimos') {
            DoisSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de dois até cinco salários mínimos') {
            CincoSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de cinco até dez salários mínimos') {
            DezSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de dez até vinte salários mínimos') {
            VinteSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de vinte salários mínimos') {
            MaisDeVinteSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Prefiro não responder') {
            PrefiroNaoResponder++
        }

        if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '1') {
            UmaGeladeira++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '2') {
            DuasGeladeira++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '3') {
            TresGeladeira++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '4') {
            QuatroGeladeira++
        } else {
            MaisQueQuatroGeladeira++
        }
        if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '0') {
            NenhumCelular++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '1') {
            UmCelular++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '2') {
            DoisCelular++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '3') {
            TresCelular++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '4') {
            QuatroCelular++
        } else {
            MaisQueQuatroCelular++
        }


        i++
    }

    // 1 - Grafico Cursos
    var ctx = document.getElementById('curso').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['ADS', 'GPI', 'GHR', 'DSM'],
            datasets: [{
                label: "Cursos",
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

    // 2 - Grafico Periodos
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



    // 4 - Grafico Estados
    var ctx = document.getElementById('estado').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'bar',

        data: {
            labels: ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'],
            datasets: [{
                label: 'Matutino',
                backgroundColor: '#118DFF',
                borderColor: '#118DFF',
                data: [MatutinoAC, MatutinoAL, MatutinoAP, MatutinoAM, MatutinoBA, MatutinoCE, MatutinoDF, MatutinoES, MatutinoGO, MatutinoMA, MatutinoMT, MatutinoMS, MatutinoMG, MatutinoPR, MatutinoPB, MatutinoPA, MatutinoPE, MatutinoPI, MatutinoRJ, MatutinoRN, MatutinoRS, MatutinoRO, MatutinoRR, MatutinoSC, MatutinoSE, MatutinoSP, MatutinoTO],
            },
            {
                label: 'Noturno',
                backgroundColor: '#E044A7',
                borderColor: '#E044A7',
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

    // 5 - Grafico Cidades
    var ctx = document.getElementById('cidade').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'bar',

        data: {
            labels: ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino',],
            datasets: [{
                label: 'Matutino',
                backgroundColor: '#118DFF',
                borderColor: '#118DFF',
                data: [MatutinoCBA, MatutinoCBU, MatutinoCCPT, MatutinoCCA, MatutinoCCL, MatutinoCCP, MatutinoCDF, MatutinoCET, MatutinoCFR, MatutinoCGU, MatutinoCGR, MatutinoCIBI, MatutinoCIG, MatutinoCIP, MatutinoCIT, MatutinoCITU, MatutinoCJR, MatutinoCMG, MatutinoCMA, MatutinoCNU, MatutinoCO, MatutinoCPA, MatutinoCPP, MatutinoCPE, MatutinoCPEI, MatutinoCPRA, MatutinoCRE, MatutinoCRC, MatutinoCRP, MatutinoCRI, MatutinoCSA, MatutinoCSO, MatutinoCSJB, MatutinoCSJBV, MatutinoCSTA]
            },
            {
                label: 'Noturno',
                backgroundColor: '#E044A7',
                borderColor: '#E044A7',
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

    // 6 - Generos
    var ctx = document.getElementById('genero').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'],
            datasets: [{
                label: "Gênero",
                backgroundColor: ['#12239E', '#118DFF', '#6B007B', '#E044A7', '#FBBC05', '#744EC2 ', '#D9B300', '#D64550', '#3DFF64'],
                borderColor: ['#12239E', '#118DFF', '#6B007B', '#E044A7', '#FBBC05', '#744EC2 ', '#D9B300', '#D64550', '#3DFF64'],
                data: [Masculino, Feminino, Htrangenero, Mtrangenero, Htransexual, Mtransexual, Nseiresponder, PrefiroNaodizer, Outrogenero]
            }]
        },

        options: {

            title: {
                boxWidth: 50,
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

    // 8 - Estado Civil
    var ctx = document.getElementById('estado_civil').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Solteiro', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'],
            datasets: [{
                label: "Estado Civil",
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

    // 9 - Portadores de Necessidades Especiais
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

    // 10 - Convive Portadores de Necessidades Especiais
    var ctx = document.getElementById('convive_com_portador').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Autismo', 'Síndrome de Down', 'Deficiência', 'Auditiva', 'Visual', 'De fala', 'Física', 'Não convive com alguém com deficiência'],
            datasets: [{
                label: 'Convive com Portadores de Necessidades Especiais',
                backgroundColor: ['#12239E', '#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#EA4335', '#6B007B'],
                borderColor: ['#12239E', '#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#EA4335', '#6B007B'],
                data: [ConviveAutismo, ConviveDown, ConviveDeficiencia, ConviveAuditiva, ConviveVisual, ConviveDeFala, ConviveFisica, NaoConvive]
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 20,
                text: "Convive com Portadores de Necessidades Especiais"
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

    // 11 - Quantidade de Filhos
    var ctx = document.getElementById('qtd_de_filhos').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais de quatro'],
            datasets: [{
                label: "Quantidade de filhos de cada estudante",
                backgroundColor: ['#12239E', '#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05'],
                borderColor: ['#12239E', '#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05'],
                data: [NenhumFilho, umFilho, doisFilhos, tresFilhos, quatrofilhos, maisDeQuatroFilhos]
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 25,
                text: "Quantidade de filhos de cada estudante"
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

    // 12 - com quem moram
    var ctx = document.getElementById('moram_com').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Com pais e(ou) parentes', 'Com esposa(o) e(ou) filho(s)', 'Com amigos (compartilhando despesas) ou de favor', 'Sozinho'],
            datasets: [{
                label: 'Com quem cada estudante mora',
                backgroundColor: ['#12239E', '#FF3D5A', '#9657FF', '#1D96CC'],
                borderColor: ['#12239E', '#FF3D5A', '#9657FF', '#1D96CC'],
                data: [moraComPai, moraComEsposa, moraComAmigos, moraSozinho]
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 25,
                text: "Com quem cada estudante mora"
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

    // 13 - Quantidade de pessoas que moram junto
    var ctx = document.getElementById('QTD_de_pessoas_moram_junto').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Mais que Sete'],
            datasets: [{
                label: "Quantidade de pessoas que moram com cada aluno",
                backgroundColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#744EC2', '#D9B300', '#3DFF64'],
                borderColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#744EC2', '#D9B300', '#3DFF64'],
                data: [moraUm, moraDois, moraTres, moraQuatro, moraCinco, moraSeis, moraSete, moraMaisQueSete]
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 20,
                text: "Quantidade de pessoas que moram com cada aluno"
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

    // 14 - Situação Domicilio
    var ctx = document.getElementById('situacao_domicilio').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Próprio', 'Alugado', 'Cedido', 'Financiado', 'Arrendado', 'Mensalista'],
            datasets: [{
                label: "Situação do Domicílio",
                backgroundColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#744EC2', '#D9B300', '#3DFF64'],
                borderColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#744EC2', '#D9B300', '#3DFF64'],
                data: [proprio, alugado, cedido, financiado, arrendado, mensalista]
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 40,
                text: "Situação do Domicílio"
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

    // Tempo de moradia
    var ctx = document.getElementById('tempo_moradia').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'horizontalBar',

        data: {
            labels: ['1 a 10', '11 a 20', '21 a 30', '31 a 40', '41 a 50', '51 a 60'],
            datasets: [{
                label: 'Matutino',
                backgroundColor: '#003AAA',
                borderColor: '#003AAA',
                data: [ateDezAnos, ateVinteAnos, ateTrintaAnos, ateQuarentaAnos, ateCinquentaAnos, ateSessentaAnos]
            },
            {
                label: 'Noturno',
                backgroundColor: '#E044A7',
                borderColor: '#E044A7',
                data: [ateDezAnos, ateVinteAnos, ateTrintaAnos, ateQuarentaAnos, ateCinquentaAnos, ateSessentaAnos]
            }]
        },

        options: {
            title: {
                display: true,
                fontSize: 40,
                fontColor: '#BFBFBF',
                text: "Tempo de moradia no domicílio(Em anos)"
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

    // Renda Mensal
    var ctx = document.getElementById('salario_min').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Até dois salários mínimos', 'Mais de dois até cinco salários mínimos', 'Mais de cinco até dez salários mínimos', 'Mais de dez até vinte salários mínimos', 'Mais de vinte salários mínimos', 'Prefiro não responder'],
            datasets: [{
                label: "Faixa de renda mensal da família do estudante (em Salários Mínimos)",
                backgroundColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#744EC2', '#D9B300', '#3DFF64'],
                borderColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#744EC2', '#D9B300', '#3DFF64'],
                data: [DoisSalarios, CincoSalarios, DezSalarios, VinteSalarios, MaisDeVinteSalarios, PrefiroNaoResponder]
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 15,
                text: "Faixa de renda mensal da família do estudante (em Salários Mínimos)"
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

    // Quantidade de geladeiras
    var ctx = document.getElementById('qtd_geladeira').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Uma', 'Duas', 'Três', 'Quatro', 'Mais que quatro'],
            datasets: [{
                label: "Quantidade de Geladeiras de cada aluno",
                backgroundColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7'],
                borderColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7'],
                data: [UmaGeladeira, DuasGeladeira, TresGeladeira, QuatroGeladeira, MaisQueQuatroGeladeira]
            }]
        },

        options: {
            title: {
                display: true,
                fontSize: 20,
                fontColor: '#BFBFBF',
                text: "Quantidade de Geladeiras de cada aluno"
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

    // Quantidade de celulares comuns
    var ctx = document.getElementById('qtd_celular_comum').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais que quatro'],
            datasets: [{
                label: "Faixa de renda mensal da família do estudante (em Salários Mínimos)",
                backgroundColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#3DFF64'],
                borderColor: ['#118DFF', '#12239E', '#E66C37', '#6B007B', '#E044A7', '#3DFF64'],
                data: [NenhumCelular, UmCelular, DoisCelular, TresCelular, QuatroCelular, MaisQueQuatroCelular]
            }]
        },

        options: {
            title: {
                display: true,
                fontSize: 20,
                fontColor: '#BFBFBF',
                text: "Quantidade de celulares comuns de cada aluno"
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