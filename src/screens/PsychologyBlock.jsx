import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PsychologyBlock() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/swipe/psychology');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Блок 1: Психология 🧠</h1>
      <p style={styles.text}>
        Очень важно не просто нравиться друг другу, но и подходить психологически.
        Кто-то — шторм. Кто-то — берег. Важно понять, как вы реагируете в трудные моменты,
        как проявляете чувства и чего ждёте от другого.
      </p>
      <button style={styles.button} onClick={handleStart}>
        Начать
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#fdf6f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
