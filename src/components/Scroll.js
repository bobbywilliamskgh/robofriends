import React from 'react';
import './Scroll.css';


const Scroll = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default Scroll;