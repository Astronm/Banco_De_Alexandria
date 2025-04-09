// bot.js
const { Telegraf } = require('telegraf');
const express = require('express');
const axios = require('axios');
require('dotenv').config();

// 1. CONFIGURAÇÃO CORS (COLOQUE AQUI!)
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://5040-2804-14d-78b1-5035-913b-c5c2-deca-cc85.ngrok-free.app');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// 2. CONFIGURAÇÃO INICIAL DO BOT
const bot = new Telegraf(process.env.BOT_TOKEN);

// 3. BANCO DE DADOS (mantenha o restante igual)
const pdfDatabase = {};

// ... (código existente de monitoramento de PDFs)

// 4. ROTA PARA DOWNLOAD (mantenha igual)
app.get('/api/get-pdf', async (req, res) => {
  // ... código existente
});

// 5. INICIAR SERVIDORES
app.listen(3000, () => console.log('Servidor de PDFs rodando na porta 3000'));
bot.launch().then(() => console.log('Bot iniciado'));
