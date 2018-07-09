const fs = require('fs');

// info
const title = 'Operadores Aritméticos';
const category = 'intro';
const categoryName = 'Introdução';
const level = 0;
const description = fs.readFileSync(__dirname + '/Q0003.html', 'utf8');
const parameters = 'N1,N2,N3';
// test
const fn = '';
const ioTester = ()=>{
    return [{
        input: '5,7,9',
        output: '7',
    }];
};

module.exports = {
    info: {
        title, category, categoryName, level, description, parameters,
    },
    test: {
        fn, ioTester
    }
};