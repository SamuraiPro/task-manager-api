# Makefile
.PHONY: help build up down logs restart clean test

help: ## Mostrar ajuda
	@echo "Comandos disponíveis:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Build dos containers
	docker-compose build

up: ## Iniciar containers
	docker-compose up -d
	@echo "✅ Aplicação rodando em http://localhost:3000"

down: ## Parar containers
	docker-compose down

logs: ## Ver logs
	docker-compose logs -f

restart: down up ## Reiniciar containers

clean: ## Limpar tudo
	docker-compose down -v
	docker system prune -f

test: ## Executar testes
	npm test

dev: ## Modo desenvolvimento
	npm run dev