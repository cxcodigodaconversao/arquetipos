<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesquisa de Arquétipos</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #0e1720;
            line-height: 1.6;
            color: white;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding: 20px;
            background: #0e1720;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(202, 180, 133, 0.2);
            border: 2px solid #cab485;
        }
        
        h1 {
            color: #cab485;
            margin-bottom: 10px;
            font-size: 2.5em;
            font-weight: bold;
        }
        
        .subtitle {
            color: white;
            font-size: 1.1em;
            margin-bottom: 20px;
            opacity: 0.9;
        }
        
        .question-container {
            background: #0e1720;
            padding: 20px;
            margin: 15px 0;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            border: 1px solid #cab485;
        }
        
        .question-text {
            font-weight: 500;
            margin-bottom: 15px;
            color: white;
            font-size: 1.05em;
        }
        
        .slider-container {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .slider {
            flex: 1;
            height: 8px;
            background: #1a2633;
            border-radius: 4px;
            outline: none;
            -webkit-appearance: none;
            cursor: pointer;
        }
        
        .slider::-webkit-slider-track {
            height: 8px;
            background: #1a2633;
            border-radius: 4px;
        }
        
        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            background: #cab485;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 3px 8px rgba(202, 180, 133, 0.4);
            margin-top: -8px;
        }
        
        .slider::-moz-range-track {
            height: 8px;
            background: #1a2633;
            border-radius: 4px;
            border: none;
        }
        
        .slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: #cab485;
            border-radius: 50%;
            cursor: pointer;
            border: none;
            box-shadow: 0 3px 8px rgba(202, 180, 133, 0.4);
        }
        
        .slider:focus {
            outline: none;
        }
        
        .slider-value {
            min-width: 30px;
            text-align: center;
            font-weight: bold;
            color: #cab485;
            font-size: 1.2em;
        }
        
        .slider-labels {
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
            font-size: 0.9em;
            color: rgba(255, 255, 255, 0.7);
        }
        
        .calculate-btn {
            background: #cab485;
            color: #0e1720;
            border: none;
            padding: 15px 30px;
            font-size: 1.1em;
            border-radius: 8px;
            cursor: pointer;
            margin: 30px auto;
            display: block;
            font-weight: bold;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(202, 180, 133, 0.3);
        }
        
        .calculate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(202, 180, 133, 0.5);
            background: #b8a373;
        }
        
        .result-container {
            background: #0e1720;
            border: 2px solid #cab485;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            display: none;
            box-shadow: 0 4px 20px rgba(202, 180, 133, 0.2);
        }
        
        .result-title {
            color: #cab485;
            font-size: 1.3em;
            font-weight: bold;
            margin-bottom: 15px;
        }
        
        .detailed-scores {
            margin-top: 20px;
        }

        .detailed-scores h3 {
            color: #cab485;
            margin-bottom: 15px;
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Pesquisa de Arquétipos</h1>
        <div class="subtitle">Responda às perguntas em uma escala de 1 (discordo totalmente) a 5 (concordo totalmente).</div>
    </div>

    <div id="questions-container"></div>

    <button class="calculate-btn" onclick="calculateResult()">Calcular Resultado</button>

    <div id="result-container" class="result-container">
        <div id="result-title" class="result-title"></div>
        <div id="detailed-scores" class="detailed-scores">
            <h3>Seus Arquétipos e Características:</h3>
            <div id="scores-list"></div>
        </div>
    </div>

    <script>
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

        // Descrições dos arquétipos baseadas no e-book de Carl Jung
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

        let responses = {};

        function initializeApp() {
            const container = document.getElementById('questions-container');
            
            questions.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-container';
                
                questionDiv.innerHTML = `
                    <div class="question-text">${question[0]}</div>
                    <div class="slider-container">
                        <span style="color: #cab485; font-weight: 500;">1</span>
                        <input type="range" min="1" max="5" value="3" class="slider" id="question-${index}" 
                               oninput="updateSliderValue(${index}, this.value)">
                        <span style="color: #cab485; font-weight: 500;">5</span>
                        <div class="slider-value" id="value-${index}">3</div>
                    </div>
                    <div class="slider-labels">
                        <span>Discordo totalmente</span>
                        <span>Concordo totalmente</span>
                    </div>
                `;
                
                container.appendChild(questionDiv);
                responses[index] = 3; // valor inicial
            });
        }

        function updateSliderValue(index, value) {
            document.getElementById(`value-${index}`).textContent = value;
            responses[index] = parseInt(value);
        }

        function calculateResult() {
            // Inicializa pontuações por arquétipo
            const scores = {};
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

            // Converte para array e ordena por pontuação
            const sortedArchetypes = Object.entries(scores)
                .sort((a, b) => b[1] - a[1]);

            // Lógica mais rigorosa para seleção de arquétipos
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

            // Exibe o resultado
            const resultContainer = document.getElementById('result-container');
            const resultTitle = document.getElementById('result-title');
            const scoresList = document.getElementById('scores-list');

            // Título baseado na quantidade de arquétipos
            if (selectedArchetypes.length === 1) {
                resultTitle.innerHTML = `<strong>Seu Arquétipo Dominante: ${selectedArchetypes[0]}</strong>`;
            } else if (selectedArchetypes.length === 2) {
                resultTitle.innerHTML = `<strong>Seus Arquétipos Principais: ${selectedArchetypes.join(' e ')}</strong>`;
            } else {
                resultTitle.innerHTML = `<strong>Seus Arquétipos: ${selectedArchetypes.join(', ')}</strong>`;
            }

            // Limpa lista anterior
            scoresList.innerHTML = '';

            // Mostra descrições detalhadas dos arquétipos identificados
            selectedArchetypes.forEach((archetype, index) => {
                const description = archetypeDescriptions[archetype];
                const score = scores[archetype];
                const percentage = Math.round((score / maxPossibleScore) * 100);
                
                const archetypeSection = document.createElement('div');
                archetypeSection.style.marginBottom = '30px';
                archetypeSection.style.padding = '20px';
                archetypeSection.style.background = '#0e1720';
                archetypeSection.style.borderRadius = '10px';
                archetypeSection.style.border = '2px solid #cab485';
                archetypeSection.style.boxShadow = '0 4px 15px rgba(202, 180, 133, 0.2)';

                const intensityText = index === 0 ? ' (Dominante)' : ' (Secundário)';

                archetypeSection.innerHTML = `
                    <h3 style="color: #cab485; margin-bottom: 15px; font-size: 1.4em;">
                        ${archetype}${intensityText} - ${percentage}% de afinidade
                    </h3>
                    <p style="font-size: 1.1em; font-weight: 500; color: white; margin-bottom: 15px; line-height: 1.5;">
                        ${description.resumo}
                    </p>
                    <div style="margin-top: 15px;">
                        <h4 style="color: #cab485; margin-bottom: 10px;">Suas características:</h4>
                        <ul style="color: white; line-height: 1.6;">
                            ${description.caracteristicas.map(item => `<li style="margin-bottom: 8px;">${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
                
                scoresList.appendChild(archetypeSection);
            });

            resultContainer.style.display = 'block';
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        }

        // Inicializa o app quando a página carrega
        document.addEventListener('DOMContentLoaded', initializeApp);
    </script>
</body>
</html>
