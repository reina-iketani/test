const quiz = [
    {
        question: 'ゲーム市場で最も売れたゲーム機は次のうちどれ？',
        answers: [
            'ファミコン',
            'switti',
            'DS',
            'praystation'
        ],
        correct: 'DS'
    },
    {
        question: '日本の首都圏は？',
        answers: [
            '大阪',
            '東京',
            '沖縄',
            '京都'
        ],
        correct: '東京'
    },
    {
        question: '太陽系で最も大きな惑星は何ですか？',
        answers: [
            '地球',
            '木星',
            '土星',
            '天王星'
        ],
        correct: '木星'
    }
];
const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;

let $button = document.getElementsByTagName('button');
const buttonlength = $button.length;

const setupQuestion = () => {
    //問題文
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    //答え
    let buttonindex = 0;
    while(buttonindex < buttonlength) {
        $button[buttonindex].textContent = quiz[quizIndex].answers[buttonindex];
        buttonindex++;
    }
}
setupQuestion();

//クリックしたら正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++;
    }else{
        window.alert('不正解');
    }

    //問題を出題
    quizIndex++;
    if(quizIndex < quizlength){
        //問題がまだある
        setupQuestion();
    } else {
        //問題なければ終了
        window.alert("終了!あなたの正解数は" + score + "/" + quizlength + "です。");
    }
};

let handlerindex = 0;

while (handlerindex < buttonlength) {
    $button[handlerindex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerindex++;
}