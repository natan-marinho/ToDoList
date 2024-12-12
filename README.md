<div align="center">

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="300" fill="#9333EA"/>
  
  <!-- Interface mockup -->
  <rect x="700" y="30" width="400" height="240" rx="8" fill="#ffffff" opacity="0.98"/>
  
  <!-- Header -->
  <rect x="700" y="30" width="400" height="60" rx="8" fill="#9333EA"/>
  <text x="740" y="67" font-family="Arial" font-size="20" fill="white">Minhas Tarefas</text>
  
  <!-- Input area -->
  <rect x="720" y="110" width="360" height="40" rx="4" fill="#f3f4f6"/>
  <text x="740" y="135" font-family="Arial" font-size="14" fill="#6b7280">Adicionar nova tarefa...</text>
  <rect x="1020" y="115" width="40" height="30" rx="4" fill="#9333EA"/>
  <text x="1030" y="135" font-family="Arial" font-size="14" fill="white">+</text>
  
  <!-- Task items -->
  <g transform="translate(720, 170)">
    <rect width="360" height="30" rx="4" fill="#f8f9fa"/>
    <circle cx="20" cy="15" r="8" fill="#9333EA"/>
    <text x="40" y="20" font-family="Arial" font-size="14" fill="#374151">Clonar repositório do Github</text>
  </g>
  
  <g transform="translate(720, 210)">
    <rect width="360" height="30" rx="4" fill="#f8f9fa"/>
    <circle cx="20" cy="15" r="8" fill="#9333EA"/>
    <text x="40" y="20" font-family="Arial" font-size="14" fill="#374151">Instalar dependências</text>
  </g>
  
  <!-- Main text -->
  <text x="100" y="120" font-family="Arial" font-size="52" font-weight="bold" fill="white">Task Manager</text>
  <text x="100" y="170" font-family="Arial" font-size="28" fill="white" opacity="0.9">Gerenciamento de tarefas simples e eficiente</text>
  
  <!-- Features list -->
  <g transform="translate(100, 200)">
    <circle cx="10" cy="10" r="4" fill="white"/>
    <text x="25" y="15" font-family="Arial" font-size="16" fill="white">Interface intuitiva</text>
    
    <circle cx="10" cy="40" r="4" fill="white"/>
    <text x="25" y="45" font-family="Arial" font-size="16" fill="white">Organização eficiente</text>
    
    <circle cx="10" cy="70" r="4" fill="white"/>
    <text x="25" y="75" font-family="Arial" font-size="16" fill="white">Atualizações em tempo real</text>
  </g>
</svg>

# Task Manager

Sistema de gerenciamento de tarefas com interface moderna e intuitiva.

</div>

## ⚡ Instalação Rápida

```bash
# Clonar o repositório
git clone [url-do-seu-repositorio]

# Instalar dependências da API
cd api
npm install

# Instalar dependências do Frontend
cd ../frontend
npm install
```

## 🚀 Configuração

### Banco de Dados
1. Acesse `api/config/readme.md`
2. Siga as instruções do script para criar o banco localmente

### Variáveis de Ambiente
1. **API**
```bash
cd api
cp .env.example .env
```

2. **Frontend**
```bash
cd frontend
cp .env.example .env
```

Configure as variáveis de acordo com os exemplos fornecidos.

## 💻 Executando o Projeto

```bash
# API
cd api
npm start

# Frontend
cd frontend
npm run dev
```

Acesse: `http://localhost:3000`

## 🛠️ Tecnologias

- **Frontend:** React/Next.js
- **Backend:** Node.js
- **Banco de Dados:** [Seu Sistema de Banco de Dados]

## ✨ Funcionalidades

- Sistema de gerenciamento de tarefas
- Interface moderna e responsiva
- Atualizações em tempo real
- Organização intuitiva

## 📝 Requisitos

- Node.js
- npm ou yarn
- Banco de dados local

## 🔍 Observações Importantes

- Configure todas as variáveis de ambiente antes de iniciar
- API precisa estar rodando para o frontend funcionar
- Confira os arquivos .env.example para as configurações necessárias

## 📫 Suporte

Para suporte, abra uma issue no repositório.

---

<div align="center">
Desenvolvido com 💜 por [Seu Nome]
</div>
