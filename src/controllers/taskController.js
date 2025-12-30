const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
try {
    const tasks = await Task.findAll();
    res.json({ success: true, data: tasks });
} catch (error) {
    res.status(500).json({ success: false, error: error.message });
}
};

exports.getTaskById = async (req, res) => {
try {
    const task = await Task.findById(req.params.id);
    if (!task) {
    return res.status(404).json({ success: false, error: 'Tarefa não encontrada' });
    }
    res.json({ success: true, data: task });
} catch (error) {
    res.status(500).json({ success: false, error: error.message });
}
};

exports.createTask = async (req, res) => {
try {
    const { title, description } = req.body;
    if (!title) {
    return res.status(400).json({ success: false, error: 'Título é obrigatório' });
    }
    const task = await Task.create(title, description);
    res.status(201).json({ success: true, data: task });
} catch (error) {
    res.status(500).json({ success: false, error: error.message });
}
};

exports.updateTask = async (req, res) => {
try {
    const { title, description, completed } = req.body;
    const task = await Task.update(req.params.id, title, description, completed);
    if (!task) {
    return res.status(404).json({ success: false, error: 'Tarefa não encontrada' });
    }
    res.json({ success: true, data: task });
} catch (error) {
    res.status(500).json({ success: false, error: error.message });
}
};

exports.deleteTask = async (req, res) => {
try {
    const task = await Task.delete(req.params.id);
    if (!task) {
    return res.status(404).json({ success: false, error: 'Tarefa não encontrada' });
    }
    res.json({ success: true, message: 'Tarefa deletada com sucesso' });
} catch (error) {
    res.status(500).json({ success: false, error: error.message });
}
};