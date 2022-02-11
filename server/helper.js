const db = require('./db');

function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows[0];
  }
  
  function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}

  async function getMedaData(tableName="",link_name="",page_link=""){
    page_link = mysql_real_escape_string(page_link);
    tableName = mysql_real_escape_string(tableName);
    link_name = mysql_real_escape_string(link_name);
    const query = `SELECT * FROM ${tableName} WHERE LOWER(${link_name})="${page_link}"`;
    console.log(query);
    const rows = await db.query(query);
    const data = emptyOrRows(rows);
    
    return data;
}

  module.exports = {
    getOffset,
    emptyOrRows,
    getMedaData
  }