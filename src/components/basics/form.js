import { Component } from "react";

class Form extends Component {
    state = {
        username: '',
        isSubscribe: false,
        topic: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">useName:</label>
                {/* when onChnage is fired, the event object is passed as a params */}
                <input type="text" id="username" value={this.state.username} name="usename" onChange={(e) => this.setState({ username: e.target.value })} />
                <br />
                <label htmlFor="isSubscribe">isSubscribe:</label>
                <input type="checkbox" id="isSubscribe" checked={this.state.isSubscribe} name="isSubscribe" onChange={(e) => this.setState({ isSubscribe: !this.state.isSubscribe })} />
                <br />
                <select value={this.state.topic} onChange={(e) => this.setState({ topic: e.target.value })}>
                    <option>react</option>
                    <option>angular</option>
                    <option>vue</option>
                </select>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default Form;

/*
 form value whose  value is controlled by react is called controlled component.
 taking an example of input. value is set by state , and when the user change the value.. onchnage event is fired which change the state of the state and ui is updated.

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

Uncontrolled components store their data in the DOM like a traditional HTML input element.

Refs are attached to input elements using the ref attribute on the element in question.

Refs are often used as instance properties on a component. The ref is set in the constructor and the value is available throughout the component.

You cannot use the ref attribute on functional components(assccing form other component) because an instance is not created

BUT, You can use a ref attribute inside a functional component
 
*/