// Instalações

const express = require("express");
const ejs = require("ejs");

const app = express();

const mysql = require("mysql");
// Configurações

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "banco_node"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Conectado ao banco de dados");
});

app.set("view engine", "ejs");
app.use(express.static("public"));

// Componentes

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Views/index.html");

});

app.get("/eventos", (req, res) => {
    
    const query = "SELECT * FROM eventos";
    connection.query(query, (err, rows) => {
        if (err) throw err;
        
        res.render("eventos", {rows});
        
    }); 

    
});


// Inicialização

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

