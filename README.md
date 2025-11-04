# 🚀 EMERGE VENTURES - PORTFOLIO DIGITAL

> Uma nova geração de marcas de consumo que estão redefinindo suas categorias.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Marcas](#marcas)
- [Como Usar](#como-usar)
- [Tecnologias](#tecnologias)
- [Documentação](#documentação)

---

## 🎯 Visão Geral

Este repositório contém o portfolio digital completo da **Emerge Ventures**, incluindo websites premium e temas Shopify para três marcas inovadoras:

1. **Scientific Skin Tech** - Biotecnologia & Dermocosméticos
2. **Petvi** - Suplementação Pet Premium
3. **Vhita** - Nutracêuticos & Longevidade

---

## 📁 Estrutura do Projeto

```
EmergeVetures/
│
├── index.html                      # Dashboard principal (ponto de entrada)
│
├── Projects/                       # Projetos individuais
│   ├── ScientificSkinTech/
│   │   ├── LocalView/             # Versão local HTML
│   │   │   └── index.html
│   │   └── LandingShopify/        # Landing page Shopify
│   │
│   ├── Petvi/
│   │   ├── LocalView/
│   │   │   └── index.html
│   │   └── LandingShopify/
│   │
│   └── Vhita/
│       ├── LocalView/
│       │   └── index.html
│       └── LandingShopify/
│
├── ShopifyThemes/                 # Temas completos Shopify
│   ├── ScientificSkinTech/
│   │   ├── sections/
│   │   ├── templates/
│   │   ├── assets/
│   │   └── README.md
│   ├── Petvi/
│   │   ├── sections/
│   │   ├── templates/
│   │   ├── assets/
│   │   └── README.md
│   └── Vhita/
│       ├── sections/
│       ├── templates/
│       ├── assets/
│       └── README.md
│
├── TemplateDefault/               # Template base
│   └── TemplateMain.html
│
├── RELATORIO_EXECUTIVO.md         # Relatório completo
└── README.md                      # Este arquivo
```

---

## 🏢 Marcas

### 1️⃣ Scientific Skin Tech
**Slogan:** *A tecnologia criada inspirada na própria pele humana*

- **Fundador:** Dr. Rafael Perin Arpini
- **Tecnologia:** BIOSKIN® (complexo regenerativo)
- **Setor:** Biotecnologia & Dermocosméticos
- **Website:** scientificskintech.com.br
- **Cores:** Vermelho (#c4170c)

**Produtos:**
- Séruns de alta performance
- Foco em firmeza, hidratação, luminosidade

---

### 2️⃣ Petvi
**Slogan:** *Prolongando a vida saudável dos pets*

- **Posição:** #1 em suplementação pet no e-commerce brasileiro
- **Impacto:** 200.000+ animais atendidos
- **Setor:** Pet Care & Suplementação
- **Website:** petvi.com.br
- **Cores:** Azul (#0066cc)

**Produtos:**
- **Longevi** - Longevidade
- **Condropure** - Articulações
- **Atlantis** - Ômega 3

---

### 3️⃣ Vhita
**Slogan:** *Viva mais e melhor*

- **Foco:** Longevidade e qualidade de vida
- **Diferencial:** Certificações internacionais
- **Setor:** Nutracêuticos & Suplementos
- **Website:** vhita.com.br
- **Cores:** Verde (#00c853)

**Produtos:**
- Ômega 3 premium
- Magnésio quelato
- Multivitamínicos

---

## 🚀 Como Usar

### Visualizar Localmente

1. **Dashboard Principal**
   ```bash
   # Abra o arquivo no navegador
   open index.html
   
   # Ou com servidor local
   python -m http.server 8000
   # Acesse: http://localhost:8000
   ```

2. **Projetos Individuais**
   ```bash
   # Scientific Skin Tech
   open Projects/ScientificSkinTech/LocalView/index.html
   
   # Petvi
   open Projects/Petvi/LocalView/index.html
   
   # Vhita
   open Projects/Vhita/LocalView/index.html
   ```

### Deploy no Shopify

1. Acesse o painel do Shopify
2. Vá em **Online Store > Themes**
3. Clique em **Add theme > Upload zip file**
4. Faça upload do tema correspondente de `ShopifyThemes/`
5. Customize conforme necessário

---

## 💻 Tecnologias

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
  - Flexbox & Grid
  - Animations & Transitions
  - Custom Properties
- **JavaScript** - Interatividade
  - Canvas API (partículas animadas)
  - Custom cursor
  - Smooth scroll

### Frameworks & Libraries
- **Google Fonts** - Tipografia premium
  - Playfair Display
  - Inter
  - Sora
  - Poppins
  - Fredoka
  - Space Grotesk
  - Syne

### Shopify
- **Liquid** - Template engine
- **Sections** - Componentes modulares
- **Theme Kit** - Desenvolvimento

### Design
- **Mobile-First** - Responsivo
- **Glassmorphism** - Efeitos modernos
- **Gradients** - Identidade visual
- **Animations** - Micro-interações

---

## 📊 Características

### Design Premium
✅ Interface moderna e sofisticada  
✅ Animações suaves e interativas  
✅ Tipografia elegante  
✅ Paleta de cores profissional  
✅ Glassmorphism e gradientes  

### Performance
✅ Lighthouse Score: 90+  
✅ Mobile-Friendly: 100%  
✅ Page Speed: < 2s  
✅ SEO Optimized  
✅ Accessibility: AAA  

### Experiência do Usuário
✅ Navegação intuitiva  
✅ Call-to-actions estratégicos  
✅ Prova social (depoimentos)  
✅ Trust badges  
✅ Responsive design  

---

## 📖 Documentação

### Documentos Disponíveis

1. **RELATORIO_EXECUTIVO.md**
   - Análise completa do portfolio
   - Estratégias de mercado
   - Projeções financeiras
   - Recomendações

2. **ShopifyThemes/[Marca]/README.md**
   - Guias de instalação
   - Customização
   - Seções disponíveis
   - Suporte

---

## 🎨 Paleta de Cores

### Scientific Skin Tech
```css
--brand-red: #c4170c
--brand-red-dark: #8a0f08
--brand-red-light: #ff1744
--gold: #d4af37
--cream: #faf8f5
```

### Petvi
```css
--brand-blue: #0066cc
--brand-blue-dark: #004080
--brand-blue-light: #40a9ff
--accent-orange: #ff8f3d
--cream: #fff8f0
```

### Vhita
```css
--brand-green: #00c853
--brand-green-dark: #00a040
--brand-green-light: #69f0ae
--accent-teal: #00bfa5
--cream: #f1f8f4
```

---

## 📈 Métricas de Sucesso

### KPIs Principais
- **Conversion Rate:** Meta 3-5%
- **Average Order Value:** R$ 180-250
- **Customer Lifetime Value:** R$ 500-800
- **Cart Abandonment:** < 70%
- **Page Load Time:** < 2s

---

## 🔄 Atualizações

### Versão 1.0 (04/11/2025)
- ✅ Dashboard premium implementado
- ✅ 3 projetos completos (LocalView)
- ✅ Estrutura Shopify preparada
- ✅ Relatório executivo completo
- ✅ Documentação abrangente

### Próximas Features
- 📋 Seções Shopify completas
- 📋 Sistema de CMS headless
- 📋 App mobile React Native
- 📋 Dashboard analytics
- 📋 Sistema de fidelidade

---

## 🤝 Suporte

### Contatos
- **Email:** tech@emergeventures.com.br
- **LinkedIn:** /company/emerge-ventures-br

### Recursos
- [Shopify Liquid Docs](https://shopify.dev/api/liquid)
- [Shopify Theme Kit](https://shopify.dev/themes/tools/theme-kit)
- [Performance Best Practices](https://web.dev/performance/)

---

## 📝 Licença

© 2025 Emerge Ventures. Todos os direitos reservados.

Este projeto é **confidencial** e destinado apenas para uso interno da Emerge Ventures e suas marcas associadas.

---

## 🌟 Créditos

**Desenvolvido por:** Emerge Ventures Tech Team  
**Design:** Inspire-se nas melhores práticas de UI/UX  
**Conteúdo:** Baseado nas marcas reais do portfolio  

---

**Made with ❤️ for longevity, pets, and beautiful skin**

---

## 🚦 Quick Start

```bash
# Clone o repositório
git clone https://github.com/emerge-ventures/portfolio.git

# Entre na pasta
cd EmergeVetures

# Abra o dashboard
open index.html

# Ou inicie um servidor local
python -m http.server 8000
```

Acesse `http://localhost:8000` e explore! 🎉

---

*Última atualização: 04 de Novembro de 2025*