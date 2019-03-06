'use strict';
const fs = require('fs');
const paths = {
    mssqldatatypes: `${__dirname}/../../node_modules/sequelize/lib/dialects/mssql/data-types.js`,
    datatypes: `${__dirname}/../../node_modules/sequelize/lib/data-types.js`
};

async function rewriteFile(path, find, replace) {
    let data = fs.readFileSync(paths[path], 'utf-8');
    let newValue = data.replace(find, replace);
    return await fs.writeFileSync(paths[path], newValue, 'utf-8');
}

module.exports = {
    rewriteFile
}