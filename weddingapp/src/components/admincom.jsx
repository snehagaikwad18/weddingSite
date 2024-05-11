import React, { useState } from 'react';
import AdminCalendar from './AdminCalender';

const AdminPasswordProtection = () => {
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'dhirajgod') {
      setIsAuthenticated(true);
      setShowModal(false);
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-lg font-semibold mb-4">Enter Password:</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={handleChange}
                required
                className="input-field"
              />
              <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {isAuthenticated && <AdminCalendar />}
    </div>
  );
};

export default AdminPasswordProtection;
