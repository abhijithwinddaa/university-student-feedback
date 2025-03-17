import React from 'react';
import { Feedback } from 'src/App';
import './AdminStyles.css';

interface ResponseTableProps {
  responses: Feedback[];
}

const ResponseTable: React.FC<ResponseTableProps> = ({ responses }) => {
  if (!responses || responses.length === 0) {
    return <p>No feedback responses available.</p>;
  }

  return (
    <div className="response-table-container">
      <table className="response-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Subject Code</th>
            <th>Feedback Type</th>
            <th>Question ID</th>
            <th>Selected Option</th>
            <th>Other Feedback</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response, index) => (
            <React.Fragment key={index}>
              {response.questions.map((question, qIndex) => (
                <tr key={`${index}-${qIndex}`} className="response-row">
                  <td>{response.studentId}</td>
                  <td>{response.subjectCode}</td>
                  <td>{response.feedbackType}</td>
                  <td>{question.id}</td>
                  <td>{question.selectedOption}</td>
                  {qIndex === 0 && <td rowSpan={response.questions.length}>{response.otherFeedback}</td>}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponseTable;
