import { Component } from 'react';
import withCounter from './withCounter';

class ClickCounterWithHOC extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3> Counter: {this.props.count}</h3>
                <button onClick={this.props.handleAction}>Increment</button>
            </div>
        );
    }
}

export default withCounter(ClickCounterWithHOC, 10);