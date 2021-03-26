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
    let opcPeriodo = ['Matutino', 'Noturno'];
    let opcEstado = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Paraná (PR)', 'Paraíba (PB)', 'Pará (PA)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'Sergipe (SE)', 'São Paulo (SP)', 'Tocantins (TO)'];
    let opcCidade = ['Batatais', 'Buritizal', 'Capetinga', 'Cássia', 'Claraval', 'Cristais Paulista', 'Delfinópolis', 'Estreito', 'Franca', 'Guaíra', 'Guará', 'Ibiraci', 'Igarapava', 'Ipuã', 'Itirapuã', 'Ituverava', 'Jeriquara', 'Miguelópolis', 'Morro Agudo', 'Nuporanga', 'Orlândia', 'Passos', 'Patrocínio Paulista', 'Pedregulho', 'Peixoto', 'Pratápolis', 'Restinga', 'Ribeirão Corrente', 'Ribeirão Preto', 'Rifaina', 'Sacramento', 'Sales Oliveira', 'S. Joaquim da Barra', 'S. José da Bela Vista', 'São Tomaz de Aquino'];
    let opcGenero = ['Masculino', 'Feminino', 'Homem transgênero', 'Mulher Transgênero', 'Homem Transexual', 'Mulher Transexual', 'Não sei responder', 'Prefiro não responder', 'Outro'];
    let opcDataNascimento = [];
    let opcEstadoCivil = ['Solteiro(a)', 'Casado(a) ou União Estável', 'Separado(a), desquitado(a), divorciado(a)', 'Viúvo(a)'];
    let opcPortador = ['Nenhuma', 'Visual', 'Física', 'Auditiva', 'Autismo', 'De fala'];
    let opcConvivePort = ['Autismo', 'Síndrome de Down', 'Deficiência', 'Auditiva', 'Visual', 'De fala', 'Física', 'Não convivo ou não moro com alguém com deficiência'];
    let opcQtdFilhos = ['Nenhum', 'Um', 'Dois', 'Três', 'Quatro', 'Mais de quatro'];
    let opcMoraCom = ['Com pais e(ou) parentes', 'Com esposa(o) e(ou) filho(s)', 'Com amigos (compartilhando despesas) ou de favor', 'Sozinho'];
    let opcQtdMoradores = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    let opcSituacaoDomi = ['Próprio', 'Alugado', 'Cedido', 'Financiado', 'Arrendado', 'Mensalista'];
    let opcTempoMoradia = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '55', '55', '56', '57', '58', '59', '60', '61', '62', '63', '66', '65', '66', '67', '68', '69', '70']
    let opcRendaMensal = ['Até dois salários mínimos', 'Mais de dois até cinco salários mínimos', 'Mais de cinco até dez salários mínimos', 'Mais de dez até vinte salários mínimos', 'Mais de vinte salários mínimos', 'Prefiro não responder'];
    let opc17QtdeCadaCoisa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']; // Para todas as questões dentro da questão 17
    let opcTemNoDomicilio = ['Telefone fixo', 'Internet', 'Tv por assinatura', 'Empregada mensalista', 'Nenhuma das opções acima', 'Telefone fixo, Internet', 'Telefone fixo, Internet, Tv por assinatura', 'Telefone fixo, Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura, Empregada mensalista', 'Internet, Tv por assinatura', 'Internet, Empregada mensalista', 'Telefone fixo, Tv por assinatura', 'Telefone fixo, Empregada mensalista'];
    let opcTrabalha = ['Sim', 'Não'];
    let opcVinculoEmprego = ['Não trabalho', 'Sou registrado em indústria (calçados/confecções/outras)', 'Sou registrado no comércio', 'Sou registrado em empresa prestadora de serviços', 'Sou registrado em empresa pública (federal/estadual/municipal)', 'Sou autônomo', 'Sou empresário', 'Sou estagiário'];
    let opcAreaTrabalho = ['Não trabalho', 'Trabalho na área do curso', 'Trabalho fora da área do curso'];
    let opcHorarioTrabalho = ['Não trabalho', 'Manhã', 'Tarde', 'Noite', 'Manhã e tarde', 'Manhã e noite', 'Tarde e noite', 'Regime de turnos'];
    let opcPlanoDeSaude = ['Não tenho, uso o SUS', 'Tenho e é pago integralmente pela empresa', 'Tenho e é pago parcialmente pela empresa', 'Tenho e é um plano familiar', 'Tenho e é um plano individual'];
    let opcEscolaridade = ['Nenhuma escolaridade', 'Ensino fundamental I (1º ao 5º anos)', 'Ensino fundamental II (6º ao 9º anos)', 'Ensino Médio', 'Ensino Superior', 'Pós-graduação', 'Prefiro não responder'];
    let opcEstudou = ['Sempre em escola pública', 'A maior parte em escola pública', 'Sempre em escola particular paga pela família', 'Sempre em escola particular com bolsa', 'A maior parte em escola particular paga pela família', 'A maior parte em escola particular com bolsa'];
    let opcUsaMicroComp = ['Nunca', 'Pouco', 'Ás vezes', 'Muito', 'Sempre'];
    let opcOndeUsaMicroComp = ['Em casa', 'No trabalho', 'Na escola', 'Em outros lugares', 'Em casa, No trabalho', 'Em casa, Na escola', 'Em casa, Na escola, Em outros lugares', 'Em casa, Em outros lugares', 'Em casa, No trabalho, Na escola', 'Em casa, No trabalho, Em outros lugares', 'Em casa, No trabalho, Na escola, Em outros lugares', 'No trabalho, Na escola', 'No trabalho, Em outros lugares', 'No trabalho, Na escola, Em outros lugares', 'Na escola, Em outros lugares'];
    let opcFinalizadeUsaMicroComp = ['Para trabalhos profissionais', 'Para trabalhos escolares', 'Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para comunicação por e-mail', 'Para operações bancárias', 'Para compras eletrônicas', ' Para trabalhos profissionais, Para trabalhos escolares', 'Para trabalhos profissionais, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para comunicação por e-mail', 'Para trabalhos profissionais, Para operações bancárias', 'Para trabalhos profissionais, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos escolares, Para comunicação por e-mail', 'Para trabalhos escolares, Para operações bancárias', 'Para trabalhos escolares, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias', 'Para comunicação por e-mail, Para compras eletrônicas', 'Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para operações bancárias, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos profissionais, Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para compras eletrônicas', 'Para trabalhos escolares, Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc)', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para compras eletrônicas', 'Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para operações bancárias', 'Para trabalhos profissionais, Para trabalhos escolares, Para entretenimento (músicas, vídeos, redes sociais, etc), Para comunicação por e-mail, Para compras eletrônicas'];
    let opcConhecimentoInformatica = ['Nenhum', 'Pouco', 'Intermediário', 'Muito Avançado'];
    let opcConhecimentoLinguas = ['Leio, escrevo e falo bem', 'Leio, escrevo e falo razoavelmente', 'Leio e escrevo mas não falo', 'Leio mas não escrevo nem falo', 'Praticamente nula'];
    let opcBuscaInformação = ['Nunca', 'Pouco', 'Às vezes', 'Muito', 'Sempre']
    let opcLeJornal = ['Diariamente', 'Algumas vezes por semana', 'Somente aos domingos', 'Raramente', 'Não leio'];
    let opcAssuntosJornal = ['Não leio jornal', 'Todos os assuntos', 'Notícia locais', 'Notícias nacionais', 'Notícias internacionais', 'Esporte', 'Lazer, arte e cultura', 'Notícias policiais', 'Classificados', 'Moda', 'Sociais', "Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura, Classificados, Moda, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais, Notícias policiais, Moda", "Notícia locais, Esporte, Notícias policiais", "Notícias internacionais, Esporte, Lazer, arte e cultura, Classificados", "Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Notícias policiais, Sociais", "Notícias nacionais, Notícias internacionais, Classificados", "Esporte, Lazer, arte e cultura", "Notícias nacionais, Notícias internacionais, Notícias policiais", "Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura, Notícias policiais, Sociais", "Notícia locais, Notícias nacionais, Notícias internacionais", "Notícia locais, Notícias nacionais, Lazer, arte e cultura, Notícias policiais", "Todos os assuntos, Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura", "Notícia locais, Notícias nacionais, Notícias internacionais, Notícias policiais", "Todos os assuntos, Notícias internacionais, Esporte, Lazer, arte e cultura", "Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura, Notícias policiais, Classificados", 'Esporte, Notícias policiais', 'Esporte, Classificados', 'Esporte, Moda', 'Esporte, Sociais', 'Lazer, arte e cultura, Notícias policiais', 'Lazer, arte e cultura, Classificados', 'Lazer, arte e cultura, Moda', 'Lazer, arte e cultura, Sociais', 'Notícias policiais, Classificados', 'Notícias policiais, Moda', 'Notícias policiais, Sociais', 'Classificados, Moda', 'Classificados, Sociais', 'Moda, Sociais', 'Notícia locais, Notícias nacionais', 'Notícia locais, Notícias internacionais', 'Notícia locais, Esporte', 'Notícia locais, Lazer, arte e cultura', 'Notícia locais, Notícias policiais', 'Notícia locais, Classificados', 'Notícia locais, Moda', 'Notícia locais, Sociais', 'Notícia locais, Notícias nacionais, Esporte', 'Notícia locais, Notícias nacionais, Lazer, arte e cultura', 'Notícia locais, Notícias nacionais, Notícias policiais', 'Notícia locais, Notícias nacionais, Classificados', 'Notícia locais, Notícias nacionais, Moda', 'Notícia locais, Notícias nacionais, Sociais', 'Notícias nacionais, Notícias internacionais', 'Notícias nacionais, Esporte', 'Notícias nacionais, Lazer, arte e cultura', 'Notícias nacionais, Notícias policiais', 'Notícias nacionais, Classificados', 'Notícias nacionais, Moda', 'Notícias nacionais, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte', 'Notícia locais, Notícias nacionais, Notícias internacionais, Lazer, arte e cultura', 'Notícia locais, Notícias nacionais, Notícias internacionais, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Moda', 'Notícias nacionais, Notícias internacionais, Esporte', 'Notícias nacionais, Notícias internacionais, Lazer, arte e cultura', 'Notícias nacionais, Notícias internacionais, Moda', 'Notícias nacionais, Notícias internacionais, Sociais', 'Notícias internacionais, Esporte', 'Notícias internacionais, Lazer, arte e cultura', 'Notícias internacionais, Notícias policiais', 'Notícias internacionais, Classificados', 'Notícias internacionais, Moda', 'Notícias internacionais, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Classificados', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Notícias policiais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Sociais', 'Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura', 'Notícias nacionais, Notícias internacionais, Esporte, Notícias policiais', 'Notícias nacionais, Notícias internacionais, Esporte, Classificados', 'Notícias nacionais, Notícias internacionais, Esporte, Moda', 'Notícias nacionais, Notícias internacionais, Esporte, Sociais', 'Notícias internacionais, Esporte, Lazer, arte e cultura', 'Notícias internacionais, Esporte, Notícias policiais', 'Notícias internacionais, Esporte, Classificados', 'Notícias internacionais, Esporte, Moda', 'Notícias internacionais, Esporte, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Sociais', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Moda', 'Notícia locais, Notícias nacionais, Notícias internacionais, Esporte, Lazer, arte e cultura, Notícias policiais, Classificados, Sociais'];
    let opcQtdLivros = ['Nenhum', 'Até 2', 'De 3 até 6', 'De 7 até 10', 'Mais de 10'];
    let opcLeLivros = ['Não leio', 'Romance', 'Ficção', 'Policial', 'Biográfico', 'Aventura', 'Autoajuda', 'Outros', 'Romance, Ficção', 'Romance, Policial', 'Romance, Biográfico', 'Romance, Aventura', 'Romance, Autoajuda', 'Romance, Outros', 'Ficção, Policial', 'Ficção, Biográfico', 'Ficção, Aventura', 'Ficção, Autoajuda', 'Ficção, Outros', 'Policial, Biográfico', 'Policial, Aventura', 'Policial, Autoajuda', 'Policial, Outros', 'Biográfico, Aventura', 'Biográfico, Autoajuda', 'Biográfico, Outros', 'Aventura, Autoajuda', 'Aventura, Outros', 'Autoajuda, Outros', 'Romance, Ficção, Policial', 'Romance, Ficção, Biográfico', 'Romance, Ficção, Aventura', 'Romance, Ficção, Autoajuda', 'Romance, Ficção, Outros', 'Romance, Ficção, Policial, Biográfico', 'Romance, Ficção, Policial, Aventura', 'Romance, Ficção, Policial, Autoajuda', 'Romance, Ficção, Policial, Outros', 'Ficção, Policial, Biográfico', 'Ficção, Policial, Aventura', 'Ficção, Policial, Autoajuda', 'Ficção, Policial, Outros', 'Ficção, Policial, Aventura, Autoajuda', 'Ficção, Policial, Aventura, Autoajuda, Outros', 'Ficção, Policial, Aventura, Outros', 'Ficção, Policial, Autoajuda, Outros', 'Romance, Ficção, Policial, Aventura, Autoajuda', 'Romance, Ficção, Policial, Aventura, Autoajuda, Outros', 'Romance, Ficção, Policial, Aventura, Outros', 'Romance, Ficção, Policial, Autoajuda', 'Romance, Ficção, Policial, Autoajuda, Outros', 'Romance, Ficção, Aventura, Autoajuda', 'Romance, Ficção, Aventura, Autoajuda, Outros', 'Romance, Ficção, Aventura, Outros', 'Romance, Ficção, Autoajuda, Outros', 'Romance, Ficção, Policial, Biográfico, Autoajuda', 'Romance, Ficção, Policial, Biográfico, Autoajuda, Outros', 'Romance, Ficção, Policial, Biográfico, Aventura', 'Romance, Ficção, Policial, Biográfico, Aventura, Autoajuda', 'Romance, Ficção, Policial, Biográfico, Aventura, Autoajuda, Outros', "Ficção, Biográfico, Aventura", "Ficção, Aventura, Outros", "Ficção, Policial, Biográfico, Aventura, Autoajuda", 'Romance, Ficção, Biográfico, Aventura', 'Romance, Policial, Biográfico, Autoajuda', 'Biográfico, Autoajuda, Outros', 'Ficção, Autoajuda, Outros', 'Ficção, Biográfico, Autoajuda', 'Ficção, Aventura, Autoajuda'];
    let opcAtividadeVolun = ['Sim', 'Não'];
    let opcReligiao = ['Nenhuma', 'Católica', 'Espírita', 'Evangélica', 'Protestante', 'Outra'];
    let opcEntretenimento = ['Cinema', 'Exposições de arte', 'Filmes na internet', 'Literatura', 'Museus', 'Música', 'Teatro', 'TV', 'Viagens', 'Nenhuma', 'Cinema, Exposições de arte', 'Cinema, Literatura', 'Cinema, Museus', 'Cinema, Música', 'Cinema, Teatro', 'Cinema, TV', 'Cinema, Viagens', 'Cinema, Exposições de arte, Filmes na internet', 'Cinema, Exposições de arte, Filmes na internet, Literatura', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Filmes na internet', 'Cinema, Filmes na internet, Literatura', 'Cinema, Filmes na internet, Literatura, Museus', 'Cinema, Filmes na internet, Literatura, Museus, Música, Teatro', 'Cinema, Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Cinema, Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Literatura', 'Cinema, Exposições de arte, Literatura, Museus', 'Cinema, Exposições de arte, Literatura, Museus, Música', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Museus', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Teatro', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Viagens', 'Exposições de arte, Filmes na internet', 'Exposições de arte, Filmes na internet, Literatura', 'Exposições de arte, Filmes na internet, Literatura, Museus', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Filmes na internet', 'Filmes na internet, Literatura, Museus', 'Filmes na internet, Literatura, Museus, Música', 'Filmes na internet, Literatura, Museus, Música, Teatro', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV, Viagens', 'Exposições de arte, Literatura', 'Exposições de arte, Literatura, Museus', 'Exposições de arte, Literatura, Museus, Música', 'Exposições de arte, Literatura, Museus, Música, Teatro', 'Exposições de arte, Literatura, Museus, Música, Teatro, TV', 'Exposições de arte, Literatura, Museus, Música, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Museus', 'Exposições de arte, Filmes na internet, Museus, Música', 'Exposições de arte, Filmes na internet, Museus, Música, Teatro', 'Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV', 'Exposições de arte, Filmes na internet, Museus, Música, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Literatura, Música', 'Exposições de arte, Filmes na internet, Literatura, Música, Teatro', 'Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV', 'Exposições de arte, Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Literatura, Museus, Teatro', 'Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV', 'Exposições de arte, Filmes na internet, Literatura, Museus, Teatro, TV, Viagens', 'Exposições de arte, Filmes na internet, Literatura, Museus, Música, Viagens', 'Filmes na internet, Literatura, Museus', 'Filmes na internet, Literatura, Museus, Música', 'Filmes na internet, Literatura, Museus, Música, Teatro', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Filmes na internet, Literatura', 'Filmes na internet, Literatura, Museus', 'Filmes na internet, Literatura, Museus, Música', 'Filmes na internet, Literatura, Museus, Música, Teatro', 'Filmes na internet, Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus', 'Literatura, Museus, Música', 'Literatura, Museus, Música, Teatro', 'Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus, Música, Teatro, TV, Viagens', 'Filmes na internet, Museus', 'Filmes na internet, Museus, Música', 'Filmes na internet, Museus, Música, Teatro', 'Filmes na internet, Museus, Música, Teatro, TV', 'Filmes na internet, Museus, Música, Teatro, TV, Viagens', 'Filmes na internet, Literatura, Música', 'Filmes na internet, Literatura, Música, Teatro', 'Filmes na internet, Literatura, Música, Teatro, TV', 'Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Filmes na internet, Literatura, Museus, Teatro', 'Filmes na internet, Literatura, Museus, Teatro, TV', 'Filmes na internet, Literatura, Museus, Teatro, TV, Viagens', 'Filmes na internet, Literatura, Museus, Música, Viagens', 'Literatura, Museus', 'Literatura, Museus, Música', 'Literatura, Museus, Música, Teatro', 'Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus, Música, Teatro, TV, Viagens', 'Literatura, Museus', 'Literatura, Museus, Música', 'Literatura, Museus, Música, Teatro', 'Literatura, Museus, Música, Teatro, TV', 'Literatura, Museus, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Literatura', 'Cinema, Exposições de arte, Literatura, Museus', 'Cinema, Exposições de arte, Literatura, Museus, Música', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV', 'Cinema, Exposições de arte, Literatura, Museus, Música, Teatro, TV, Viagens', 'Museus, Música', 'Museus, Música, Teatro', 'Museus, Música, Teatro, TV', 'Museus, Música, Teatro, TV, Viagens', 'Literatura, Música', 'Literatura, Música, Teatro', 'Literatura, Música, Teatro, TV', 'Literatura, Música, Teatro, TV, Viagens', 'Literatura, Museus, Teatro', 'Literatura, Museus, Teatro, TV', 'Literatura, Museus, Teatro, TV, Viagens', 'Literatura, Museus, Música, Viagens', 'Cinema, Filmes na internet, Música, TV', 'Cinema, Filmes na internet, Literatura, Música, TV', 'Filmes na internet, Música', 'Cinema, Filmes na internet, Literatura, Música', 'Cinema, Filmes na internet, Literatura, Música, Teatro, Viagens', 'Cinema, Filmes na internet, Literatura, Música, Teatro, TV', 'Cinema, Filmes na internet, Literatura, Música, TV, Viagens', 'Exposições de arte, Filmes na internet, Música', 'Cinema, Filmes na internet, Música', 'Filmes na internet, Música, TV', 'Cinema, Filmes na internet, Música, Teatro, TV', 'Cinema, Filmes na internet, Música, Viagens', 'Cinema, Música, TV, Viagens', 'Filmes na internet, Literatura, Música, TV', 'Filmes na internet, Literatura, Música, TV, Viagens', 'Filmes na internet, Música, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, Teatro, Viagens', 'Literatura, Música, TV', 'Cinema, Filmes na internet, Museus, Música, TV', 'Cinema, Filmes na internet, TV', 'Cinema, Filmes na internet, Literatura, Música, Teatro, TV, Viagens', 'Cinema, Exposições de arte, Filmes na internet, Literatura, Museus, Música, TV, Viagens', 'Cinema, Filmes na internet, Música, TV, Viagens'];
    let opcConheceuFatec = ['Cartaz de divulgação', 'Indicação de familiar/amigo', 'Pelo Facebook', 'Por algum dos jornais', 'Por alguma das rádios', 'Por outdoor', 'Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo','Cartaz de divulgação, Pelo Facebook','Cartaz de divulgação, Por algum dos jornais','Cartaz de divulgação, Por alguma das rádios','Cartaz de divulgação, Por outdoor','Cartaz de divulgação, Propaganda na escola que estudava','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Por outdoor','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava','Indicação de familiar/amigo, Pelo Facebook','Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais','Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios','Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava','Cartaz de divulgação, Pelo Facebook, Por algum dos jornais','Cartaz de divulgação, Pelo Facebook, Por algum dos jornais, Por alguma das rádios','Cartaz de divulgação, Pelo Facebook, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava','Cartaz de divulgação, Indicação de familiar/amigo, Por algum dos jornais','Cartaz de divulgação, Indicação de familiar/amigo, Por algum dos jornais, Por alguma das rádios','Cartaz de divulgação, Indicação de familiar/amigo, Por algum dos jornais, Por alguma das rádios, Propaganda na escola que estudava','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por alguma das rádios','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por alguma das rádios, Propaganda na escola que estudava','Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Por algum dos jornais, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Pelo Facebook, Propaganda na escola que estudava', 'Indicação de familiar/amigo, Pelo Facebook, Propaganda na escola que estudava', 'Cartaz de divulgação, Indicação de familiar/amigo, Por alguma das rádios', 'Indicação de familiar/amigo, Propaganda na escola que estudava', 'Indicação de familiar/amigo, Por algum dos jornais, Propaganda na escola que estudava', 'Indicação de familiar/amigo, Pelo Facebook, Por alguma das rádios'];
    let opcEscolheuCurso = ['Este curso forma profissionais facilmente absorvidos pelo mercado', 'Este curso forma profissionais que são bem remunerados', 'Minha vocação é seguir esta carreira', 'Este curso é gratuito', 'Este curso é de média duração', 'É um curso bem conceituado na região', 'Porque já trabalho na área', 'Sugestão ou vontade familiar', 'Outros motivos','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados','Este curso forma profissionais facilmente absorvidos pelo mercado, Minha vocação é seguir esta carreira','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é gratuito','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso é de média duração','Este curso forma profissionais facilmente absorvidos pelo mercado, É um curso bem conceituado na região','Este curso forma profissionais facilmente absorvidos pelo mercado, Porque já trabalho na área','Este curso forma profissionais facilmente absorvidos pelo mercado, Sugestão ou vontade familiar','Este curso forma profissionais facilmente absorvidos pelo mercado, Outros motivos', 'Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar','Este curso forma profissionais facilmente absorvidos pelo mercado, Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração ','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar','Este curso forma profissionais que são bem remunerados, Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos','Minha vocação é seguir esta carreira, Este curso é gratuito','Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração','Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração','Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região','Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área','Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar','Minha vocação é seguir esta carreira, Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos','Este curso é gratuito, Este curso é de média duração','Este curso é gratuito, Este curso é de média duração, Este curso é de média duração','Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região','Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área','Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar', 'Este curso é gratuito, Este curso é de média duração, Este curso é de média duração, É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos','É um curso bem conceituado na região, Porque já trabalho na área','É um curso bem conceituado na região, Porque já trabalho na área, Sugestão ou vontade familiar','É um curso bem conceituado na região, Porque já trabalho na área, Outros motivos','Porque já trabalho na área, Sugestão ou vontade familiar','Porque já trabalho na área, Outros motivos',];
    let opcExpectativa = ['Obter novos conhecimentos', 'Obter competências para exercício de uma profissão', 'Conhecer novas pessoas', 'Melhorar-me como pessoa para bons relacionamentos futuros', 'Obter um diploma de nível superior', 'Outra expectativa', 'Não tenho expectativa alguma'];
    let opcFormar = ['Conquistar vaga em empresa privada', 'Prestar concurso público', 'Melhorar cargo e salário na empresa que trabalho', 'Abrir meu próprio negócio', 'Ingressar na carreira acadêmica', 'Outra expectativa', 'Nenhuma expectativa'];
    let opcEstudoNaEscola = ['Sim', 'Não'];
    let opcCursoTecnico = ['Não fiz', 'Sim, em uma ETEC', 'Sim, no SENAC', 'Sim, no SENAI', 'Sim, em outra instituição']
    let opcTransporte = ['Caminhando', 'Carona', 'Bicicleta', 'Moto', 'Carro', 'Ônibus', 'Transporte escolar']

    // Criar Grafico de Pizza
    function ChartPie(id, labels, dados, title) {
        var ctx = document.getElementById(id).getContext('2d');
        var chart = new Chart(ctx, {

            type: 'pie',

            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    backgroundColor: [
                        '#12239E', '#FF0005', '#EA4335',
                        '#1D96CC', '#3DFF64', '#FBBC05',
                        '#9657FF', '#6B007B', '#FFF28C',
                        '#F59AF2', '#5BE8F5', '#F50F51',
                        '#9ED3E4', '#EE7AE9', '#FFBBFF',
                        '#912CEE', '#008B8B', '#00008B',
                        '#90EE90', '#CD2626', '#EE7621',
                        '#00008B', '#20B2AA', '#1E90FF'
                    ],
                    borderColor: [
                        '#12239E', '#FF0005', '#EA4335',
                        '#1D96CC', '#3DFF64', '#FBBC05',
                        '#9657FF', '#6B007B', '#FFF28C',
                        '#F59AF2', '#5BE8F5', '#F50F51',
                        '#9ED3E4', '#EE7AE9', '#FFBBFF',
                        '#912CEE', '#008B8B', '#00008B',
                        '#90EE90', '#CD2626', '#EE7621',
                        '#00008B', '#20B2AA', '#1E90FF'
                    ],
                    data: dados,
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
    function ChartBar(id, tipo, labels, dados, title) {
        var ctx = document.getElementById(id).getContext('2d');
        var chart = new Chart(ctx, {

            type: tipo,

            data: {
                labels: labels,
                datasets: [{
                    label: 'Geral',
                    backgroundColor: [
                        '#12239E', '#FF0005', '#EA4335',
                        '#1D96CC', '#3DFF64', '#FBBC05',
                        '#9657FF', '#6B007B', '#1E90FF',
                        '#FFF28C', '#F59AF2', '#5BE8F5',
                        '#F50F51', '#9ED3E4', '#00F6A0',
                        '#CEF6A0', '#FF91A0', '#FF0046',
                        '#4A0046', '#BA00B1', '#22BDD4',
                        '#2300BA', '#FFF766', '#FFF713',
                        '#10B92C', '#EB0D0D', '#FF700F',
                        '#FFB7F3', '#EE7AE9', '#FFBBFF',
                        '#912CEE', '#008B8B', '#00008B',
                        '#90EE90', '#CD2626', '#EE7621',
                        '#00008B', '#20B2AA',
                    ],
                    borderColor: ['#12239E'],
                    data: dados,
                }]
            },

            options: {

                title: {
                    display: true,
                    fontColor: '#BFBFBF',
                    fontSize: 40,
                    text: title,
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

    function GerarGraficoPie(variavel, opcao, Resp, num, labels, Dados, id, title) {
        for (let i = 0; i < opcao.length; i++) {
            variavel[i] = new Array()
        }

        for (j = 0; j < opcao.length; j++) {
            for (k = 0; k < Resp[num].length; k++) {
                if (Resp[num][k] === opcao[j]) {
                    variavel[j].push(Resp[num][k])
                }
            }
            if (variavel[j].length > 0) {
                Dados.push(variavel[j].length)
            }
        }

        for (j = 0; j < 1; j++) {
            for (k = 0; k < opcao.length; k++) {
                if (variavel[k][j] != undefined) {
                    labels.push(variavel[k][j])
                }
            }
        }

        ChartPie(id, labels, Dados, title)
    }

    function GerarGraficoBar(variavel, opcao, Resp, num, labels, Dados, id, tipo, title) {
        for (let i = 0; i < opcao.length; i++) {
            variavel[i] = new Array()
        }

        for (j = 0; j < opcao.length; j++) {
            for (k = 0; k < Resp[num].length; k++) {
                if (Resp[num][k] === opcao[j]) {
                    variavel[j].push(Resp[num][k])
                }
            }
            if (variavel[j].length > 0) {
                Dados.push(variavel[j].length)
            }
        }

        for (j = 0; j < 1; j++) {
            for (k = 0; k < opcao.length; k++) {
                if (variavel[k][j] != undefined) {
                    labels.push(variavel[k][j])
                }
            }
        }

        ChartBar(id, tipo, labels, Dados, title)
    }

    // 1. Qual o seu curso?
    let curso = [];
    let DadosCurso = [];
    let labelsCurso = [];

    GerarGraficoPie(curso, opcCurso, respostas, 2, labelsCurso, DadosCurso, 'curso', 'Cursos')


    // 2. Qual o período que cursa?
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

    // 4. Qual o estado do Brasil que você nasceu?
    let estado = [];
    let DadosEstados = [];
    let labelsEstado = [];

    GerarGraficoBar(estado, opcEstado, respostas, 5, labelsEstado, DadosEstados, 'estado', 'bar', 'Estados');

    // 5 - Cidades
    let cidade = [];
    let DadosCidade = [];
    let labelsCidade = [];

    GerarGraficoBar(cidade, opcCidade, respostas, 6, labelsCidade, DadosCidade, 'cidade', 'bar', 'Cidades');

    // 6 - Genero
    let genero = [];
    let DadosGenero = [];
    let labelsGenero = [];

    GerarGraficoPie(genero, opcGenero, respostas, 7, labelsGenero, DadosGenero, 'genero', 'Gênero');

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
    let labelsDataNascimento = [];

    GerarGraficoBar(DataNascimento, opcDataNascimento, respostas, 8, labelsDataNascimento, DadosDataNasciemnto, 'DataNascimento', 'Datas de Nascimento(Em Anos)')*/

    // 8 - Estado Civil
    let estadoCivil = [];
    let DadosEstadoCivil = [];
    let labelsEstadoCivil = [];

    GerarGraficoPie(estadoCivil, opcEstadoCivil, respostas, 9, labelsEstadoCivil, DadosEstadoCivil, 'estado_civil', 'Estado Civil');

    // 9 - Portadores de Necessidades especiais
    let portadores = [];
    let DadosPortadores = [];
    let labelsPortadores = [];

    GerarGraficoPie(portadores, opcPortador, respostas, 10, labelsPortadores, DadosPortadores, 'Portador_de_Necessidade', 'Portadores de Necessidades Especiais');

    // 10 - Convive com Portadores de Necessidades especiais
    let ConvivePort = [];
    let DadosConvivePort = [];
    let labelsConvivePort = [];

    GerarGraficoPie(ConvivePort, opcConvivePort, respostas, 11, labelsConvivePort, DadosConvivePort, 'convive_com_portador', 'Convive com Portadores de Necessidades Especiais');

    // 11 - Quantidade de filhos
    let QtdFilhos = [];
    let DadosQtdFilhos = [];
    let labelsQtdFilhos = [];

    GerarGraficoPie(QtdFilhos, opcQtdFilhos, respostas, 12, labelsQtdFilhos, DadosQtdFilhos, 'qtd_de_filhos', "Quantidade de filhos de cada estudante");

    // 12. Com quem você mora atualmente?
    let moraCom = [];
    let DadosMoraCom = [];
    let labelsMoraCom = [];

    GerarGraficoPie(moraCom, opcMoraCom, respostas, 13, labelsMoraCom, DadosMoraCom, 'moram_com', "Com quem cada estudante mora");

    //13. Quantas pessoas, incluindo você, moram no seu domicílio?
    let QtdMoradores = [];
    let DadosQtdMoradores = [];
    let labelsQtdMoradores = [];

    GerarGraficoPie(QtdMoradores, opcQtdMoradores, respostas, 14, labelsQtdMoradores, DadosQtdMoradores, 'QTD_de_pessoas_moram_junto', "Quantidade de pessoas que moram com cada aluno");

    // 14. Qual a situação do domicílio onde mora?
    let SituacaoDomicilio = [];
    let DadosSituacaoDomi = [];
    let labelsSituacaoDomi = [];

    GerarGraficoPie(SituacaoDomicilio, opcSituacaoDomi, respostas, 15, labelsSituacaoDomi, DadosSituacaoDomi, 'situacao_domicilio', "Situação do Domicílio")

    // 15. Tempo de moradia neste domicílio (Em anos)
    let TempoMoradia = [];
    let DadosTempoMoradia = [];
    let labelsTempoMoradia = [];

    GerarGraficoBar(TempoMoradia, opcTempoMoradia, respostas, 16, labelsTempoMoradia, DadosTempoMoradia, 'tempo_moradia', 'bar', 'Tempo de moradia no domicílio(Em anos)');

    // 16. Qual a faixa de renda mensal da sua família (em Salários Mínimos)
    let RendaMensal = [];
    let DadosRendaMensal = [];
    let labelsRendaMensal = [];

    GerarGraficoPie(RendaMensal, opcRendaMensal, respostas, 17, labelsRendaMensal, DadosRendaMensal, 'salario_min', "Faixa de renda mensal da família do estudante (em Salários Mínimos)");

    //17.1. Quantas geladeiras há em seu domicílio
    let QtdGeladeira = [];
    let DadosQtdGeladeira = [];
    let labelsQtdGeladeira = [];

    GerarGraficoPie(QtdGeladeira, opc17QtdeCadaCoisa, respostas, 18, labelsQtdGeladeira, DadosQtdGeladeira, 'qtd_geladeira', "Quantidade de Geladeiras de cada aluno");

    // 17.2. Quantos celulares comuns há em seu domicílio?
    let QtdCelular = [];
    let DadosQtdCelular = [];
    let labelsQtdCelular = [];

    GerarGraficoPie(QtdCelular, opc17QtdeCadaCoisa, respostas, 19, labelsQtdCelular, DadosQtdCelular, 'qtd_celular_comum', "Quantidade de celulares comuns de cada aluno");

    // 17.3. Quantos micro-ondas há em seu domicílio?
    let QtdMicroOndas = [];
    let DadosQtdMicroOndas = [];
    let labelsQtdMicroOndas = [];

    GerarGraficoPie(QtdMicroOndas, opc17QtdeCadaCoisa, respostas, 20, labelsQtdMicroOndas, DadosQtdMicroOndas, 'qtd_micro_ondas', 'Quantidade de micro-ondas de cada aluno');

    // 17.4. Quantos notebooks há em seu domicílio?
    let QtdNotebooks = [];
    let DadosQtdNotebooks = [];
    let labelsQtdNotebook = [];

    GerarGraficoPie(QtdNotebooks, opc17QtdeCadaCoisa, respostas, 21, labelsQtdNotebook, DadosQtdNotebooks, 'qtd_notebooks', 'Quantidade de Notebooks de cada aluno');

    // 17.5. Quantas máquinas de lavar roupa e(ou) tanquinho há em seu domicílio?
    let Qtd_Maquina_de_Lavar = [];
    let DadosMaquinaLavar = [];
    let labelsMaquinaLavar = [];

    GerarGraficoPie(Qtd_Maquina_de_Lavar, opc17QtdeCadaCoisa, respostas, 22, labelsMaquinaLavar, DadosMaquinaLavar, 'qtd_Maquina_de_Lavar', 'Quantidade de Máquinas de lavar roupa de cada aluno');

    // 17.6. Quantas motocicletas há em seu domicílio?
    let Qtd_motoclicletas = [];
    let DadosMotocicletas = [];
    let labelsMotocicletas = [];

    GerarGraficoPie(Qtd_motoclicletas, opc17QtdeCadaCoisa, respostas, 23, labelsMotocicletas, DadosMotocicletas, 'qtd_motocicletas', 'Quantidade de Motocicletas de cada aluno');

    // 17.7. Quantos automóveis há em seu domicílio?
    let QtdAutomoveis = [];
    let DadosAutomoveis = [];
    let labelsAutomoveis = [];

    GerarGraficoPie(QtdAutomoveis, opc17QtdeCadaCoisa, respostas, 24, labelsAutomoveis, DadosAutomoveis, 'qtd_Automoveis', 'Quantidade de Automóveis de cada aluno');

    // 17.8. Quantos vídeos cassete e(ou) DVD players há em seu domicílio?
    let QtdDVD = [];
    let DadosDVD = [];
    let labelsDvd = [];

    GerarGraficoPie(QtdDVD, opc17QtdeCadaCoisa, respostas, 25, labelsDvd, DadosDVD, 'qtd_DVD', 'Quantidade de DVD players');

    // 17.9. Quantos televisores há em seu domicílio?
    let QtdTV = [];
    let DadosTV = [];
    let labelsQtdTV = [];

    GerarGraficoPie(QtdTV, opc17QtdeCadaCoisa, respostas, 26, labelsQtdTV, DadosTV, 'qtd_TV', 'Quantidade de TVs de cada aluno');

    // 17.10. Quantos smartphones há em seu domicílio?
    let Qtd_Smartphones = [];
    let DadosSmatphones = [];
    let labelsQtdSmartphone = [];

    GerarGraficoPie(Qtd_Smartphones, opc17QtdeCadaCoisa, respostas, 27, labelsQtdSmartphone, DadosSmatphones, 'qtd_Smartphones', 'Quantidade de Smartphones de cada aluno');

    // 18. No seu domicílio tem? questão com mais de uma alternativa, n esta terminada
    let DomicilioTem = [];
    let DadosDomicilioTem = [];
    let labelsDomicilioTem = [];

    GerarGraficoBar(DomicilioTem, opcTemNoDomicilio, respostas, 28, labelsDomicilioTem, DadosDomicilioTem, 'Oque_tem_No_Domicilio', 'horizontalBar', 'Na casa de cada estudante tem');

    // 19.1. Você trabalha?
    let trabalha = [];
    let DadosTrabalho = [];
    let labelsTrabalho = [];

    GerarGraficoPie(trabalha, opcTrabalha, respostas, 29, labelsTrabalho, DadosTrabalho, 'Trabalho', 'Você trabalha?');

    //19.2. Qual o seu vínculo com o emprego?
    let VinculoEmprego = [];
    let DadosVinculo = [];
    let labelsVinculo = [];

    GerarGraficoPie(VinculoEmprego, opcVinculoEmprego, respostas, 30, labelsVinculo, DadosVinculo, 'Vinculo_Emprego', "Vinculo com o emprego");

    // 19.3. Qual a área do seu trabalho?
    let AreaTrabalho = [];
    let DadosAreaTrabalho = [];
    let labelsAreaTrabalho = [];

    GerarGraficoPie(AreaTrabalho, opcAreaTrabalho, respostas, 31, labelsAreaTrabalho, DadosAreaTrabalho, 'Area_trabalho', "Qual a área do seu trabalho?");

    // 19.4. Qual seu horário de trabalho?
    let HorarioTrabalho = [];
    let DadosHorario = [];
    let labelsHorario = [];

    GerarGraficoPie(HorarioTrabalho, opcHorarioTrabalho, respostas, 32, labelsHorario, DadosHorario, 'Horario_Trabalho', "Horários de Trabalho");

    // 19.5. Qual a empresa que você está contratado agora
    let CabecalhoTabela = '';
    let DadosTabela = '';
    let Empresa = [];

    CabecalhoTabela = '<tr class = "thead__row"> <td class = "thead__data"> Empresas: </td> </tr>'
    document.getElementById('thead').innerHTML = CabecalhoTabela;

    for (quest of forms) {

        Empresa[i] = quest["19.5. Qual a empresa que você está contratado agora?"]

        DadosTabela = DadosTabela + `<tr "tbody__row"> <td "tbody__data"> ${Empresa[i]} </td> </tr>`

        i++
    }

    document.getElementById('tbody').innerHTML = DadosTabela;


    // 20. Você tem plano de saúde privado?
    let PlanoSaude = [];
    let DadosPlanoSaude = [];
    let labelsPlanoSaude = [];

    GerarGraficoPie(PlanoSaude, opcPlanoDeSaude, respostas, 34, labelsPlanoSaude, DadosPlanoSaude, 'Plano_Saude', 'Planos de Saúde');

    // 21.1. Qual o grau de escolaridade do seu pai?
    let EscolaridadePai = [];
    let DadosEscolaridadePai = [];
    let LabelsEscolaPai = [];

    GerarGraficoPie(EscolaridadePai, opcEscolaridade, respostas, 35, LabelsEscolaPai, DadosEscolaridadePai, 'Escolaridade_Pai', 'Grau de Escolaridade do Pai dos Alunos');

    // 21.2. Qual o grau de escolaridade da sua mãe?
    let EscolaridadeMae = [];
    let DadosEscolaridadeMae = [];
    let LabelsEscolaMae = [];

    GerarGraficoPie(EscolaridadeMae, opcEscolaridade, respostas, 36, LabelsEscolaMae, DadosEscolaridadeMae, 'Escolaridade_Mae', 'Grau de Escolaridade da Mãe dos Alunos');

    // 22. Na sua vida escolar você estudou
    let EstudouEm = [];
    let DadosEstudouEm = [];
    let labelsEstudouEm = [];

    GerarGraficoPie(EstudouEm, opcEstudou, respostas, 37, labelsEstudouEm, DadosEstudouEm, 'Estudou_Em', "Na sua vida escolar você estudou");

    // 23.1. Com que frequência você utiliza microcomputadores?
    let FrequenciaMicrocomputadores = [];
    let DadosFrequenciaComp = [];
    let labelsFrequenciaComp = [];

    GerarGraficoPie(FrequenciaMicrocomputadores, opcUsaMicroComp, respostas, 38, labelsFrequenciaComp, DadosFrequenciaComp, 'Frequencia_Microcomputadores', 'Com que frequência você utiliza microcomputadores?');


    // 23.2. Onde você utiliza microcomputadores?
    let OndeUtilizaMicro = [];
    let DadosOndeUtilizaMicro = [];
    let labelsUtilizaMicro = [];

    GerarGraficoBar(OndeUtilizaMicro, opcOndeUsaMicroComp, respostas, 39, labelsUtilizaMicro, DadosOndeUtilizaMicro, 'Onde_Microcomputadores', 'horizontalBar', 'Onde você utiliza microcomputadores?');

    // 23.3. Com qual finalidade você utiliza microcomputadores?
    let FinalidadeUtiliMicro = [];
    let DadosFinalidadeUtiliMicro = [];
    let labelsFinalidadeUtiliza = [];

    GerarGraficoBar(FinalidadeUtiliMicro, opcFinalizadeUsaMicroComp, respostas, 40, labelsFinalidadeUtiliza, DadosFinalidadeUtiliMicro, 'Finalidade_Microcomputadores', 'horizontalBar', 'Com qual finalidade você utiliza microcomputadores?');

    // 24. Como você classifica seu conhecimento em informática
    let ConhecimentoInformatica = [];
    let DadosConhecimentoInformatica = [];
    let labelsInformatica = [];

    GerarGraficoPie(ConhecimentoInformatica, opcConhecimentoInformatica, respostas, 41, labelsInformatica, DadosConhecimentoInformatica, 'Conhecimento_Informatica', 'Conhecimento em Informática');

    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Windows]
    let ConhecimentoWindows = [];
    let DadosWindows = [];
    let labelsWindows = [];

    GerarGraficoPie(ConhecimentoWindows, opcConhecimentoInformatica, respostas, 42, labelsWindows, DadosWindows, 'Conhecimento_Windows', 'Conhecimento no Windows');


    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Linux]
    let ConhecimentoLinux = [];
    let DadosLinux = [];
    let labelsLinux = [];

    GerarGraficoPie(ConhecimentoLinux, opcConhecimentoInformatica, respostas, 43, labelsLinux, DadosLinux, 'Conhecimento_Linux', 'Conhecimento no Linux');

    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Editores de textos (Word, Writer, etc.)]
    let ConhecimentoWord = [];
    let DadosWord = [];
    let labelsWord = [];

    GerarGraficoPie(ConhecimentoWord, opcConhecimentoInformatica, respostas, 44, labelsWord, DadosWord, 'Conhecimento_Word', 'Conhecimento em Editores de textos (Word, Writer, etc.)');

    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Planilhas eletrônicas (Excel, Calc, etc.)]
    let ConhecimentoExcel = [];
    let DadosExcel = [];
    let labelsExcel = [];

    GerarGraficoPie(ConhecimentoExcel, opcConhecimentoInformatica, respostas, 45, labelsExcel, DadosExcel, 'Conhecimento_Excel', 'Conhecimento em Planilhas eletrônicas (Excel, Calc, etc.)');


    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Apresentadores (Powerpoint, Impress, Prezzi, etc.)]
    let ConhecimentoPowerPoint = [];
    let DadosPowerPoint = [];
    let labelsPowerPoint = [];

    GerarGraficoPie(ConhecimentoPowerPoint, opcConhecimentoInformatica, respostas, 46, labelsPowerPoint, DadosPowerPoint, 'Conhecimento_PowerPoint', 'Conhecimento em Apresentadores (Powerpoint, Impress, Prezzi, etc.)');


    // 25. Qual o seu conhecimento em relação aos aplicativos a seguir? [Sistemas de Gestão Empresaria]
    let ConhecimentoGestaoEmpresarial = [];
    let DadosGestaoEmpresarial = [];
    let labelsGestaoEmpresarial = [];

    GerarGraficoPie(ConhecimentoGestaoEmpresarial, opcConhecimentoInformatica, respostas, 47, labelsGestaoEmpresarial, DadosGestaoEmpresarial, 'Conhecimento_GestaoEmpresarial', 'Conhecimento em Sistemas de Gestão Empresaria');

    //26. Agora, considere seu conhecimento sobre idiomas [Inglês]
    let conhecimentoIngles = [];
    let DadosIngles = [];
    let labelsInlges = [];

    GerarGraficoPie(conhecimentoIngles, opcConhecimentoLinguas, respostas, 48, labelsInlges, DadosIngles, 'Ingles', 'Conhecimento em inglês');

    // 26. Agora, considere seu conhecimento sobre idiomas [Espanhol]
    let conhecimentoEspanhol = [];
    let DadosEspanhol = [];
    let labelsEspanhol = [];

    GerarGraficoPie(conhecimentoEspanhol, opcConhecimentoLinguas, respostas, 49, labelsEspanhol, DadosEspanhol, 'Espanhol', 'Conhecimento em Espanhol');

    // 26. Agora, considere seu conhecimento sobre idiomas [Outros]
    let conhecimentoIdioma = [];
    let DadosIdioma = [];
    let labelsIdioma = [];

    GerarGraficoPie(conhecimentoIdioma, opcConhecimentoLinguas, respostas, 50, labelsIdioma, DadosIdioma, 'Outros', 'Conhecimento em outros idiomas');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Televisores]
    let Televisores = [];
    let DadosTelevisores = [];
    let labelsTelevisores = [];

    GerarGraficoPie(Televisores, opcBuscaInformação, respostas, 51, labelsTelevisores, DadosTelevisores, 'Televisores', 'Busca por informação no seguinte meio de comunicação(Televisores)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Internet]
    let internet = [];
    let DadosInternet = [];
    let labelsInternet = [];

    GerarGraficoPie(internet, opcBuscaInformação, respostas, 52, labelsInternet, DadosInternet, 'Internet', 'Busca por informação no seguinte meio de comunicação(Internet)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Revistas]
    let revistas = [];
    let DadosRevistas = [];
    let labelsRevistas = [];

    GerarGraficoPie(revistas, opcBuscaInformação, respostas, 53, labelsRevistas, DadosRevistas, 'Revistas', 'Busca por informação no seguinte meio de comunicação(Revistas)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Jornais]
    let jornais = [];
    let DadosJornais = [];
    let labelsJornais = [];

    GerarGraficoPie(jornais, opcBuscaInformação, respostas, 54, labelsJornais, DadosJornais, 'Jornais', 'Busca por informação no seguinte meio de comunicação(Jornais)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Rádio]
    let Radio = [];
    let DadosRadio = [];
    let labelsRadio = [];

    GerarGraficoPie(Radio, opcBuscaInformação, respostas, 55, labelsRadio, DadosRadio, 'Radio', 'Busca por informação no seguinte meio de comunicação(Rádio)');


    // 27. Considere a busca por informação nos seguintes meios de comunicação [Redes socias]
    let RedesSociais = [];
    let DadosRedesSociais = [];
    let labelsRedesSociais = [];

    GerarGraficoPie(RedesSociais, opcBuscaInformação, respostas, 56, labelsRedesSociais, DadosRedesSociais, 'Redes_Sociais', 'Busca por informação no seguinte meio de comunicação(Redes Sociais)');

    // 27. Considere a busca por informação nos seguintes meios de comunicação [Conversas com Amigos]
    let ConversaComAmigos = [];
    let DadosConversaComAmigos = [];
    let labelsConversaComAmigos = [];

    GerarGraficoPie(ConversaComAmigos, opcBuscaInformação, respostas, 57, labelsConversaComAmigos, DadosConversaComAmigos, 'Conversas_com_Amigos', 'Busca por informação no seguinte meio de comunicação(Conversas com Amigos)');

    // 28. Se você lê jornal, qual a frequência?
    let LeJornal = [];
    let DadosLeJornal = [];
    let labelsLeJornal = [];

    GerarGraficoPie(LeJornal, opcLeJornal, respostas, 58, labelsLeJornal, DadosLeJornal, 'Le_Jornal', ' Frequência que leem jornal');

    // 29. Se você lê jornal, quais os assuntos que mais lê?
    let assuntosQueLeem = [];
    let DadosAssuntosQueLeem = [];
    let labelsAssuntosQueLeem = [];

    GerarGraficoBar(assuntosQueLeem, opcAssuntosJornal, respostas, 59, labelsAssuntosQueLeem, DadosAssuntosQueLeem, 'Assuntos_que_Le', 'horizontalBar', 'Assuntos que mais leem');

    // 30. Não considerando os livros escolares, quantos livros você lê por ano (em média)
    let QtdLivros = [];
    let DadosQtdLivros = [];
    let labelsQtdLivros = [];

    GerarGraficoPie(QtdLivros, opcQtdLivros, respostas, 60, labelsQtdLivros, DadosQtdLivros, 'Qtd_Livros', 'Quantos livros cada aluno lê por ano (em média)');

    // 31. Se você lê livros literários, qual/quais o(s) gênero(s) preferido(s)?
    let leLivros = [];
    let DadosLeLivros = [];
    let labelsLeLivros = [];

    GerarGraficoBar(leLivros, opcLeLivros, respostas, 61, labelsLeLivros, DadosLeLivros, 'Le_Livros', 'horizontalBar', "Gêneros de livros preferidos de cada aluno");

    // 32. Você dedica parte do seu tempo para atividades voluntárias?
    let atividadesVolutaria = [];
    let DadosAtiviadeVoluntaria = [];
    let labelsAtividadeVoluntaria = [];

    GerarGraficoPie(atividadesVolutaria, opcAtividadeVolun, respostas, 62, labelsAtividadeVoluntaria, DadosAtiviadeVoluntaria, 'Atividade_Voluntaria', "Dedica parte do tempo para atividades Voluntárias");

    //33. Qual religião você professa?": "Evangélica"
    let religiao = [];
    let DadosReligiao = [];
    let lablesReligiao = [];

    GerarGraficoPie(religiao, opcReligiao, respostas, 63, lablesReligiao, DadosReligiao, 'Religiao', 'Religião');

    // 34. Quais fontes de entretenimento cultural você usa?
    let FontesEntretenimento = [];
    let DadosFontesEntretenimento = [];
    let labelsFontesEntretenimento = [];

    GerarGraficoBar(FontesEntretenimento, opcEntretenimento, respostas, 64, labelsFontesEntretenimento, DadosFontesEntretenimento, "Fontes_Entretenimento", 'horizontalBar', 'Fontes de Entretenimento');

    //35. Estamos quase acabando... Como conheceu a FATEC Franca?
    let ConheceuFatec = [];
    let DadosConheceuFatec = [];
    let labelsConheceuFatec = [];

    GerarGraficoBar(ConheceuFatec, opcConheceuFatec, respostas, 65, labelsConheceuFatec, DadosConheceuFatec, 'Conheceu_Fatec', 'horizontalBar', 'Como conheceu a FATEC Franca?')

    // 36. Porque você escolheu este curso?
    let EscolheuCurso = [];
    let DAdosEscolheuCurso = [];
    let labelsEscolheuCurso = [];

    GerarGraficoBar(EscolheuCurso, opcEscolheuCurso, respostas, 66, labelsEscolheuCurso, DAdosEscolheuCurso, 'Escolheu_Curso', 'horizontalBar', 'Porque você escolheu este curso?')

    // 37. Qual sua maior expectativa quanto ao curso?

    // 38. Qual sua expectativa após se formar?

    //39. Você já estudou nesta escola?
    let estudouNaFatec = [];
    let DadosEstudouFatec = [];
    let labelsEstudouFatec = [];

    GerarGraficoPie(estudouNaFatec, opcEstudoNaEscola, respostas, 69, labelsEstudouFatec, DadosEstudouFatec, 'Estudou_Fatec', 'Você já estudou nesta escola?');

    //40. Você fez algum curso técnico?
    let cursoTecnico = [];
    let DadosCursoTecnico = [];
    let labelsCursoTecnico = [];

    GerarGraficoPie(cursoTecnico, opcCursoTecnico, respostas, 70, labelsCursoTecnico, DadosCursoTecnico, 'Curso_Tecnico', 'Você fez algum curso técnico?');

    // 41. Qual o meio de transporte você usa para vir à escola?
    let transporte = [];
    let DadosTransporte = [];
    let labelsTransporte = [];

    GerarGraficoPie(transporte, opcTransporte, respostas, 71, labelsTransporte, DadosTransporte, 'Transporte', 'Meios de transportes')

    console.log(respostas[65])
}

generateChart()
