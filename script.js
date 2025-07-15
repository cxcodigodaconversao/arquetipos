/**
 * Pesquisa de Arquétipos - JavaScript Principal
 * Baseado nos 12 Arquétipos de Carl Jung
 */

// =============================================================================
// DADOS DO APLICATIVO
// =============================================================================

// Perguntas e arquétipos correspondentes
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

// Descrições dos arquétipos
const archetypeDescriptions = {
    "Inocente": {
        emoji: "🌟",
        resumo: "Você é uma pessoa que vive com otimismo, fé e confiança no bem.",
        caracteristicas: [
            "Busca autenticidade, simplicidade e verdade em tudo",
            "Inspira paz, esperança e leveza ao seu redor",
            "Acredita nas boas intenções das pessoas",
            "Transmite confiança e contribui para ambientes leves",
            "Profissionalmente trabalha criando atmosferas positivas e acolhedoras"
        ],
        fortalezas: ["Otimismo", "Autenticidade", "Simplicidade", "Esperança"],
        desafios: ["Ingenuidade", "Falta de realismo", "Vulnerabilidade"]
    },
    "Pessoa Comum": {
        emoji: "🤝",
        resumo: "Você é acessível, empática e fácil de se relacionar.",
        caracteristicas: [
            "Valoriza a igualdade e trata todos com respeito e humildade",
            "Sabe ouvir, é colaborativa e evita julgamentos",
            "Evita ostentação e se conecta com a realidade do cotidiano",
            "Trabalha bem em equipe e constrói relações baseadas na confiança",
            "Profissionalmente é vista como confiável e próxima"
        ],
        fortalezas: ["Empatia", "Colaboração", "Humildade", "Confiabilidade"],
        desafios: ["Falta de ambição", "Conformismo", "Autodepreciação"]
    },
    "Herói": {
        emoji: "⚔️",
        resumo: "Você é determinada, corajosa e enfrenta desafios com garra.",
        caracteristicas: [
            "Busca superação constante e se motiva por resultados",
            "Protege quem ama e defende o que acredita com firmeza",
            "Age com disciplina, foco e alto senso de responsabilidade",
            "Trabalha com alto desempenho e metas claras",
            "Profissionalmente demonstra forte espírito de liderança"
        ],
        fortalezas: ["Coragem", "Determinação", "Liderança", "Proteção"],
        desafios: ["Arrogância", "Obsessão por vitória", "Burnout"]
    },
    "Prestativo": {
        emoji: "💝",
        resumo: "Você tem empatia natural e genuína preocupação com o bem-estar dos outros.",
        caracteristicas: [
            "Coloca as necessidades alheias acima das próprias com senso de propósito",
            "É compassiva, protetora e transmite segurança emocional",
            "Atua com generosidade e escuta ativa em todas as relações",
            "Trabalha com dedicação, zelo e foco em servir com excelência",
            "Profissionalmente é reconhecida pelo cuidado e atenção aos detalhes"
        ],
        fortalezas: ["Compaixão", "Generosidade", "Cuidado", "Dedicação"],
        desafios: ["Autossacrifício", "Codependência", "Exaustão emocional"]
    },
    "Explorador": {
        emoji: "🧭",
        resumo: "Você é curiosa, livre e movida pela busca por autenticidade.",
        caracteristicas: [
            "Ama experimentar o novo, viver aventuras e sair da zona de conforto",
            "Tem mente aberta e valoriza a individualidade e liberdade de escolha",
            "Rejeita padrões impostos e segue sua própria verdade",
            "Trabalha de forma autônoma, criativa e gosta de ambientes flexíveis",
            "Profissionalmente busca projetos inovadores e desafiadores"
        ],
        fortalezas: ["Liberdade", "Aventura", "Autonomia", "Inovação"],
        desafios: ["Instabilidade", "Compromisso", "Isolamento"]
    },
    "Amante": {
        emoji: "💕",
        resumo: "Você é intensa, sensível e valoriza conexões emocionais profundas.",
        caracteristicas: [
            "Vive com paixão, entrega e presença - tudo é vivido com alma",
            "Valoriza a estética, os sentidos e o prazer em cada detalhe",
            "Cria laços afetivos sinceros, envolventes e cheios de significado",
            "Trabalha com dedicação emocional e cria experiências encantadoras",
            "Profissionalmente traz beleza e significado para tudo que faz"
        ],
        fortalezas: ["Paixão", "Sensibilidade", "Conexão", "Beleza"],
        desafios: ["Ciúme", "Dependência emocional", "Instabilidade"]
    },
    "Criador": {
        emoji: "🎨",
        resumo: "Você tem imaginação fértil e grande necessidade de expressar sua originalidade.",
        caracteristicas: [
            "Valoriza autenticidade, estética e significado em tudo o que faz",
            "É movida pelo desejo de construir, transformar e deixar algo único",
            "Preza por liberdade criativa e busca constante por aperfeiçoamento",
            "Trabalha com inovação, originalidade e entrega soluções únicas",
            "Profissionalmente se destaca pela identidade própria e criatividade"
        ],
        fortalezas: ["Criatividade", "Originalidade", "Visão", "Inovação"],
        desafios: ["Perfeccionismo", "Bloqueio criativo", "Instabilidade financeira"]
    },
    "Fora da Lei": {
        emoji: "🏴‍☠️",
        resumo: "Você questiona normas, desafia padrões e não aceita injustiças.",
        caracteristicas: [
            "É movida pelo desejo de transformação, ruptura e liberdade",
            "Traz coragem para ser quem é, sem pedir permissão",
            "Inspira mudanças profundas com autenticidade e irreverência",
            "Trabalha com inovação disruptiva, quebrando modelos tradicionais",
            "Profissionalmente propõe novas formas de pensar e agir"
        ],
        fortalezas: ["Autenticidade", "Coragem", "Transformação", "Liberdade"],
        desafios: ["Rebeldia destrutiva", "Isolamento", "Conflitos"]
    },
    "Sábio": {
        emoji: "🦉",
        resumo: "Você busca a verdade, o conhecimento profundo e o entendimento da vida.",
        caracteristicas: [
            "Observa antes de agir, com pensamento estratégico e visão ampla",
            "É racional, ponderada e confiável - transmite segurança intelectual",
            "Conecta sabedoria com compaixão, guiando com lucidez",
            "Trabalha com excelência analítica e profundidade técnica",
            "Profissionalmente é referência em orientação estratégica"
        ],
        fortalezas: ["Sabedoria", "Análise", "Estratégia", "Conhecimento"],
        desafios: ["Paralisia por análise", "Distanciamento", "Arrogância intelectual"]
    },
    "Governante": {
        emoji: "👑",
        resumo: "Você gosta de liderar, organizar e assumir responsabilidade com visão.",
        caracteristicas: [
            "Preza por excelência, autoridade e controle saudável das situações",
            "Valoriza estabilidade, justiça e construção de legado",
            "Toma decisões com firmeza, clareza e senso de ordem",
            "Trabalha com visão estratégica e liderança natural",
            "Profissionalmente foca em resultados consistentes e duradouros"
        ],
        fortalezas: ["Liderança", "Organização", "Estabilidade", "Legado"],
        desafios: ["Autoritarismo", "Inflexibilidade", "Obsessão por controle"]
    },
    "Mago": {
        emoji: "🔮",
        resumo: "Você tem visão profunda e intuitiva, enxergando além do óbvio.",
        caracteristicas: [
            "É catalisadora de mudanças, ajudando outros a se transformarem",
            "Atua com sabedoria sutil, espiritualidade e percepção do invisível",
            "Cria conexão entre o mundo interno e externo, sonho e realidade",
            "Trabalha com transformação e influência energética",
            "Profissionalmente inspira e guia através de insights profundos"
        ],
        fortalezas: ["Intuição", "Transformação", "Visão", "Espiritualidade"],
        desafios: ["Isolamento", "Incompreensão", "Instabilidade emocional"]
    },
    "Bobo da Corte": {
        emoji: "🎭",
        resumo: "Você é leve, espontânea e sabe viver o presente com alegria.",
        caracteristicas: [
            "Usa o humor para aliviar tensões e conectar pessoas com autenticidade",
            "Traz leveza, irreverência e brilho para ambientes e relações",
            "Ajuda os outros a rirem de si mesmos e lidarem melhor com a vida",
            "Trabalha com criatividade, bom humor e excelente comunicação",
            "Profissionalmente tem grande capacidade de engajamento"
        ],
        fortalezas: ["Humor", "Espontaneidade", "Leveza", "Comunicação"],
        desafios: ["Falta de seriedade", "Superficialidade", "Fuga da realidade"]
    }
};

// =============================================================================
// VARIÁVEIS GLOBAIS
// =============================================================================

let responses = {};
let currentProgress = 0;
let testCompleted = false;

// =============================================================================
// INICIALIZAÇÃO
// =============================================================================

/**
 * Inicializa o aplicativo quando DOM está carregado
 */
document.addEventListener('DOMContentLoaded', function() {
    // Simula carregamento para melhor UX
    setTimeout(() => {
        hideLoadingScreen();
        initializeApp();
    }, 1500);
    
    // Inicializa event listeners
    initializeEventListeners();
});

/**
 * Esconde a tela de carregamento
 */
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    loadingScreen.classList.add('hidden');
    mainContent.classList.add('visible');
    
    // Remove loading screen do DOM após animação
    setTimeout(() => {
        loadingScreen.remove();
    }, 500);
}

/**
 * Inicializa o aplicativo principal
 */
function initializeApp() {
    createQuestions();
    updateProgress();
    updateCalculateButton();
    
    // Analytics de inicialização
    trackEvent('app_initialized', {
        total_questions: questions.length,
        user_agent: navigator.userAgent,
        screen_width: window.innerWidth,
        screen_height: window.innerHeight
    });
}

/**
 * Inicializa event listeners
 */
function initializeEventListeners() {
    // Scroll para back-to-top
    window.addEventListener('scroll', handleScroll);
    
    // Resize para responsividade
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Visibilidade da página
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyDown);
}

// =============================================================================
// CRIAÇÃO DAS PERGUNTAS
// =============================================================================

/**
 * Cria todas as perguntas na interface
 */
function createQuestions() {
    const container = document.getElementById('questions-container');
    
    questions.forEach((question, index) => {
        const questionElement = createQuestionElement(question, index);
        container.appendChild(questionElement);
        
        // Valor inicial padrão
        responses[index] = 3;
    });
}

/**
 * Cria elemento individual de pergunta
 */
function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-container';
    questionDiv.setAttribute('data-question', index);
    
    // Adiciona animação com delay
    questionDiv.style.animationDelay = `${index * 0.1}s`;
    
    questionDiv.innerHTML = `
        <div class="question-number">Pergunta ${index + 1} de ${questions.length}</div>
        <div class="question-text">${question[0]}</div>
        <div class="slider-container">
            <span class="slider-label">1</span>
            <input 
                type="range" 
                min="1" 
                max="5" 
                value="3" 
                class="slider" 
                id="question-${index}"
                oninput="updateSliderValue(${index}, this.value)"
                onchange="updateSliderValue(${index}, this.value)"
                aria-label="Escala de 1 a 5 para: ${question[0]}"
            >
            <span class="slider-label">5</span>
            <div class="slider-value" id="value-${index}" aria-live="polite">3</div>
        </div>
        <div class="slider-labels">
            <span>Discordo totalmente</span>
            <span>Concordo totalmente</span>
        </div>
    `;
    
    return questionDiv;
}

/**
 * Atualiza valor do slider e progresso
 */
function updateSliderValue(index, value) {
    const valueElement = document.getElementById(`value-${index}`);
    const numValue = parseInt(value);
    
    // Atualiza display
    valueElement.textContent = numValue;
    
    // Armazena resposta
    responses[index] = numValue;
    
    // Atualiza progresso
    updateProgress();
    updateCalculateButton();
    
    // Adiciona animação ao valor
    valueElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        valueElement.style.transform = 'scale(1)';
    }, 150);
    
    // Analytics
    trackEvent('question_answered', {
        question_index: index,
        question_text: questions[index][0],
        archetype: questions[index][1],
        value: numValue
    });
}

// =============================================================================
// PROGRESSO E NAVEGAÇÃO
// =============================================================================

/**
 * Atualiza barra de progresso
 */
function updateProgress() {
    const answeredQuestions = Object.keys(responses).filter(
        key => responses[key] !== undefined
    ).length;
    
    const progressPercent = (answeredQuestions / questions.length) * 100;
    
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').textContent = 
        `${answeredQuestions} / ${questions.length} perguntas`;
    
    currentProgress = progressPercent;
}

/**
 * Atualiza estado do botão calcular
 */
function updateCalculateButton() {
    const button = document.getElementById('calculate-btn');
    const allAnswered = Object.keys(responses).length === questions.length;
    
    button.disabled = !allAnswered;
    
    if (allAnswered) {
        button.classList.add('ready');
        button.querySelector('.btn-text').textContent = 'Calcular Resultado';
    } else {
        button.classList.remove('ready');
        const remaining = questions.length - Object.keys(responses).length;
        button.querySelector('.btn-text').textContent = 
            `Responda mais ${remaining} pergunta${remaining > 1 ? 's' : ''}`;
    }
}

/**
 * Gerencia scroll da página
 */
function handleScroll() {
    const backToTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

/**
 * Scroll suave para o topo
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    trackEvent('scroll_to_top');
}

// =============================================================================
// CÁLCULO DE RESULTADOS
// =============================================================================

/**
 * Calcula e exibe resultados
 */
function calculateResult() {
    if (testCompleted) return;
    
    const button = document.getElementById('calculate-btn');
    button.disabled = true;
    button.innerHTML = '<span class="btn-text">Calculando...</span><span class="btn-icon">⏳</span>';
    
    // Simula tempo de processamento para melhor UX
    setTimeout(() => {
        const scores = calculateArchetypeScores();
        const selectedArchetypes = selectDominantArchetypes(scores);
        
        displayResults(selectedArchetypes, scores);
        testCompleted = true;
        
        // Analytics
        trackEvent('test_completed', {
            archetypes: selectedArchetypes,
            scores: scores,
            completion_time: Date.now()
        });
        
        // Restaura botão
        button.innerHTML = '<span class="btn-text">Resultado Calculado</span><span class="btn-icon">✅</span>';
        
    }, 2000);
}

/**
 * Calcula pontuações dos arquétipos
 */
function calculateArchetypeScores() {
    const scores = {};
    
    // Inicializa pontuações
    questions.forEach(question => {
        const archetype = question[1];
        if (!scores[archetype]) {
            scores[archetype] = 0;
        }
    });
    
    // Soma respostas por arquétipo
    questions.forEach((question, index) => {
        const archetype = question[1];
        scores[archetype] += responses[index];
    });
    
    return scores;
}

/**
 * Seleciona arquétipos dominantes
 */
function selectDominantArchetypes(scores) {
    const sortedArchetypes = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);
    
    const selectedArchetypes = [];
    const maxPossibleScore = 10;
    
    // Primeiro arquétipo (80% mínimo)
    const topArchetype = sortedArchetypes[0];
    if (topArchetype[1] >= 8) {
        selectedArchetypes.push(topArchetype[0]);
    }
    
    // Segundo arquétipo (condições rigorosas)
    if (sortedArchetypes.length > 1) {
        const secondArchetype = sortedArchetypes[1];
        const scoreDifference = topArchetype[1] - secondArchetype[1];
        
        if (secondArchetype[1] >= 8 && scoreDifference <= 1) {
            selectedArchetypes.push(secondArchetype[0]);
        }
    }
    
    // Terceiro arquétipo (casos excepcionais)
    if (sortedArchetypes.length > 2 && selectedArchetypes.length === 2) {
        const thirdArchetype = sortedArchetypes[2];
        const secondScore = sortedArchetypes[1][1];
        const scoreDifference = secondScore - thirdArchetype[1];
        
        if (thirdArchetype[1] >= 9 && scoreDifference === 0) {
            selectedArchetypes.push(thirdArchetype[0]);
        }
    }
    
    // Fallback se nenhum atingiu critério
    if (selectedArchetypes.length === 0) {
        selectedArchetypes.push(topArchetype[0]);
    }
    
    return selectedArchetypes;
}

// =============================================================================
// EXIBIÇÃO DE RESULTADOS
// =============================================================================

/**
 * Exibe resultados na interface
 */
function displayResults(selectedArchetypes, scores) {
    const resultContainer = document.getElementById('result-container');
    const resultTitle = document.getElementById('result-title');
    const scoresList = document.getElementById('scores-list');
    
    // Título
    resultTitle.innerHTML = generateResultTitle(selectedArchetypes);
    
    // Limpa resultados anteriores
    scoresList.innerHTML = '';
    
    // Cria seções dos arquétipos
    selectedArchetypes.forEach((archetype, index) => {
        const section = createArchetypeSection(archetype, scores[archetype], index);
        scoresList.appendChild(section);
    });
    
    // Mostra container com animação
    resultContainer.style.display = 'block';
    
    // Scroll suave para resultados
    setTimeout(() => {
        resultContainer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 300);
}

/**
 * Gera título dos resultados
 */
function generateResultTitle(selectedArchetypes) {
    const count = selectedArchetypes.length;
    const emoji = count === 1 ? '🎯' : count === 2 ? '⚖️' : '🌟';
    
    let title = `${emoji} `;
    
    if (count === 1) {
        title += `Seu Arquétipo Dominante: <strong>${selectedArchetypes[0]}</strong>`;
    } else if (count === 2) {
        title += `Seus Arquétipos Principais: <strong>${selectedArchetypes.join(' e ')}</strong>`;
    } else {
        title += `Seus Arquétipos: <strong>${selectedArchetypes.join(', ')}</strong>`;
    }
    
    return title;
}

/**
 * Cria seção de arquétipo
 */
function createArchetypeSection(archetype, score, index) {
    const description = archetypeDescriptions[archetype];
    const percentage = Math.round((score / 10) * 100);
    
    const section = document.createElement('div');
    section.className = 'archetype-section';
    section.style.animationDelay = `${index * 0.2}s`;
    
    const intensityText = getIntensityText(index);
    const intensityClass = index === 0 ? 'dominant' : index === 1 ? 'secondary' : 'tertiary';
    
    section.innerHTML = `
        <h3>
            ${description.emoji} ${archetype}${intensityText}
            <span class="percentage ${intensityClass}">${percentage}% de afinidade</span>
        </h3>
        <p class="archetype-summary">${description.resumo}</p>
        
        <div class="characteristics-section">
            <h4>💫 Suas características:</h4>
            <ul class="characteristics-list">
                ${description.caracteristicas.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="traits-section">
            <div class="strengths">
                <h4>🌟 Pontos fortes:</h4>
                <div class="traits-tags">
                    ${description.fortalezas.map(trait => `<span class="trait-tag strength">${trait}</span>`).join('')}
                </div>
            </div>
            
            <div class="challenges">
                <h4>⚠️ Desafios a observar:</h4>
                <div class="traits-tags">
                    ${description.desafios.map(trait => `<span class="trait-tag challenge">${trait}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    return section;
}

/**
 * Retorna texto de intensidade
 */
function getIntensityText(index) {
    const texts = [' (Dominante)', ' (Secundário)', ' (Terciário)'];
    return texts[index] || '';
}

// =============================================================================
// FUNCIONALIDADES EXTRAS
// =============================================================================

/**
 * Gera e baixa PDF com os resultados
 */
function downloadPDF() {
    try {
        // Verifica se jsPDF está disponível
        if (typeof window.jsPDF === 'undefined') {
            alert('Erro ao carregar gerador de PDF. Tente novamente.');
            return;
        }

        // Obtém dados dos resultados
        const resultTitle = document.getElementById('result-title').textContent;
        const archetypeSections = document.querySelectorAll('.archetype-section');
        
        if (archetypeSections.length === 0) {
            alert('Complete o teste primeiro para gerar o PDF!');
            return;
        }

        // Cria novo documento PDF
        const { jsPDF } = window.jsPDF;
        const doc = new jsPDF();
        
        // Configurações
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 20;
        const contentWidth = pageWidth - (margin * 2);
        let currentY = margin;

        // Cores do projeto (convertidas para RGB)
        const colors = {
            primary: [14, 23, 32],      // #0e1720
            gold: [202, 180, 133],      // #cab485
            white: [255, 255, 255],     // #ffffff
            lightGray: [245, 245, 245]  // #f5f5f5
        };

        // Função para adicionar nova página se necessário
        function checkNewPage(requiredHeight) {
            if (currentY + requiredHeight > pageHeight - margin) {
                doc.addPage();
                currentY = margin;
                return true;
            }
            return false;
        }

        // Função para quebrar texto em linhas
        function splitTextToLines(text, maxWidth, fontSize) {
            doc.setFontSize(fontSize);
            return doc.splitTextToSize(text, maxWidth);
        }

        // CABEÇALHO
        // Fundo azul do cabeçalho
        doc.setFillColor(...colors.primary);
        doc.rect(0, 0, pageWidth, 60, 'F');

        // Título principal
        doc.setTextColor(...colors.gold);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('PESQUISA DE ARQUÉTIPOS', pageWidth / 2, 25, { align: 'center' });

        // Subtítulo
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('Baseado nos 12 Arquétipos de Carl Jung', pageWidth / 2, 35, { align: 'center' });

        // Data
        const currentDate = new Date().toLocaleDateString('pt-BR');
        doc.setFontSize(10);
        doc.text(`Relatório gerado em: ${currentDate}`, pageWidth / 2, 45, { align: 'center' });

        currentY = 80;

        // RESULTADO PRINCIPAL
        checkNewPage(30);
        
        // Título do resultado
        const cleanTitle = resultTitle.replace(/[🎯⚖️🌟]/g, '').trim();
        doc.setTextColor(...colors.primary);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        
        const titleLines = splitTextToLines(cleanTitle, contentWidth, 18);
        titleLines.forEach(line => {
            doc.text(line, pageWidth / 2, currentY, { align: 'center' });
            currentY += 8;
        });

        currentY += 10;

        // ARQUÉTIPOS DETALHADOS
        archetypeSections.forEach((section, index) => {
            const archetypeTitle = section.querySelector('h3').textContent;
            const archetypeSummary = section.querySelector('p').textContent;
            const characteristics = section.querySelectorAll('li');

            // Verifica se precisa de nova página
            checkNewPage(80);

            // Fundo colorido para cada arquétipo
            doc.setFillColor(...colors.lightGray);
            doc.rect(margin, currentY - 5, contentWidth, 45, 'F');

            // Título do arquétipo
            doc.setTextColor(...colors.primary);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            
            const archTitleClean = archetypeTitle.replace(/[🌟🤝⚔️💝🧭💕🎨🏴‍☠️🦉👑🔮🎭]/g, '').trim();
            doc.text(archTitleClean, margin + 5, currentY + 5);

            currentY += 15;

            // Resumo
            doc.setTextColor(...colors.primary);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            
            const summaryLines = splitTextToLines(archetypeSummary, contentWidth - 10, 11);
            summaryLines.forEach(line => {
                doc.text(line, margin + 5, currentY);
                currentY += 5;
            });

            currentY += 10;

            // Características
            doc.setTextColor(...colors.gold);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Suas características:', margin + 5, currentY);
            currentY += 8;

            doc.setTextColor(...colors.primary);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');

            characteristics.forEach(char => {
                checkNewPage(15);
                const charText = char.textContent.trim();
                const charLines = splitTextToLines(`• ${charText}`, contentWidth - 15, 10);
                
                charLines.forEach(line => {
                    doc.text(line, margin + 10, currentY);
                    currentY += 4;
                });
                currentY += 2;
            });

            currentY += 15;
        });

        // RODAPÉ INFORMATIVO
        checkNewPage(40);
        
        // Linha separadora
        doc.setDrawColor(...colors.gold);
        doc.setLineWidth(0.5);
        doc.line(margin, currentY, pageWidth - margin, currentY);
        currentY += 10;

        // Informações sobre os arquétipos
        doc.setTextColor(...colors.primary);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Sobre os Arquétipos de Carl Jung:', margin, currentY);
        currentY += 6;

        doc.setFont('helvetica', 'normal');
        const infoText = 'Os arquétipos são padrões universais de comportamento que residem no inconsciente coletivo. ' +
                        'Carl Jung identificou 12 arquétipos principais que representam motivações humanas básicas, ' +
                        'cada um com seu próprio conjunto de valores, significados e traços de personalidade.';
        
        const infoLines = splitTextToLines(infoText, contentWidth, 10);
        infoLines.forEach(line => {
            doc.text(line, margin, currentY);
            currentY += 4;
        });

        currentY += 8;

        // Disclaimer
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        const disclaimer = 'Este relatório é baseado em autoavaliação e deve ser usado apenas para fins de autoconhecimento e desenvolvimento pessoal.';
        const disclaimerLines = splitTextToLines(disclaimer, contentWidth, 9);
        disclaimerLines.forEach(line => {
            doc.text(line, margin, currentY);
            currentY += 3.5;
        });

        // RODAPÉ FINAL
        const finalY = pageHeight - 15;
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...colors.gold);
        doc.text('Pesquisa de Arquétipos - Baseado nos 12 Arquétipos de Carl Jung', pageWidth / 2, finalY, { align: 'center' });

        // Gera nome do arquivo
        const fileName = `Arquetipos_${currentDate.replace(/\//g, '-')}.pdf`;

        // Salva o PDF
        doc.save(fileName);

        // Analytics
        trackEvent('pdf_downloaded', {
            archetypes_count: archetypeSections.length,
            file_name: fileName
        });

        // Feedback visual
        showPDFSuccess();

    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        alert('Erro ao gerar PDF. Tente novamente em alguns segundos.');
        
        trackEvent('pdf_error', {
            error_message: error.message
        });
    }
}

/**
 * Mostra feedback de sucesso do PDF
 */
function showPDFSuccess() {
    const button = document.querySelector('.pdf-btn');
    const originalText = button.querySelector('span').textContent;
    const originalIcon = button.querySelectorAll('span')[1].textContent;
    
    button.querySelector('span').textContent = 'PDF Baixado!';
    button.querySelectorAll('span')[1].textContent = '✅';
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #219a52 100%)';
    
    setTimeout(() => {
        button.querySelector('span').textContent = originalText;
        button.querySelectorAll('span')[1].textContent = originalIcon;
        button.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
    }, 3000);
}
function shareResults() {
    const resultTitle = document.getElementById('result-title').textContent;
    const shareText = `Acabei de descobrir meus arquétipos de personalidade! ${resultTitle}`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Pesquisa de Arquétipos',
            text: shareText,
            url: shareUrl
        });
    } else {
        // Fallback para dispositivos sem Web Share API
        const textarea = document.createElement('textarea');
        textarea.value = `${shareText}\n\nFaça seu teste também: ${shareUrl}`;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        alert('Link copiado para a área de transferência!');
    }
    
    trackEvent('results_shared');
}

/**
 * Reinicia o teste
 */
function restartTest() {
    if (confirm('Tem certeza que deseja refazer o teste? Todas as respostas serão perdidas.')) {
        // Reset variáveis
        responses = {};
        currentProgress = 0;
        testCompleted = false;
        
        // Reset interface
        document.getElementById('result-container').style.display = 'none';
        document.getElementById('calculate-btn').disabled = true;
        document.getElementById('calculate-btn').innerHTML = 
            '<span class="btn-text">Responda todas as perguntas</span><span class="btn-icon">🧠</span>';
        
        // Reset sliders
        questions.forEach((_, index) => {
            const slider = document.getElementById(`question-${index}`);
            const valueDisplay = document.getElementById(`value-${index}`);
            
            slider.value = 3;
            valueDisplay.textContent = 3;
            responses[index] = 3;
        });
        
        // Reset progresso
        updateProgress();
        updateCalculateButton();
        
        // Scroll para o topo
        scrollToTop();
        
        trackEvent('test_restarted');
    }
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Debounce function para performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Gerencia mudanças de tamanho da tela
 */
function handleResize() {
    // Ajusta alturas se necessário
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

/**
 * Gerencia mudanças de visibilidade
 */
function handleVisibilityChange() {
    if (document.hidden) {
        trackEvent('page_hidden');
    } else {
        trackEvent('page_visible');
    }
}

/**
 * Gerencia navegação por teclado
 */
function handleKeyDown(event) {
    // Esc para scroll to top
    if (event.key === 'Escape') {
        scrollToTop();
    }
    
    // Enter para calcular resultado (se habilitado)
    if (event.key === 'Enter' && !document.getElementById('calculate-btn').disabled) {
        calculateResult();
    }
}

/**
 * Sistema de analytics simples
 */
function trackEvent(eventName, data = {}) {
    const eventData = {
        event: eventName,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        user_agent: navigator.userAgent,
        ...data
    };
    
    // Console log para desenvolvimento
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('📊 Event:', eventData);
    }
    
    // Aqui você pode integrar com Google Analytics, Mixpanel, etc.
    // gtag('event', eventName, data);
}

// =============================================================================
// INICIALIZAÇÃO FINAL
// =============================================================================

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Previne zoom no mobile em inputs
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Adiciona classe para dispositivos touch
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Log de inicialização
console.log('🧠 Pesquisa de Arquétipos v1.0.0 iniciada');
console.log('📚 Baseado nos 12 Arquétipos de Carl Jung');
console.log('📄 Funcionalidade PDF habilitada');

// Verifica se jsPDF carregou
if (typeof window.jsPDF !== 'undefined') {
    console.log('✅ Biblioteca jsPDF carregada com sucesso');
} else {
    console.warn('⚠️ Aguardando carregamento da biblioteca jsPDF...');
}
