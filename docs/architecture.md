# Arquitetura do Projeto

## Visão Geral
API RESTful seguindo arquitetura em camadas.

## Estrutura de Diretórios
src/
├── controllers/   # Controladores (lógica de requisição/resposta)
├── models/        # Modelos de dados
├── routes/        # Definição de rotas
├── services/      # Lógica de negócio
├── config/        # Configurações
└── middleware/    # Middlewares customizados
## Fluxo de Requisição
Request → Routes → Controller → Service → Model → Database
