// import React from 'react'
import React,{Component} from 'react';

import UpdatedComponent from './withCounter';

class FirstComponent extends Component{
	// constructor(props){
	// 	super(props)
	// 	this.state={
	// 		count:0
	// 	}
	// }

	// handleChange=()=>{
	// 	this.setState(
	// 		prev=>{
	// 		return { count: prev.count+1 }
	// 		}
	// 	)
	// }

	render(){
		const { count,handleChange,name } = this.props
		// let count = this.state.count
		return(
			<div style={{textAlign:'center'}}>
			<button  onClick={handleChange}> {name} Click {count} times</button>
			</div>
		)
	}
}

export default UpdatedComponent(FirstComponent);