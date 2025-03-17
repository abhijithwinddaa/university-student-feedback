import React, { useState } from 'react';
import { subjects } from './data/subjects';
import { getQuestionsForSubject } from './data/questions';
import { saveFeedback } from './utils/feedbackStorage';
import './styles/CourseCard.css';

interface Question {
  id: string;
  text: string;
  options: string[];
  type: 'pre' | 'post';
}

interface Props {
  courseCode: string;
  studentId?: string; // Optional studentId prop
}

const CourseCard: React.FC<Props> = ({ courseCode, studentId = 'student1' }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [otherFeedback, setOtherFeedback] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState('pre');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRating, setCurrentRating] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleFeedbackClick = () => {
    setShowFeedbackModal(true);
    setErrorMessage('');
    setOtherFeedback('');
    setActiveTab('pre');
    setCurrentQuestionIndex(0);
    setCurrentRating('');
    setAnswers({});
    setSubmissionStatus('idle');
    
    // Fetch questions when feedback modal is opened
    const subject = subjects.find((s) => s.code === courseCode);
    if (subject) {
      const allQuestions = getQuestionsForSubject(subject.professorId, courseCode);
      const preQuestions = allQuestions.filter(q => q.type === 'pre');
      setQuestions(preQuestions);
    }
  };

  const handleCloseModal = () => {
    setShowFeedbackModal(false);
    setAnswers({});
    setErrorMessage('');
    setOtherFeedback('');
    setCurrentQuestionIndex(0);
    setCurrentRating('');
    setSubmissionStatus('idle');
  };

  const handleSubmitFeedback = () => {
    try {
      setSubmissionStatus('submitting');

      const subject = subjects.find((s) => s.code === courseCode);
      if (!subject) {
        throw new Error('Subject not found');
      }

      // Format answers for storage
      const formattedAnswers = Object.entries(answers).map(([questionId, rating]) => ({
        questionId,
        rating,
      }));

      // Save feedback data
      saveFeedback({
        studentId,
        professorId: subject.professorId,
        courseCode,
        answers: formattedAnswers,
        otherFeedback: otherFeedback || undefined,
      });

      setSubmissionStatus('success');
      setTimeout(() => {
        handleCloseModal();
      }, 1500);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmissionStatus('error');
      setErrorMessage('There was an error submitting your feedback. Please try again.');
    }
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers 0-4
    if (/^[0-4]$/.test(value) || value === '') {
      setCurrentRating(value);
    }
  };

  const handleRatingSubmit = (questionId: string) => {
    if (currentRating !== '' && /^[0-4]$/.test(currentRating)) {
      const rating = parseInt(currentRating, 10);
      setAnswers(prev => ({ ...prev, [questionId]: rating }));
      setCurrentRating('');
      
      if (currentQuestionIndex < activeQuestions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  const handleTabChange = (tabType: 'pre' | 'post') => {
    setActiveTab(tabType);
    setCurrentQuestionIndex(0);
    setCurrentRating('');
    
    const subject = subjects.find((s) => s.code === courseCode);
    if (subject) {
      const allQuestions = getQuestionsForSubject(subject.professorId, courseCode);
      const filteredQuestions = allQuestions.filter(q => q.type === tabType);
      setQuestions(filteredQuestions);
    }
  };

  const subject = subjects.find((s) => s.code === courseCode);
  const professorId = subject?.professorId;

  if (!subject || !professorId) {
    return (
      <div className="course-card">
        <button onClick={handleFeedbackClick} className="give-feedback-button">Give Feedback</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }

  const activeQuestions = questions.filter(q => q.type === activeTab);
  const isAllQuestionsAnswered = activeQuestions.length > 0 && 
    activeQuestions.every(q => answers[q.id] !== undefined);

  return (
    <div className="course-card">
      <button onClick={handleFeedbackClick} className="give-feedback-button">Give Feedback</button>

      {showFeedbackModal && (
        <div className="feedback-modal">
          <div className="feedback-content">
            <div className="feedback-header">
              <h2 className="feedback-title">Feedback for {courseCode}</h2>
              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>
            </div>

            <div className="feedback-tabs">
              <button
                className={`tab-button ${activeTab === 'pre' ? 'active' : ''}`}
                onClick={() => handleTabChange('pre')}
              >
                Pre-Feedback
              </button>
              <button
                className={`tab-button ${activeTab === 'post' ? 'active' : ''}`}
                onClick={() => handleTabChange('post')}
              >
                Post-Feedback
              </button>
            </div>

            <div className="feedback-instructions">
              <p>Please rate each question on a scale of 0-4:</p>
              <p>0 = Poor, 1 = Fair, 2 = Average, 3 = Good, 4 = Excellent</p>
            </div>

            {activeQuestions.length === 0 ? (
              <p>No {activeTab}-feedback questions available for this course.</p>
            ) : (
              <div className="feedback-questions">
                {activeQuestions.map((question, index) => {
                  const isAnswered = answers[question.id] !== undefined;
                  const isCurrentQuestion = index === currentQuestionIndex;
                  const isPreviouslyAnswered = isAnswered && index < currentQuestionIndex;
                  
                  const shouldDisplay = isCurrentQuestion || isPreviouslyAnswered;
                  
                  if (!shouldDisplay) return null;
                  
                  return (
                    <div key={question.id} className={`question ${isAnswered ? 'answered' : ''}`}>
                      <div className="question-container">
                        <p className="question-text">{question.text}</p>
                        
                        {isCurrentQuestion ? (
                          <div className="rating-container">
                            <input
                              type="text"
                              value={currentRating}
                              onChange={handleRatingChange}
                              className="rating-input"
                              placeholder="0-4"
                              maxLength={1}
                            />
                            <button 
                              className="submit-rating"
                              onClick={() => handleRatingSubmit(question.id)}
                              disabled={!currentRating || !/^[0-4]$/.test(currentRating)}
                            >
                              Next
                            </button>
                          </div>
                        ) : (
                          <div className="rating-display">
                            <p>Your rating: {answers[question.id]}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {isAllQuestionsAnswered && (
              <>
                <div className="optional-feedback">
                  <h3>Additional Feedback (Optional)</h3>
                  <textarea
                    placeholder="Please provide any additional feedback (up to 2000 words)"
                    value={otherFeedback}
                    onChange={(e) => {
                      const text = e.target.value;
                      // Limit to approximately 2000 words (rough calculation)
                      if (text.split(/\s+/).length <= 2000) {
                        setOtherFeedback(text);
                      }
                    }}
                    className="feedback-textarea"
                    rows={5}
                  />
                </div>
                
                <button 
                  className={`submit-feedback ${submissionStatus === 'submitting' ? 'submitting' : ''}`} 
                  onClick={handleSubmitFeedback}
                  disabled={submissionStatus === 'submitting'}
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 
                   submissionStatus === 'success' ? 'Submitted Successfully!' : 
                   'Submit Feedback'}
                </button>
                
                {submissionStatus === 'error' && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
