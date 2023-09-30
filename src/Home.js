import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const moveToCat = () => {
    navigate('/cat');
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Cat Status App</h1>
      <h2>Push the Button Below to Enter</h2>
      <button onClick={moveToCat}>Enter</button>
    </div>
  );
}
