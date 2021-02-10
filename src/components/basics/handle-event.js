
import { Component } from 'react';

class HandleEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        //first 
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevs) => {
            return {
                count: prevs.count + 1
            }
        })
        console.log(this) //undefined: it is pointing to window object
    }

    //third
    //arrrow function: this point to the context in which it is running

    render() {
        return (
            <>
                {/* this.handleClick.bind(this) */}
                <button onClick={this.handleClick}>Click</button>
            </>
        );
    }
}

export default HandleEvent;