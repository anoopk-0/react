import React from 'react';
import ClickCounter from './ClickCounter';
import ClickCounterWithHOC from './ClickCounterWithHOC';
import HoverCounter from './HoverCounter';

const AppHOC = () => {
    return (
        <div>
            <ClickCounter />
            <HoverCounter />
            <h1>with HOC</h1>
            <ClickCounterWithHOC name="anoop" />
        </div>
    );
}

export default AppHOC;

/*
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

** lifting the state don't work.as sharing is not alwasy b/w parent and child.

a higher-order component is a pattern where a function that takes a component  as an argument and returns a new component.

const EnhancedComponent = higherOrderComponent(WrappedComponent);(add data or new functionality)
        example : withCounter(Wrapper compoent)
*/
