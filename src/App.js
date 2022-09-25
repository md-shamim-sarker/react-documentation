import {useEffect, useState} from 'react';
import './App.css';
import Watch from './components/Watch/Watch';

function App() {
  const [time, setTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      setTime(time => new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return (
    <div className="App">
      <Watch time={time}></Watch>
    </div>
  );
}

export default App;