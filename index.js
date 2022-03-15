const quizDB =[
   {
question: "what is the full form of HTML?",
 a: "Hello to my world",
    b: "Hey text markup language.",
    c: " Hypertext makeup language.",
    d:" HyperText markup Language.",
    ans:"ans4"
},
{
    question: "what is the full form of CSS?",
    a: "cascading style sheet",
    b:"Hey text markup language.",
    c: " Cartoon style sheet.",
    d:" HyperText markup Language.",
    ans:"ans1"
},
{
    question: "what is the full form of HTTP?",
    a: "Hypertext transfer product.",
    b: "hey text markup language.",
    c: " hypertext markup part.",
    d:" HyperText transfer protocol.",
    ans:"ans4"
},
{
    question:"what is the full form of JS?",
    a:"javascript.",
    b: "justscript.",
    c: " javasuper.",
    d:" jordenshoes.",
    ans:"ans1"
},
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');





let questioncount = 0;;
let score = 0;

const loadquestion = () => {
    const questionlist = quizDB[questioncount];
    question.innerHTML =questionlist.question;
    option1.innerHTML =questionlist.a;
    option2.innerHTML =questionlist.b;
    option3.innerHTML =questionlist.c;
    option4.innerHTML =questionlist.d;

}
loadquestion();
const getCheckedAnswer= () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    })
    return answer;
};

submit.addEventListener('click', () => {
    const checkedanswer = getCheckedAnswer()
    console.log(checkedanswer);

    if(checkedanswer ===quizDB[questioncount].ans){
        score++
    };
    questioncount++;

    

    if (questioncount < quizDB.length){
        loadquestion();
    }
    else{
        showscore.innerHTML =`
        <h3> you scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()"> play again</button>
        `;
    };
     showscore.classList.remove(showscore);

})