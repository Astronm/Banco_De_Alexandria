// bot.js
// Adicione isso para permitir CORS (comunicação entre frontend/backend)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

const { Telegraf } = require('telegraf');
const express = require('express');
const axios = require('axios');
require('dotenv').config();

// Configuração inicial
const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

// Banco de dados simples (substitua por um real depois)
const pdfDatabase = {};

// 1. Monitorar novos PDFs no canal
bot.on('message', async (ctx) => {
  if (ctx.message.document) {
    const fileName = ctx.message.document.file_name;
    const fileId = ctx.message.document.file_id;
    
    // Extrai a matéria do nome do arquivo (ex: "Matematica-Logaritmos.pdf")
    const materia = fileName.split('-')[0] || 'Geral';
    
    pdfDatabase[fileName] = {
      file_id: fileId,
      materia: materia
    };
    
    console.log(`PDF registrado: ${fileName} (Matéria: ${materia})`);
  }
});

// 2. Rota para download
app.get('/api/get-pdf', async (req, res) => {
  try {
    const pdfName = req.query.name;
    
    if (!pdfDatabase[pdfName]) {
      return res.status(404).send('PDF não encontrado');
    }

    const fileLink = await bot.telegram.getFileLink(pdfDatabase[pdfName].file_id);
    const response = await axios.get(fileLink, { responseType: 'stream' });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${pdfName}"`);
    response.data.pipe(res);
    
  } catch (error) {
    console.error('Erro no download:', error);
    res.status(500).send('Erro ao baixar PDF');
  }
});

// Iniciar servidores
app.listen(3000, () => console.log('Servidor de PDFs rodando na porta 3000'));
bot.launch().then(() => console.log('Bot iniciado'));
