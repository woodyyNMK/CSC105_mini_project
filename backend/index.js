// import { useParams } from "react-router-dom";
const cors=require('cors');
const express=require('express');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const connection=mysql.createConnection({
    host:"server2.bsthun.com",
    port:"6105",
    user:"lab_ggrmj",
    password:"f91um4hPDJixJXIE",
    database:"lab_blank01_g3ygqd"
});
global.connection=connection;

connection.connect();
const port=3000;
const app=express();
app.use(express.json());
app.use(bodyParser.json({type:"application/json"}));
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001'],
    credentials: true,
  }));
app.use(cookieParser());
app.post("/register", require('./routes/register'));
app.post("/login", require("./routes/login"));
app.get("/Cart_items", require("./routes/getItemsInCart"));
app.get("/Past_items", require("./routes/getPastOrders"));
app.post("/Cart_items", require("./routes/purchaseItemsInCart"));
app.delete('/Cart_items/:id', require("./routes/deleteItemsInCart"));
app.get("/new_items", require("./routes/getNewItems"));
app.get("/Sale_items", require("./routes/getSaleItems"));
app.get("/Popular_items", require("./routes/getPopularItems"));
app.use('/static',express.static('images'))
app.get("/ItemDetail/:id", require("./routes/getItemDetail"));
app.post("/ItemDetail/:id", require("./routes/addItemToCart"));


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});                                              