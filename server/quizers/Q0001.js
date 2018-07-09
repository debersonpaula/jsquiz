const fs = require('fs');

// info
const title = 'Introdução';
const category = 'intro';
const categoryName = 'Introdução';
const level = 0;
const description = fs.readFileSync(__dirname + '/Q0001.html', 'utf8');
const parameters = '';
// test
const fn = 'return "QUIZ";';
const ioTester = ()=>{
    return [{
        input: '',
        output: 'QUIZ',
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