const pool = require('../config/database');

class Task {
static async create(title, description) {
    const query = `
    INSERT INTO tasks (title, description, completed, created_at)
    VALUES ($1, $2, false, NOW())
      RETURNING *
    `;
    const result = await pool.query(query, [title, description]);
    return result.rows[0];
}

static async findAll() {
    const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
    const result = await pool.query(query);
    return result.rows;
}

static async findById(id) {
    const query = 'SELECT * FROM tasks WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
}

static async update(id, title, description, completed) {
    const query = `
    UPDATE tasks 
    SET title = $1, description = $2, completed = $3, updated_at = NOW()
    WHERE id = $4
      RETURNING *
    `;
    const result = await pool.query(query, [title, description, completed, id]);
    return result.rows[0];
}

static async delete(id) {
    const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
}
}

module.exports = Task;