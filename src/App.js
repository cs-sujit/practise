import React from 'react';
import ChatBox from './ChatBox';

function App(){
  return (
    <div className="App">
      <ChatBox/>
    </div>
  )
}
export default App;


// import React from 'react';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       number:null,
//       series:null
//     }
//   }

//   handleChange=(e)=>{
//     this.setState({
//       number:e.target.value
//     })
//   }

//   handleClick=()=>{
//     let f=[0,1]

//     let num = this.state.number;
//     for(let i=2; i<=num-2; i++){
//       f[i] = f[i-1]+f[i-2];
//       f.push(f[i])    
//     }
//     f.join(",")
//     console.log('fff',f)
//     this.setState({
//       series:f
//     })
//   }

//   render(){
//     return(
//       <>
//         <div style={{textAlign:'center'}}>
//           <input placeholder="Enter a Number"  value={this.state.number} onChange={this.handleChange} />
//           <button onClick={this.handleClick}>Click here</button>
//           <h1>Fibnocci series {this.state.series}</h1>
//         </div>
//       </>
//     );
//   }
// }

// export default App;













// import React from 'react'
// import "./App.css";
// import {incNumber,decNumber} from "./actions/index";

// import { useSelector, useDispatch } from "react-redux";

// const App = () => {

//   // it alternative to the useContext hooks in react / consumer from context API
//   const changeTheNumber = useSelector(state => state.changeTheNumber);
  
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="main-div">
      

//       <div className="container">
  
//       <h1>Increment/Decrement counter</h1>
//       <h4>using React and Redux</h4>
      
//       <div className="quantity">
//         <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
//         <input name="quantity" type="text" className="quantity__input" value={changeTheNumber } />
//         <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
//       </div>
  
//           </div>
//         </div>
//     </>
//   )
// }

// export default App


// import React from 'react';

// const UpdatedComponent = (OriginalComponent)=>{

//   class NewComponent extends React.Component{
//     constructor(props){
//       super(props)
//       this.state= {
//         counter:0
//       }
//     }

//     parentHandleChange=()=>{
//       this.setState(
//         prev=>{ return { counter:prev.counter+1} }
//       )}

//     render(){
//       return(
//         <OriginalComponent handleChange={this.parentHandleChange} count={this.state.counter} />
//       )
//     }
//   }

//   return NewComponent
// }

// export default UpdatedComponent;


// import React from 'react';
// import axios from 'axios'
// class App extends React.Component{

//   constructor(props){
//     super(props)
//     this.state={
//       username:'',
//       password:''
//     }

//   }

//   handleChange=(e)=>{
//     this.setState({
//       [e.target.name]:e.target.value
//     })
//   }

//   handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log(this.state)
//     const data =this.state

//     const url = "http://localhost:7000/login"
//     const dataAxios = {
//       method : "POST",
//       url : url,
//       header:{
//         'content-type':"application/json",
//         accept:"application/json"
//       },
//       data:data

//     }

//     axios(dataAxios)
//     .then((res)=>{
//       console.log("Response",res)
//     })
//     .catch((err)=>{
//       console.log("Error")
//     })

//   }

//   render(){
//     return(
//       <>
//         <div style={{textAlign:'center'}}>
//         <form onSubmit={this.handleSubmit} method="POST">
//           <input name="username" placeholder="Enter User Name" onChange={this.handleChange} value={this.state.username}/>
//           <input name="password" placeholder="Enter Password" onChange={this.handleChange} value={this.state.password}/>
//           <button type="submit" >Login</button>
//         </form>
//         </div>
//       </>
//     )
//   }
// }

// export default App