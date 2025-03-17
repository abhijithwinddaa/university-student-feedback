// This is a temporary solution to store feedback data until a database is implemented
// In a real application, this would be replaced with API calls to a backend service

interface FeedbackQuestion {
  questionId: string;
  rating: number;
}

export interface FeedbackSubmission {
  id: string;
  studentId: string;
  professorId: string;
  courseCode: string;
  submissionDate: string;
  answers: FeedbackQuestion[];
  otherFeedback?: string;
}

export interface RatingsSummary {
  professorId: string;
  courseCode: string;
  ratings: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
  };
}

// Generate a simple unique ID for feedback submissions
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

// Save a feedback submission to localStorage
export const saveFeedback = (submission: Omit<FeedbackSubmission, 'id' | 'submissionDate'>): void => {
  try {
    // Get existing feedback data
    const existingData = getFeedbackData();
    
    // Create a new submission with an ID and date
    const newSubmission: FeedbackSubmission = {
      ...submission,
      id: generateId(),
      submissionDate: new Date().toISOString(),
    };
    
    // Add to existing data
    existingData.push(newSubmission);
    
    // Save back to localStorage
    localStorage.setItem('feedbackData', JSON.stringify(existingData));
    
    // Update the ratings summary as well
    updateRatingsSummary(newSubmission);
    
    console.log('Feedback saved successfully');
  } catch (error) {
    console.error('Error saving feedback:', error);
  }
};

// Get all feedback submissions
export const getFeedbackData = (): FeedbackSubmission[] => {
  try {
    const data = localStorage.getItem('feedbackData');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving feedback data:', error);
    return [];
  }
};

// Get feedback submissions for a specific course
export const getFeedbackForCourse = (courseCode: string): FeedbackSubmission[] => {
  const allFeedback = getFeedbackData();
  return allFeedback.filter(submission => submission.courseCode === courseCode);
};

// Get feedback submissions for a specific professor
export const getFeedbackForProfessor = (professorId: string): FeedbackSubmission[] => {
  const allFeedback = getFeedbackData();
  return allFeedback.filter(submission => submission.professorId === professorId);
};

// Update the ratings summary when new feedback is submitted
const updateRatingsSummary = (submission: FeedbackSubmission): void => {
  try {
    // Get existing ratings summary
    const summaries = getRatingsSummary();
    
    // Find if there's an existing summary for this professor and course
    let summary = summaries.find(
      s => s.professorId === submission.professorId && s.courseCode === submission.courseCode
    );
    
    // If no existing summary, create a new one
    if (!summary) {
      summary = {
        professorId: submission.professorId,
        courseCode: submission.courseCode,
        ratings: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 }
      };
      summaries.push(summary);
    }
    
    // Update the ratings counts based on the submission
    submission.answers.forEach(answer => {
      const rating = answer.rating;
      if (rating >= 0 && rating <= 4) {
        summary!.ratings[rating as 0 | 1 | 2 | 3 | 4]++;
      }
    });
    
    // Save the updated summaries
    localStorage.setItem('ratingsSummary', JSON.stringify(summaries));
  } catch (error) {
    console.error('Error updating ratings summary:', error);
  }
};

// Get the ratings summary for all courses and professors
export const getRatingsSummary = (): RatingsSummary[] => {
  try {
    const data = localStorage.getItem('ratingsSummary');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving ratings summary:', error);
    return [];
  }
};

// Export feedback data as CSV
export const exportFeedbackAsCSV = (): string => {
  const summaries = getRatingsSummary();
  
  // Create CSV header
  let csv = 'Professor ID,Course Code,Rating 0,Rating 1,Rating 2,Rating 3,Rating 4,Total Students,Average Rating\n';
  
  // Add data rows
  summaries.forEach(summary => {
    const ratings = summary.ratings;
    const totalStudents = Object.values(ratings).reduce((sum, count) => sum + count, 0);
    const weightedSum = Object.entries(ratings).reduce(
      (sum, [rating, count]) => sum + Number(rating) * count, 
      0
    );
    const averageRating = totalStudents > 0 ? (weightedSum / totalStudents).toFixed(2) : "N/A";
    
    csv += `${summary.professorId},${summary.courseCode},${ratings[0]},${ratings[1]},${ratings[2]},${ratings[3]},${ratings[4]},${totalStudents},${averageRating}\n`;
  });
  
  return csv;
};

// Clear all feedback data (for testing purposes)
export const clearFeedbackData = (): void => {
  localStorage.removeItem('feedbackData');
  localStorage.removeItem('ratingsSummary');
  console.log('All feedback data cleared');
}; 