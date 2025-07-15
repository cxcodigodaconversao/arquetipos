// Perguntas e arquétipos correspondentes baseados em Carl Jung
const questions = [
    ["Eu busco simplicidade e otimismo em tudo que faço.", "Inocente"],
    ["Valorizo a pureza e a esperança nas relações.", "Inocente"],
    ["Prefiro me conectar com pessoas comuns e acessíveis.", "Pessoa Comum"],
    ["Gosto de ambientes inclusivos e sem pretensões.", "Pessoa Comum"],
    ["Enfrento desafios com coragem e determinação.", "Herói"],
    ["Inspiro outros a superarem obstáculos.", "Herói"],
    ["Ofereço ajuda e cuidado incondicional aos outros.", "Prestativo"],
    ["Priorizo o bem-estar coletivo acima do meu.", "Prestativo"],
    ["Adoro aventuras e explorar o desconhecido.", "Explorador"],
    ["Busco liberdade e novas experiências constantemente.", "Explorador"],
    ["Valorizo paixões intensas e conexões emocionais.", "Amante"],
    ["Aprecio a sensualidade e o romance na vida.", "Amante"],
    ["Sou criativo e busco inovação em projetos.", "Criador"],
    ["Gosto de transformar ideias em algo original.", "Criador"],
    ["Questiono normas e busco rupturas.", "Fora da Lei"],
    ["Prefiro ser disruptivo e autêntico.", "Fora da Lei"],
    ["Assumo liderança e busco ordem e legado.", "Governante"],
    ["Valorizo o controle e a estabilidade.", "Governante"],
    ["Uso intuição para transformar realidades.", "Mago"],
    ["Acredito em visões mágicas e insights profundos.", "Mago"],
    ["Uso humor para aliviar tensões e conectar pessoas.", "Bobo da Corte"],
    ["Prefiro leveza e irreverência no dia a dia.", "Bobo da Corte"],
    ["Busco conhecimento e orientação racional.", "Sábio"],
    ["Valorizo a verdade e a análise profunda.", "Sábio"]
];

// Descrições dos 12 arquétipos baseados na obra de Carl Jung
const archetypeDescriptions = {
    "Inocente": {
        "resumo": "Você é uma pessoa que vive com otimismo, fé e confiança no bem.",
        "caracteristicas": [
            "Busca autenticidade, simplicidade e verdade em tudo",
            "Inspira paz, esperança e leveza ao seu redor",
            "Acredita nas boas intenções das pessoas",
            "Transmite confiança e contribui para ambientes leves",
            "Profissionalmente trabalha criando atmosferas positivas e acolhedoras"
        ]
    },
    "Pessoa Comum": {
        "resumo": "Você é acessível, empática e fácil de se relacionar.",
        "caracteristicas": [
            "Valoriza a igualdade e trata todos com respeito e humildade",
            "Sabe ouvir, é colaborativa e evita julgamentos",
            "Evita ostentação e se conecta com a realidade do cotidiano",
            "Trabalha bem em equipe e constrói relações baseadas na confiança",
            "Profissionalmente é vista como confiável e próxima"
        ]
    },
    "Herói": {
        "resumo": "Você é determinada, corajosa e enfrenta desafios com garra.",
        "caracteristicas": [
            "Busca superação constante e se motiva por resultados",
            "Protege quem ama e defende o que acredita com firmeza",
            "Age com disciplina, foco e alto senso de responsabilidade",
            "Trabalha com alto desempenho e metas claras",
            "Profissionalmente demonstra forte espírito de liderança"
        ]
    },
    "Prestativo": {
        "resumo": "Você tem empatia natural e genuína preocupação com o bem-estar dos outros.",
        "caracteristicas": [
            "Coloca as necessidades alheias acima das próprias com senso de propósito",
            "É compassiva, protetora e transmite segurança emocional",
            "Atua com generosidade e escuta ativa em todas as relações",
            "Trabalha com dedicação, zelo e foco em servir com excelência",
            "Profissionalmente é reconhecida pelo cuidado e atenção aos detalhes"
        ]
    },
    "Explorador": {
        "resumo": "Você é curiosa, livre e movida pela busca por autenticidade.",
        "caracteristicas": [
            "Ama experimentar o novo, viver aventuras e sair da zona de conforto",
            "Tem mente aberta e valoriza a individualidade e liberdade de escolha",
            "Rejeita padrões impostos e segue sua própria verdade",
            "Trabalha de forma autônoma, criativa e gosta de ambientes flexíveis",
            "Profissionalmente busca projetos inovadores e desafiadores"
        ]
    },
    "Amante": {
        "resumo": "Você é intensa, sensível e valoriza conexões emocionais profundas.",
        "caracteristicas": [
            "Vive com paixão, entrega e presença - tudo é vivido com alma",
            "Valoriza a estética, os sentidos e o prazer em cada detalhe",
            "Cria laços afetivos sinceros, envolventes e cheios de significado",
            "Trabalha com dedicação emocional e cria experiências encantadoras",
            "Profissionalmente traz beleza e significado para tudo que faz"
        ]
    },
    "Criador": {
        "resumo": "Você tem imaginação fértil e grande necessidade de expressar sua originalidade.",
        "caracteristicas": [
            "Valoriza autenticidade, estética e significado em tudo o que faz",
            "É movida pelo desejo de construir, transformar e deixar algo único",
            "Preza por liberdade criativa e busca constante por aperfeiçoamento",
            "Trabalha com inovação, originalidade e entrega soluções únicas",
            "Profissionalmente se destaca pela identidade própria e criatividade"
        ]
    },
    "Fora da Lei": {
        "resumo": "Você questiona normas, desafia padrões e não aceita injustiças.",
        "caracteristicas": [
            "É movida pelo desejo de transformação, ruptura e liberdade",
            "Traz coragem para ser quem é, sem pedir permissão",
            "Inspira mudanças profundas com autenticidade e irreverência",
            "Trabalha com inovação disruptiva, quebrando modelos tradicionais",
            "Profissionalmente propõe novas formas de pensar e agir"
        ]
    },
    "Sábio": {
        "resumo": "Você busca a verdade, o conhecimento profundo e o entendimento da vida.",
        "caracteristicas": [
            "Observa antes de agir, com pensamento estratégico e visão ampla",
            "É racional, ponderada e confiável - transmite segurança intelectual",
            "Conecta sabedoria com compaixão, guiando com lucidez",
            "Trabalha com excelência analítica e profundidade técnica",
            "Profissionalmente é referência em orientação estratégica"
        ]
    },
    "Governante": {
        "resumo": "Você gosta de liderar, organizar e assumir responsabilidade com visão.",
        "caracteristicas": [
            "Preza por excelência, autoridade e controle saudável das situações",
            "Valoriza estabilidade, justiça e construção de legado",
            "Toma decisões com firmeza, clareza e senso de ordem",
            "Trabalha com visão estratégica e liderança natural",
            "Profissionalmente foca em resultados consistentes e duradouros"
        ]
    },
    "Mago": {
        "resumo": "Você tem visão profunda e intuitiva, enxergando além do óbvio.",
        "caracteristicas": [
            "É catalisadora de mudanças, ajudando outros a se transformarem",
            "Atua com sabedoria sutil, espiritualidade e percepção do invisível",
            "Cria conexão entre o mundo interno e externo, sonho e realidade",
            "Trabalha com transformação e influência energética",
            "Profissionalmente inspira e guia através de insights profundos"
        ]
    },
    "Bobo da Corte": {
        "resumo": "Você é leve, espontânea e sabe viver o presente com alegria.",
        "caracteristicas": [
            "Usa o humor para aliviar tensões e conectar pessoas com autenticidade",
            "Traz leveza, irreverência e brilho para ambientes e relações",
            "Ajuda os outros a rirem de si mesmos e lidarem melhor com a vida",
            "Trabalha com criatividade, bom humor e excelente comunicação",
            "Profissionalmente tem grande capacidade de engajamento"
        ]
    }
};
