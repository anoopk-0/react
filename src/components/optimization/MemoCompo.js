import React, { memo } from 'react';

const MemoCompo = ({ name }) => {

    console.log(`memo`)

    return (
        <h1>
            functional component : {name}
        </h1>
    );
}

export default memo(MemoCompo);
