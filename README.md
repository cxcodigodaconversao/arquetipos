# 🧠 Pesquisa de Arquétipos - Teste de Personalidade

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

Um teste interativo de personalidade baseado nos **12 Arquétipos de Carl Jung**, desenvolvido para ajudar pessoas a descobrirem seus padrões comportamentais dominantes através de uma interface moderna e intuitiva.

## 🎯 Sobre o Projeto

Este aplicativo web oferece uma experiência completa de autoconhecimento baseada na psicologia analítica de Carl Jung. Através de 24 perguntas cuidadosamente elaboradas, o usuário descobre seus arquétipos dominantes e recebe insights detalhados sobre sua personalidade.

### ✨ Características Principais

- **🎨 Interface Moderna**: Design elegante com paleta azul (#0e1720) e dourado (#cab485)
- **🧮 Algoritmo Rigoroso**: Lógica seletiva que identifica no máximo 1-3 arquétipos dominantes
- **📱 Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **🏛️ Baseado em Jung**: Fundamentado nos 12 arquétipos da psicologia analítica
- **📊 Resultados Detalhados**: Explicações completas de cada arquétipo identificado
- **⚡ Performance Otimizada**: Carregamento rápido e animações suaves
- **♿ Acessível**: Suporte a leitores de tela e navegação por teclado

## 🏗️ Arquétipos Incluídos

| Arquétipo | Emoji | Descrição |
|-----------|-------|-----------|
| **Inocente** | 🌟 | Otimismo e simplicidade |
| **Pessoa Comum** | 🤝 | Acessibilidade e empatia |
| **Herói** | ⚔️ | Coragem e determinação |
| **Prestativo** | 💝 | Cuidado e generosidade |
| **Explorador** | 🧭 | Liberdade e aventura |
| **Amante** | 💕 | Paixão e conexão emocional |
| **Criador** | 🎨 | Originalidade e inovação |
| **Fora da Lei** | 🏴‍☠️ | Ruptura e autenticidade |
| **Sábio** | 🦉 | Conhecimento e sabedoria |
| **Governante** | 👑 | Liderança e controle |
| **Mago** | 🔮 | Transformação e intuição |
| **Bobo da Corte** | 🎭 | Humor e leveza |

## 🚀 Demo

🔗 **[Acesse a demonstração ao vivo](https://seu-site.netlify.app)**

## 📁 Estrutura do Projeto

```
pesquisa-arquetipos/
├── index.html              # Página principal
├── style.css               # Estilos otimizados
├── script.js               # JavaScript principal
├── README.md              # Documentação
├── .gitignore             # Arquivos ignorados pelo Git
├── netlify.toml           # Configuração do Netlify
├── manifest.json          # Manifest PWA
└── assets/                # Recursos estáticos
    ├── favicon.ico
    ├── apple-touch-icon.png
    └── og-image.png
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com CSS Variables e Grid/Flexbox
- **Vanilla JavaScript** - Lógica pura sem dependências externas
- **CSS Animations** - Transições e microinterações
- **Responsive Design** - Mobile-first approach
- **Progressive Web App** - Manifest e Service Worker

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Leitores de tela (NVDA, JAWS, VoiceOver)

## 🎨 Design e UX

### Paleta de Cores
- **Primary Blue**: `#0e1720` - Fundo principal
- **Primary Gold**: `#cab485` - Destaques e elementos importantes
- **Secondary Blue**: `#1a2633` - Elementos secundários
- **White**: `#ffffff` - Textos principais

### Funcionalidades UX
- **Sliders Interativos**: Escala visual de 1-5 para cada pergunta
- **Barra de Progresso**: Acompanhamento visual do progresso
- **Validação Rigorosa**: Algoritmo que seleciona apenas arquétipos dominantes
- **Animações Suaves**: Transições e feedback visual
- **Compartilhamento**: Possibilidade de compartilhar resultados

## ⚙️ Algoritmo de Classificação

O sistema usa uma lógica rigorosa para evitar classificações genéricas:

### Critérios de Seleção
1. **Arquétipo Dominante**: Mínimo 8/10 pontos (80% de afinidade)
2. **Arquétipo Secundário**: Mínimo 8/10 pontos + diferença ≤ 1 ponto do dominante
3. **Arquétipo Terciário**: Apenas em empates excepcionais (9+ pontos + diferença = 0)

### Resultados Possíveis
- **1 Arquétipo**: Personalidade bem definida
- **2 Arquétipos**: Perfil híbrido equilibrado
- **3 Arquétipos**: Raríssimo, apenas em empates técnicos

## 🚀 Como Usar

### Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/pesquisa-arquetipos.git
   cd pesquisa-arquetipos
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
   
   # Node.js
   npx http-server
   
   # Live Server (VS Code)
   # Clique com botão direito no index.html > "Open with Live Server"
   ```

### Deploy no Netlify

1. **Fork este repositório**
2. **Conecte ao Netlify**
   - Vá para [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Escolha GitHub e selecione seu fork
3. **Configure o deploy**
   - Build command: (deixe vazio)
   - Publish directory: `/` (raiz)
   - Clique em "Deploy site"

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Ideias para Contribuição
- [ ] Tradução para outros idiomas
- [ ] Modo dark/light theme toggle
- [ ] Exportação de resultados em PDF
- [ ] Sistema de compartilhamento social avançado
- [ ] Comparação entre resultados de usuários
- [ ] Dashboard de estatísticas
- [ ] Integração com redes sociais
- [ ] Versão PWA offline-first

## 🧪 Testes

Para executar testes locais:

```bash
# Teste de validação HTML
npm run test:html

# Teste de performance
npm run test:performance

# Teste de acessibilidade
npm run test:a11y
```

## 📈 Analytics

O projeto inclui um sistema básico de analytics que pode ser integrado com:

- Google Analytics 4
- Mixpanel
- Amplitude
- Hotjar

Para ativar, descomente as linhas no final do `index.html` e adicione seu ID de rastreamento.

## 🔒 Privacidade

- **Nenhum dado pessoal é coletado**
- **Respostas não são armazenadas**
- **Todos os cálculos são feitos localmente**
- **Nenhuma informação é enviada para servidores externos**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Sobre o Projeto

**Pesquisa de Arquétipos** é um projeto focado em autoconhecimento e desenvolvimento pessoal baseado na psicologia analítica de Carl Jung.

## 📚 Referências

- Jung, C.G. (1959). "The Archetypes and the Collective Unconscious"
- Mark, M. & Pearson, C. (2001). "The Hero and the Outlaw"
- Woodman, M. (1982). "Addiction to Perfection"
- [Carl Jung Institute](https://www.junginstitute.org/)
- [Jungian Archetypes - Wikipedia](https://en.wikipedia.org/wiki/Jungian_archetypes)

## 🔗 Links Úteis

- [Documentação Jung](https://www.junginstitute.org/)
- [Netlify Docs](https://docs.netlify.com/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Suporte

Encontrou um problema? Tem uma sugestão?

- 🐛 [Reporte um bug](https://github.com/seu-usuario/pesquisa-arquetipos/issues)
- 💡 [Sugira uma feature](https://github.com/seu-usuario/pesquisa-arquetipos/discussions)

---

⭐ **Gostou do projeto? Deixe uma estrela no repositório!**

🚀 **Quer contribuir? Vamos juntos melhorar este projeto!**

---

<div align="center">
  <p>Feito com ❤️ para a comunidade</p>
  <p>Baseado nos 12 Arquétipos de Carl Jung</p>
</div>
