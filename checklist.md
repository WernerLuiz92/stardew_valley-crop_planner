# ✅ Checklist do Projeto - 🌾 Stardew Valley Crop Planner

Planejador de cultivos e produtos artesanais para Stardew Valley, atualizado para a versão 1.6. Desenvolvido com Vue 3, Vite, Tailwind CSS, TypeScript, Pinia, Vue Router e Vue I18n.
## 🧱 1. Infraestrutura do Projeto
- [ ] Criar projeto com Vite + Vue + TypeScript
- [ ] Instalar dependências principais:
    - [ ] vue-router
    - [ ] pinia
    - [ ] vue-i18n
    - [ ] tailwindcss, postcss, autoprefixer
- [ ] Inicializar Git e conectar ao GitHub
    - [x] Criar repositório no GitHub
    - [x] Criar um readme.md com a descrição do projeto e o plano de desenvolvimento
    - [ ] Subir o projeto e depois no GitHub Pages

## ⚙️ 2. Configurações do Projeto
- [ ] Configurar Tailwind CSS
    - [ ] Criar assets/main.css
    - [ ] Importar no main.ts
- [ ] Configurar vue-router
    - [ ] Criar arquivo src/router/index.ts
    - [ ] Criar rota inicial /
- [ ] Configurar Pinia
    - [ ] Criar stores/user.ts de exemplo
- [ ] Configurar i18n
    - [ ] Criar locales/index.ts com mensagens em pt e en
    - [ ] Testar se funciona com $t

## 🔄 3. Atualização dos Dados para a Versão 1.6
- [ ] Levantar todas as novas plantações da versão 1.6
- [ ] Verificar novos eventos sazonais (festivais, feriados)
- [ ] Atualizar os dados base de:
    - [ ] Crops (nome, estação, dias de crescimento, valor, etc)
    - [ ] Artefatos, NPCs relevantes e eventos que impactam cultivo
    - [ ] Itens artesanais e novos processos possíveis
- [ ] Criar arquivo base (ex: data/crops.json, data/artisan.json) com os dados atualizados

## 🧩 4. Estrutura de Componentes
### Diretórios:

- [ ] src/components/ui/ → componentes reutilizáveis (Card, Botão, etc)
- [ ] src/components/layout/ → ex: LayoutDefault.vue
- [ ] src/views/ → telas como HomeView.vue, PlannerView.vue

### Componentes base:

- [ ] Card.vue
- [ ] LayoutDefault.vue com navbar
- [ ] BaseButton.vue (usando Tailwind com variantes)
- [ ] SeasonBadge.vue (exibe ícones e cores por estação)

## 🌽 5. Funcionalidades do Planner
#### A. Cadastro e visualização de cultivos
- [ ] Criar store crops com Pinia
- [ ] Adicionar botão “Novo cultivo”
- [ ] Formulário com:
    - [ ] Nome da planta
    - [ ] Estação
    - [ ] Duração
    - [ ] Preço de venda

- [ ] Exibir cultivos em grid com Card.vue

#### B. Filtro por estação
- [ ] Criar seletor com botões de estação (Primavera, Verão, etc)
- [ ] Filtrar os cards com base na seleção

#### C. Cálculo de lucro
- [ ] Adicionar lógica: (Preço de venda - Custo) * Quantidade
- [ ] Mostrar o lucro estimado no card

## 🍷 6. Produtos Artesanais (nova)
#### A. Cadastro de produto artesanal
- [ ] Tipo do maquina (ex: vinho, geléia, queijo)
- [ ] Ingrediente usado (ex: fruta específica)
- [ ] Data de início do processo
- [ ] Quantidade

#### B. Cálculo e previsão de término
- [ ] Definir tempo de produção por tipo (ex: vinho = 7 dias)
- [ ] Calcular e mostrar a data de conclusão
- [ ] Mostrar lista ordenada por data de prontidão

#### C. Exibição visual (calendário?)
- [ ] Criar um componente tipo “linha do tempo” ou tabela
- [ ] Cores e ícones para diferenciar os tipos (ex: barril = vinho)

## 🌍 7. Internacionalização
- [ ] Traduzir todos os textos (usar $t)
- [ ] Criar seletor de idioma (dropdown simples)
- [ ] PT-BR
- [ ] EN-US
- [ ] Ver outros idiomas mais populares

## 🎨 8. Estilo e Design
- [ ] Tailwind CSS configurado
- [ ] Adicionar ícones do lucide-vue
- [ ] Responsividade com grid e flex
- [ ] Espaçamentos, cores temáticas do Stardew (verde, amarelo, marrom)

## 📦 9. Finalizações e Deploy
- [ ] Revisar todas as traduções
- [ ] Testar funcionalidade completa
- [ ] Comitar com mensagens organizadas
- [ ] Publicar no GitHub Pages (opcional)
- [ ] Criar README.md bacana com imagem do projeto

## ☕ 10. Extras (se sobrar tempo)
- [ ] Tema claro/escuro (modo Stardew “noite” 🌙)
- [ ] Exportar cultivos em JSON
- [ ] Persistência com localStorage
- [ ] Componente de calendário visual

