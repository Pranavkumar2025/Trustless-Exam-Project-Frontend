import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleStudentClick = () => {
    navigate('/student');
  };

  const handleAllUsersClick = () => {
    navigate('/users');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-green-200 via-blue-200 to-purple-200'} flex items-center justify-center min-h-screen transition-colors duration-500`}>
      <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} text-center p-10 rounded-xl border-2 border-black shadow-lg transition-colors duration-500 max-w-lg`}>
        <h1 className="text-5xl font-extrabold mb-10 animate-pulse md:text-4xl sm:text-3xl">Trustless Examination System</h1>
        <div className="flex flex-wrap justify-center space-x-6 mb-6 gap-4">
          <button
            onClick={handleAdminClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Admin
          </button>
          <button
            onClick={handleStudentClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Student
          </button>
          <button
            onClick={handleAllUsersClick}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            All Users
          </button>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`${isDarkMode ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-800' : 'bg-gray-800 hover:bg-gray-700 text-white'} font-bold py-2 px-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
