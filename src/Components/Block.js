import React from 'react';
import Next from './Buttons/Next';

/**
 * Single Block Component
 * @param {*} props 
 */
function Block(props) {

    return (
        <div className="container-fluid bg-2 text-center" id="block">
            <h3 className="margin">Block ?</h3>
            <p>The Bitcoin network witnesses a great deal of transaction activity. Maintaining a record of these transactions helps users track what was paid for and by whom. The transactions executed during a given period of time are recorded into a file called a block, which is the basis of the blockchain network.
            <br/><br/>A block represents the ‘present’ and contains information about its past and future. Each time a block is completed it becomes part of the past and gives way to a new block in the blockchain. The completed block is a permanent record of transactions in the past and the new transactions are recorded in the current one</p>
            <Next type='singleBlock' onclickevent={props.onclickevent} /> 
            {/* <div>
                <i onClick={props.onclickevent} type='singleBlock' data-toggle="modal" data-target="#myModal" style={{fontSize:'24px',cursor:'pointer'}} className="fa">&#xf101;</i>
            </div> */}
        </div>
    );
}
export default Block;
