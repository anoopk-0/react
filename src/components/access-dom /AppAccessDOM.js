import { Component } from 'react';
import RefCompo from './RefCompo';
import FousInput from './FousInput';
import FRParentInput from './FRParentInput';

class AppAccessDOM extends Component {
    state = {}
    render() {
        return (
            <>
                {/* <RefCompo /> */}
                {/* <FousInput /> */}

                <FRParentInput />

            </>
        );
    }
}

export default AppAccessDOM;


//important: [https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/]