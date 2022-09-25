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