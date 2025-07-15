# 🧠 Pesquisa de Arquétipos - Teste de Personalidade

Um teste interativo de personalidade baseado nos **12 Arquétipos de Carl Jung**, criado para ajudar pessoas a descobrirem seus padrões comportamentais dominantes através de uma interface moderna e intuitiva.

## 🎯 Sobre o Projeto

Este aplicativo web oferece uma experiência de autoconhecimento baseada na psicologia analítica de Carl Jung. Através de 24 perguntas cuidadosamente elaboradas, o usuário descobre seus arquétipos dominantes e recebe insights detalhados sobre sua personalidade.

### ✨ Características Principais

- **Interface Moderna**: Design elegante com paleta azul (#0e1720) e dourado (#cab485)
- **Algoritmo Rigoroso**: Lógica seletiva que identifica no máximo 1-3 arquétipos dominantes
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Baseado em Jung**: Fundamentado nos 12 arquétipos da psicologia analítica
- **Resultados Detalhados**: Explicações completas de cada arquétipo identificado

## 🏗️ Arquétipos Incluídos

1. **Inocente** - Otimismo e simplicidade
2. **Pessoa Comum** - Acessibilidade e empatia
3. **Herói** - Coragem e determinação
4. **Prestativo** - Cuidado e generosidade
5. **Explorador** - Liberdade e aventura
6. **Amante** - Paixão e conexão emocional
7. **Criador** - Originalidade e inovação
8. **Fora da Lei** - Ruptura e autenticidade
9. **Sábio** - Conhecimento e sabedoria
10. **Governante** - Liderança e controle
11. **Mago** - Transformação e intuição
12. **Bobo da Corte** - Humor e leveza

## 🚀 Como Usar

### Acesso Online
- Visite: [https://seu-usuario.github.io/arquetipo-teste](https://seu-usuario.github.io/arquetipo-teste)

### Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/arquetipo-teste.git
   cd arquetipo-teste
   ```

2. **Abra o arquivo HTML**
   ```bash
   # Simplesmente abra o index.html em qualquer navegador
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

3. **Ou use um servidor local**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (se tiver o http-server instalado)
   npx http-server
   
   # Live Server (VS Code extension)
   # Clique com botão direito no index.html > "Open with Live Server"
   ```

## 📁 Estrutura do Projeto

```
arquetipo-teste/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css         # Estilos principais
│   ├── js/
│   │   ├── archetypes-data.js # Dados dos arquétipos
│   │   └── script.js          # Lógica principal
│   └── favicon.ico            # Ícone do site
├── README.md                  # Documentação
├── LICENSE                    # Licença MIT
└── .gitignore                # Arquivos ignorados
```

## 🎨 Design e UX

### Paleta de Cores
- **Primary Blue**: `#0e1720` - Fundo principal e textos de destaque
- **Primary Gold**: `#cab485` - Destaques, botões e elementos importantes
- **White**: `#ffffff` - Textos principais e contrastes

### Funcionalidades
- **Sliders Interativos**: Escala de 1-5 para cada pergunta
- **Validação Rigorosa**: Algoritmo que seleciona apenas arquétipos realmente dominantes
- **Animações Suaves**: Transições e hover effects para melhor UX
- **Feedback Visual**: Indicadores de porcentagem e intensidade

## ⚙️ Algoritmo de Classificação

O sistema usa uma lógica rigorosa para evitar classificações genéricas:

### Critérios de Seleção
1. **Arquétipo Dominante**: Mínimo 8/10 pontos (80%)
2. **Arquétipo Secundário**: Mínimo 8/10 pontos + diferença ≤ 1 ponto do dominante
3. **Arquétipo Terciário**: Apenas em empates excepcionais (9+ pontos + diferença = 0)

### Resultados Possíveis
- **1 Arquétipo**: Personalidade bem definida
- **2 Arquétipos**: Perfil híbrido equilibrado
- **3 Arquétipos**: Raríssimo, apenas em empates técnicos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com CSS Variables
- **Vanilla JavaScript**: Lógica pura sem dependências
- **Responsive Design**: Mobile-first approach

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Ideias para Contribuição
- [ ] Tradução para outros idiomas
- [ ] Modo dark/light theme toggle
- [ ] Exportação de resultados em PDF
- [ ] Sistema de compartilhamento social
- [ ] Comparação entre resultados de usuários
- [ ] Dashboard de estatísticas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Rai Mirandas**
- Especialista em Branding e Posicionamento de Alto Valor
- CEO da Agência Cronus
- +8 anos de experiência em marketing digital

## 📚 Referências

- Jung, C.G. (1959). "The Archetypes and the Collective Unconscious"
- Mark, M. & Pearson, C. (2001). "The Hero and the Outlaw"
- Woodman, M. (1982). "Addiction to Perfection"

## 🔗 Links Úteis

- [Carl Jung Institute](https://www.junginstitute.org/)
- [Documentação sobre Arquétipos](https://www.wikipedia.org/wiki/Jungian_archetypes)
- [Agência Cronus](https://cronusagencia.com.br)

---

⭐ **Gostou do projeto? Deixe uma estrela no repositório!**

🐛 **Encontrou um bug?** [Abra uma issue](https://github.com/seu-usuario/arquetipo-teste/issues)

💡 **Tem uma sugestão?** [Inicie uma discussão](https://github.com/seu-usuario/arquetipo-teste/discussions)
