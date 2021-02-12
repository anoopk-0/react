import { Component } from "react";

class Regular extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(`Regular`)
        return (
            <>
                <h1>regular Component : {this.props.name}</h1>
            </>
        );
    }
}

export default Regular;