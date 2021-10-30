import React ,{useState} from 'react';
import UpdatedComponent from './withCounter.js'

class SecondComponent extends React.Component{
	// constructor(props){
	// 	super(props)
	// 	this.state={
	// 		count : 0
	// 	}
	// }

	// handleChange=()=>{
	// 	this.setState(
	// 		prev=>{
	// 			return { count:prev.count+1}
	// 		}
	// 	)
	// }

	render(){
		const { count,handleChange,name } = this.props
		return(
			<div style={{textAlign:'center'}}>
			<h2 onMouseOver={handleChange}> {name} Update on {count} Hover</h2>
			</div>
		)
	}
}

// const SecondComponent=()=>{
// 	const [count,setCount] = useState(0)

// 	const handleMouseOver=()=>{
// 		setCount(count+1)
// 	}
// 	return(
// 		<div style={{textAlign:'center'}}>
// 		<h2 onMouseOver={handleMouseOver}>Update on {count } Hover</h2>
// 		</div>
// 	)
// }

export default UpdatedComponent(SecondComponent)