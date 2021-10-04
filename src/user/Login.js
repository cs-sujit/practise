import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';




const Login=()=>{
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Please Enter Mobile or Emailid'),
        // password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    });
    
    const { register, handleSubmit, reset, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });    

    

    console.log("Errors ",errors)
    console.log("Register ",register)
    const [loading,setloading]  = useState(false);
    // const [username,setUsername]  = useState("");
    // const [password,setPassword]  = useState("");
    
        
    const onSubmit =(data)=>{
    //    e.preventDefault();
        // alert(username);
        // b();
        
    }

    return(
        <div className="AuthPage">
            <div className="container-fluid pdng0" style={{height:'100vh'}}>
                <div className="LoginReg">
                    <center>
                        <img src="/essentials/logo.png" alt="iSM Logo" style={{height:'100px',marginBottom:'20px'}}/>
                    </center>
                    <form onSubmit={handleSubmit(onSubmit)} style={{width:'350px'}}>   
                        <h4 className="text-center">Login</h4>         
                        <div className="form-row">
                            <div className="form-group mb-0">
                                <label>Username</label>
                                <input name="username" 
                                type="text" 
                                ref={register} 
                                className={`form-control`}
                                placeholder="Enter Mobile or Email" 
                                />
                                <div className="invalid-feedback">
                                {errors.username?.message}</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group ">
                                <label>Password</label>
                                <input name="password" 
                                type="password"
                                className={`form-control`} 
                                placeholder="Enter Password" 
                                />
                                {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                            </div>
                        </div>
                        <a href="/" title="" className="forgot-pwd">Forgot Password?</a>
                        <div className="submit-btns mt-0">
                            <button className="mtr-btn signin w-100" 
                            type="submit" disabled={loading}>
                                <span>{loading ? 'Loading...' : 'Login'}
                                </span></button>
                            {/* <Link to="/register" className="btn btn-info mt-2 signup w-100"><span>Don't have account? Register Here!</span></Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login