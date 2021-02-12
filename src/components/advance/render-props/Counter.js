import { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    }

    handleAction = () => {
        this.setState((preState) => {
            return { count: preState.count + 1 }
        })
    }
    render() {
        return <>{this.props.render(this.state.count, this.handleAction)}</>
    }
}

export default Counter;