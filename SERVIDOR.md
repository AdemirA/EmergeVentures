# 📖 Documentação do Servidor - EmergeVentures

## 🚀 Início Rápido

### Iniciar o Servidor Local

```bash
npm start
```

ou

```bash
node server.js
```

O servidor estará disponível em: **http://localhost:3000**

---

## 📂 Estrutura do Projeto

```
EmergeVetures/
├── server.js                    # Servidor HTTP Node.js
├── index.html                   # Página principal do portfólio
├── package.json                 # Configurações e scripts npm
├── firebase.json                # Configuração Firebase Hosting
├── Projects/
│   ├── ScientificSkinTech/
│   │   ├── Blog/
│   │   │   ├── index.html      # Blog (protegido por senha)
│   │   │   └── posts/          # Posts advertoriais
│   │   └── LocalView/
│   │       └── index.html      # Catálogo de produtos
│   ├── Petvi/
│   └── Vhita/
└── TemplateDefault/
```

---

## 🔧 Comandos Disponíveis

### Desenvolvimento Local

```bash
npm start          # Inicia servidor local na porta 3000
npm run dev        # Alias para npm start
```

### Deploy Firebase

```bash
npm run deploy              # Deploy para produção
npm run deploy:preview      # Deploy de preview/teste
firebase use --add          # Selecionar projeto Firebase
```

### Git

```bash
git add .
git commit -m "sua mensagem"
git push origin master
```

---

## 🌐 URLs do Projeto

### Local (Desenvolvimento)
- **Home:** http://localhost:3000
- **Blog:** http://localhost:3000/Projects/ScientificSkinTech/Blog/index.html
- **Produtos:** http://localhost:3000/Projects/ScientificSkinTech/LocalView/index.html

### Produção (Firebase)
- **Site:** https://emerge-ventures-kz.web.app
- **Console:** https://console.firebase.google.com/project/emerge-ventures-kz/overview

---

## 🔒 Proteção por Senha

### Blog Protegido

O blog está protegido por senha via JavaScript:

**Senha:** `Lucras#10`

**Localização:** 
- `/Projects/ScientificSkinTech/Blog/index.html`
- `/Projects/ScientificSkinTech/Blog/posts/*.html`

**Como funciona:**
- Ao acessar o blog, aparece um prompt solicitando senha
- Se a senha estiver incorreta, redireciona para a home
- A senha é validada no lado do cliente (JavaScript)

---

## 🛠️ Tecnologias

- **Node.js** - Servidor HTTP nativo (sem dependências)
- **Firebase Hosting** - Hospedagem de produção
- **HTML5/CSS3** - Frontend estático
- **JavaScript** - Proteção de senha e interatividade

---

## 📝 Manutenção

### Adicionar Nova Página

1. Crie o arquivo `.html` na pasta apropriada
2. O servidor automaticamente servirá o arquivo
3. Adicione links de navegação conforme necessário

### Alterar Senha do Blog

Edite os arquivos do blog e altere a linha:

```javascript
const PASSWORD = 'Lucras#10'; // Alterar aqui
```

### Atualizar Produção

```bash
git add .
git commit -m "descrição das alterações"
git push origin master
npm run deploy
```

---

## 🐛 Resolução de Problemas

### Porta 3000 já está em uso

```bash
# Linux/Mac - Encontrar processo
lsof -i :3000

# Matar processo
kill -9 <PID>

# Ou alterar porta no server.js
const PORT = 3001; // Mudar para outra porta
```

### Erro ao fazer deploy

```bash
# Verificar login
firebase login

# Verificar projeto
firebase use

# Tentar novamente
npm run deploy
```

### Arquivos não são servidos

- Verifique se o arquivo existe no diretório correto
- Verifique permissões de leitura
- Veja os logs do servidor no terminal

---

## 📧 Contato

**Email:** contato@kazai.com.br

---

## 📄 Licença

© 2025 Emerge Ventures. Todos os direitos reservados.
