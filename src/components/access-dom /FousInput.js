import { Component, createRef } from 'react';
import Input from './Input';

class FousInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.compoRef = createRef();
    }

    componentDidMount() {
        console.log(this.compoRef)
    }

    clickHandler = () => {
        this.compoRef.current.handleFoucs();
    }



    render() {
        return (
            <div>
                <Input ref={this.compoRef} />
                <button onClick={this.clickHandler} >Click</button>
            </div>
        );
    }
}

export default FousInput;