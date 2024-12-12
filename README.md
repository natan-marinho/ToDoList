<div align="center">

<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="200" fill="#9333EA"/>
  <text x="40" y="120" font-family="Arial" font-size="48" fill="white">Task Management System</text>
  <circle cx="700" cy="100" r="30" fill="white" opacity="0.2"/>
  <circle cx="660" cy="100" r="20" fill="white" opacity="0.15"/>
  <circle cx="730" cy="130" r="25" fill="white" opacity="0.1"/>
</svg>

# Task Management System

Um sistema moderno de gerenciamento de tarefas construído com arquitetura frontend e API separadas.

</div>

## 🚀 Início Rápido

Siga estes passos para executar o projeto em sua máquina local:

### Pré-requisitos

- Node.js
- npm ou yarn
- Servidor de banco de dados local

### Passos de Instalação

1. **Clonar o Repositório**
   ```bash
   git clone [url-do-seu-repositorio]
   ```

2. **Instalar Dependências**
   ```bash
   # Instalar dependências da API
   cd api
   npm install # ou yarn

   # Instalar dependências do Frontend
   cd ../frontend
   npm install # ou yarn
   ```

3. **Configuração do Banco de Dados**
   - Navegue até `api/config/readme.md`
   - Siga o script de criação do banco de dados fornecido
   - Execute o script em sua máquina local

4. **Configuração do Ambiente**
   ```bash
   # Configuração da API
   cd api
   cp .env.example .env
   # Configure seu arquivo .env com os valores apropriados

   # Configuração do Frontend
   cd ../frontend
   cp .env.example .env
   # Configure seu arquivo .env com os valores apropriados
   ```

5. **Iniciar as Aplicações**
   ```bash
   # Iniciar a API
   cd api
   npm start

   # Iniciar o Frontend
   cd frontend
   npm run dev
   ```

6. **Acessar a Aplicação**
   - Abra seu navegador e acesse: `http://localhost:3000/`

## 🛠️ Construído Com

- Frontend: React/Next.js
- Backend: Node.js
- Banco de Dados: [Seu Sistema de Banco de Dados]

## 📝 Observações

- Certifique-se de que todas as variáveis de ambiente estejam configuradas corretamente antes de iniciar as aplicações
- A API deve estar em execução para que o frontend funcione corretamente
- Verifique os respectivos arquivos .env.example para as variáveis de ambiente necessárias

## 📫 Suporte

Para suporte, por favor abra uma issue no repositório.

---

Feito com ❤️ por [Seu Nome]
