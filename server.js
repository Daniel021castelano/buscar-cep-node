const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// servir arquivos estáticos (html css js)
app.use(express.static(__dirname));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});