# 🤝 Guia de Contribuição - Pesquisa de Arquétipos

Obrigado por considerar contribuir para o projeto Pesquisa de Arquétipos! Este guia ajudará você a contribuir de forma efetiva.

## 🎯 Como Contribuir

### Formas de Contribuição

1. **🐛 Reportar Bugs**
2. **💡 Sugerir Melhorias**
3. **📝 Melhorar Documentação**
4. **🔧 Implementar Features**
5. **🌍 Traduzir Conteúdo**
6. **🎨 Melhorar Design**

## 📋 Antes de Começar

### Pré-requisitos
- Git instalado
- Editor de código (VS Code recomendado)
- Conhecimento básico de HTML, CSS e JavaScript
- Conta no GitHub

### Configuração do Ambiente
```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU-USUARIO/pesquisa-arquetipos.git
cd pesquisa-arquetipos

# Adicione o repositório original como upstream
git remote add upstream https://github.com/USUARIO-ORIGINAL/pesquisa-arquetipos.git

# Instale um servidor local (opcional)
npm install -g live-server
```

## 🔄 Processo de Contribuição

### 1. Preparação
```bash
# Mantenha seu fork atualizado
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### 2. Criação de Branch
```bash
# Crie uma branch para sua contribuição
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
# ou
git checkout -b docs/melhoria-documentacao
```

### 3. Desenvolvimento
- Faça suas alterações
- Teste localmente
- Siga as convenções do projeto

### 4. Commit
```bash
# Adicione as alterações
git add .

# Commit com mensagem clara
git commit -m "feat: adiciona nova funcionalidade X"
```

### 5. Push e Pull Request
```bash
# Push para seu fork
git push origin feature/nome-da-feature

# No GitHub, crie um Pull Request
```

## 📝 Convenções do Projeto

### Estrutura de Arquivos
```
pesquisa-arquetipos/
├── index.html          # Página principal
├── style.css           # Estilos principais
├── script.js           # JavaScript principal
├── assets/            # Recursos estáticos
│   ├── icons/         # Ícones do app
│   └── images/        # Imagens
├── docs/              # Documentação
└── tests/             # Testes (se implementados)
```

### Convenções de Código

#### HTML
```html
<!-- Use indentação de 2 espaços -->
<div class="question-container">
  <h3 class="question-title">Título da Pergunta</h3>
  <div class="question-content">
    <!-- Conteúdo -->
  </div>
</div>
```

#### CSS
```css
/* Use CSS Variables */
:root {
  --primary-color: #0e1720;
  --secondary-color: #cab485;
}

/* Organize por seções */
/* ==========================================================================
   SEÇÃO - Descrição
   ========================================================================== */

/* Use classes semânticas */
.question-container {
  background: var(--primary-color);
  border-radius: 10px;
  padding: 20px;
}
```

#### JavaScript
```javascript
/**
 * Função bem documentada
 * @param {number} index - Índice da pergunta
 * @param {string} value - Valor da resposta
 */
function updateSliderValue(index, value) {
  // Use camelCase para variáveis
  const valueElement = document.getElementById(`value-${index}`);
  const numValue = parseInt(value);
  
  // Comente lógica complexa
  valueElement.textContent = numValue;
  responses[index] = numValue;
}
```

### Convenções de Commit
Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

#### Tipos de Commit
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, sem mudança lógica
- `refactor`: Refatoração de código
- `test`: Testes
- `chore`: Tarefas de manutenção

#### Exemplos
```bash
git commit -m "feat: adiciona progresso visual nas perguntas"
git commit -m "fix: corrige cálculo de porcentagem dos arquétipos"
git commit -m "docs: atualiza README com novas instruções"
git commit -m "style: melhora responsividade em mobile"
```

## 🐛 Reportando Bugs

### Antes de Reportar
1. Verifique se o bug já foi reportado
2. Teste em diferentes navegadores
3. Reproduza o comportamento

### Template de Bug Report
```markdown
**Descrição do Bug**
Descrição clara do problema.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role para baixo até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
- Device: [e.g. iPhone6]

**Contexto Adicional**
Qualquer informação adicional relevante.
```

## 💡 Sugerindo Melhorias

### Template de Feature Request
```markdown
**Sua sugestão está relacionada a um problema?**
Descrição clara do problema.

**Solução Proposta**
Descrição clara da solução desejada.

**Alternativas Consideradas**
Outras soluções consideradas.

**Contexto Adicional**
Screenshots, mockups, referências.
```

## 🎨 Diretrizes de Design

### Paleta de Cores
```css
:root {
  --primary-blue: #0e1720;    /* Fundo principal */
  --primary-gold: #cab485;    /* Destaques */
  --secondary-blue: #1a2633;  /* Elementos secundários */
  --white: #ffffff;           /* Texto principal */
  --text-light: rgba(255, 255, 255, 0.7); /* Texto secundário */
}
```

### Tipografia
- Font principal: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Tamanhos: 16px base, escala modular
- Peso: 400 (normal), 500 (medium), 700 (bold)

### Espaçamento
- Unidade base: 8px
- Múltiplos: 8px, 16px, 24px, 32px, 40px
- Border radius: 10px padrão

### Animações
- Transições suaves: `all 0.3s ease`
- Hover effects sutis
- Loading states informativos

## 🧪 Testes

### Testes Manuais
- [ ] Funcionalidade básica
- [ ] Responsividade (mobile, tablet, desktop)
- [ ] Navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Acessibilidade (teclado, screen reader)
- [ ] Performance (PageSpeed Insights)

### Testes Automatizados (Futuros)
```javascript
// Exemplo de teste unitário
describe('Cálculo de Arquétipos', () => {
  it('deve calcular corretamente o arquétipo dominante', () => {
    const scores = { 'Herói': 10, 'Sábio': 8, 'Criador': 6 };
    const result = selectDominantArchetypes(scores);
    expect(result).toEqual(['Herói']);
  });
});
```

## 📚 Recursos Úteis

### Documentação
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Ferramentas
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Wave Web Accessibility Evaluator](https://wave.webaim.org/)

### Validação
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Accessibility Checker](https://www.accessibilitychecker.org/)

## 🎯 Prioridades de Desenvolvimento

### Alta Prioridade
1. **Acessibilidade**: Melhorar suporte a leitores de tela
2. **Performance**: Otimizar carregamento e animações
3. **Tradução**: Suporte a outros idiomas
4. **Análise**: Melhorar algoritmo de classificação

### Média Prioridade
1. **Funcionalidades**: Exportar resultados em PDF
2. **Social**: Compartilhamento avançado
3. **Analytics**: Dashboard de estatísticas
4. **PWA**: Funcionalidades offline

### Baixa Prioridade
1. **Temas**: Modo claro/escuro
2. **Customização**: Personalização de cores
3. **Gamificação**: Elementos lúdicos
4. **API**: Integração com outras plataformas

## 🏆 Reconhecimento

### Contribuidores
Todos os contribuidores são reconhecidos no README.md e no arquivo CONTRIBUTORS.md.

### Tipos de Contribuição
- 🐛 Bug fixes
- 💡 Ideias e sugestões
- 📝 Documentação
- 🔧 Código
- 🌍 Tradução
- 🎨 Design

## 📞 Contato

### Dúvidas sobre Contribuição
- Abra uma [Discussion](https://github.com/usuario/pesquisa-arquetipos/discussions)

### Problemas Urgentes
- Abra uma [Issue](https://github.com/usuario/pesquisa-arquetipos/issues)
- Tag como `urgent` se for crítico

## 📜 Código de Conduta

### Nosso Compromisso
Criar um ambiente acolhedor e inclusivo para todos, independente de:
- Experiência
- Gênero
- Orientação sexual
- Deficiência
- Etnia
- Religião

### Comportamento Esperado
- Linguagem inclusiva e respeitosa
- Feedback construtivo
- Foco no que é melhor para a comunidade
- Empatia com outros membros

### Comportamento Inaceitável
- Linguagem ofensiva
- Assédio público ou privado
- Trolling ou comentários depreciativos
- Publicação de informações privadas

### Aplicação
Violações podem ser reportadas através das Issues do GitHub.

---

## 🎉 Obrigado por Contribuir!

Sua contribuição é valiosa para tornar este projeto melhor para todos. Juntos, podemos criar uma ferramenta ainda mais útil para autoconhecimento!

---

<div align="center">
  <p><strong>Feito com ❤️ pela comunidade</strong></p>
  <p>Para dúvidas, abra uma <a href="https://github.com/usuario/pesquisa-arquetipos/discussions">Discussion</a></p>
</div>
