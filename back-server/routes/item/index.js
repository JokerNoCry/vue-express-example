var express = require('express');
var router = express.Router();

var sqlMap = require('../../config/sqlMap')
var conn = require('../../config/db')

router.post('/all', function(req, res){
    let data = req.query;
    let sql = sqlMap.item.findAllInfo;
    conn.query(sql, (err, result) => {
        if(err){
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
