import React from 'react';
import ReactDOM from 'react-dom';

const Model = ({ isOpen, children, handleModel }) => {

    if (!isOpen) return null;

    return ReactDOM.createPortal(<>
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,.4)',
            zIndex: 100,

        }}></div>
        <div style={
            {
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                background: '#fff',
                padding: '50px',
                zIndex: 100,
                border: '1px solid #000',
                boxShadow: '2px 2px 2px #ccc',
                height: '100px',
            }
        }>
            <button onClick={handleModel}>x</button>
            {children}
        </div>
    </>, document.getElementById('portal'))
}

export default Model;

//all the event will delegate to it parent
