const questions = [
    {
      question: "HTML ka full form kya hai?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tabular Markup Language",
        "Home Tool Markup Language"
      ],
      answer: 0   
    },
    {
      question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
      options: ["font-color", "text-color", "color", "background"],
      answer: 2
    },
    {
      question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
      options: ["var", "int", "string", "declare"],
      answer: 0
    },
    {
      question: "Kaunsa HTML tag sabse bada heading banata hai?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      answer: 2
    },
    {
      question: "JavaScript me array ki length kaise pata karte hain?",
      options: ["array.size()", "array.length", "array.count", "length(array)"],
      answer: 1
    }
  ];
  // 


  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 15;
  let timerInterval;
  let answered = false;


  window.onload = function() {
    loadQuestion();
  };

  // function loadQuestion(){
  //   answered=false
  //   timeLeft=15
  
  // }
  // loadQuestion()


  function loadQuestion() {
    answered = false;
    timeLeft = 15;
    // document.getElementById('timer').textContent = timeLeft;
      document.querySelector("#timer").textContent=timeLeft
        document.getElementById('nextBtn').disabled = true;
            const q = questions[currentQuestion];
    document.getElementById('questionNum').textContent =
      `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('question').textContent = q.question;





    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = option;
      btn.onclick = () => checkAnswer(index, btn);
      optionsDiv.appendChild(btn);
    });

    startTimer();
  }


  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeUp();
      }
    }, 1000);
  }


  function checkAnswer(selectedIndex, btn) {
    if (answered) return;    
    answered = true;
    clearInterval(timerInterval);

    const correctIndex = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll('.option');


    allOptions.forEach(o => o.disabled = true);

    if (selectedIndex === correctIndex) {
      btn.classList.add('correct');
      score++;
      document.getElementById('score').textContent = score;
    } else {
      btn.classList.add('wrong');

      allOptions[correctIndex].classList.add('correct');
    }

    document.getElementById('nextBtn').disabled = false;
  }


  function timeUp() {
    answered = true;
    const correctIndex = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll('.option');

    allOptions.forEach(o => o.disabled = true);
    allOptions[correctIndex].classList.add('correct');
    document.getElementById('nextBtn').disabled = false;
  }


  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }


  function showResult() {
    document.getElementById('quizScreen').classList.add('hide');
    document.getElementById('resultScreen').classList.remove('hide');

    document.getElementById('finalScore').textContent = `${score} / ${questions.length}`;


    let msg = '';
    const percent = (score / questions.length) * 100;
    if (percent === 100) msg = "Perfect score! 🏆 Tu toh genius hai!";
    else if (percent >= 60) msg = "Great job! 👏 Acchhi performance.";
    else if (percent >= 40) msg = "Not bad! Thoda aur practice kar. 💪";
    else msg = "Don't worry, agli baar better karega! 📚";

    document.getElementById('resultMsg').textContent = msg;
  }


  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('score').textContent = 0;
    document.getElementById('resultScreen').classList.add('hide');
    document.getElementById('quizScreen').classList.remove('hide');
    loadQuestion();
  }