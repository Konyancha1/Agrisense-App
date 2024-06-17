import React, { useState } from 'react';
import logo from '../../assets/images/agrisense - Logo.png';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <img src={logo} alt="Logo" className="h-12 mb-6" />
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-col space-y-5 items-center justify-center">
          <button
            type="submit"
            className={`bg-green-600 hover:bg-green-800 w-[10rem] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
          <a href="/" className="text-gray-700 font-semibold underline hover:text-green-600">
            Back to Home
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;