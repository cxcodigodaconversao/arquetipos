// Variável global para armazenar as respostas
let responses = {};

// Inicializa o aplicativo quando a página carrega
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * Inicializa o aplicativo criando todas as perguntas
 */
function initializeApp() {
    const container = document.getElementById('questions-container');
    
    questions.forEach((question, index) => {
        const questionDiv = createQuestionElement(question, index);
        container.appendChild(questionDiv);
        responses[index] = 3; // valor inicial padrão
    });
}

/**
 * Cria um elemento de pergunta com slider
 * @param {Array} question - Array com pergunta e arquétipo
 * @param {number} index - Índice da pergunta
 * @returns {HTMLElement} - Elemento da pergunta
 */
function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-container';
    
    questionDiv.innerHTML = `
        <div class="question-text">${question[0]}</div>
        <div class="slider-container">
            <span style="color: var(--primary-gold); font-weight: 500;">1</span>
            <input type="range" min="1" max="5" value="3" class="slider" id="question-${index}" 
                   oninput="updateSliderValue(${index}, this.value)">
            <span style="color: var(--primary-gold); font-weight: 500;">5</span>
            <div class="slider-value" id="value-${index}">3</div>
        </div>
        <div class="slider-labels">
            <span>Discordo totalmente</span>
            <span>Concordo totalmente</span>
        </div>
    `;
    
    return questionDiv;
}

/**
 * Atualiza o valor exibido do slider e armazena a resposta
 * @param {number} index - Índice da pergunta
 * @param {string} value - Valor do slider
 */
function updateSliderValue(index, value) {
    document.getElementById(`value-${index}`).textContent = value;
    responses[index] = parseInt(value);
}

/**
 * Calcula e exibe os resultados dos arquétipos
 */
function calculateResult() {
    const scores = calculateArchetypeScores();
    const selectedArchetypes = selectDominantArchetypes(scores);
    displayResults(selectedArchetypes, scores);
}

/**
 * Calcula as pontuações para cada arquétipo
 * @returns {Object} - Objeto com pontuações por arquétipo
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

    // Soma as respostas por arquétipo
    questions.forEach((question, index) => {
        const archetype = question[1];
        scores[archetype] += responses[index];
    });

    return scores;
}

/**
 * Seleciona os arquétipos dominantes com base em critérios rigorosos
 * @param {Object} scores - Pontuações dos arquétipos
 * @returns {Array} - Array com arquétipos selecionados
 */
function selectDominantArchetypes(scores) {
    // Converte para array e ordena por pontuação
    const sortedArchetypes = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);

    const selectedArchetypes = [];
    const maxPossibleScore = 10; // 2 perguntas * 5 pontos máximo cada
    
    // Primeiro arquétipo: deve ter pelo menos 80% da pontuação máxima (8/10)
    const topArchetype = sortedArchetypes[0];
    if (topArchetype[1] >= 8) {
        selectedArchetypes.push(topArchetype[0]);
    }

    // Segundo arquétipo: deve ter pelo menos 8 pontos E estar próximo do primeiro
    if (sortedArchetypes.length > 1) {
        const secondArchetype = sortedArchetypes[1];
        const scoreDifference = topArchetype[1] - secondArchetype[1];
        
        // Só inclui se tiver pontuação alta (8+) E diferença pequena (máximo 1 ponto)
        if (secondArchetype[1] >= 8 && scoreDifference <= 1) {
            selectedArchetypes.push(secondArchetype[0]);
        }
    }

    // Terceiro arquétipo: APENAS em casos muito excepcionais
    if (sortedArchetypes.length > 2 && selectedArchetypes.length === 2) {
        const thirdArchetype = sortedArchetypes[2];
        const secondScore = sortedArchetypes[1][1];
        const scoreDifference = secondScore - thirdArchetype[1];
        
        // Só inclui terceiro se tiver pontuação máxima (9+) E diferença mínima
        if (thirdArchetype[1] >= 9 && scoreDifference === 0) {
            selectedArchetypes.push(thirdArchetype[0]);
        }
    }

    // Se nenhum arquétipo atingiu o critério rigoroso, pega apenas o maior
    if (selectedArchetypes.length === 0) {
        selectedArchetypes.push(topArchetype[0]);
    }

    return selectedArchetypes;
}

/**
 * Exibe os resultados na interface
 * @param {Array} selectedArchetypes - Arquétipos selecionados
 * @param {Object} scores - Pontuações dos arquétipos
 */
function displayResults(selectedArchetypes, scores) {
    const resultContainer = document.getElementById('result-container');
    const resultTitle = document.getElementById('result-title');
    const scoresList = document.getElementById('scores-list');

    // Define o título baseado na quantidade de arquétipos
    resultTitle.innerHTML = generateResultTitle(selectedArchetypes);

    // Limpa resultados anteriores
    scoresList.innerHTML = '';

    // Cria e exibe seções para cada arquétipo
    selectedArchetypes.forEach((archetype, index) => {
        const archetypeSection = createArchetypeSection(archetype, scores[archetype], index);
        scoresList.appendChild(archetypeSection);
    });

    // Mostra o container de resultados com animação
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Gera o título dos resultados
 * @param {Array} selectedArchetypes - Arquétipos selecionados
 * @returns {string} - HTML do título
 */
function generateResultTitle(selectedArchetypes) {
    if (selectedArchetypes.length === 1) {
        return `<strong>Seu Arquétipo Dominante: ${selectedArchetypes[0]}</strong>`;
    } else if (selectedArchetypes.length === 2) {
        return `<strong>Seus Arquétipos Principais: ${selectedArchetypes.join(' e ')}</strong>`;
    } else {
        return `<strong>Seus Arquétipos: ${selectedArchetypes.join(', ')}</strong>`;
    }
}

/**
 * Cria uma seção de resultado para um arquétipo
 * @param {string} archetype - Nome do arquétipo
 * @param {number} score - Pontuação do arquétipo
 * @param {number} index - Índice do arquétipo (para ordenação)
 * @returns {HTMLElement} - Elemento da seção
 */
function createArchetypeSection(archetype, score, index) {
    const description = archetypeDescriptions[archetype];
    const maxPossibleScore = 10;
    const percentage = Math.round((score / maxPossibleScore) * 100);
    
    const archetypeSection = document.createElement('div');
    archetypeSection.className = 'archetype-section';

    const intensityText = getIntensityText(index);

    archetypeSection.innerHTML = `
        <h3>${archetype}${intensityText} - ${percentage}% de afinidade</h3>
        <p>${description.resumo}</p>
        <div>
            <h4>Suas características:</h4>
            <ul>
                ${description.caracteristicas.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return archetypeSection;
}

/**
 * Retorna o texto de intensidade baseado na posição do arquétipo
 * @param {number} index - Índice do arquétipo
 * @returns {string} - Texto de intensidade
 */
function getIntensityText(index) {
    switch(index) {
        case 0: return ' (Dominante)';
        case 1: return ' (Secundário)';
        case 2: return ' (Terciário)';
        default: return '';
    }
}

/**
 * Função utilitária para debug (remover em produção)
 */
function debugScores() {
    const scores = calculateArchetypeScores();
    console.table(scores);
    return scores;
}
