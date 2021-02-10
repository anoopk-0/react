import { Component } from "react";

class AppChild extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word: 0
        };
        console.log('Child Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Child getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('Child componentDidMount')
    }


    render() {
        console.log('Child render')
        return (
            <div>Childeren - {this.props.count}</div>
        );
    }
}

export default AppChild;