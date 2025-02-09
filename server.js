const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory storage (replace with your database later)
const users = new Map();
const feedback = [];

// Register endpoint
app.post('/api/register', (req, res) => {
  const { email, password, registrationNumber, branch } = req.body;
  
  if (users.has(email)) {
    return res.status(400).json({ success: false, error: 'Email already exists' });
  }

  users.set(email, { password, registrationNumber, branch });
  res.json({ success: true, message: 'Registration successful' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);

  if (!user || user.password !== password) {
    return res.status(400).json({ success: false, error: 'Invalid credentials' });
  }

  res.json({ success: true, user: { email } });
});

// Submit feedback endpoint
app.post('/api/feedback', (req, res) => {
  const { userEmail, professorName, feedbackType, category, feedbackText } = req.body;
  
  feedback.push({
    userEmail,
    professorName,
    feedbackType,
    category,
    feedbackText,
    timestamp: new Date(),
    semester: getCurrentSemester()
  });

  res.json({ success: true, message: 'Feedback submitted successfully' });
});

function getCurrentSemester() {
  const month = new Date().getMonth() + 1;
  return month >= 7 && month <= 12 ? 1 : 2;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});