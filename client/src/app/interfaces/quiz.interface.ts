export interface TQuiz {
    [key: string]: {
        categoryName: string;
        quizList: TQuizList[];
    };
}

export interface TQuizList {
    id: number;
    title: string;
    level: number;
    description: string;
    parameters: string;
    testCases: TTestCase[];
}

export interface TTestCase {
    input: string;
    output: string;
}
