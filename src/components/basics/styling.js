import React from 'react'

export default function Styling() {
    return (
        <div>
            {/* inline css */}
            <h2 style={{ fontSize: '10px' }}>hello</h2>
            <div style={styles.div}>
                some text
            </div>
        </div>
    )
}

const styles = {
    div: {
        fontSize: '10em'
    }
}


/**
 * CSS stylesheets {style.css }
 * inline css
 * css module
 * css in js lib {styled component}
 */