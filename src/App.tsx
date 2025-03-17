import React, { useState, useRef } from 'react';
import { students } from './data/students';
import { subjects } from './data/subjects';
import { professors } from './data/professors';
import { getQuestionsForSubject } from './data/questions';
import { addResponse, getResponses } from './data/response';
import './styles/App.css';
import { ArrowLeft, LogOut } from 'lucide-react';
import QuestionContainer from './questionContainer';
import { uniqueFeedbackIds } from './data/unqNum';
import CourseCard from './CourseCard';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './AdminDashboard';

const LoginForm: React.FC<{ onLogin: (usn: string, password: string) => void; error: string; userType: string; onBack: () => void; }> = ({ onLogin, error, userType, onBack }) => {
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(usn, password);
  };

  return (
    <div className="container">
      <button onClick={onBack} className="back-button">
        <ArrowLeft />
      </button>
      <div className="login-container">
        <h1 className="login-title">
          <span className="text-blue-600">AMI</span>ZONE
        </h1>
        <h2 className="login-subtitle">
          LOGIN <span className="text-gray-700">{userType}</span>
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="usn">{userType === 'STUDENT' ? 'USN ID' : 'LOGIN ID'}</label>
            <input id="usn" type="text" value={usn} onChange={(e) => setUsn(e.target.value)} placeholder={`Enter your ${userType === 'STUDENT' ? 'USN ID' : 'Login ID'}`} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};


const Dashboard: React.FC<{ student: any; onLogout: () => void }> = ({ student, onLogout }) => {
  const [selectedYear, setSelectedYear] = useState('2023-2024');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [feedbackSubject, setFeedbackSubject] = useState<any | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const years = ['2023-2024', '2024-2025', '2025-2026', '2026-2027'] as const;
  type Year = typeof years[number];
  const semesters: Record<Year, number[]> = {
    '2023-2024': [1, 2],
    '2024-2025': [3, 4],
    '2025-2026': [5, 6],
    '2026-2027': [7, 8],
  };
  const filteredSubjects = subjects.filter((s) => s.year === selectedYear && s.semester === selectedSemester);

  const handleCloseFeedbackModal = () => {
    setShowFeedbackModal(false);
  };

  console.log("Filtered Subjects:", filteredSubjects);

  return (
    <div className="dashboard">
      <div className="dashboard-top-section">
        <div className="profile-section flex items-center space-x-4 mb-4">
          <img src={student.profilePicture} alt={student.name} className="w-20 h-20 rounded-full" />
          <div className="profile-info">
            <h2 className="text-green-600 text-xl font-bold">{student.name}</h2>
            <p className="text-gray-600">USN: {student.usn}</p>
            <p className="text-gray-600">Branch: {student.branch}</p>
            <p className="text-gray-600">Semester: {student.currentSemester}</p>
          </div>
        </div>
        <button onClick={onLogout} className="logout-button">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
      <div className="year-selector mb-2">
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value as Year)} className="w-full p-2 border border-gray-300 rounded">
          {years.map((year) => <option key={year}>{year}</option>)}
        </select>
      </div>
      <div className="semester-buttons flex justify-center space-x-4 mb-4">
        {semesters[selectedYear as Year].map((sem: number) => (
          <button key={sem} onClick={() => setSelectedSemester(sem)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Semester {sem}
          </button>
        ))}
      </div>
      {selectedSemester && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject) => {
              const professor = professors.find((p) => p.id === subject.professorId);
              const feedbackId = uniqueFeedbackIds.find((item) => item.courseCode === subject.code)?.id;
              return (
                <div key={subject.code} className="subject-card p-4 rounded-lg shadow-md">
                  {professor && (
                    <img src={professor.profilePicture} alt={professor.name} className="w-12 h-12 rounded-full mb-2" />
                  )}
                  <h3 className="text-xl font-bold text-white">{subject.name}</h3>
                  <p className="text-white">Course Code: {subject.code}</p>
                  <p className="text-white">Professor: {professor?.name || 'N/A'}</p>
                  <CourseCard courseCode={subject.code} studentId={student.usn} />
                </div>
              );
            })
          ) : (
            <p className="text-center text-red-500">No subjects found for this semester.</p>
          )}
        </div>
      )}
      {!selectedSemester && (
        <p>Please select a semester to view subjects.</p>
      )}
      {showFeedbackModal && feedbackSubject && (
        <QuestionContainer
          subject={{ ...feedbackSubject, studentId: student.usn, courseCode: feedbackSubject.code }}
          courseCode={feedbackSubject.code}
          studentId={student.usn}
          onClose={handleCloseFeedbackModal}
          onSubmit={addResponse}
          preFeedbackEnabled={true}
          postFeedbackEnabled={true}
        />
      )}
    </div>
  );
};

const AdminSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [adminPage, setAdminPage] = useState<'login' | 'dashboard'>('login');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleAdminLogin = (loginId: string, password: string) => {
    if (loginId === 'admin' && password === 'admin') {
      setIsAdminLoggedIn(true);
      setAdminPage('dashboard');
      setLoginError('');
    } else {
      setLoginError('Invalid login ID or password');
      setTimeout(() => setLoginError(''), 3000);
    }
  };

  const handleLogout = () => {
    setAdminPage('login');
    setIsAdminLoggedIn(false);
  };

  if (adminPage === 'login') {
    return <AdminLogin onLogin={handleAdminLogin} error={loginError} onBack={onBack} />;
  }

  if (adminPage === 'dashboard' && isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return null;
};


function App() {
  const [page, setPage] = useState<'home' | 'student' | 'admin'>('home');
  const [currentStudent, setCurrentStudent] = useState<any | null>(null);
  const [error, setError] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleLogin = (usn: string, password: string) => {
    const student = students.find((s) => s.usn === usn);
    if (student && password === usn) {
      setCurrentStudent(student);
      setSelectedSemester(null);
      setError('');
    } else {
      setError('Invalid USN or password');
      setTimeout(() => setError(''), 5000);
    }
  };

  const handleStudentLogout = () => {
    setCurrentStudent(null);
    setPage('home');
  };

  const handleCloseFeedbackModal = () => {
    setShowFeedbackModal(false);
  };

  if (page === 'home') {
    return (
      <div className="home-container flex justify-center items-center h-screen">
        <div className="button-group space-x-4">
          <button onClick={() => setPage('student')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            STUDENT
          </button>
          <button onClick={() => setPage('admin')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            ADMIN
          </button>
        </div>
      </div>
    );
  }

  if (page === 'admin') {
    return <AdminSection onBack={() => setPage('home')} />;
  }


  if (currentStudent) {
    return <Dashboard student={currentStudent} onLogout={handleStudentLogout} />;
  }

  return (
    <LoginForm
      onLogin={handleLogin}
      error={error}
      userType={page.toUpperCase()}
      onBack={() => setPage('home')}
    />
  );
}

export default App;
