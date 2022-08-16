const fs = require('fs')

const saveToDatabase = (BD)=>{  
    fs.writeFileSync("./src/database/db.json",JSON.stringify(BD,null,2),{
        encoding: 'utf-8',
    });
}
module.exports = {saveToDatabase}
