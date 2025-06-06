//Array object(Question, options, answer) of questions for each level
const questions = {
beginner: [
    { question: "What's Rayals' favorite color?", options: ["Red", "Blue", "Green", "Black"], answer: "Blue" },
    { question: "Does she prefer cats or dogs?", options: ["Cats", "Dogs"], answer: "Dogs" },
    { question: "When did she live highschool?", options: ["2021", "2019", "2024", "2022"], answer: "2024" },
    { question: "What is her favorite type of music?", options: ["Country", "Pop", "Rap", "sentimental"], answer: "Country" },
    { question: "What is her favorite food to eat?", options: ["Foofoo", "Rice and Green", "Gari", "Rice and Cassava leaf"], answer: "Rice and Green" },
    { question: "Which of the following games does Rayal like to play on her phone", options: ["Subway Surf", "CODM", "Talking Tom", "Painting games"], answer: "Painting games" },
    { question: "Which day of the week does she like the most", options: ["Saturday", "Friday", "Monday", "Sunday"], answer: "Friday" },
    { question: "What is her favorite drink?", options: ["Maltina", "Fanta", "Xtra Juice", "Coke"], answer: "Xtra Juice" },
    { question: "Where was Rayal born?", options: ["Marie Stoves Hospital", "34", "Life Care", "Connot"], answer: "Marie Stoves Hospital" },
    { question: "Rayals Favorite holiday is ", options: ["Christmas","New Year", "Easter", "Ramadan"], answer: "Christmas" },
],
intermediate: [
    { question: "What's Rayals' favorite color?", options: ["Red", "Blue", "Green", "Black"], answer: "Blue" },
    { question: "Does she prefer cats or dogs?", options: ["Cats", "Dogs"], answer: "Dogs" },
    { question: "When did she live highschool?", options: ["2021", "2019", "2024", "2022"], answer: "2024" },
    { question: "What is her favorite type of music?", options: ["Country", "Pop", "Rap", "sentimental"], answer: "Country" },
    { question: "What is her favorite food to eat?", options: ["Foofoo", "Rice and Green", "Gari", "Rice and Cassava leaf"], answer: "Rice and Green" },
    { question: "Which of the following games does Rayal like to play on her phone", options: ["Subway Surf", "CODM", "Talking Tom", "Painting games"], answer: "Painting games" },
    { question: "Which day of the week does she like the most", options: ["Saturday", "Friday", "Monday", "Sunday"], answer: "Friday" },
    { question: "What is her favorite drink?", options: ["Maltina", "Fanta", "Xtra Juice", "Coke"], answer: "Xtra Juice" },
    { question: "Where was Rayal born?", options: ["Marie Stoves Hospital", "34", "Life Care", "Connot"], answer: "Marie Stoves Hospital" },
    { question: "Rayals Favorite holiday is ", options: ["Christmas","New Year", "Easter", "Ramadan"], answer: "Christmas" },
    { question: "What city was she born?", options: ["Freetown", "Bo", "Makeni", "Kabala"], answer: "Freetown" },
    { question: "How many schools has she attended?", options: ["2", "3", "1", "4"], answer: "3" },
    { question: "What is the name of her last school?", options: ["Naichom", "SOS", "Wammagriso", "Convent"], answer: "Wammagriso" },
    { question: "Which of the following is Rayals favorite subject?", options: ["Mathematics", "English", "Chemistry", "Biology"], answer: "Chicago" },
    { question: "What is her dream career?", options: ["Surgeon", "Engineer", "Banker", "Doctor"], answer: "Chicago" },
    { question: "Which of the following is her stream?", options: ["Art", "Science", "Commercial"], answer: "Science" },
    { question: "When was she born?", options: ["Today", "March 18 2009", "March 18 2004", "None of the above"], answer: "None of the above" },
    { question: "What is her best sport?", options: ["Basketball", "Tennis", "Football", "Balance ball"], answer: "Football" },
    { question: "What was heer first schools name?", options: ["Wammagriso", "Nice Price Pepartory School", "SOS", "Barnies"], answer: "Nice Price Pepartory School" },
    { question: "At what age did Rayal start attend school?", options: ["2", "3", "4", "5"], answer: "3" },
],
advanced: [
    { question: "What's Rayals' favorite color?", options: ["Red", "Blue", "Green", "Black"], answer: "Blue" },
    { question: "Does she prefer cats or dogs?", options: ["Cats", "Dogs"], answer: "Dogs" },
    { question: "When did she live highschool?", options: ["2021", "2019", "2024", "2022"], answer: "2024" },
    { question: "What is her favorite type of music?", options: ["Country", "Pop", "Rap", "sentimental"], answer: "Country" },
    { question: "What is her favorite food to eat?", options: ["Foofoo", "Rice and Green", "Gari", "Rice and Cassava leaf"], answer: "Rice and Green" },
    { question: "Which of the following games does Rayal like to play on her phone", options: ["Subway Surf", "CODM", "Talking Tom", "Painting games"], answer: "Painting games" },
    { question: "Which day of the week does she like the most", options: ["Saturday", "Friday", "Monday", "Sunday"], answer: "Friday" },
    { question: "What is her favorite drink?", options: ["Maltina", "Fanta", "Xtra Juice", "Coke"], answer: "Xtra Juice" },
    { question: "Where was Rayal born?", options: ["Marie Stoves Hospital", "34", "Life Care", "Connot"], answer: "Marie Stoves Hospital" },
    { question: "Rayals Favorite holiday is ", options: ["Christmas","New Year", "Easter", "Ramadan"], answer: "Christmas" },
    { question: "What city was she born?", options: ["Freetown", "Bo", "Makeni", "Kabala"], answer: "Freetown" },
    { question: "How many schools has she attended?", options: ["2", "3", "1", "4"], answer: "3" },
    { question: "What is the name of her last school?", options: ["Naichom", "SOS", "Wammagriso", "Convent"], answer: "Wammagriso" },
    { question: "Which of the following is Rayals favorite subject?", options: ["Mathematics", "English", "Chemistry", "Biology"], answer: "Chicago" },
    { question: "What is her dream career?", options: ["Surgeon", "Engineer", "Banker", "Doctor"], answer: "Chicago" },
    { question: "Which of the following is her stream?", options: ["Art", "Science", "Commercial"], answer: "Science" },
    { question: "When was she born?", options: ["Today", "March 18 2009", "March 18 2004", "None of the above"], answer: "None of the above" },
    { question: "What is her best sport?", options: ["Basketball", "Tennis", "Football", "Balance ball"], answer: "Football" },
    { question: "What was heer first schools name?", options: ["Wammagriso", "Nice Price Pepartory School", "SOS", "Barnies"], answer: "Nice Price Pepartory School" },
]
};

// Variables to keep track of the current level, question index, and score
let currentLevel = '';
let currentQuestionIndex = 0;
let originalScore = 0;

// DOM elements
const title = document.getElementById("title");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const score = document.getElementById("score");
const quizBox = document.getElementById("quiz-box");
const levelSelect = document.getElementById("level-select");
const emoji = document.getElementById("emoji");
const restartBtn = document.getElementById("restart-btn");

// Function to handle the level selection
function startQuiz(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    originalScore = 0;
    levelSelect.style.display = "none";
    quizBox.style.display = "block";
    nextBtn.disabled = true;
    showQuestion();

    title.innerHTML = '';
    question.classList.add("newTitle");
}

// Function to show questions for selcted level
function showQuestion() {
    let currentQ = questions[currentLevel][currentQuestionIndex];
    question.textContent = currentQ.question;
    options.innerHTML = '';

    currentQ.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "btn wish-btn option-btn";
        btn.style.fontSize = "1em";
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        options.appendChild(btn);
    });
    selected();
}

// Function for highlighting selected option
function selected(){
    const optionBtns = document.querySelectorAll(".option-btn");
    optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            optionBtns.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
        });
    });
  
}

// Function to handle answer selection
function selectAnswer(selected) {
    let correctAnswer = questions[currentLevel][currentQuestionIndex].answer;
    if (selected === correctAnswer) originalScore++;
    nextBtn.disabled = false;
}

// Event listeners for checking if the selected answer is correct and updates the score accordingly
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentLevel].length) {
        showQuestion();
        nextBtn.disabled = true;
    } else {
        finishQuiz();
    }
});

// Function for the displaying of the final score and emoji and the option to restart the quiz
function finishQuiz() {
    question.textContent = `You've finished the ${currentLevel} quiz!`;
    options.innerHTML = '';
    nextBtn.style.display = 'none';
    score.textContent = `Your Score: ${originalScore} / ${questions[currentLevel].length}`;
    const emojiMath = Math.floor(originalScore / questions[currentLevel].length * 100);
    
    if(emojiMath >= 100) {
        emoji.innerHTML = `<span><a href="../Pages/rayal-wish.html">Rayal wish</a></span>`;
    }else if (emojiMath >= 80) {
        emoji.innerHTML = "<span>Excellent 😃</span>";
    } else if (emojiMath >= 50) {
        emoji.innerHTML = "<span><Good 😐></span>";
    } else {
        emoji.innerHTML = "<span>Omo, try again!!! 😞</span>";
    }

    restartBtn.style.display = "block";
    restartBtn.textContent = "Restart Quiz";
}

// Function for the restart button to reset the quiz
function restartQuiz() {
    levelSelect.style.display = "flex";
    quizBox.style.display = "none";
    title.innerHTML = 'How Well Do You Know Rayal?';
    question.classList.remove("newTitle");
    nextBtn.style.display = 'block';
    nextBtn.disabled = true;
    score.textContent = '';
    emoji.innerHTML = '';
    restartBtn.style.display = "none";
}