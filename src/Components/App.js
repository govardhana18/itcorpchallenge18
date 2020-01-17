import React, { Component } from 'react';
// import axios from 'axios';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import getData from './ApiCal/ApiCal';
import './App.css';

/**
 * App initializing HERE
 */
class App extends Component {

	constructor(props) {
        super(props);
		this.state = {type: null, data: [{'block_index':null, 'hash':null, 'height':null, 'time':null, 'txIndexes':null}]};
		this.useApiFunc = this.useApiFunc.bind(this);
    }
	
	useApiFunc = async (e) => {
		/**
		 * Here We 're not applying any business logic, 
		 * Because not given logical instructions in the Document
		 */

		let callType = e.target.attributes.getNamedItem('type').value;	
		let urls = '';
		if (callType === "singleBlock") {
			urls += 'https://blockchain.info/rawblock/000000000000000000030bdf3d6c86419b1a42319efa530147d2e793f6592bcc';
		} else if (callType === "singleTransaction") {
			urls += 'https://blockchain.info/rawtx/63375982bb93d8d369aa4942d840be1ef1a6a6795f2f83fd227dd75a62d484bc';
		} else if (callType === "Recentblock") {
			urls += 'https://blockchain.info/latestblock';
		} 
		urls+= '?format=json&cors=true';
		
		/**
		 * Connecting API from HERE to explode data
		 */
		var config = { "Access-Control-Allow-Origin": "*" }
		await getData(urls, config, (res) => {
			this.setState({type: callType, data: [res.data]});
		},(err) => {
			console.log(err)
		});
	}
	
	render() {
		return ( 
			<div> 
				<Header />
				<Body onclickevent={this.useApiFunc} type={this.state.type} data={this.state.data} />
				<Footer />
			</div>
		);
	}
}
export default App;
