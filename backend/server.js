const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "registro1",
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Conectado con MySQL');
});

// Endpoint for user registration
app.post('/Registro', (req, res) => {
    const { nombre, apellido, email, contraseña } = req.body;

    const query = "INSERT INTO user (nombre, apellido, email, contraseña) VALUES (?, ?, ?, ?)";
    con.query(query, [nombre, apellido, email, contraseña], (err, result) => {
        if (err) {
            console.error("Error en la consulta de Registro:", err);
            res.send({ message: "Error al registrar. Intente de nuevo.", error: err });
        } else {
            res.send({ message: "Cuenta creada correctamente", result: result });
        }
    });
});

// Endpoint for user login
app.post('/Login', (req, res) => {
    const { email, contraseña } = req.body;

    const query = "SELECT * FROM user WHERE email = ? AND contraseña = ?";
    con.query(query, [email, contraseña], (err, result) => {
        if (err) {
            console.error("Error en la consulta de Iniciar Sesión:", err);
            res.send({ message: "Error al iniciar sesión. Intente de nuevo.", error: err });
        } else {
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "USUARIO O CONTRASEÑA INCORRECTA!" });
            }
        }
    });
});

// CRUD operations for products
app.get('/products', (req, res) => {
    const query = "SELECT * FROM product";
    con.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching products:", err);
            res.status(500).send({ message: "Error fetching products.", error: err });
        } else {
            res.send(results);
        }
    });
});

app.post('/product', (req, res) => {
    const { name, description, price } = req.body;

    const query = "INSERT INTO product (nombre, descripcion, precio) VALUES (?, ?, ?)";
    con.query(query, [name, description, price], (err, result) => {
        if (err) {
            console.error("Error adding product:", err);
            res.status(500).send({ message: "Error adding product.", error: err });
        } else {
            res.send({ message: "Product added successfully", result: result });
        }
    });
});

app.put('/product/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const query = "UPDATE product SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?";
    con.query(query, [name, description, price, id], (err, result) => {
        if (err) {
            console.error("Error updating product:", err);
            res.status(500).send({ message: "Error updating product.", error: err });
        } else {
            res.send({ message: "Product updated successfully", result: result });
        }
    });
});

app.delete('/product/:id', (req, res) => {
    const { id } = req.params;

    const query = "DELETE FROM product WHERE id = ?";
    con.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error deleting product:", err);
            res.status(500).send({ message: "Error deleting product.", error: err });
        } else {
            res.send({ message: "Product deleted successfully", result: result });
        }
    });
});

app.listen(3001, () => {
    console.log("Running server on port 3001");
});
