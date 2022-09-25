## Create A Realtime Watch
```js
// parent part
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

// child part
import React from 'react';
import './Watch.css';

const Watch = (props) => {
    return (
        <div className='watch'>
            <h1>TIME</h1>
            <h2>{props.time}</h2>
        </div>
    );
};

export default Watch;
```