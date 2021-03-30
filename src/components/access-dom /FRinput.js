import React, { forwardRef } from 'react';

const FRinput = forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
})

export default FRinput;

/**
Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries

Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

The second ref argument only exists when you define a component with React.forwardRef call. Regular function or class components don’t receive the ref argument, and ref is not available in props either.


React forwardRef is a method that allows parent components pass down (i.e., “forward”) refs to their children. Using forwardRef in React gives the child component a reference to a DOM element created by its parent component. This then allows the child to read and modify that element anywhere it is being used
*/
