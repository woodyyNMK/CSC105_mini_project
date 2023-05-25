const mysql=require('mysql2');
var jwt = require("jsonwebtoken");
module.exports=(req,res)=>{
    const product_id=req.body.product_id;
    const product_name=req.body.product_name;
    const product_price=req.body.product_price;
    const product_image=req.body.product_image;   

    const token = req.headers.authorization.split(' ')[1];
	// const token = req.cookies.user;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");


    var sql=mysql.format(
        `Insert into Cart_items (user_id,product_id,product_name,product_price,product_image,checkout) values (?,?,?,?,?,?)`, [decoded.userId,product_id,product_name,product_price,product_image,0]
    );

    connection.query(sql,(err,rows)=>{
        if(err){
            return res.json({
                success: false,
                data:null,
                error:err.message,
            });
        }
        res.send({
            success:true,
            message:'Item has been created',
        });
    });
   
};