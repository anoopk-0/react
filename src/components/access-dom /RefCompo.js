import { Component } from 'react';
import React from 'react'


class RefCompo extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.textRef = React.createRef();
    }

    componentDidMount() {
        this.textRef.current.focus();
        // console.log(this.textRef)
    }

    clickHandler = () => {
        alert(this.textRef.current.value)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textRef}
                />
                <button onClick={this.clickHandler} >Click</button>

            </div>
        );
    }
}

export default RefCompo;

/*
Refs provide a way to "access DOM nodes" or React elements created in the render method
and can also be used to fetch value

In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch

There are a few good use cases for refs:
    Managing focus, text selection, or media playback.
    Triggering imperative animations.
    Integrating with third-party DOM libraries.

React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts.

ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.



**Important**
we want to change the value of a child component, without making use of props and all.

When not to use refs 

Should not be used with functional components because they don’t have instances.
Not to be used on things that can be done declaratively.

*/