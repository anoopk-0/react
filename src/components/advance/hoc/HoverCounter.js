import { Component } from "react";

class HoverCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleMouseOver = () => {
        this.setState((preState) => {
            return { count: preState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <h3> Counter: {this.state.count}</h3>
                <button onMouseOver={this.handleMouseOver}>HOver</button>
            </div>
        );
    }
}

export default HoverCounter;