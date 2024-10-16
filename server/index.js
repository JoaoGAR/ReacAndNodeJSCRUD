const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudgames"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const{ name } = req.body;
    const{ cost } = req.body;
    const{ category } = req.body;

    let SQL = "INSERT INTO games (name, price, category) VALUES ( ?, ?, ? )";
    
    db.query(SQL, [name, cost, category], (err, result) => {
        console.error(err);
    })
});

app.get("/get", (req, res) => {
    let SQL = "SELECT * FROM games";

    db.query(SQL, (err, result) => {
        if(err) console.error(err);
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const{ id } = req.body;
    const{ name } = req.body;
    const{ cost } = req.body;
    const{ category } = req.body;

    let SQL = "UPDATE games SET name = ?, price = ?, category = ? WHERE idgames = ?";

    db.query(SQL, [name, cost, category, id], (err, result) => {
        if(err) console.error(err);
        else res.send(result);
    });
});

app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;

    let SQL = "DELETE FROM games WHERE idgames = ?";

    db.query(SQL, [id], (err, result) => {
        if(err) console.error(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.info("Rodando servidor");
});