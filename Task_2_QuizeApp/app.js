const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        choices: ["Charles Dickens", "William Shakespeare", " Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Go", "GI", " Gd", "Au"],
        correctAnswer: "Au"
    },
    {
        question: "In which year did Christopher Columbus first arrive in the Americas?",
        choices: ["1492", " 1620", " 1776", " 1812"],
        correctAnswer: "1492"
    },
    {
        question: "What is the national flower of Japan?",
        choices: ["Rose", "Tulip", "Orchid", "Cherry Blossom"],
        correctAnswer: "Cherry Blossom"
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        choices: ["Oxygen", " Carbon Dioxide", " Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        choices: [" J.R.R. Tolkien", "George Orwell", "  J.K. Rowling", "C.S. Lewis"],
        correctAnswer: "J.K. Rowling"
    },
    {
        question: "What is the smallest prime number?",
        choices: ["0", "1", " 3", "2"],
        correctAnswer: "2"
    },
    {
        question: "What is the capital city of Australia?",
        choices: ["Melbourne", "Sydney", " Canberra", "Brisbane"],
        correctAnswer: "Canberra"
    },
    
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = "";
    question.choices.forEach(choice => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(li);
    });
}

function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    scoreElement.textContent = `Score: ${score}/${questions.length}`;

    if (score >= 3) {
        resultElement.textContent = "Congratulations! You are a winner!";
        // You can add code here to display a winning gif
    } else {
        resultElement.textContent = "Sorry, you didn't win this time.";
        // You can add code here to display a losing gif
    }

    submitButton.style.display = "none";
}

showQuestion();
