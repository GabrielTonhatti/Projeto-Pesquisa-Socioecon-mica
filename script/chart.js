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

    // Estados
    /* Em ordem respectiva
    Acre (AC), Alagoas (AL), Amapá (AP), Amazonas (AM), Bahia (BA), Ceará (CE), Distrito Federal (DF), Espírito Santo (ES), Goiás (G), OMaranhão (MA), Mato Grosso (MT), 
    Mato Grosso do Sul (MS), Minas Gerais (MG), Paraná (PR), Paraíba (PB), Pará (PA), Pernambuco (PE), Piauí (PI), Rio de Janeiro (RJ), Rio Grande do Norte (RN), 
    Rio Grande do Sul (RS), Rondônia (RO), Roraima (RR), Santa Catarina (SC), Sergipe (SE), São Paulo (SP), Tocantins (TO) */
    let MatutinoEstado = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let NoturnoEstado = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Cidades
    /* Em ordem respectiva 
     Batatais, Buritizal ,Capetinga , Cássia, Claraval, Cristais Paulista, Delfinópolis, Estreito, FRANCA, Guaíra, Guará, Ibiraci, Igarapava, Ipuã, Itirapuã, Ituverava,
     Jeriquara, Miguelópolis, Morro Agudo, Nuporanga, Orlândia, Passos, Patrocínio Paulista, Pedregulho, Peixoto, Pratápolis, Restinga,
     Ribeirão Corrente, Ribeirão Preto, Rifaina, Sacramento, Sales Oliveira, S. Joaquim da Barra, S. José da Bela Vista, São Tomaz de Aquino  */
    let MatutinoCidade = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let NoturnoCidade = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    /* Gênero
      Em ordem respectiva
      Masculino, Feminino, Htrangenero, Htransexual, Mtrangenero, Mtransexual, Nseiresponder, PrefiroNaodizer, Outrogenero*/
    let Genero = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    /* Estado Civil
     Na respectiva ordem
     Solteiro, Casado, Separado, Viuvo */
    let EstadoCivil = [0, 0, 0, 0];

    // Portadores de necessidades especiais
    let Port = [0, 0, 0, 0, 0, 0];

    //Por 0 = nenhum / 1 = visual / 2 = fisica / 3 = auditiva/ 4 = autismo / 5 = de Fala

    /* Convive com Portadores de necessidades especiais
    Autismo, Down, Deficiencia, Auditiva, Visual, De Fala, Fisica, Nao Convive */
    let ConviveComPortador = [0, 0, 0, 0, 0, 0, 0, 0];

    // Quantidades de filhos
    let QtdFilhos = [0, 0, 0, 0, 0, 0];

    // Mora com
    let MoraCom = [0, 0, 0, 0];

    // Quantidade de pessoas que moram com cada
    let QtdDeMoradores = [0, 0, 0, 0, 0, 0, 0, 0];

    // Situação do domicilio
    let SituacaoDomicilio = [0, 0, 0, 0, 0, 0];

    // Tempo de moradia
    let Moradia = [];
    let MatutinoTempoMoradia = [0, 0, 0, 0, 0, 0];
    let NoturnoTempoMoradia = [0, 0, 0, 0, 0, 0];

    // Faixa de renda mensal
    let RendaMensal = [0, 0, 0, 0, 0, 0];

    // Quantidade de geladeiras
    let QtdGeladeira = [0, 0, 0, 0, 0];

    // Quantidade de celulares comuns
    let QtdCelular = [0, 0, 0, 0, 0, 0];

    // Quantidade de Micro-ondas
    let QtdMicro_Ondas = [0, 0, 0, 0, 0, 0];

    let info = []; // Gravar as informações dos graficos
    let dados = []; // Gravas os valores de cada informação dos grafico
    let dadosM = []; // Gravas os valores de cada informação dos grafico para o Mtutino para graficos de barra
    let dadosN = []; // Gravas os valores de cada informação dos grafico para o Noturno para graficos de barra

    function ChartPie(id, tipo, labels, datas, title) {
        var ctx = document.getElementById(id).getContext('2d');
        var chart = new Chart(ctx, {

            type: tipo,

            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    backgroundColor: ['#12239E', '#FF0005', '#EA4335', '#1D96CC', '#3DFF64', '#FBBC05', '#9657FF', '#6B007B', '#FFF28C'],
                    borderColor: ['#12239E', '#FF0005', '#EA4335', '#1D96CC', '#3DFF64', '#FBBC05', '#9657FF', '#6B007B', '#FFF28C'],
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

        Moradia[i] = forms[i]['15. Tempo de moradia neste domicílio (Em anos)']

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

            // Tempo de moradia
            if (Moradia[i] >= '1' && Moradia[i] <= '10') {
                MatutinoTempoMoradia[0]++
            } else if (Moradia[i] >= '11' && Moradia[i] <= '20') {
                MatutinoTempoMoradia[1]++
            } else if (Moradia[i] >= '21' && Moradia[i] <= '30') {
                MatutinoTempoMoradia[2]++
            } else if (Moradia[i] >= '31' && Moradia[i] <= '40') {
                MatutinoTempoMoradia[3]++
            } else if (Moradia[i] >= '41' && Moradia[i] <= '50') {
                MatutinoTempoMoradia[4]++
            } else if (Moradia[i] >= '51' && Moradia[i] <= '60') {
                MatutinoTempoMoradia[5]++
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

            // Tempo de moradia
            if (Moradia[i] >= '1' && Moradia[i] <= '10') {
                NoturnoTempoMoradia[0]++
            } else if (Moradia[i] >= '11' && Moradia[i] <= '20') {
                NoturnoTempoMoradia[1]++
            } else if (Moradia[i] >= '21' && Moradia[i] <= '30') {
                NoturnoTempoMoradia[2]++
            } else if (Moradia[i] >= '31' && Moradia[i] <= '40') {
                NoturnoTempoMoradia[3]++
            } else if (Moradia[i] >= '41' && Moradia[i] <= '50') {
                NoturnoTempoMoradia[4]++
            } else if (Moradia[i] >= '51' && Moradia[i] <= '60') {
                NoturnoTempoMoradia[5]++
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
            QtdFilhos[0]++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Um") {
            QtdFilhos[1]++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Dois") {
            QtdFilhos[2]++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Três") {
            QtdFilhos[3]++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Quatro") {
            QtdFilhos[4]++
        } else if (forms[i]['11. Quantos filhos você tem?'] == "Mais de quatro") {
            QtdFilhos[5]++
        }

        // Moram com
        if (forms[i]['12. Com quem você mora atualmente?'] == 'Com pais e(ou) parentes') {
            MoraCom[0]++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Com esposa(o) e(ou) filho(s)") {
            MoraCom[1]++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Com amigos (compartilhando despesas) ou de favor") {
            MoraCom[2]++
        } else if (forms[i]['12. Com quem você mora atualmente?'] == "Sozinho") {
            MoraCom[3]++
        }

        // Quantidade de moradores
        if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == '1') {
            QtdDeMoradores[0]++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "2") {
            QtdDeMoradores[1]++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "3") {
            QtdDeMoradores[2]++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "4") {
            QtdDeMoradores[3]++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "5") {
            QtdDeMoradores[4]++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "6") {
            QtdDeMoradores[5]++
        } else if (forms[i]["13. Quantas pessoas, incluindo você, moram no seu domicílio?"] == "7") {
            QtdDeMoradores[6]++
        } else {
            QtdDeMoradores[7]++
        }

        // Situação do domicilio
        if (forms[i]['14. Qual a situação do domicílio onde mora?'] == 'Próprio') {
            SituacaoDomicilio[0]++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Alugado") {
            SituacaoDomicilio[1]++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Cedido") {
            SituacaoDomicilio[2]++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Financiado") {
            SituacaoDomicilio[3]++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Arrendado") {
            SituacaoDomicilio[4]++
        } else if (forms[i]['14. Qual a situação do domicílio onde mora?'] == "Mensalista") {
            SituacaoDomicilio[5]++
        }


        // Renda mensal
        if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Até dois salários mínimos') {
            RendaMensal[0]++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de dois até cinco salários mínimos') {
            RendaMensal[1]++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de cinco até dez salários mínimos') {
            RendaMensal[2]++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de dez até vinte salários mínimos') {
            RendaMensal[3]++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Mais de vinte salários mínimos') {
            RendaMensal[4]++
        } else if (forms[i]['16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)'] == 'Prefiro não responder') {
            RendaMensal[5]++
        }

        // Quantidade de geladeiras
        if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '1') {
            QtdGeladeira[0]++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '2') {
            QtdGeladeira[1]++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '3') {
            QtdGeladeira[2]++
        } else if (forms[i]['17.1. Quantas geladeiras há em seu domicílio.'] == '4') {
            QtdGeladeira[3]++
        } else {
            QtdGeladeira[4]++
        }

        // Quantidade de Celulares comuns
        if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '0') {
            QtdCelular[0]++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '1') {
            QtdCelular[1]++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '2') {
            QtdCelular[2]++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '3') {
            QtdCelular[3]++
        } else if (forms[i]['17.2. Quantos celulares comuns há em seu domicílio?'] == '4') {
            QtdCelular[4]++
        } else {
            QtdCelular[5]++
        }

        // Quantidade de Micro ondas
        if (forms[i]['17.3. Quantos micro-ondas há em seu domicílio?'] == '0') {
            QtdMicro_Ondas[0]++
        } else if (forms[i]['17.3. Quantos micro-ondas há em seu domicílio?'] == '1') {
            QtdMicro_Ondas[1]++
        } else if (forms[i]['17.3. Quantos micro-ondas há em seu domicílio?'] == '2') {
            QtdMicro_Ondas[2]++
        } else if (forms[i]['17.3. Quantos micro-ondas há em seu domicílio?'] == '3') {
            QtdMicro_Ondas[3]++
        } else if (forms[i]['17.3. Quantos micro-ondas há em seu domicílio?'] == '4') {
            QtdMicro_Ondas[4]++
        } else {
            QtdMicro_Ondas[5]++
        }

        i++
    }

    // 1 - Grafico Cursos
    info = ['ADS', 'GPI', 'GHR', 'DSM']
    dados = [Cursos[0], Cursos[1], Cursos[2], Cursos[3]]
    ChartPie('curso', 'pie', info, dados, "Cursos")

    // 2 - Grafico Periodos
    info = ['Matutino', 'Noturno']
    dados = [Periodo[0], Periodo[1]]
    ChartPie('periodo', 'pie', info, dados, "Periodo")

    // 4 - Grafico Estados
    info = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'];
    dadosM = [MatutinoEstado[0], MatutinoEstado[1], MatutinoEstado[2], MatutinoEstado[3], MatutinoEstado[4], MatutinoEstado[5], MatutinoEstado[6], MatutinoEstado[7], MatutinoEstado[8], MatutinoEstado[9], MatutinoEstado[10], MatutinoEstado[11], MatutinoEstado[12], MatutinoEstado[13], MatutinoEstado[14], MatutinoEstado[15], MatutinoEstado[16], MatutinoEstado[17], MatutinoEstado[18], MatutinoEstado[19], MatutinoEstado[20], MatutinoEstado[21], MatutinoEstado[22], MatutinoEstado[23], MatutinoEstado[24], MatutinoEstado[25], MatutinoEstado[26]];
    dadosN = [NoturnoEstado[0], NoturnoEstado[1], NoturnoEstado[2], NoturnoEstado[3], NoturnoEstado[4], NoturnoEstado[5], NoturnoEstado[6], NoturnoEstado[7], NoturnoEstado[8], NoturnoEstado[9], NoturnoEstado[10], NoturnoEstado[11], NoturnoEstado[12], NoturnoEstado[13], NoturnoEstado[14], NoturnoEstado[15], NoturnoEstado[16], NoturnoEstado[17], NoturnoEstado[18], NoturnoEstado[19], NoturnoEstado[20], NoturnoEstado[21], NoturnoEstado[22], NoturnoEstado[23], NoturnoEstado[24], NoturnoEstado[25], NoturnoEstado[26]];
    ChartBar('estado', 'bar', info, dadosM, dadosN, "Estados")

    // 5 - Grafico Cidades
    info = ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino'];
    dadosM = [MatutinoCidade[0], MatutinoCidade[1], MatutinoCidade[2], MatutinoCidade[3], MatutinoCidade[4], MatutinoCidade[5], MatutinoCidade[6], MatutinoCidade[7], MatutinoCidade[8], MatutinoCidade[9], MatutinoCidade[10], MatutinoCidade[11], MatutinoCidade[12], MatutinoCidade[13], MatutinoCidade[14], MatutinoCidade[15], MatutinoCidade[16], MatutinoCidade[17], MatutinoCidade[18], MatutinoCidade[19], MatutinoCidade[20], MatutinoCidade[21], MatutinoCidade[22], MatutinoCidade[23], MatutinoCidade[24], MatutinoCidade[25], MatutinoCidade[26], MatutinoCidade[27], MatutinoCidade[28], MatutinoCidade[29], MatutinoCidade[30], MatutinoCidade[31], MatutinoCidade[32], MatutinoCidade[33]];
    dadosN = [NoturnoCidade[0], NoturnoCidade[1], NoturnoCidade[2], NoturnoCidade[3], NoturnoCidade[4], NoturnoCidade[5], NoturnoCidade[6], NoturnoCidade[7], NoturnoCidade[8], NoturnoCidade[9], NoturnoCidade[10], NoturnoCidade[11], NoturnoCidade[12], NoturnoCidade[13], NoturnoCidade[14], NoturnoCidade[15], NoturnoCidade[16], NoturnoCidade[17], NoturnoCidade[18], NoturnoCidade[19], NoturnoCidade[20], NoturnoCidade[21], NoturnoCidade[22], NoturnoCidade[23], NoturnoCidade[24], NoturnoCidade[25], NoturnoCidade[26], NoturnoCidade[27], NoturnoCidade[28], NoturnoCidade[29], NoturnoCidade[30], NoturnoCidade[31], NoturnoCidade[32], NoturnoCidade[33]];
    ChartBar('cidade', 'bar', info, dadosM, dadosN, "Cidade")

    // 6 - Generos
    info = ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'];
    dados = [Genero[0], Genero[1], Genero[2], Genero[3], Genero[4], Genero[5], Genero[6], Genero[7], Genero[8]];
    ChartPie('genero', 'pie', info, dados, "Gêneros");

    // 8 - Estado Civil
    info = ['Solteiro', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'];
    dados = [EstadoCivil[0], EstadoCivil[1], EstadoCivil[2], EstadoCivil[3]];
    ChartPie('estado_civil', 'pie', info, dados, "Estado Civil");

    // 9 - Portadores de Necessidades Especiais
    info = ['Nenhuma', 'Visual', 'Física', 'Auditiva', 'Autismo', 'De fala'];
    dados = [Port[0], Port[1], Port[2], Port[3], Port[4], Port[5]];
    ChartPie('Portador_de_Necessidade', 'pie', info, dados, "Portadores de Necessidades Especiais");

    // 10 - Convive Portadores de Necessidades Especiais
    info = ['Autismo', 'Síndrome de Down', 'Deficiência', 'Auditiva', 'Visual', 'De fala', 'Física'];
    dados = [ConviveComPortador[0], ConviveComPortador[1], ConviveComPortador[2], ConviveComPortador[3], ConviveComPortador[4], ConviveComPortador[5], ConviveComPortador[6], ConviveComPortador[7]]
    ChartPie('convive_com_portador', 'pie', info, dados, "Convive com Portadores de Necessidades Especiais");

    // 11 - Quantidade de Filhos
    info = ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais de quatro'];
    dados = [QtdFilhos[0], QtdFilhos[1], QtdFilhos[2], QtdFilhos[3], QtdFilhos[4], QtdFilhos[5], QtdFilhos[6], QtdFilhos[7]]
    ChartPie('qtd_de_filhos', 'pie', info, dados, "Quantidade de filhos de cada estudante");


    // 12 - com quem moram
    info = ['Com pais e(ou) parentes', 'Com esposa(o) e(ou) filho(s)', 'Com amigos (compartilhando despesas) ou de favor', 'Sozinho'];
    dados = [MoraCom[0], MoraCom[1], MoraCom[2], MoraCom[3]]
    ChartPie('moram_com', 'pie', info, dados, "Com quem cada estudante mora");

    // 13 - Quantidade de pessoas que moram junto
    info = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Mais que Sete'];
    dados = [QtdDeMoradores[0], QtdDeMoradores[1], QtdDeMoradores[2], QtdDeMoradores[3], QtdDeMoradores[4], QtdDeMoradores[5], QtdDeMoradores[6], QtdDeMoradores[7]];
    ChartPie('QTD_de_pessoas_moram_junto', 'pie', info, dados, "Quantidade de pessoas que moram com cada aluno");

    // 14 - Situação Domicilio
    info = ['Próprio', 'Alugado', 'Cedido', 'Financiado', 'Arrendado', 'Mensalista'];
    dados = [SituacaoDomicilio[0], SituacaoDomicilio[1], SituacaoDomicilio[2], SituacaoDomicilio[3], SituacaoDomicilio[4], SituacaoDomicilio[5]];
    ChartPie('situacao_domicilio', 'pie', info, dados, "Situação do Domicílio");

    // 15 - Tempo de moradia
    info = ['1 a 10', '11 a 20', '21 a 30', '31 a 40', '41 a 50', '51 a 60'];
    dadosM = [MatutinoTempoMoradia[0], MatutinoTempoMoradia[1], MatutinoTempoMoradia[2], MatutinoTempoMoradia[3], MatutinoTempoMoradia[4], MatutinoTempoMoradia[5]];
    dadosN = [NoturnoTempoMoradia[0], NoturnoTempoMoradia[1], NoturnoTempoMoradia[2], NoturnoTempoMoradia[3], NoturnoTempoMoradia[4], NoturnoTempoMoradia[5]];
    ChartBar('tempo_moradia', 'bar', info, dadosM, dadosN, "Tempo de moradia no domicílio(Em anos)");


    // 16 - Renda Mensal
    info = ['Até dois salários mínimos', 'Mais de dois até cinco salários mínimos', 'Mais de cinco até dez salários mínimos', 'Mais de dez até vinte salários mínimos', 'Mais de vinte salários mínimos', 'Prefiro não responder'];
    dados = [RendaMensal[0], RendaMensal[1], RendaMensal[2], RendaMensal[3], RendaMensal[4], RendaMensal[5]];
    ChartPie('salario_min', 'pie', info, dados, "Faixa de renda mensal da família do estudante (em Salários Mínimos)");

    //17.1 Quantidade de geladeiras
    info = ['Uma', 'Duas', 'Três', 'Quatro', 'Mais que quatro'];
    dados = [QtdGeladeira[0], QtdGeladeira[1], QtdGeladeira[2], QtdGeladeira[3], QtdGeladeira[4]];
    ChartPie('qtd_geladeira', 'pie', info, dados, "Quantidade de Geladeiras de cada aluno");

    //17.2 Quantidade de celulares comuns
    info = ['Nenhum', 'Uma', 'Duas', 'Três', 'Quatro', 'Mais que quatro'];
    dados = [QtdCelular[0], QtdCelular[1], QtdCelular[2], QtdCelular[3], QtdCelular[4], QtdCelular[5]];
    ChartPie('qtd_celular_comum', 'pie', info, dados, "Quantidade de celulares comuns de cada aluno");

    //17.3 Quantiade de micro-ondas
    info = ['Nenhum', 'Uma', 'Duas', 'Três', 'Quatro', 'Mais que quatro'];
    dados = [QtdMicro_Ondas[0], QtdMicro_Ondas[1], QtdMicro_Ondas[2], QtdMicro_Ondas[3], QtdMicro_Ondas[4], QtdMicro_Ondas[5]];
    ChartPie('qtd_micro_ondas', 'pie', info, dados, 'Quantidade de micro-ondas');

}


generateChart()