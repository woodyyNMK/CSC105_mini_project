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
app.post("/register", require('./register'));
app.post("/login", require("./login"));
app.get("/Cart_items", require("./getItemsInCart"));

app.use((req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
  
      if (token == null) throw new ErrorResponse('no credential found', 401);
  
      const verify = verifyAccessToken(token);
  
      if (verify.err) throw new ErrorResponse('access denied', 403);
  
      res.locals.userId = verify.id;
      next();
    } catch (error) {
      if (error instanceof ErrorResponse) {
        return res.status(error.statusCode).json(error);
      }
      return res.json(error);
    }
  });

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});                                              