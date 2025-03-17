import React, { useState } from 'react';
import './AdminStyles.css';
import { ArrowLeft } from 'lucide-react';

const AdminLogin: React.FC<{ onLogin: (loginId: string, password: string) => void; error: string; onBack: () => void }> = ({ onLogin, error, onBack }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(loginId, password);
  };

  return (
    <div className="container">
      <button onClick={onBack} className="back-button">
        <ArrowLeft />
      </button>
      <div className="login-container">
        <h1 className="login-title">
          <span className="text-green-600">Admin</span> Login
        </h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="loginId">Login ID</label>
            <input type="text" id="loginId" value={loginId} onChange={(e) => setLoginId(e.target.value)} placeholder="Enter Login ID" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
