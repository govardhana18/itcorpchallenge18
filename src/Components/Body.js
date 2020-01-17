import React from 'react';

import Block from './Block';
import Transaction from './Transaction';
import Where from './Where';
import Testimonial from './Testimonial';

import Mymodal from './Buttons/Mymodal';

/**
 * SPA Complete Body
 */
class Body extends React.Component {

    render() {
        return (
            <div>
                <Block onclickevent={this.props.onclickevent} />
                <Transaction onclickevent={this.props.onclickevent} />
                <Where onclickevent={this.props.onclickevent} />
                <Testimonial />         
                <Mymodal type={this.props.type} data={this.props.data} />
            </div>
        );
    }
}

export default Body;