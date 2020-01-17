import React from 'react';

 /**
  * Next Button Component 
  * @param {*} props 
  */
function Next(props) {

        return (
            <div>
                <i onClick={props.onclickevent} type={props.type} data-toggle="modal" data-target="#myModal" style={{fontSize:'24px',cursor:'pointer'}} className="fa">&#xf101;</i>
            </div>
        );
}

export default Next;