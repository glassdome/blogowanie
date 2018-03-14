import React from 'react';

const VoteChanger = (props) => {
    return (
        <span>
            <button onClick={() => 
                 props.handleIncrease(props.id)
            }>Vote Up</button>
            <button onClick={() => 
                 props.handleDecrease(props.id)
            }>Vote Down</button>
        </span>
    )
}

export default VoteChanger;