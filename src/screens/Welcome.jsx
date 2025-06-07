import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/register');
  };

  return (
    <div className="welcome-screen" style={styles.container}>
      <h1 style={styles.title}>Медляк начинается</h1>
      <p style={styles.text}>Ты там, где всё снова по любви.</p>
      <button onClick={handleStart} style={styles.button}>
        Заполнить анкету
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#121212',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Welcome;
