import { Component } from 'react';


// to re-render the component, return a new state.
class SetState extends Component {
    state = {
        count: 0,
    }

    handleCounter = () => {
        this.setState((prev, props) => {
            //when you have to update state based on previous state value,pass in a function as an argument instead of the regular value.
            return { count: prev.count + 1 }
        })

        // Note: this will *not* work as intended.
        //this.setState({count: this.state.count + 1});

        //call to setState is  asynchronous

        console.log(this.state.count) // render fist as setState is async, will have to wait to get the value.
    }

    render() {
        return (
            <>
                Count: {this.state.count}
                <button onClick={this.handleCounter.bind(this)}>Counter</button>
            </>
        );
    }
}

export default SetState;

/**
 setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

Passing an update function allows you to access the current state value inside the updater. Since setState calls are batched, this lets you chain updates and ensure they build on top of each other instead of conflicting
 *
 */