const fs = require('fs');

// info
const title = 'Expressões Básicas';
const category = 'intro';
const categoryName = 'Introdução';
const level = 0;
const description = fs.readFileSync(__dirname + '/Q0002.html', 'utf8');
const parameters = 'N1,N2';
// test
const fn = 'return N1 + N2;';
const ioTester = ()=>{
    return [{
        input: '5,7',
        output: '12',
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