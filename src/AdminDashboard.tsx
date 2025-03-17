import React, { useState, useEffect } from 'react';
import { subjects } from './data/subjects';
import { professors } from './data/professors';
import { getRatingsSummary, exportFeedbackAsCSV, RatingsSummary } from './utils/feedbackStorage';
import './styles/AdminDashboard.css';

interface AdminDashboardProps {
  onLogout?: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout = () => {} }) => {
  const [feedbackData, setFeedbackData] = useState<RatingsSummary[]>([]);
  const [selectedProfessor, setSelectedProfessor] = useState<string | 'all'>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load feedback data when component mounts
    loadFeedbackData();
  }, []);

  const loadFeedbackData = () => {
    setIsLoading(true);
    try {
      const summaries = getRatingsSummary();
      setFeedbackData(summaries);
    } catch (error) {
      console.error('Error loading feedback data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate totals and averages for display
  const calculateStats = (ratings: RatingsSummary['ratings']) => {
    const totalRatings = Object.values(ratings).reduce((sum, count) => sum + count, 0);
    const weightedSum = Object.entries(ratings).reduce(
      (sum, [rating, count]) => sum + Number(rating) * count, 
      0
    );
    const average = totalRatings > 0 ? (weightedSum / totalRatings).toFixed(2) : "N/A";
    
    return {
      totalStudents: totalRatings,
      averageRating: average
    };
  };

  const handleExportCSV = () => {
    try {
      const csvContent = exportFeedbackAsCSV();
      
      // Create a blob with the CSV data
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      
      // Create a download link
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      // Set up link properties
      link.setAttribute('href', url);
      link.setAttribute('download', `feedback_export_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      
      // Add link to document, trigger click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting CSV:', error);
      alert('Failed to export data. Please try again.');
    }
  };

  const displayedData = selectedProfessor === 'all' 
    ? feedbackData 
    : feedbackData.filter(data => data.professorId === selectedProfessor);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Professor Ratings Dashboard</h1>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
      
      <div className="filter-section">
        <label htmlFor="professor-filter">Filter by Professor:</label>
        <select 
          id="professor-filter"
          value={selectedProfessor}
          onChange={(e) => setSelectedProfessor(e.target.value)}
          className="professor-select"
        >
          <option value="all">All Professors</option>
          {professors.map(professor => (
            <option key={professor.id} value={professor.id}>
              {professor.name}
            </option>
          ))}
        </select>
        <button className="refresh-button" onClick={loadFeedbackData}>
          Refresh Data
        </button>
      </div>
      
      {isLoading ? (
        <div className="loading">Loading ratings data...</div>
      ) : (
        <div className="table-container">
          <table className="ratings-table">
            <thead>
              <tr>
                <th>Professor Name</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Rating 0</th>
                <th>Rating 1</th>
                <th>Rating 2</th>
                <th>Rating 3</th>
                <th>Rating 4</th>
                <th>Total Students</th>
                <th>Average Rating</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.length > 0 ? (
                displayedData.map((data) => {
                  const professor = professors.find(p => p.id === data.professorId);
                  const subject = subjects.find(s => s.code === data.courseCode);
                  const { totalStudents, averageRating } = calculateStats(data.ratings);
                  
                  return (
                    <tr key={`${data.professorId}-${data.courseCode}`}>
                      <td>{professor?.name || 'Unknown'}</td>
                      <td>{data.courseCode}</td>
                      <td>{subject?.name || 'Unknown Course'}</td>
                      <td>{data.ratings[0]}</td>
                      <td>{data.ratings[1]}</td>
                      <td>{data.ratings[2]}</td>
                      <td>{data.ratings[3]}</td>
                      <td>{data.ratings[4]}</td>
                      <td>{totalStudents}</td>
                      <td className={averageRating !== "N/A" && Number(averageRating) >= 3 
                        ? "good-rating" 
                        : averageRating !== "N/A" && Number(averageRating) < 2 
                          ? "poor-rating" 
                          : ""
                      }>
                        {averageRating}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={10} className="no-data">
                    {selectedProfessor === 'all' 
                      ? 'No rating data available. Ratings will appear here after students submit feedback.' 
                      : 'No ratings found for this professor.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="export-section">
        <button className="export-button" onClick={handleExportCSV}>
          Export to CSV
        </button>
        <p className="note">Note: This is temporary data stored locally. In the future, this will be connected to a database.</p>
      </div>
    </div>
  );
};

export default AdminDashboard; 