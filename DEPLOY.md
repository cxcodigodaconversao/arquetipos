# 🚀 Instruções de Deploy - Pesquisa de Arquétipos

Este guia explica como fazer o deploy do projeto no GitHub e Netlify.

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Netlify
- Git instalado localmente
- Editor de código (VS Code recomendado)

## 📁 Ordem de Upload dos Arquivos

Faça o upload dos arquivos na seguinte ordem:

### 1. Arquivos Principais
```
1. index.html
2. style.css
3. script.js
4. README.md
```

### 2. Arquivos de Configuração
```
5. .gitignore
6. netlify.toml
7. manifest.json
8. LICENSE
```

### 3. Arquivos PWA e SEO
```
9. sw.js
10. robots.txt
11. sitemap.xml
12. DEPLOY.md (este arquivo)
```

### 4. Pasta Assets
```
13. assets/
    ├── favicon.ico
    ├── apple-touch-icon.png
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    ├── icon-192x192.png
    ├── icon-512x512.png
    └── og-image.png
```

## 🔧 Configuração no GitHub

### Passo 1: Criar Repositório
1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome: `pesquisa-arquetipos`
4. Descrição: `Teste de personalidade baseado nos 12 arquétipos de Carl Jung`
5. Público ✅
6. Add README file ❌ (já temos)
7. Clique em "Create repository"

### Passo 2: Subir Arquivos
#### Opção A: Via Interface Web
1. Arraste os arquivos para o repositório
2. Commit message: "Initial commit - Pesquisa de Arquétipos"
3. Clique em "Commit changes"

#### Opção B: Via Git Local
```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/pesquisa-arquetipos.git
cd pesquisa-arquetipos

# Adicione os arquivos
# (copie todos os arquivos para a pasta)

# Commit e push
git add .
git commit -m "Initial commit - Pesquisa de Arquétipos"
git push origin main
```

## 🌐 Deploy no Netlify

### Passo 1: Conectar ao GitHub
1. Acesse [Netlify](https://netlify.com)
2. Clique em "New site from Git"
3. Escolha "GitHub"
4. Autorize o Netlify
5. Selecione o repositório `pesquisa-arquetipos`

### Passo 2: Configurar Deploy
```
Branch to deploy: main
Build command: (deixe vazio)
Publish directory: / (raiz)
```

### Passo 3: Configurações Avançadas
1. Clique em "Show advanced"
2. Environment variables: (deixe vazio por enquanto)
3. Clique em "Deploy site"

### Passo 4: Personalizar Domínio
1. Vá para "Domain settings"
2. Clique em "Change site name"
3. Digite: `pesquisa-arquetipos` (ou nome disponível)
4. Salve

## 📊 Configurações Pós-Deploy

### 1. Verificar Funcionamento
- [ ] Site carrega corretamente
- [ ] Teste funciona
- [ ] Responsividade OK
- [ ] PWA funciona (manifesto)
- [ ] Service Worker ativo

### 2. Configurar Analytics (Opcional)
```javascript
// No index.html, descomente e configure:
gtag('config', 'GA_MEASUREMENT_ID');
```

### 3. Configurar Domínio Personalizado (Opcional)
1. Compre um domínio
2. No Netlify: Site settings > Domain management
3. Adicione o domínio
4. Configure DNS conforme instruções

## 🔍 Otimizações SEO

### 1. Verificar Meta Tags
- [ ] Title único
- [ ] Description relevante
- [ ] Open Graph configurado
- [ ] Twitter Cards configurado

### 2. Configurar Google Search Console
1. Acesse [Google Search Console](https://search.google.com/search-console/)
2. Adicione sua propriedade
3. Verifique via DNS ou HTML
4. Envie o sitemap: `https://seu-site.netlify.app/sitemap.xml`

### 3. Testar Performance
Use estas ferramentas:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🔒 Configurações de Segurança

### 1. Headers de Segurança
O arquivo `netlify.toml` já inclui:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Content-Security-Policy

### 2. HTTPS
- Automático no Netlify
- Certificado SSL/TLS gratuito

## 📱 Configuração PWA

### 1. Verificar Manifest
- [ ] manifest.json válido
- [ ] Ícones em todas as resoluções
- [ ] Cores do tema corretas

### 2. Testar Service Worker
```javascript
// No DevTools > Application
// Verifique se o SW está registrado
```

## 🔄 Atualizações Futuras

### Deploy Automático
Qualquer push para a branch `main` fará deploy automático.

### Branches de Teste
```bash
# Criar branch de desenvolvimento
git checkout -b develop
# Fazer alterações
git add .
git commit -m "Feature: nova funcionalidade"
git push origin develop
```

### Preview Deploys
- Netlify cria preview automático para PRs
- URL única para testes antes do merge

## 🐛 Troubleshooting

### Site não carrega
1. Verifique se todos os arquivos foram enviados
2. Confirme se o `index.html` está na raiz
3. Veja os logs no Netlify

### PWA não funciona
1. Verifique se o manifest.json está acessível
2. Confirme se o Service Worker está registrado
3. Teste em modo incógnito

### CSS/JS não carrega
1. Verifique os caminhos relativos
2. Confirme se não há erros de sintaxe
3. Veja o console do navegador

## 📋 Checklist Final

### Antes do Deploy
- [ ] Todos os arquivos enviados
- [ ] Paths corretos
- [ ] Sem erros de sintaxe
- [ ] Imagens otimizadas
- [ ] Meta tags configuradas

### Após o Deploy
- [ ] Site acessível
- [ ] Funcionalidade testada
- [ ] Mobile responsivo
- [ ] PWA funcionando
- [ ] SEO configurado
- [ ] Performance satisfatória

## 🎉 Pronto!

Seu site está online em:
`https://pesquisa-arquetipos.netlify.app`

---

## 📞 Suporte

- **Netlify Docs**: https://docs.netlify.com/
- **GitHub Docs**: https://docs.github.com/
- **Web.dev**: https://web.dev/
- **MDN**: https://developer.mozilla.org/

## 📝 Notas Importantes

1. **Backup**: Sempre mantenha backup dos arquivos
2. **Versionamento**: Use git para controle de versão
3. **Testes**: Teste em diferentes dispositivos e navegadores
4. **Monitoramento**: Acompanhe métricas de performance
5. **Atualizações**: Mantenha dependências atualizadas

---

✅ **Deploy realizado com sucesso!** Seu teste de arquétipos está online!
