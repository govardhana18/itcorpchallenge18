import React from 'react';
import imgs from '../assets/images/transaction.png'
import Next from './Buttons/Next';

/**
 * Single Transaction Component
 * @param {*} props 
 */
function Transaction(props) {
    return (
        <div className="container-fluid bg-1 text-center" id="transaction">
            <h3 className="margin">Transaction ?</h3>
            <p>Transaction data is permanently recorded in files called blocks. They can be thought of as the individual pages of a city recorder's recordbook (where changes to title to real estate are recorded) or a stock transaction ledger. Blocks are organized into a linear sequence over time</p>
            <Next type='singleTransaction' onclickevent={props.onclickevent} /> 
            {/* <div>
                <i onClick={props.onclickevent} type='singleTransaction' data-toggle="modal" data-target="#myModal" style={{fontSize:'24px',cursor:'pointer'}} className="fa">&#xf101;</i>
            </div> */}
            <br/>
            <img src={imgs} className="img-responsive img-circle margin" style={{display:'inline'}} alt="Bird" width="150" height="150"></img>
        </div>
    )
}
export default Transaction;