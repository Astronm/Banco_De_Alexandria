// Adicione isso ao seu bot
bot.on('message', async (ctx) => {
  if (ctx.message.document) {
    // Salvar metadados do PDF em um banco de dados
    await salvarPDFNoBanco({
      nome: ctx.message.document.file_name,
      file_id: ctx.message.document.file_id,
      materia: ctx.session.materiaSelecionada
    });
  }
});

// Rota para buscar PDFs
app.get('/api/get-pdf', async (req, res) => {
  try {
    const pdfName = req.query.name;
    const pdfInfo = await buscarPDFNoBanco(pdfName);
    
    const fileLink = await bot.telegram.getFileLink(pdfInfo.file_id);
    const response = await axios.get(fileLink, { responseType: 'stream' });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${pdfName}"`);
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send('Erro ao baixar PDF');
  }
});
