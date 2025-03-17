import React, { useState } from 'react';
import ResponseTable from './ResponseTable';
import { getResponses } from '../data/response';

const AdminDashboard: React.FC = () => {
  const [showResponses, setShowResponses] = useState(false);

  const handleViewResponsesClick = () => {
    setShowResponses(true);
  };

  return (
    <div className="admin-dashboard container">
      <h1>Admin Dashboard</h1>
      <button onClick={handleViewResponsesClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        View Responses
      </button>
      {showResponses && <ResponseTable responses={getResponses()} />}
    </div>
  );
};

export default AdminDashboard;
