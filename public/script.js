// Professor data with subjects and questions
const professors = {
    "Dr. Alice Thompson": {
        subjects: ["Data Structures", "Algorithms", "Operating Systems", "Artificial Intelligence", 
                  "Database Management", "Computer Networks", "Cryptography", "Software Engineering"],
        questions: [
            {
                text: "How effectively does Dr. Alice Thompson explain complex concepts?",
                options: ["Very clearly", "Somewhat clearly", "Neutral", "Not clear at all"]
            },
            {
                text: "How engaging are Dr. Thompson's lectures?",
                options: ["Extremely engaging", "Moderately engaging", "Occasionally engaging", "Not engaging"]
            },
            {
                text: "Does Dr. Thompson encourage student participation?",
                options: ["Always", "Often", "Sometimes", "Never"]
            },
            {
                text: "How well does Dr. Thompson address student queries?",
                options: ["Thoroughly", "Adequately", "Minimally", "Not at all"]
            },
            {
                text: "How useful are Dr. Thompson's assignments in understanding the subject?",
                options: ["Very useful", "Somewhat useful", "Neutral", "Not useful"]
            }
        ]
    },
    "Dr. Brian Edwards": {
        subjects: ["Machine Learning", "Cloud Computing", "Web Development", "Cybersecurity", 
                  "Software Testing", "Information Retrieval", "Human-Computer Interaction", "Distributed Systems"],
        questions: [
            {
                text: "How well does Dr. Brian Edwards integrate real-world examples into his teaching?",
                options: ["Frequently", "Occasionally", "Rarely", "Never"]
            },
            {
                text: "Is Dr. Edwards accessible for doubt-clearing sessions?",
                options: ["Always available", "Often available", "Sometimes available", "Rarely available"]
            },
            {
                text: "How would you rate Dr. Edwards' classroom management?",
                options: ["Excellent", "Good", "Average", "Poor"]
            },
            {
                text: "How innovative are Dr. Edwards' teaching methods?",
                options: ["Highly innovative", "Moderately innovative", "Slightly innovative", "Not innovative"]
            },
            {
                text: "Are Dr. Edwards' course materials helpful for exam preparation?",
                options: ["Extremely helpful", "Helpful", "Slightly helpful", "Not helpful"]
            }
        ]
    },
    "Dr. Clara Johnson": {
        subjects: ["Linear Algebra", "Probability & Statistics", "Discrete Mathematics", "Calculus", 
                  "Numerical Methods", "Graph Theory", "Mathematical Logic", "Optimization Techniques"],
        questions: [
            {
                text: "How clear are Dr. Clara Johnson's explanations of mathematical concepts?",
                options: ["Very clear", "Clear", "Somewhat clear", "Not clear"]
            },
            {
                text: "Does Dr. Johnson provide sufficient examples during lectures?",
                options: ["Yes, always", "Most of the time", "Occasionally", "Rarely"]
            },
            {
                text: "How effective are Dr. Johnson's problem-solving sessions?",
                options: ["Highly effective", "Effective", "Moderately effective", "Ineffective"]
            },
            {
                text: "How approachable is Dr. Johnson for academic help?",
                options: ["Very approachable", "Approachable", "Somewhat approachable", "Not approachable"]
            },
            {
                text: "How well does Dr. Johnson relate mathematical theories to practical applications?",
                options: ["Extremely well", "Well", "Moderately well", "Not well"]
            }
        ]
    },
    "Dr. Daniel White": {
        subjects: ["Software Architecture", "Embedded Systems", "Mobile App Development", "DevOps", 
                  "Digital Signal Processing", "Information Security", "Compiler Design", "Game Development"],
        questions: [
            {
                text: "How structured are Dr. Daniel White's lectures?",
                options: ["Highly structured", "Well-structured", "Moderately structured", "Poorly structured"]
            },
            {
                text: "Does Dr. White encourage hands-on learning?",
                options: ["Always", "Often", "Sometimes", "Never"]
            },
            {
                text: "How well does Dr. White cover the syllabus content?",
                options: ["Completely", "Mostly", "Partially", "Incompletely"]
            },
            {
                text: "How effective are Dr. White's practical assignments?",
                options: ["Very effective", "Effective", "Moderately effective", "Not effective"]
            },
            {
                text: "Does Dr. White provide timely feedback on assessments?",
                options: ["Always", "Usually", "Occasionally", "Rarely"]
            }
        ]
    }
};

// Registration and login logic
let registeredUsers = {};

// Function to show message for 7 seconds then hide it
function showMessageWithTimeout(element, duration = 7000) {
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const regError = document.getElementById('regError');
    const regSuccess = document.getElementById('regSuccess');

    regError.style.display = 'none';
    regSuccess.style.display = 'none';

    if (email in registeredUsers) {
        regError.textContent = 'Email already exists. Please use a different email.';
        showMessageWithTimeout(regError);
        return;
    }

    registeredUsers[email] = password;
    showMessageWithTimeout(regSuccess, 2000); // Keep 2 seconds for registration success as it includes redirect
    
    // Clear form
    this.reset();
    
    // Redirect to login after 2 seconds
    setTimeout(() => {
        document.getElementById('registration').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        regSuccess.style.display = 'none';
    }, 2000);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');

    loginError.style.display = 'none';

    if (email in registeredUsers && registeredUsers[email] === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('feedback').style.display = 'block';
        this.reset();
    } else {
        loginError.textContent = 'Invalid email or password. Please try again or register.';
        showMessageWithTimeout(loginError);
    }
});

// Populate professor dropdown
const professorSelect = document.getElementById('onWhom');
Object.keys(professors).forEach(profName => {
    const option = document.createElement('option');
    option.value = profName;
    option.textContent = profName;
    professorSelect.appendChild(option);
});

// Handle professor selection
const subjectSelect = document.getElementById('subject');
professorSelect.addEventListener('change', function() {
    const selectedProf = professors[this.value];
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    
    if (selectedProf) {
        selectedProf.subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
    }
    
    // Clear questions when professor changes
    document.getElementById('questions-container').innerHTML = '';
});

// Handle subject selection
subjectSelect.addEventListener('change', function() {
    const selectedProf = professors[professorSelect.value];
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    
    if (selectedProf && this.value) {
        selectedProf.questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';
            questionDiv.innerHTML = `
                <p class="question-text">${question.text}</p>
                <div class="options-container">
                    ${question.options.map((option, optIndex) => `
                        <div class="option-item">
                            <input type="radio" id="q${index}_${optIndex}" name="q${index}" value="${option}" required>
                            <label for="q${index}_${optIndex}">${option}</label>
                        </div>
                    `).join('')}
                </div>
            `;
            questionsContainer.appendChild(questionDiv);
        });
    }
});

// Word count for additional feedback
const additionalFeedback = document.getElementById('additionalFeedback');
const wordCount = document.querySelector('.word-count');

additionalFeedback.addEventListener('input', function() {
    const words = this.value.trim().split(/\s+/).filter(word => word.length > 0);
    const count = words.length;
    wordCount.textContent = `${count}/1000 words`;
});

// Handle feedback submission
document.getElementById('submitFeedback').addEventListener('click', function() {
    const professor = professorSelect.value;
    const subject = subjectSelect.value;
    const questionsContainer = document.getElementById('questions-container');
    const questions = questionsContainer.querySelectorAll('.question-item');
    const additionalFeedbackText = additionalFeedback.value.trim();
    const feedbackError = document.getElementById('feedbackError');
    let allAnswered = true;
    
    feedbackError.style.display = 'none';
    
    // Check if all questions are answered
    questions.forEach((question, index) => {
        const answered = question.querySelector(`input[name="q${index}"]:checked`);
        if (!answered) allAnswered = false;
    });
    
    if (!professor || !subject || !allAnswered) {
        feedbackError.textContent = 'Please fill in all fields and answer all questions.';
        feedbackError.style.display = 'block';
        return;
    }
    
    // Collect answers
    const answers = Array.from(questions).map((question, index) => {
        const selected = question.querySelector(`input[name="q${index}"]:checked`);
        return selected.value;
    });
    
    // Show thank you message and logout button
    const feedbackContainer = document.getElementById('feedback');
    feedbackContainer.innerHTML = `
        <div class="thank-you-message">
            <h2>Thank You for Your Feedback!</h2>
            <p>Your responses have been recorded.</p>
            <button id="logoutAfterSubmit">Logout</button>
        </div>
    `;
    
    // Add event listener to new logout button
    document.getElementById('logoutAfterSubmit').addEventListener('click', function() {
        document.querySelector('.thank-you-message').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    });
});

// Navigation handlers
document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login').style.display = 'none';
    document.getElementById('registration').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});