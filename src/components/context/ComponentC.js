import React from 'react';
import CountContext from './CountContext';

const ComponentC = () => {
    return (
        <div>
            <h1>Component C</h1>
            <CountContext.Consumer>
                {
                    ({ state, handle }) => {
                        return <>
                            <ul>
                                <li>name: {state.username}</li>
                                <li>count: {state.count}</li>
                            </ul>
                            <button onClick={handle}>Increment</button>
                        </>
                    }
                }
            </CountContext.Consumer>
        </div>
    );
}

export default ComponentC;
