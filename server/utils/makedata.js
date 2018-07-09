// load quizzers list
const quizlist = require('./quizlist');

// load all quiz
const quizdata = [];
quizlist.forEach(quiz => {
    const info = require(__dirname + '/../' + quiz.filename);
    quizdata.push(Object.assign({}, { id: quiz.id }, info));
});

// create quiz map
const quizMap = quizdata.reduce((total, quiz) => {
    const { title, category, categoryName, level, description, parameters } = quiz.info;
    // create category in total if not exists
    if (!total[category]) {
        total[category] = {
            categoryName,
            quizList: []
        };
    }
    // assign data
    total[category].quizList.push({
        id: quiz.id, title, level, description, parameters, testCases: quiz.test.ioTester()
    });
    // result
    return total;
}, {});

module.exports = quizMap;