let grades = [
    [88, 76, 77],
    [33, 44, 44],
    [90, 100, 94],
    [30, 44, 98]
];
/*
아래 예시는 네 명의 학생에 대한 과목 점수이다.

각 학생은 3가지 과목에 대한 점수를 가지고 있다.

각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라.
*/


function average() {
    let eachAv = [];

    for (let i = 0; i < grades.length; i++) {
        let sum = 0;
        for (let j = 0; j < grades[i].length; j++) {
            sum = sum + grades[i][j]
        }
        sum / grades[i].length
        eachAv.push(sum / grades[i].length);
    }

    console.log(eachAv) // 각 학생의 평균
}

function highestAv() {

}