let sql = {
    user: {
        login: 'select * from user where (username=? and password=?)',
        findAllInfo: 'select id, username from user',
        add: 'insert into user(id, username, password) values(0, ?, ?)',
        delete: 'delete from user where (id=?)',
        change: 'update user set username=? where id=?',
    },
    item: {
    findAllInfo: 'select * from item_table',
    }
}
module.exports = sql;
