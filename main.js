const quiz = [
    {
        question1: "რომელ წელს შეიქნმა ჯავასკრიპტი",
        a1: "1990 წელს",
        b2: "1995 წელს",
        c3: "2001 წელს",
        d4: "2011 წელს",
        correct1: "b"
    },
    {
        question2: "რომელ წელს შეიქმნა ჰტმლ",
        a: "2005 წელს",
        b: "1995 წელს",
        c: "2015 წელს",
        d: "1993 წელს",
        correct2: "d"
    },
    {
        question3: "რომელ წელს შეიქნმა ცსს",
        a: "1990 წელს",
        b: "1998 წელს",
        c: "1996 წელს",
        d: "2000 წელს",
        correct3: "c"
    },
    {
        question4: "რომელ წელს შეიქნმა პითონი",
        a: "1991 წელს",
        b: "1995 წელს",
        c: "1980 წელს",
        d: "1999 წელს",
        correct4: "a"
    },
    {
        question5: "რომელ წელს შეიქნმა ჯავა",
        a: "1990 წელს",
        b: "1995 წელს",
        c: "1987 წელს",
        d: "2000 წელს",
        correct5: "b"
    }
]
const question = document.getElementById("question")
const aanswer = document.getElementById("a-answer")
const banswer = document.getElementById("b-answer")
const canswer = document.getElementById("c-answer")
const danswer = document.getElementById("d-answer")
const btn = document.getElementById("btn")
let qurrentquiz = 0;


