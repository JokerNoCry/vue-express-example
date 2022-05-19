var express = require('express');
var router = express.Router();

var sqlMap = require('../../config/sqlMap')
var conn = require('../../config/db')

router.post('/login', function (req, res){
    let data = req.body;
    let sql = sqlMap.user.login;
    conn.query(sql, [data.username, data.password], (err, result) => {
        if(err) {
            console.log(err);
        }
        if(result) {
            res.json({
                code: 200,
                data: result
            })
        }
    });
});

router.get('/all', function(req, res){
    let data = req.query;
    let sql = sqlMap.user.findAllInfo;
    conn.query(sql, (err, result)=>{
        if(err) {
            console.log(err);
        }
        if(result) {
            res.json({
                code: 200,
                data: result
            })
        }
    });
});

module.exports = router;
