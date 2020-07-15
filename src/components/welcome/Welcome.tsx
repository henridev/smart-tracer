import React from 'react';
import Button from '@material-ui/core/Button';
import './Welcome.css';

function Welcome(){
    return (
        <div id='container' className='container'>
            <div className='button-group'>
            <Button className='button' variant="contained" color="secondary">
                Click here to connect
            </Button>
            </div>
            
        </div>
    );
}

export default Welcome;