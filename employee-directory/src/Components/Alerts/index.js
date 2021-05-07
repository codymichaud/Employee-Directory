import React from 'react';
import { TiWarning } from 'react-icons/ti';


function Alerts(props) {
    return (
        <div>
            <div className={`alert alert-${props.type} fade in`} role='alert' style=''
        </div>
    );
}

export default Alerts;