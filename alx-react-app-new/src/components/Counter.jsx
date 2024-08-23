import React, { useState } from 'react';

function Counter() {
    // Initialize state with a count starting at 0
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
            <button 
                style={{ margin: '5px', padding: '10px 20px' }} 
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button 
                style={{ margin: '5px', padding: '10px 20px' }} 
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
            <button 
                style={{ margin: '5px', padding: '10px 20px' }} 
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
