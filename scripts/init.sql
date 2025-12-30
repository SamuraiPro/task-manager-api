-- scripts/init.sql
CREATE INDEX idx_tasks_updated_at ON tasks(updated_at DESC); 
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados de exemplo
INSERT INTO tasks (title, description, completed) VALUES
    ('Configurar projeto', 'Setup inicial do projeto DevOps', true),
    ('Implementar API', 'Criar endpoints REST', true),
    ('Adicionar Docker', 'Containerizar aplicação', false),
    ('Configurar CI/CD', 'Setup do pipeline', false);

-- Criar índices
CREATE INDEX idx_tasks_completed ON tasks(completed);
CREATE INDEX idx_tasks_created_at ON tasks(created_at DESC);