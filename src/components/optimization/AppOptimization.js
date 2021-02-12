import { Component } from "react";
import Pure from './Pure';
import Regular from "./Regular";
import MemoCompo from './MemoCompo';

class AppOptimization extends Component {
    state = {
        name: 'anoop'
    }

    componentDidMount() {
        this.clearInterval = setInterval(() => {
            this.setState({ name: 'anoop' })
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.clearInterval)
    }

    render() {
        console.log(`**************Parent****************`)
        return (
            <>
                <Regular name={this.state.name} />
                <Pure name={this.state.name} />
                <MemoCompo name={this.state.name} />
            </>
        );
    }
}

export default AppOptimization;

/*
regular component : a regular component does not implement the shouldComponentUpdate() method.it alwasy return true.

pure component : a pure component on other hand implements shouldComponentUpdate with shallow props and state compersion.

           [ SC of prevState with currentState
                               or                     ===={difference}==========>   Re-rending
            SC of prevProps with currentProps ]


SHALLOW COMPARSION
primitive type
    a (sc) b , returns true if a and b are have the same value and are of same type.

complex types like object and arrays
    a (sc) b returns true if a and b reference the exect same object.

    var a =[1,2,3];
    var b =[1,2,3];

    var c = a;

    var ab_eq = (a === b) //true
    var ac_eq = (a === c) //false


** if the parent doesn't re-render , then the children will also not re-render.also return a new state (and don't mutate the state like pushing a new item in an array , if we push the reference don't change so in pure component it doesnot re-render even when the state of the component is changes)

what pure component is to class component , memo is to functional component

*/