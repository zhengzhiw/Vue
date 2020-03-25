// sql语句--在此输入想要执行的sql
const sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, name, age) values (0, ?, ?)'
    }
}

module.exports = sqlMap;
