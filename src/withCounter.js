import React from 'react';


const UpdatedComponent=(OriginalComponent)=>{

	class NewComponent extends React.Component{
		constructor(props){
			super(props)
			this.state = {
				count : 0
			}
		}

		handleChange=()=>{
			this.setState(prev=>{
				return { count:prev.count+1 }
			})
		}
		

		render(){
			return <OriginalComponent name="Sujit" count={this.state.count} handleChange={this.handleChange} />
		}
	}

	return NewComponent
}

export default UpdatedComponent