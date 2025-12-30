const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes
app.use(`/api/${process.env.API_VERSION || 'v1'}`, taskRoutes);

// Error handling
app.use((req, res) => {
res.status(404).json({ success: false, error: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ success: false, error: 'Erro interno do servidor' });
});

module.exports = app;