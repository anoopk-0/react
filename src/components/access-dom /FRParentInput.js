import React, { Component, createRef } from 'react'
import FRinput from './FRinput'

class FRParentInput extends Component {

    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }


    render() {
        return (
            <div>
                <FRinput ref={this.inputRef} />
                <button>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
