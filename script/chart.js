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

    let opcCurso = ["Análise e Desenvolvimento de Sistemas (ADS)", "Gestão da Produção Industrial (GPI)", "Gestão de Recursos Humanos", "Desenvolvimento de Software Multiplataforma"]
    let SiglaCurso = ['ADS', 'GPI', 'GRH', 'DSM'];
    let opcPeriodo = ['Matutino', 'Noturno'];
    let opcEstado = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'];
    let opcCidade = ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino'];
    let opcGenero = ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'];
    let opcDataNascimento
    let opcEstadoCivil = ['Solteiro(a)', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'];
    let opcPortador = ['Nenhuma', 'Visual', 'Física', 'Auditiva', 'Autismo', 'De fala'];
    let opcConvivePort = ['Autismo', 'Síndrome de Down', 'Deficiência', 'Auditiva', 'Visual', 'De fala', 'Física', 'Não convivo ou não moro com alguém com deficiência'];
    let opcQtdFilhos = ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais de quatro'];
    let opcMoraCom = ['Com pais e(ou) parentes', 'Com esposa(o) e(ou) filho(s)', 'Com amigos (compartilhando despesas) ou de favor', 'Sozinho'];
    let opcQtdMoradores = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    let opcSituacaoDomi = ['Próprio', 'Alugado', 'Cedido', 'Financiado', 'Arrendado', 'Mensalista'];
    let opcTempoMoradia = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
    let opcRendaMensal = ['Até dois salários mínimos', 'Mais de dois até cinco salários mínimos', 'Mais de cinco até dez salários mínimos', 'Mais de dez até vinte salários mínimos', 'Mais de vinte salários mínimos', 'Prefiro não responder'];
    let opc17QtdeCadaCoisa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; // Para todas as questões dentro da questão 17
    let opcTemNoDomicilio = ['Telefone fixo', 'Internet', 'Tv por assinatura', 'Empregada mensalista', 'Nenhuma das opções acima', 'Telefone fixo, Internet', 'Telefone fixo, Internet, Tv por assinatura', 'Telefone fixo, Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura', 'Internet, Empregada mensalista', 'Telefone fixo, Tv por assinatura', 'Telefone fixo, Empregada mensalista'];
    let opcTrabalha = ['Sim', 'Não'];
    let opcVinculoEmprego = ['Não trabalho', 'Sou registrado em indústria (calçados/confecções/outras)', 'Sou registrado no comércio', 'Sou registrado em empresa prestadora de serviços', 'Sou registrado em empresa pública (federal/estadual/municipal)', 'Sou autônomo', 'Sou empresário', 'Sou estagiário'];
    let opcAreaTrabalho = ['Não trabalho', 'Trabalho na área do curso', 'Trabalho fora da área do curso'];
    let opcHorarioTrabalho = ['Não trabalho', 'Manhã', 'Tarde', 'Noite', 'Manhã e tarde', 'Manhã e noite', 'Tarde e noite', 'Regime de turnos'];
    let opcPlanoDeSaude = ['Não tenho, uso o SUS', 'Tenho e é pago integralmente pela empresa', 'Tenho e é pago parcialmente pela empresa', 'Tenho e é um plano familiar', 'Tenho e é um plano individual'];
    let opcEscolaridade = ['Nenhuma escolaridade', 'Ensino fundamental I (1º ao 5º anos)', 'Ensino fundamental II (6º ao 9º anos)', 'Ensino Médio', 'Ensino Superior', 'Pós-graduação', 'Prefiro não responder'];
    let opcEstudou = ['Sempre em escola pública', 'A maior parte em escola pública', 'Sempre em escola particular paga pela família', 'Sempre em escola particular com bolsa', 'A maior parte em escola particular paga pela família', 'A maior parte em escola particular com bolsa'];
    let opcUsaMicroComp = ['Nunca', 'Pouco', 'Ás vezes', 'Muito', 'Sempre']; // para questão 23.1 e 27
    let opcOndeUsaMicroComp = ['Em casa', 'No trabalho', 'Na escola', 'Em outros lugares', 'Em casa, No trabalho', 'Em casa, Na escola', 'Em casa, Na escola, Em outros lugares', 'Em casa, Em outros lugares', 'Em casa, No trabalho, Na escola', 'Em casa, No trabalho, Em outros lugares', 'Em casa, No trabalho, Na escola, Em outros lugares', 'No trabalho, Na escola', 'No trabalho, Em outros lugares', 'No trabalho, Na escola, Em outros lugares', 'Na escola, Em outros lugares'];
    let opcFinalizadeUsaMicroComp = ['Para trabalhos profissionais', 'Para trabalhos escolares', 'Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para comunicação por e-mail', 'Para operações bancárias', 'Para compras eletrônicas', ' Para trabalhos profissionais, Para trabalhos escolares', 'Para trabalhos profissionais, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para comunicação por e-mail', 'Para trabalhos profissionais, Para operações bancárias', 'Para trabalhos profissionais, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos escolares, Para operações bancárias', 'Para trabalhos escolares, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias', 'Para comunicação por e-mail, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para operações bancárias, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para operações bancárias, Para compras eletrônicas','Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas'];
    let opcConhecimentoInformatica = ['Nenhum', 'Pouco', 'Intermediário', 'Muito Avançado'];
    let opcConhecimentoLinguas = ['Leio, escrevo e falo bem', 'Leio, escrevo e falo razoavelmente', 'Leio e escrevo mas não falo', 'Leio mas não escrevo nem falo', 'Praticamente nula'];
    let opcLeJornal = ['Diariamente', 'Algumas vezes por semana', 'Somente aos domingos', 'Raramente', 'Não leio'];
    let opcAssuntosJornal = ['Não leio jornal', 'Todos os assuntos', 'Notícia locais', 'Notícias nacionais', 'Notícias internacionais', 'Esporte', 'Lazer, arte e cultura', 'Notícias policiais', 'Classificados', 'Moda', 'Sociais'];
    let opcQtdLivros = ['Nenhum', 'Até 2', 'De 3 até 6', 'De 7 até 10', 'Mais de 10'];
    let opcLeLivros = ['Não leio', 'Romance', 'Ficção', 'Policial', 'Biográfico', 'Aventura', 'Autoajuda', 'Outros'];
    let opcAtividadeVolun = ['Sim', 'Não'];
    let opcReligiao = ['Nenhuma', 'Católica', 'Espírita', 'Evangélica', 'Protestante', 'Outra'];
    let opcEntretenimento = ['Cinema', 'Exposições de arte', 'Filmes na internet', 'Literatura', 'Museus', 'Música', 'Teatro', 'TV', 'Viagens', 'Nenhuma'];
    let opcConheceuFatec = ['Cartaz de divulgação', 'Indicação de familiar/amigo', 'Pelo Facebook', 'Por algum dos jornais', 'Por alguma das rádios', 'Por outdoor', 'Propaganda na escola que estudava'];
    let opcEscolheuCurso = ['Este curso forma profissionais facilmente absorvidos pelo mercado', 'Este curso forma profissionais que são bem remunerados', 'Minha vocação é seguir esta carreira', 'Este curso é gratuito', 'Este curso é de média duração', 'É um curso bem conceituado na região', 'Porque já trabalho na área', 'Sugestão ou vontade familiar', 'Outros motivos'];
    let opcExpectativa = ['Obter novos conhecimentos', 'Obter competências para exercício de uma profissão', 'Conhecer novas pessoas', 'Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter um diploma de nível superior', 'Outra expectativa', 'Não tenho expectativa alguma'];
    let opcFormar = ['Conquistar vaga em empresa privada', 'Prestar concurso público', 'Melhorar cargo e salário na empresa que trabalho', 'Abrir meu próprio negócio', 'Ingressar na carreira acadêmica', 'Outra expectativa', 'Nenhuma expectativa'];
    let opcEstudoNaEscola = ['Sim', 'Não'];
    let opcCursoTecnico = ['Não fiz', 'Sim, em uma ETEC', 'Sim, no SENAC', 'Sim, no SENAI', 'Sim, em outra instituição']
    let opcTransporte = ['Caminhando', 'Carona', 'Bicicleta', 'Moto', 'Carro', 'Ônibus', 'Transporte escolar']


    // Criar Grafico de Pizza
    function ChartPie(id, labels, datas, title) {
        var ctx = document.getElementById(id).getContext('2d');
        var chart = new Chart(ctx, {

            type: 'pie',

            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    backgroundColor:
                        ['#12239E', '#FF0005', '#EA4335',
                            '#1D96CC', '#3DFF64', '#FBBC05',
                            '#9657FF', '#6B007B', '#FFF28C',
                            '#F59AF2', '#5BE8F5', '#F50F51',
                            '#9ED3E4'],
                    borderColor: ['#12239E', '#FF0005', '#EA4335',
                        '#1D96CC', '#3DFF64', '#FBBC05',
                        '#9657FF', '#6B007B', '#FFF28C',
                        '#F59AF2', '#5BE8F5', '#F50F51',
                        '#9ED3E4'],
                    data: datas,
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
                    position: 'left',
                    display: true,
                    labels: {
                        fontColor: '#BFBFBF'
                    }
                }
            }
        });
    }

    // Criar grafico de barras
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
                    data: datas[0],
                },
                {
                    label: 'Noturno',
                    backgroundColor: '#E044A7',
                    borderColor: '#E044A7',
                    data: datas2[1],
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

    // Função para criar matriz
    function Matriz(variavel, tamanho) {
        variavel = new Array(opcPeriodo.length)
        for (j = 0; j < opcPeriodo.length; j++) {
            variavel[j] = new Array()
            for (k = 0; k < tamanho.length; k++) {
                variavel[j][k] = new Array()
            }
        }
        return variavel
    }

    // Gera os dados por periodo Matutino
    function TeamMatutino(RespostaPer, dados, opcoes) {
        RespostaPer.forEach(function (resposta) {
            for (j = 0; j < 1; j++) {
                for (k = 0; k < opcoes.length; k++) {
                    if (resposta === opcoes[k]) {
                        dados[j][k].push(resposta)
                    }
                }
            }
        })
    }

    // Gera os dados por periodo Noturno
    function TeamNoturno(RespostaPer, dados, opcoes) {
        RespostaPer.forEach(function (resposta) {
            for (j = 1; j < 2; j++) {
                for (k = 0; k < opcoes.length; k++) {
                    if (resposta === opcoes[k]) {
                        dados[j][k].push(resposta)
                    }
                }
            }
        })
    }

    // Adicionar os valores e mostrar apenas os textos que tem valor(grafico de pizza)
    function AdicionarValorPie(variavel, tamanho, num, dados, labels, opcao) {
        for (let i = 0; i < opcao.length; i++) {
            variavel[i] = new Array()
        }

        for (j = 0; j < opcao.length; j++) {
            for (k = 0; k < tamanho[num].length; k++) {
                if (tamanho[num][k] === opcao[j]) {
                    variavel[j].push(tamanho[num][k])
                }
            }
            if (variavel[j].length >= 0) {
                dados.push(variavel[j].length)
            }
            if (dados[j] >= 0) {
                labels[j] = opcao[j]
            }
        }
    }

    // Adicionar os valores e mostrar apenas os textos que tem valor(grafico de barra)
    function AdicionarValorBar(tamanho, variavel, Dados, opcao, labels) {
        for (j = 0; j < 2; j++) {
            for (k = 0; k < tamanho.length; k++) {
                // Adicionar os valores em cada informação
                if (variavel[j][k].length > 0) {
                    Dados[j][k].push(variavel[j][k].length)
                }
                // Mostrar a informação apenas quando tiver valor naquela posição
                if (Dados[0][k] > 0 || Dados[1][k] > 0) {
                    labels[k] = opcao[k]
                }
            }
        }
    }

    // Função que puxa a função TeamNoturno, TeamMatutino, Matriz, AdicionarValor e Grafico de Barras
    function GerarGraficoBar(variavel, opcQuest, num, dados, labels, opcao, id, tipo, title) {

        variavel = Matriz(variavel, opcQuest)
        TeamMatutino(respMatutino[num], variavel, opcQuest)
        TeamNoturno(respNoturno[num], variavel, opcQuest)

        dados = Matriz(dados, opcQuest);

        AdicionarValorBar(opcQuest, variavel, dados, labels, opcao)

        ChartBar(id, tipo, labels, dados, dados, title)

    }

    // Função que puxa a função AdicionarValorPie e Grafico de Pizza
    function GerarGraficoPie(variavel, tamanho, num, dados, opcao, labels, id, title) {

        AdicionarValorPie(variavel, tamanho, num, dados, opcao, labels)

        ChartPie(id, labels, dados, title)

    }

    // 1 - Grafico Cursos
    let curso = [];
    let DadosCurso = [];
    let labelsCurso = [];

    GerarGraficoPie(curso, respostas, 2, DadosCurso, SiglaCurso, opcCurso, 'curso', 'Curso')

    // 2 - Periodo
    let DadosPeriodo = [];
    let labelsPeriodo = [];

    if (respMatutino[2].length >= 0) {
        DadosPeriodo.push(respMatutino[2].length)
    }
    if (respNoturno[2].length >= 0) {
        DadosPeriodo.push(respNoturno[2].length)
    }

    for (j = 0; j < 2; j++) {
        if (DadosPeriodo[j] >= 0) {
            labelsPeriodo.push(opcPeriodo[j])
        }
    }

    ChartPie('periodo', labelsPeriodo, DadosPeriodo, "Periodo");

    // 4 - Estados
    let estado
    let DadosEstado
    let labelsEstado = [];

    GerarGraficoBar(estado, opcEstado, 5, DadosEstado, opcEstado, opcEstado, 'estado', 'bar', 'Estados')

    // 5 - Cidades
    let cidade
    let DadosCidade
    let labelsCidade = [];

    GerarGraficoBar(cidade, opcCidade, 6, DadosCidade, opcCidade, opcCidade, 'cidade', 'bar', 'Cidades')

    // 6 - Genero
    let genero = [];
    let DadosGenero = [];
    let labelsGenero = [];

    GerarGraficoPie(genero, respostas, 7, DadosGenero, opcGenero, opcGenero, 'genero', 'Gênero')

    // 7 - Data Nascimento

    // 8 - Estado Civil
    let estadoCivil = [];
    let DadosEstadoCivil = [];
    let labelsEstadoCivil = [];

    GerarGraficoPie(estadoCivil, respostas, 9, DadosEstadoCivil, opcEstadoCivil, opcEstadoCivil, 'estado_civil', 'Estado Civil')

    // 9 - Portadores de Necessidades especiais
    let portadores = [];
    let DadosPortadores = [];
    let labelsPortadores = [];

    GerarGraficoPie(portadores, respostas, 10, DadosPortadores, opcPortador, opcPortador, 'Portador_de_Necessidade', 'Portadores de Necessidades Especiais')

    // 10 - Convive com Portadores de Necessidades especiais
    let ConvivePort = [];
    let DadosConvivePort = [];

    GerarGraficoPie(ConvivePort, respostas, 11, DadosConvivePort, opcConvivePort, opcConvivePort, 'convive_com_portador', 'Convive com Portadores de Necessidades Especiais')

    // 11 - Quantidade de filhos
    let QtdFilhos = [];
    let DadosQtdFilhos = [];

    GerarGraficoPie(QtdFilhos, respostas, 12, DadosQtdFilhos, opcQtdFilhos, opcQtdFilhos, 'qtd_de_filhos', "Quantidade de filhos de cada estudante")

    // 12. Com quem você mora atualmente?
    let moraCom = [];
    let DadosMoraCom = [];

    GerarGraficoPie(moraCom, respostas, 13, DadosMoraCom, opcMoraCom, opcMoraCom, 'moram_com', "Com quem cada estudante mora")

    //13. Quantas pessoas, incluindo você, moram no seu domicílio?
    let QtdMoradores = [];
    let DadosQtdMoradores = [];

    GerarGraficoPie(QtdMoradores, respostas, 14, DadosQtdMoradores, opcQtdMoradores, opcQtdMoradores, 'QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno")

    // 14. Qual a situação do domicílio onde mora?
    let SituacaoDomicilio = [];
    let DadosSituacaoDomi = [];

    GerarGraficoPie(SituacaoDomicilio, respostas, 15, DadosSituacaoDomi, opcSituacaoDomi, opcSituacaoDomi, 'situacao_domicilio', "Situação do Domicílio")

    // 15. Tempo de moradia neste domicílio (Em anos)
    let TempoMoradia
    let DadosTempoMoradia
    let labelsTempoMoradia = [];

    GerarGraficoBar(TempoMoradia, opcTempoMoradia, 16, DadosTempoMoradia, opcTempoMoradia, opcTempoMoradia, 'tempo_moradia', 'bar', 'Tempo de moradia no domicílio(Em anos)')

    // 16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)
    let RendaMensal = [];
    let DadosRendaMensal = [];

    GerarGraficoPie(RendaMensal, respostas, 17, DadosRendaMensal, opcRendaMensal, opcRendaMensal, 'salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)")

    //17.1. Quantas geladeiras há em seu domicílio
    let QtdGeladeira = [];
    let DadosQtdGeladeira = [];

    GerarGraficoPie(QtdGeladeira, respostas, 18, DadosQtdGeladeira, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_geladeira', "Quantidade de Geladeiras de cada aluno")

    // 17.2. Quantos celulares comuns há em seu domicílio?
    let QtdCelular = [];
    let DadosQtdCelular = [];

    GerarGraficoPie(QtdCelular, respostas, 19, DadosQtdCelular, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_celular_comum', "Quantidade de celulares comuns de cada aluno")

    // 17.3. Quantos micro-ondas há em seu domicílio?
    let QtdMicroOndas = [];
    let DadosQtdMicroOndas = [];

    GerarGraficoPie(QtdMicroOndas, respostas, 20, DadosQtdMicroOndas, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno')

    // 17.4. Quantos notebooks há em seu domicílio?
    let QtdNotebooks = [];
    let DadosQtdNotebooks = [];

    GerarGraficoPie(QtdNotebooks, respostas, 21, DadosQtdNotebooks, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_notebooks', 'Quantidade de Notebooks de cada aluno')

    // 17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?
    let Qtd_Maquina_de_Lavar = [];
    let DadosMaquinaLavar = [];

    GerarGraficoPie(Qtd_Maquina_de_Lavar, respostas, 22, DadosMaquinaLavar, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno')

    // 17.6. Quantas motocicletas há em seu domicílio?
    let Qtd_motoclicletas = [];
    let DadosMotocicletas = [];
    let labelsMotocicletas = [];

    GerarGraficoPie(Qtd_motoclicletas, respostas, 23, DadosMotocicletas, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno')

    // 17.7. Quantos automóveis há em seu domicílio?
    let QtdAutomoveis = [];
    let DadosAutomoveis = [];

    GerarGraficoPie(QtdAutomoveis, respostas, 24, DadosAutomoveis, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_Automoveis', 'Quantidade de Automóveis de cada aluno')

    // 17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?
    let QtdDVD = [];
    let DadosDVD = [];

    GerarGraficoPie(QtdDVD, respostas, 25, DadosDVD, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_DVD', 'Quantidade de DVD players')

    // 17.9. Quantos televisores há em seu domicílio?
    let QtdTV = [];
    let DadosTV = [];

    GerarGraficoPie(QtdTV, respostas, 26, DadosTV, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_TV', 'Quantidade de TVs de cada aluno')

    // 17.10. Quantos smartphones há em seu domicílio?
    let Qtd_Smartphones = [];
    let DadosSmatphones = [];

    GerarGraficoPie(Qtd_Smartphones, respostas, 27, DadosSmatphones, opc17QtdeCadaCoisa, opc17QtdeCadaCoisa, 'qtd_Smartphones', 'Quantidade de Smartphones de cada aluno')

    // 18. No seu domicílio tem? questão com mais de uma alternativa, n esta terminada
    let DomicilioTem
    let DadosDomicilioTem

    GerarGraficoBar(DomicilioTem, opcTemNoDomicilio, 28, DadosDomicilioTem, opcTemNoDomicilio, opcTemNoDomicilio, 'Oque_tem_No_Domicilio', 'horizontalBar', 'Na casa de cada estudante tem')

    // 19.1. Você trabalha?
    let trabalha = [];
    let DadosTrabalho = [];

    GerarGraficoPie(trabalha, respostas, 29, DadosTrabalho, opcTrabalha, opcTrabalha, 'Trabalho', 'Você trabalha?')

    //19.2. Qual o seu vínculo com o emprego?
    let VinculoEmprego = [];
    let DadosVinculo = [];

    GerarGraficoPie(VinculoEmprego, respostas, 30, DadosVinculo, opcVinculoEmprego, opcVinculoEmprego, 'Vinculo_Emprego', "Vinculo com o emprego")

    // 19.3. Qual a área do seu trabalho?
    let AreaTrabalho = [];
    let DadosAreaTrabalho = [];

    GerarGraficoPie(AreaTrabalho, respostas, 31, DadosAreaTrabalho, opcAreaTrabalho, opcAreaTrabalho, 'Area_trabalho', "Qual a área do seu trabalho?")

    // 19.4. Qual seu horário de trabalho?
    let HorarioTrabalho = [];
    let DadosHorario = [];

    GerarGraficoPie(HorarioTrabalho, respostas, 32, DadosHorario, opcHorarioTrabalho, opcHorarioTrabalho, 'Horario_Trabalho', "Horários de Trabalho")

    // 19.5. Qual a empresa que você está contratado agora
    let CabecalhoTabela = '';
    let DadosTabela = '';
    let Empresa = [];

    CabecalhoTabela = '<tr class = "thead__row"> <td class = "thead__data"> Empresas: </td> </tr>'
    document.getElementById('thead').innerHTML = CabecalhoTabela;

    for (quest of forms) {
        if (quest["19.5. Qual a empresa que você está contratado agora?"] !== undefined) {
            Empresa[i] = quest["19.5. Qual a empresa que você está contratado agora?"]
        }

        DadosTabela = DadosTabela + `<tr "tbody__row"> <td "tbody__data"> ${Empresa[i]} </td> </tr>`

        i++
    }

    document.getElementById('tbody').innerHTML = DadosTabela;

    // 20. Você tem plano de saúde privado?
    let PlanoSaude = [];
    let DadosPlanoSaude = [];

    GerarGraficoPie(PlanoSaude, respostas, 34, DadosPlanoSaude, opcPlanoDeSaude, opcPlanoDeSaude, 'Plano_Saude', 'Planos de Saúde')

    // 21.1. Qual o grau de escolaridade do seu pai?
    let EscolaridadePai = [];
    let DadosEscolaridadePai = [];

    GerarGraficoPie(EscolaridadePai, respostas, 35, DadosEscolaridadePai, opcEscolaridade, opcEscolaridade, 'Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos')

    // 21.2. Qual o grau de escolaridade da sua mãe?
    let EscolaridadeMae = [];
    let DadosEscolaridadeMae = [];

    GerarGraficoPie(EscolaridadeMae, respostas, 36, DadosEscolaridadeMae, opcEscolaridade, opcEscolaridade, 'Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos')

    // 22. Na sua vida escolar você estudou
    let EstudouEm = [];
    let DadosEstudouEm = [];

    GerarGraficoPie(EstudouEm, respostas, 37, DadosEstudouEm, opcEstudou, opcEstudou, 'Estudou_Em', "Na sua vida escolar você estudou")

    // 23.1. Com que frequência você utiliza microcomputadores?
    let FrequenciaMicrocomputadores = [];
    let DadosFrequenciaComp = [];

    GerarGraficoPie(FrequenciaMicrocomputadores, respostas, 38, DadosFrequenciaComp, opcUsaMicroComp, opcUsaMicroComp, 'Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?')


    // 23.2. Onde você utiliza microcomputadores?
    let OndeUtilizaMicro = [];
    let DadosOndeUtilizaMicro = []; // ARRUMAR FDP

    GerarGraficoBar(OndeUtilizaMicro, opcOndeUsaMicroComp, 39, DadosOndeUtilizaMicro, opcOndeUsaMicroComp, opcOndeUsaMicroComp, 'Onde_Microcomputadores', 'horizontalBar', 'Onde você utiliza microcomputadores?')

    // 23.3. Com qual finalidade você utiliza microcomputadores?
    let FinalidadeUtiliMicro
    let DadosFinalidadeUtiliMicro

    GerarGraficoBar(FinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, 40, DadosFinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, opcFinalizadeUsaMicroComp, 'Finalidade_Microcomputadores', 'horizontalBar', 'Com qual finalidade você utiliza microcomputadores?')

    //26. Agora, considere seu conhecimento sobre idiomas [Inglês]
    let conhecimentoIngles = [];
    let DadosIngles = [];

    GerarGraficoPie(conhecimentoIngles, respostas, 48, DadosIngles, opcConhecimentoLinguas, opcConhecimentoLinguas, 'Ingles', 'Conhecimento em inglês')

    // 26. Agora, considere seu conhecimento sobre idiomas [Espanhol]
    let conhecimentoEspanhol = [];
    let DadosEspanhol = [];

    GerarGraficoPie(conhecimentoEspanhol, respostas, 49, DadosEspanhol, opcConhecimentoLinguas, opcConhecimentoLinguas, 'Espanhol', 'Conhecimento em Espanhol')

    // 26. Agora, considere seu conhecimento sobre idiomas [Outros]
    let conhecimentoIdioma = [];
    let DadosIdioma = [];

    GerarGraficoPie(conhecimentoIdioma, respostas, 49, DadosIdioma, opcConhecimentoLinguas, opcConhecimentoLinguas, 'Outros', 'Conhecimento em outros idiomas')

    //33. Qual religião você professa?": "Evangélica"
    let religiao = [];
    let DadosReligiao = [];

    GerarGraficoPie(religiao, respostas, 63, DadosReligiao, opcReligiao, opcReligiao, 'Religiao', 'Religião')

    //39. Você já estudou nesta escola?
    let estudouNaFatec = [];
    let DadosEstudouFatec = [];

    GerarGraficoPie(estudouNaFatec, respostas, 69, DadosEstudouFatec, opcEstudoNaEscola, opcEstudoNaEscola, 'Estudou_Fatec', 'Você já estudou nesta escola?')

    //40. Você fez algum curso técnico?
    let cursoTecnico = [];
    let DadosCursoTecnico = [];

    GerarGraficoPie(cursoTecnico, respostas, 70, DadosCursoTecnico, opcCursoTecnico, opcCursoTecnico, 'Curso_Tecnico', 'Você fez algum curso técnico?')

    console.log(DadosFinalidadeUtiliMicro)

}


generateChart()