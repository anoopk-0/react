import { Component } from "react";
import ComponentA from "./ComponentA";
import CountContext from "./CountContext";

class AppContext extends Component {
    state = {
        username: 'anoop',
        count: 0
    }

    handleCounter = () => {
        this.setState((preState) => {
            return { count: preState.count + 1 }
        })
    }


    render() {
        return (
            <>
                <CountContext.Provider value={{ state: this.state, handle: this.handleCounter }}>
                    <ComponentA />
                </CountContext.Provider>

            </>
        );
    }
}

export default AppContext;

/*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

avoid prop drilling.
*/