const mysql=require('mysql2');
var jwt = require("jsonwebtoken");
module.exports=(req,res)=>{
    const checkout = req.body.checkout;
    const token = req.headers.authorization.split(' ')[1];
	// const token = req.cookies.user;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    var sql=mysql.format(
        "Update Cart_items SET checkout = ? where user_id = ?"
    );

    connection.query(sql,[checkout,decoded.userId],(err,rows)=>{
        if(err){
            return res.json({
                success: false,
                data:null,
                error:err.message,
            });
        }
        res.json({
            success:true,
            message:'Purchased',
        });
    });
   
};