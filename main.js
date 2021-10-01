const quiz = [
    {
        question: "რომელ წელს შეიქნმა javascript",
        a: "1990 წელს",
        b: "1995 წელს",
        c: "2001 წელს",
        d: "2011 წელს",
        correct: "b"
    },
    {
        question: "რომელ წელს შეიქმნა HTML",
        a: "2005 წელს",
        b: "1995 წელს",
        c: "2015 წელს",
        d: "1993 წელს",
        correct: "d"
    },
    {
        question: "რომელ წელს შეიქნმა Css",
        a: "1990 წელს",
        b: "1998 წელს",
        c: "1996 წელს",
        d: "2000 წელს",
        correct: "c"
    },
    {
        question: "რომელ წელს შეიქნმა Python",
        a: "1991 წელს",
        b: "1995 წელს",
        c: "1980 წელს",
        d: "1999 წელს",
        correct: "a"
    },
    {
        question: "რომელ წელს შეიქნმა ჯავა",
        a: "1990 წელს",
        b: "1995 წელს",
        c: "1987 წელს",
        d: "2000 წელს",
        correct: "b"
    }
]
const question1 = document.getElementById("question")
const aanswer1 = document.getElementById("a-answer")
const banswer = document.getElementById("b-answer")
const canswer = document.getElementById("c-answer")
const danswer = document.getElementById("d-answer")
const btn = document.getElementById("btn");
const div1 = document.getElementById("Good-job")
const resetbtn = document.getElementById("reset")


let qurrentquiz = 0;
let answer = undefined;
newquiz()


function newquiz(){
    const qurrentquiz1 = quiz[qurrentquiz];
    question1.innerText = qurrentquiz.question;
    aanswer1.innerText = qurrentquiz1.a;
    banswer.innerText = qurrentquiz1.b;
    canswer.innerText = qurrentquiz1.c;
    danswer.innerText = qurrentquiz1.d;
    question1.innerText = qurrentquiz1.question
   
}

function selected(){
    const answers = document.querySelectorAll(".answer")
    answers.forEach(answers => {
     answer = answers.id;
     })
    return answer;
 
};
btn.addEventListener("click", ()=>{
    qurrentquiz++; 

    if(qurrentquiz < quiz.length){
    newquiz();
    
    }
    else{
        div1.style.display = "block";
    }
})
resetbtn.addEventListener("click", ()=>{
    document.location.reload(true)
})







