import React, { useState } from 'react';
import LoginForm from '../components/common/loginForm';
import background from '../assets/images/cooperative.png'

const CooperativePage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (username: string, password: string) => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      console.log('Username:', username);
      console.log('Password:', password);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen font-sans">
      <div className="hidden lg:block w-[45%] h-full relative" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="flex w-full lg:w-[55%] items-center justify-center">
        <div className="w-full md:w-[60%]">
          <LoginForm onSubmit={handleLogin} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default CooperativePage;
