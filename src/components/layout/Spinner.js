//racf shortcut
import React,{Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    //return (
        <Fragment>
            <img src={spinner}alt="Loading.." style={{width:'200px',margin:"auto",display='block'}} />
        </Fragment>
    //)//No need of return statement as single fragment line and no other js code.
}

export default Spinner