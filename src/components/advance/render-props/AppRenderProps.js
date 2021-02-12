import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import User from './User';
import Counter from './Counter';

const AppRenderProps = () => {
    return (
        <div>
            <Counter render={(state, handle) => <ClickCounter count={state} handleClick={handle} />} />
            <HoverCounter />
            <User render={(isLoggedIn) => isLoggedIn ? "Anoop kUmar" : "Guest"} />
        </div>
    );
}

export default AppRenderProps;

/*
The term “render prop” refers to a technique for sharing code between React components using "a prop whose value is a function".

as variation we can do it by children also
*/