const oracledb = require('oracledb');

async function getConnection() {
    return await oracledb.getConnection({
        user: "SYSTEM",
        password: "1234",
        connectString: "localhost:1521/XEPDB1"
    });
}

module.exports = { getConnection };
