import { Component } from "react";

class ClickCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState((preState) => {
            return { count: preState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <h3> Counter: {this.state.count}</h3>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default ClickCounter;