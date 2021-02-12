import { Component, createRef } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }

    handleFoucs = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <input type="text" ref={this.inputRef} />
        );
    }
}

export default Input;