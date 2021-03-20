async function generateChart() {
    const file = await fetch('script/json/forms.json')

    const json = await file.json()
    const forms = json.forms

    /* Cursos
    ADS, GPI, GRH, DSM*/
    let Cursos = [0, 0, 0, 0];

    /* Periodos
    Matutino, Noturno*/
    let Periodo = [0, 0];

    let i = 0;

    // Matutino

    // Estados
    /* Em ordem respectiva
    Acre (AC), Alagoas (AL), Amapá (AP), Amazonas (AM), Bahia (BA), Ceará (CE), Distrito Federal (DF), Espírito Santo (ES), Goiás (G), OMaranhão (MA), Mato Grosso (MT), 
    Mato Grosso do Sul (MS), Minas Gerais (MG), Paraná (PR), Paraíba (PB), Pará (PA), Pernambuco (PE), Piauí (PI), Rio de Janeiro (RJ), Rio Grande do Norte (RN), 
    Rio Grande do Sul (RS), Rondônia (RO), Roraima (RR), Santa Catarina (SC), Sergipe (SE), São Paulo (SP), Tocantins (TO) */
    MatutinoEstado = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    // Cidades
    /* Em ordem respectiva 
     Batatais, Buritizal ,Capetinga , Cássia, Claraval, Cristais Paulista, Delfinópolis, Estreito, FRANCA, Guaíra, Guará, Ibiraci, Igarapava, Ipuã, Itirapuã, Ituverava,
     Jeriquara, Miguelópolis, Morro Agudo, Nuporanga, Orlândia, Passos, Patrocínio Paulista, Pedregulho, Peixoto, Pratápolis, Restinga,
     Ribeirão Corrente, Ribeirão Preto, Rifaina, Sacramento, Sales Oliveira, S. Joaquim da Barra, S. José da Bela Vista, São Tomaz de Aquino  */
    let MatutinoCidade = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


    // Gênero
    /* Em ordem respectiva
      Masculino, Feminino, Htrangenero, Htransexual, Mtrangenero, Mtransexual, Nseiresponder, PrefiroNaodizer, Outrogenero
    */
    let Genero = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    // Estado Civil
    // Na respectiva ordem
    // Solteiro, Casado, Separado, Viuvo
    let EstadoCivil = [0, 0, 0, 0]

    // Portadores de necessidades especiais
    let Port = [0, 0, 0, 0, 0, 0];

    //Por 0 = nenhum / 1 = visual / 2 = fisica / 3 = auditiva/ 4 = autismo / 5 = de Fala

    // Convive com Portadores de necessidades especiais
    /*Autismo, Down, Deficiencia, Auditiva, Visual, De Fala, Fisica, Nao Convive */
    let ConviveComPortador = [0, 0, 0, 0, 0, 0, 0, 0];

    // Quantidades de filhos
    let NenhumFilho = 0;
    let umFilho = 0;
    let doisFilhos = 0;
    let tresFilhos = 0;
    let quatrofilhos = 0;
    let maisDeQuatroFilhos = 0;
    let QtdFilhos = [0, 0, 0, 0, 0, 0];

    // Mora com
    let moraComPai = 0;
    let moraComEsposa = 0;
    let moraComAmigos = 0;
    let moraSozinho = 0;
    let MoraCom = [0, 0, 0, 0];

    // Quantidade de pessoas que moram com cada
    let moraUm = 0;
    let moraDois = 0;
    let moraTres = 0;
    let moraQuatro = 0;
    let moraCinco = 0;
    let moraSeis = 0;
    let moraSete = 0;
    let moraMaisQueSete = 0;
    let QtdDeMoradores = [0, 0, 0, 0, 0, 0, 0, 0];

    // Situação do domicilio
    let proprio = 0;
    let alugado = 0;
    let cedido = 0;
    let financiado = 0;
    let arrendado = 0;
    let mensalista = 0;
    let SituacaoDomicilio = [0, 0, 0, 0, 0, 0];

    // Tempo de moradia
    let ateDezAnos = 0;
    let ateVinteAnos = 0;
    let ateTrintaAnos = 0;
    let ateQuarentaAnos = 0;
    let ateCinquentaAnos = 0;
    let ateSessentaAnos = 0;
    let Moradia = [];
    let tempoMoradia = [0, 0, 0, 0, 0, 0];

    // Faixa de renda mensal
    let DoisSalarios = 0;
    let CincoSalarios = 0;
    let DezSalarios = 0;
    let VinteSalarios = 0;
    let MaisDeVinteSalarios = 0;
    let PrefiroNaoResponder = 0;
    let RendaMensal = [0, 0, 0, 0, 0, 0]

    // Quantidade de geladeiras
    let UmaGeladeira = 0;
    let DuasGeladeira = 0;
    let TresGeladeira = 0;
    let QuatroGeladeira = 0;
    let MaisQueQuatroGeladeira = 0;
    let QtdGeladeira = [0, 0, 0, 0, 0]

    // Quantidade de celulares comuns
    let NenhumCelular = 0;
    let UmCelular = 0;
    let DoisCelular = 0;
    let TresCelular = 0;
    let QuatroCelular = 0;
    let MaisQueQuatroCelular = 0;
    let QtdCelular = [0, 0, 0, 0, 0, 0]

    // Noturno

    // Estados
    /* Em ordem respectiva
    Acre (AC), Alagoas (AL), Amapá (AP), Amazonas (AM), Bahia (BA), Ceará (CE), Distrito Federal (DF), Espírito Santo (ES), Goiás (G), OMaranhão (MA), Mato Grosso (MT), 
    Mato Grosso do Sul (MS), Minas Gerais (MG), Paraná (PR), Paraíba (PB), Pará (PA), Pernambuco (PE), Piauí (PI), Rio de Janeiro (RJ), Rio Grande do Norte (RN), 
    Rio Grande do Sul (RS), Rondônia (RO), Roraima (RR), Santa Catarina (SC), Sergipe (SE), São Paulo (SP), Tocantins (TO) */
    NoturnoEstado = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Cidades
    /* Em ordem respectiva 
     Batatais, Buritizal ,Capetinga , Cássia, Claraval, Cristais Paulista, Delfinópolis, Estreito, FRANCA, Guaíra, Guará, Ibiraci, Igarapava, Ipuã, Itirapuã, Ituverava,
     Jeriquara, Miguelópolis, Morro Agudo, Nuporanga, Orlândia, Passos, Patrocínio Paulista, Pedregulho, Peixoto, Pratápolis, Restinga,
     Ribeirão Corrente, Ribeirão Preto, Rifaina, Sacramento, Sales Oliveira, S. Joaquim da Barra, S. José da Bela Vista, São Tomaz de Aquino  */
    let NoturnoCidade = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    let vet = ['Um', 'Dois', 'Três', 'Quatro', 'Mais que quatro']
    let vet1 = [1, 20, 3, 4, 5]

    function ChartPie(id, tipo, labels, datas, title) {
        var ctx = document.getElementById(id).getContext('2d');
    var chart = new Chart(ctx, {

        type: tipo,

        data: {
            labels: labels,
            datasets: [{
                label: '',
                backgroundColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#EA4335'],
                borderColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64', '#FBBC05', '#EA4335'],
                data: datas,
            }]
        },

        options: {

            title: {
                display: true,
                fontColor: '#BFBFBF',
                fontSize: 30,
                text: title
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

    function ChartBar(id, tipo, labels, datas, datas2, title) {
        var ctx = document.getElementById(id).getContext('2d');
        var chart = new Chart(ctx, {

            type: tipo,

            data: {
                labels: labels,
                datasets: [{
                    label: 'Matutino',
                    backgroundColor: '#118DFF',
                    borderColor: '#118DFF',
                    data: datas,
                },
                {
                    label: 'Noturno',
                    backgroundColor: '#E044A7',
                    borderColor: '#E044A7',
                    data: datas2,
                }]
            },

            options: {

                title: {
                    display: true,
                    fontColor: '#BFBFBF',
                    fontSize: 40,
                    text: title
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
    }


    for (quest of forms) {

        // Curso
        if (forms[i]["1. Qual o seu curso?"] == 'Análise e Desenvolvimento de Sistemas (ADS)') {
            Cursos[0]++
        } else if (forms[i]["1. Qual o seu curso?"] == 'Gestão da Produção Industrial (GPI)') {
            Cursos[1]++
        } else if (forms[i]["1. Qual o seu curso?"] == 'Gestão de Recursos Humanos') {
            Cursos[2]++
        } else if (forms[i]["1. Qual o seu curso?"] == 'Desenvolvimento de Software Multiplataforma') {
            Cursos[3]++
        }

        if (forms[i]["2. Qual o período que cursa?"] == 'Matutino') {
            // Periodo
            Periodo[0]++

            //Estado
            if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Acre (AC)') {
                MatutinoEstado[0]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Alagoas (AL)') {
                MatutinoEstado[1]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amapá (AP)') {
                MatutinoEstado[2]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amazonas (AM)') {
                MatutinoEstado[3]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Bahia (BA)') {
                MatutinoEstado[4]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Ceará (CE)') {
                MatutinoEstado[5]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Distrito Federal (DF)') {
                MatutinoEstado[6]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Espírito Santo (ES)') {
                MatutinoEstado[7]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Goiás (GO)') {
                MatutinoEstado[8]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Maranhão (MA)') {
                MatutinoEstado[9]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso (MT)') {
                MatutinoEstado[10]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso do Sul (MS)') {
                MatutinoEstado[11]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Minas Gerais (MG)') {
                MatutinoEstado[12]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraná (PR)') {
                MatutinoEstado[13]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraíba (PB)') {
                MatutinoEstado[14]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pará (PA)') {
                MatutinoEstado[15]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pernambuco (PE)') {
                MatutinoEstado[16]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Piauí (PI)') {
                MatutinoEstado[17]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio de Janeiro (RJ)') {
                MatutinoEstado[18]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Norte (RN)') {
                MatutinoEstado[19]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Sul (RS)') {
                MatutinoEstado[20]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rondônia (RO)') {
                MatutinoEstado[21]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Roraima (RR)') {
                MatutinoEstado[22]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Santa Catarina (SC)') {
                MatutinoEstado[23]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Sergipe (SE)') {
                MatutinoEstado[24]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'São Paulo (SP)') {
                MatutinoEstado[25]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Tocantins (TO)') {
                MatutinoEstado[26]++
            }

            // Cidade
            if (forms[i]["5. Qual sua cidade de residência?"] == 'Batatais') {
                MatutinoCidade[0]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Buritizal') {
                MatutinoCidade[1]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Capetinga') {
                MatutinoCidade[2]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cássia') {
                MatutinoCidade[3]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Claraval') {
                MatutinoCidade[4]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cristais Paulista') {
                MatutinoCidade[5]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Delfinópolis') {
                MatutinoCidade[6]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Estreito') {
                MatutinoCidade[7]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Franca') {
                MatutinoCidade[8]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guaíra') {
                MatutinoCidade[9]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guará') {
                MatutinoCidade[10]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ibiraci') {
                MatutinoCidade[11]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Igarapava') {
                MatutinoCidade[12]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ipuã') {
                MatutinoCidade[13]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Itirapuã') {
                MatutinoCidade[14]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ituverava') {
                MatutinoCidade[15]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Jeriquara') {
                MatutinoCidade[16]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Miguelópolis') {
                MatutinoCidade[17]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Morro Agudo') {
                MatutinoCidade[18]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Nuporanga') {
                MatutinoCidade[19]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Orlândia') {
                MatutinoCidade[20]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Passos') {
                MatutinoCidade[21]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Patrocínio Paulista') {
                MatutinoCidade[22]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pedregulho') {
                MatutinoCidade[23]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Peixoto') {
                MatutinoCidade[24]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pratápolis') {
                MatutinoCidade[25]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Restinga') {
                MatutinoCidade[26]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Corrente') {
                MatutinoCidade[27]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Preto') {
                MatutinoCidade[28]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Rifaina') {
                MatutinoCidade[29]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sacramento') {
                MatutinoCidade[30]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sales Oliveira') {
                MatutinoCidade[31]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. Joaquim da Barra)') {
                MatutinoCidade[32]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. José da Bela Vista') {
                MatutinoCidade[33]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'São Tomaz de Aquino') {
                MatutinoCidade[34]++
            }



        } else if (forms[i]["2. Qual o período que cursa?"] == 'Noturno') {
            // Periodo
            Periodo[1]++

            // Estado
            if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Acre (AC)') {
                NoturnoEstado[0]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Alagoas (AL)') {
                NoturnoEstado[1]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amapá (AP)') {
                NoturnoEstado[2]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Amazonas (AM)') {
                NoturnoEstado[3]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Bahia (BA)') {
                NoturnoEstado[4]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Ceará (CE)') {
                NoturnoEstado[5]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Distrito Federal (DF)') {
                NoturnoEstado[6]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Espírito Santo (ES)') {
                NoturnoEstado[7]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Goiás (GO)') {
                NoturnoEstado[8]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Maranhão (MA)') {
                NoturnoEstado[9]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso (MT)') {
                NoturnoEstado[10]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Mato Grosso do Sul (MS)') {
                NoturnoEstado[11]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Minas Gerais (MG)') {
                NoturnoEstado[12]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraná (PR)') {
                NoturnoEstado[13]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Paraíba (PB)') {
                NoturnoEstado[14]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pará (PA)') {
                NoturnoEstado[15]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Pernambuco (PE)') {
                NoturnoEstado[16]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Piauí (PI)') {
                NoturnoEstado[17]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio de Janeiro (RJ)') {
                NoturnoEstado[18]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Norte (RN)') {
                NoturnoEstado[19]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rio Grande do Sul (RS)') {
                NoturnoEstado[20]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Rondônia (RO)') {
                NoturnoEstado[21]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Roraima (RR)') {
                NoturnoEstado[22]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Santa Catarina (SC)') {
                NoturnoEstado[23]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Sergipe (SE)') {
                NoturnoEstado[24]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'São Paulo (SP)') {
                NoturnoEstado[25]++
            } else if (forms[i]["4. Qual o estado do Brasil que você nasceu?"] == 'Tocantins (TO)') {
                NoturnoEstado[26]++
            }

            // Cidade
            if (forms[i]["5. Qual sua cidade de residência?"] == 'Batatais') {
                NoturnoCidade[0]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Buritizal') {
                NoturnoCidade[1]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Capetinga') {
                NoturnoCidade[2]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cássia') {
                NoturnoCidade[3]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Claraval') {
                NoturnoCidade[4]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Cristais Paulista') {
                NoturnoCidade[5]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Delfinópolis') {
                NoturnoCidade[6]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Estreito') {
                NoturnoCidade[7]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Franca') {
                NoturnoCidade[8]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guaíra') {
                NoturnoCidade[9]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Guará') {
                NoturnoCidade[10]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ibiraci') {
                NoturnoCidade[11]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Igarapava') {
                NoturnoCidade[12]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ipuã') {
                NoturnoCidade[13]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Itirapuã') {
                NoturnoCidade[14]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ituverava') {
                NoturnoCidade[15]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Jeriquara') {
                NoturnoCidade[16]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Miguelópolis') {
                NoturnoCidade[17]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Morro Agudo') {
                NoturnoCidade[18]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Nuporanga') {
                NoturnoCidade[19]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Orlândia') {
                NoturnoCidade[20]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Passos') {
                NoturnoCidade[21]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Patrocínio Paulista') {
                NoturnoCidade[22]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pedregulho') {
                NoturnoCidade[23]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Peixoto') {
                NoturnoCidade[24]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Pratápolis') {
                NoturnoCidade[25]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Restinga') {
                NoturnoCidade[26]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Corrente') {
                NoturnoCidade[27]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Ribeirão Preto') {
                NoturnoCidade[28]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Rifaina') {
                NoturnoCidade[29]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sacramento') {
                NoturnoCidade[30]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'Sales Oliveira') {
                NoturnoCidade[31]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. Joaquim da Barra)') {
                NoturnoCidade[32]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'S. José da Bela Vista') {
                NoturnoCidade[33]++
            } else if (forms[i]["5. Qual sua cidade de residência?"] == 'São Tomaz de Aquino') {
                NoturnoCidade[34]++
            }

        }

        // Gênero
        if (forms[i]["6. Qual o seu gênero?"] == "Masculino") {
            Genero[0]++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Feminino") {
            Genero[1]++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Homem transgênero") {
            Genero[2]++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Mulher Transgênero") {
            Genero[3]++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Homem Transexual") {
            Genero[4]++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Homem Transexual") {
            Genero[5]++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Não sei responder") {
            Genero[6]++
        } else if (forms[i]["6. Qual o seu gênero?"] == "Prefiro não responder") {
            Genero[7]++
        } else {
            Genero[8]++
        }

        // Estado Civil
        if (forms[i]["8. Qual é o seu estado civil?"] == 'Solteiro(a)') {
            EstadoCivil[0]++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Casado(a) ou União Estável") {
            EstadoCivil[1]++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Separado(a), desquitado(a), divorciado(a)") {
            EstadoCivil[2]++
        } else if (forms[i]["8. Qual é o seu estado civil?"] == "Viúvo(a)") {
            EstadoCivil[3]++
        }

        // Portadores de Necessidades especiais
        if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == 'Nenhuma') {
            Port[0]++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Visual") {
            Port[1]++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Física") {
            Port[2]++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Auditiva") {
            Port[3]++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "Autismo") {
            Port[4]++
        } else if (forms[i]["9. Você é portador de alguma necessidade especial?(Pode selecionar mais de uma, se for o caso)"] == "De fala") {
            Port[5]++
        }


        // Convive com Portadores de Necessidades especiais
        if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == 'Autismo') {
            ConviveComPortador[0]++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Síndrome de Down") {
            ConviveComPortador[1]++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Deficiência") {
            ConviveComPortador[2]++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Auditiva") {
            ConviveComPortador[3]++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Visual") {
            ConviveComPortador[4]++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "De fala") {
            ConviveComPortador[5]++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Física") {
            ConviveComPortador[6]++
        } else if (forms[i]["10. Você convive ou mora com alguma pessoa com deficiência?"] == "Não convivo ou não moro com alguém com deficiência") {
            ConviveComPortador[7]++
        }

        // Quantidade de filhos
        if (forms[i]['11. Quantos filhos você tem?'] == 'Nenhum') {
            NenhumFilho++
            QtdFilhos[0]++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Um") {
            QtdFilhos[1]++
            umFilho++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Dois") {
            QtdFilhos[2]++
            doisFilhos++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Três") {
            QtdFilhos[3]++
            tresFilhos++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Quatro") {
            QtdFilhos[4]++
            quatrofilhos++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Mais de quatro") {
            QtdFilhos[5]++
            maisDeQuatroFilhos++
        }

        // Moram com
        if (forms[i]['12. Com quem você mora atualmente?'] == 'Com pais e(ou) parentes') {
            moraComPai++
            MoraCom[0]++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Com esposa(o) e(ou) filho(s)") {
            MoraCom[1]++
            moraComEsposa++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Com amigos (compartilhando despesas) ou de favor") {
            MoraCom[2]++
            moraComAmigos++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Sozinho") {
            MoraCom[3]++
            moraSozinho++
        }

        // Quantidade de moradores
        if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == '1') {
            moraUm++
            QtdDeMoradores[0]++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "2") {
            QtdDeMoradores[1]++
            moraDois++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "3") {
            QtdDeMoradores[2]++
            moraTres++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "4") {
            QtdDeMoradores[3]++
            moraQuatro++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "5") {
            QtdDeMoradores[4]++
            moraCinco++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "6") {
            QtdDeMoradores[5]++
            moraSeis++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "7") {
            QtdDeMoradores[6]++
            moraSete++
        } else {
            QtdDeMoradores[7]++
            moraMaisQueSete++
        }

        // Situação do domicilio
        if (forms[i]['14. Qual a situação do domicílio onde mora?'] == 'Próprio') {
            proprio++
            SituacaoDomicilio[0]++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Alugado") {
            SituacaoDomicilio[1]++
            alugado++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Cedido") {
            SituacaoDomicilio[2]++
            cedido++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Financiado") {
            SituacaoDomicilio[3]++
            financiado++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Arrendado") {
            SituacaoDomicilio[4]++
            arrendado++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Mensalista") {
            SituacaoDomicilio[5]++
            mensalista++
        }

        // Tempo de moradia
        Moradia[i] = forms[i]['15. Tempo de moradia neste domicílio (Em anos)']
        if (Moradia[i] >= '1' && Moradia[i] <= '10') {
            tempoMoradia[0]++
        } else if (Moradia[i] >= '11' && Moradia[i] <= '20') {
            tempoMoradia[1]++
            ateVinteAnos++
        } else if (Moradia[i] >= '21' && Moradia[i] <= '30') {
            tempoMoradia[2]++
            ateTrintaAnos++
        } else if (Moradia[i] >= '31' && Moradia[i] <= '40') {
            tempoMoradia[3]++
            ateQuarentaAnos++
        } else if (Moradia[i] >= '41' && Moradia[i] <= '50') {
            tempoMoradia[4]++
            ateCinquentaAnos++
        } else if (Moradia[i] >= '51' && Moradia[i] <= '60') {
            tempoMoradia[5]++
            ateSessentaAnos++
        }
    
        // Renda mensal
        if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Até dois salários mínimos') {
            DoisSalarios++
            RendaMensal[0]++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de dois até cinco salários mínimos') {
            RendaMensal[1]++
            CincoSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de cinco até dez salários mínimos') {
            RendaMensal[2]++
            DezSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de dez até vinte salários mínimos') {
            RendaMensal[3]++
            VinteSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de vinte salários mínimos') {
            RendaMensal[4]++
            MaisDeVinteSalarios++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Prefiro não responder') {
            RendaMensal[5]++
            PrefiroNaoResponder++
        }

        if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '1') {
            UmaGeladeira++
            QtdGeladeira[0]++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '2') {
            QtdGeladeira[1]++
            DuasGeladeira++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '3') {
            QtdGeladeira[2]++
            TresGeladeira++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '4') {
            QtdGeladeira[3]++
            QuatroGeladeira++
        } else {
            QtdGeladeira[4]++
            MaisQueQuatroGeladeira++
        }
        if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '0') {
            NenhumCelular++
            QtdCelular[0]++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '1') {
            QtdCelular[1]++
            UmCelular++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '2') {
            QtdCelular[2]++
            DoisCelular++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '3') {
            QtdCelular[3]++
            TresCelular++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '4') {
            QtdCelular[4]++
            QuatroCelular++
        } else {
            QtdCelular[5]++
            MaisQueQuatroCelular++
        }


        i++
    }

    // 1 - Grafico Cursos
    let info = ['ADS', 'GPI', 'GHR', 'DSM']
    let dados = [Cursos[0], Cursos[1], Cursos[2], Cursos[3]]
    ChartPie('curso', 'pie', info, dados, "Cursos")

    // 2 - Grafico Periodos
    info = ['Matutino', 'Noturno']
    dados = [Periodo[0], Periodo[1]]
    ChartPie('periodo', 'pie', info, dados, "Periodo")
    
    // 4 - Grafico Estados
    info = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'];
    let dadosM = [MatutinoEstado[0], MatutinoEstado[1], MatutinoEstado[2], MatutinoEstado[3], MatutinoEstado[4], MatutinoEstado[5], MatutinoEstado[6], MatutinoEstado[7], MatutinoEstado[8], MatutinoEstado[9], MatutinoEstado[10], MatutinoEstado[11], MatutinoEstado[12], MatutinoEstado[13], MatutinoEstado[14], MatutinoEstado[15], MatutinoEstado[16], MatutinoEstado[17], MatutinoEstado[18], MatutinoEstado[19], MatutinoEstado[20], MatutinoEstado[21], MatutinoEstado[22], MatutinoEstado[23], MatutinoEstado[24], MatutinoEstado[25], MatutinoEstado[26]];
    let dadosN = [NoturnoEstado[0], NoturnoEstado[1], NoturnoEstado[2], NoturnoEstado[3], NoturnoEstado[4], NoturnoEstado[5], NoturnoEstado[6], NoturnoEstado[7], NoturnoEstado[8], NoturnoEstado[9], NoturnoEstado[10], NoturnoEstado[11], NoturnoEstado[12], NoturnoEstado[13], NoturnoEstado[14], NoturnoEstado[15], NoturnoEstado[16], NoturnoEstado[17], NoturnoEstado[18], NoturnoEstado[19], NoturnoEstado[20], NoturnoEstado[21], NoturnoEstado[22], NoturnoEstado[23], NoturnoEstado[24], NoturnoEstado[25], NoturnoEstado[26]];
    ChartBar('estado', 'bar', info, dadosM, dadosN,"Estados")
    
    // 5 - Grafico Cidades
    info = ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino']
    dadosM = [MatutinoCidade[0], MatutinoCidade[1], MatutinoCidade[2], MatutinoCidade[3], MatutinoCidade[4], MatutinoCidade[5], MatutinoCidade[6], MatutinoCidade[7], MatutinoCidade[8], MatutinoCidade[9], MatutinoCidade[10], MatutinoCidade[11], MatutinoCidade[12], MatutinoCidade[13], MatutinoCidade[14], MatutinoCidade[15], MatutinoCidade[16], MatutinoCidade[17], MatutinoCidade[18], MatutinoCidade[19], MatutinoCidade[20], MatutinoCidade[21], MatutinoCidade[22], MatutinoCidade[23], MatutinoCidade[24], MatutinoCidade[25], MatutinoCidade[26], MatutinoCidade[27], MatutinoCidade[28], MatutinoCidade[29], MatutinoCidade[30], MatutinoCidade[31], MatutinoCidade[32], MatutinoCidade[33]]
    dadosN = [NoturnoCidade[0], NoturnoCidade[1], NoturnoCidade[2], NoturnoCidade[3], NoturnoCidade[4], NoturnoCidade[5], NoturnoCidade[6], NoturnoCidade[7], NoturnoCidade[8], NoturnoCidade[9], NoturnoCidade[10], NoturnoCidade[11], NoturnoCidade[12], NoturnoCidade[13], NoturnoCidade[14], NoturnoCidade[15], NoturnoCidade[16], NoturnoCidade[17], NoturnoCidade[18], NoturnoCidade[19], NoturnoCidade[20], NoturnoCidade[21], NoturnoCidade[22], NoturnoCidade[23], NoturnoCidade[24], NoturnoCidade[25], NoturnoCidade[26], NoturnoCidade[27], NoturnoCidade[28], NoturnoCidade[29], NoturnoCidade[30], NoturnoCidade[31], NoturnoCidade[32], NoturnoCidade[33]]
    ChartBar('cidade', 'bar', info, dadosM, dadosN, "Cidade")

    // 6 - Generos
    info = ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro']
    dados = [Genero[0], Genero[1], Genero[2], Genero[3], Genero[4], Genero[5], Genero[6], Genero[7], Genero[8],]
    ChartPie('genero', 'pie', info, dados, "Gêneros")
    
    // 8 - Estado Civil
    info = ['Solteiro', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)']
    var ctx = document.getElementById('estado_civil').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'pie',

        data: {
            labels: ['Solteiro', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'],
            datasets: [{
                label: "Estado Civil",
                backgroundColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64'],
                borderColor: ['#FF3D5A', '#9657FF', '#1D96CC', '#3DFF64'],
                data: [EstadoCivil[0], EstadoCivil[1], EstadoCivil[2], EstadoCivil[3]],
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
                data: [Port[0], Port[1], Port[2], Port[3], Port[4], Port[5]],
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
                data: [ConviveComPortador[0], ConviveComPortador[1], ConviveComPortador[2], ConviveComPortador[3], ConviveComPortador[4], ConviveComPortador[5], ConviveComPortador[6], ConviveComPortador[7]]
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


    ChartPie('qtd_micro_ondas', 'pie', vet, vet1, 'Quantidade de micro-ondas')

}


generateChart()