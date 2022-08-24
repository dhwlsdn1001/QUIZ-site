function Question(text, choice, answer) {
    this.text = text; // 질문 텍스트
    this.choice = choice; // 선택할 답들(배열)
    this.answer = answer; // 정답 정보
}

 // 퀴즈 정보 객체
function Quiz(questions) {
    this.score = 0; // 점수
    this.questions = questions; // 문제
    this.questionIndex = 0; // 문제 번호
}

 // 정답 확인 메서드
Quiz.prototype.correctAnswer = function(answer) {
    return answer == this.questions[this.questionIndex].answer;
}

var questions = [
    new Question('[지리] 오스트레일리아의 수도는?', ['시드니', '빈', '헬싱키', '캔버라'], '캔버라'),
    new Question('[고전] 우리나라 최초의 한글 소설로 전해지는 고전 소설 이름은?', ['홍길동전', '춘향전', '흥부전', '별주부전'], '홍길동전'),
    new Question('[예술] 뮤지컬, 연극, 음악회, 오페라 등의 공연이 끝난 후 관객이 박수를 보내 배우들을 다시 무대로 나오게 하는것은?', ['크레딧', '앵콜', '커튼콜', '피날레'], '커튼콜'),
    new Question('[문화] 올림픽의 오륜기 색 순서로 옳은 것은?', ['초노빨검파', '파노검초빨', '검파노초빨', '파노빨초검'], '파노검초빨'),
    new Question('[일반상식] 우체국 로고에 있는 새는 무엇일까요?', ['제비', '독수리', '올빼미', '참새'], '제비'),
    new Question('[경제] 다음 중 미국 회사가 아닌 것은?', ['NVIDIA', 'LENOVO', '도미노피자', '익스피디아'], 'LENOVO'),
    new Question('[문화] 다음 중 디즈니의 프랜차이즈가 아닌 것은?', ['스타워즈', '픽사', '심슨', '슈퍼배드'], '슈퍼배드'),
    new Question('[일반상식] 미국 지폐 1달러에 그려져 있는 인물은?', ['에이브러햄 링컨', '프랭클린 D 루즈벨트', '조지 워싱턴', '밴저민 프랭클린'], '조지 워싱턴'),
    new Question('[일반상식] 타인의 기대나 관심으로 인하여 능률이 오르거나 결과가 좋아지는 현상은?', ['피그말리온 효과', '플라시보 효과', '스노우볼 효과', '만델라 효과'], '피그말리온 효과'),
    new Question('[언어] 자신의 태도와 행동이 일관되지 않고 모순되어 양립할 수 없는 상태는?', ['정체성 혼란', '정신착란', '게슈탈트 붕괴', '인지부조화'], '인지부조화'),
    new Question('[언어] "골치가 아프다"에서 "골치" 의 의미는?', ['머리뼈', '뇌', '뒷목', '관자놀이'], '뇌'),
    new Question('[언어] 다음 중 한자어가 아닌 것은?', ['귤', '고무', '사이비', '포도'], '고무'),
    new Question('[문화] "늦게 와서 정말 죄송합니다, 디오니소스 님." 이라는 대사를 한 캐릭터는?', ['디오니소스', '프로메테우스', '오르페우스', '뮤즈'], '오르페우스'),
    new Question('[문화] 다음 중 닌텐도에서 직접 만드는 게임이 아닌 것은?', ['슈퍼마리오', '포켓몬스터', '동물의 숲', '젤다의 전설'], '포켓몬스터'),
    new Question('[문화] 다음 중 정식 발매 년도가 가장 최근인 게임은?(한국 기준)', ['마인크래프트', '리그 오브 레전드', '엘소드', '메이플스토리'], '리그 오브 레전드'),
    new Question('[LOL] 다음 중 가장 최근에 출시된 챔피언은?', ['가렌', '티모', '이블린', '타릭'], '가렌'),
    new Question('[과학] 눈에 들어온 평행 광선이 망막 뒤쪽에서 상을 맺어 먼 곳은 잘 보이지만, 가까운 곳은 잘 보이지 않는 눈은?', ['근시', '난시', '원시', '사시'], '원시'),
    new Question('[문화] 다음 중 해리포터에 나온 기숙사 이름이 아닌 것은?', ['슬리데린', '덤스트랭', '그리핀도르', '후플푸프'], '덤스트랭'),
    new Question('[경제] 다음 중 스마트폰 만드는 회사가 아닌 것은?', ['삼성전자', '애플', 'LG', '모토로라'], 'LG'),
    new Question('[언어] "심금을 울리다" 에서의 "심금"이 의미하는 악기는?', ['장구', '거문고', '북', '가야금'], '거문고'),
    new Question('[문학] 쉘 실버스타인의 동화인 "아낌없이 주는 나무" 의 나무는 어떤 나무인가?', ['소나무', '사과나무', '바오밥나무', '참나무'], '사과나무'),
    new Question('[문학] 셰익스피어의 4대 비극 중 옳지 않은 것은?', ['오셀로', '맥베스', '리어왕', '로미오와줄리엣'], '로미오와 줄리엣'),
    new Question('[일반상식] 다음 중 "유레카!" 라고 말한 사람은?', ['아리스토텔레스', '아르키메데스', '에라토스테네스', '데모크리토스'], '아르키메데스'),
];

 // 퀴즈 객체 생성
var quiz = new Quiz(questions);

 // 문제 출력 함수
function updateQuiz() {
    var question = document.getElementById('question');
    var idx = quiz.questionIndex + 1;
    var choice = document.querySelectorAll('.btn');

    // 문제 출력
    question.innerHTML = '문제' + idx + ') ' + quiz.questions[quiz.questionIndex].text;

    // 선택 출력
    for (var i = 0; i < 9; i++) {
        choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
    }

    progress();
}

function progress() {
    var progress = document.getElementById('progress');
    progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + '/ ' + quiz.questions.length;
}

var btn = document.querySelectorAll('.btn');

 // 입력 및 정답 확인 함수
function checkAnswer(i) {
    btn[i].addEventListener('click', function() {
        var answer = btn[i].innerText;

        if (quiz.correctAnswer(answer)) {
            alert('정답입니다!');
            quiz.score++;
        } else {
            alert('틀렸습니다!');
        }

        if (quiz.questionIndex < quiz.questions.length - 1) {
            quiz.questionIndex++;
            updateQuiz();
        } else {
            result();
        }
    });
}

function result() {
    var quizDiv = document.getElementById('quiz');
    var per = parseInt((quiz.score * 100) / quiz.questions.length);
    var txt = '<h1>결과</h1>' + '<h2 id="score">당신의 점수: ' + quiz.score + '/' + quiz.questions.length + '<br><br>' + per + '점' + '</h2>';

    quizDiv.innerHTML = txt;

    // 점수별 결과 텍스트
    if (per < 60) {
        txt += '<h2>더 분발하세요</h2>';
        quizDiv.innerHTML = txt;
    } else if (per >= 60 && per < 80) {
        txt += '<h2>무난한 점수네요</h2>'
        quizDiv.innerHTML = txt;
    } else if (per >= 80) {
        txt += '<h2>훌륭합니다</h2>'
        quizDiv.innerHTML = txt;
    }
}
for (var i = 0; i < btn.length; i++) {
    checkAnswer(i);
}
updateQuiz();
