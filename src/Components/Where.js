import React from 'react';
import Next from './Buttons/Next';
// import Search from './Buttons/Search';

/**
 * Latest block Component
 */
function Where(props) {
    return(
        <div className="container-fluid bg-1 text-center" id="where">
            {/* <Search /> */}
            <h3 className="margin">Recent Block ?</h3>
            <Next type='Recentblock' onclickevent={props.onclickevent} /> 
        </div>
    )
}
export default Where;