import React, { useState } from 'react';
import Model from './Model';
import OtherComponet from './OtherComponet';

const AppPortal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div style={{ zIndex: 1 }}>
                <button onClick={() => setIsOpen(true)}>open model</button>
                <Model isOpen={isOpen} handleModel={() => setIsOpen(false)}>some Model</Model>
            </div>
            <div style={{ zIndex: 2 }}>
                <OtherComponet />
            </div>
        </div>
    );
}

export default AppPortal;

/*
React portal is just a way to render components outside of the normal DOM hierarchy that is defined by the component tree.
*/
