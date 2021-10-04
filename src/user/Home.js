import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            homename:"Kamlesh"
        }
    }
    

    render(){
        return(
            <>
            <h1> I am In Hompage</h1>
            <button 
            onClick={this.props.handlenameChild(this.state.homename)}>Change name</button>
            </>
        );
    }
}

export default Home;