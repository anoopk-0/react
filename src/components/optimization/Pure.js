import { PureComponent } from "react";

class Pure extends PureComponent {
    state = {}
    render() {
        console.log(`Pure`)
        return (
            <>
                <h1>Pure Component:  {this.props.name}</h1>
            </>
        );
    }
}

export default Pure;

