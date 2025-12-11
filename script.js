const quizData = [
    {
    question:"Ayon kay ______, ito ay nagmula sa salitang pang-titik-an.", 
    options: [
        "A. Dr. Jose Rizal", 
        "B. Dr. Jose Villa Panganiban", 
        "Dr. Ezekiel R. Borja"], 
    answer: "Dr. Jose Villa Panganiban"
    },
    {
    question:"Ito ay hango sa salitang Latin na ______ na nangangahulugang 'Titik'. ",
    options: [
        "A. Literano", 
        "B. Litterania",
        "C. Lotternina", 
        "D. Litterana"],
    answer: "D. Litterana"
    },
    {
    question: "Ito ay tungkulin ng isang wika nakakapagpanatili ng relasyong sosyal.",
    options: [
        "A. Instrumental",
        "B. Heuristik",
        "C. Interaksyunal",
        "D. Regulatori"
    ],
    answer:"C. Interaksyunal"
    },
    {
    question:"Ito ay isang tungkulin ng Wika na nagbibigay ng impormasyon.",
    options: [
        "A. Regulatori",
        "B. Instrumental",
        "C. Imahinatibo",
        "D. Impormatib"
    ],
    answer: "D. Impormatib"
    },
    {
    question:"Ito ay tungkulin ng wika na kumokontrol at gumagabay sa kilos/asal ng iba.",
    options:[
        "A. Regulatori",
        "B. Instrumental",
        "C. Imahinatibo",
        "D. Impormatib"
    ],
    answer: "A. Regulatori"
    }, 
    {
    question: "Ito ay tungkulin ng wika na nakakapagpahayag ng sariling damdamin o opinyon.",
    options:[
        "A. Regulatori",
        "B. Instrumental",
        "C. Imahinatibo",
        "D. Impormatib"
    ],
    answer: "A. Regulatori"
    },
    {
    question:"Ito ay isa sa elemento ng istrukturang panlipunan na tagapangalaga sa kapakanan at seguridad ng mga taong namumuhay sa isang komunidad.",
    options:[
        "A. Ekonomiya",
        "B. Pamilya",
        "C. Edukasyon",
        "D. Pamahalaan"
    ],
    answer:"D. Pamahalaan"
    },
    {
    question:"Tumutukoy sa dalawa o mahigit pang taong may magkakatulad ng katangian na nagkakaroon ng ugnayan sa bawat isa at bumubuo ng isang ugnayang panlipunan.",
    options:[
        "A. Primary Group",
        "B. Secondary Group",
        "C. Social Group",
        "D. Private Army ni Duterte"
    ],
    answer: "C. Social Group"
    },
    {
    question:"Tumutukoy sa malapit at impormal na ugnayan ng mga indibidwal.",
    options:[
        "A. Primary Group",
        "B. Secondary Group",
        "C. Social Group",
        "D. CPP NPA NDF"
    ],
    answer:"A. Primary Group"
    },
    {
    question:"Ito ay binubuo ng mga indibidwal na may pormal na ugnayan sa isa't isa.",
    options: [
        "A. Primary Group",
        "B. Secondary Group",
        "C. Social Group",
        "D. Black Pink"
    ],
    answer: "B. Secondary Group"
    }

];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        document.getElementById('quiz').style.display = 'none';
    
        const answersDiv = document.querySelector('.answers');
        answersDiv.style.display = "block";
    
       
        document.getElementById('score').innerHTML =
            `Your score: ${score}/${quizData.length}<br>
             <a href="prize.html" class="prize-btn">Click me to get your prize 🎁</a>`;
    
       
        let answersHTML = "<h3>Correct Answers:</h3>";
        quizData.forEach((q, index) => {
            answersHTML += `
                <p><strong>Q${index + 1}:</strong> ${q.question}<br>
                <strong>Answer:</strong> ${q.answer}</p>
            `;
        });
    
        answersDiv.innerHTML += answersHTML; 
        return;
    }

    const q = quizData[currentQuestion];
    document.getElementById('question').innerText = q.question;

    const optDiv = document.getElementById('option');
    optDiv.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        optDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

loadQuestion();