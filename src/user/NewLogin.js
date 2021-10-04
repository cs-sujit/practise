import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card, Modal } from 'antd';
import 'antd/dist/antd.css';



class NewLogin extends React.Component{
    constructor(){
        super();
        this.state={
            username:" ",
            password:" ",
            loading:false,
            register:null
        }

    }    
    
    
    
    
    onFinish=()=>{
        this.demo()
        this.demo2()
        // console.log('Success:',this.state );
        // // const finalResponse = await 
        // fetch(`http://172.16.202.15:7000/api/checkLogin/${this.state.username}`)
        // .then(response=>{
        //     // console.log("responese data ",response.json())
        //     console.log("responese data ",response.body)
        //     if(response.ok){
        //         console.log("responese data ",response);
        //         return response.json()
        //     }
        //     throw response
        // })
        // .then(data=>{
        //     console.log("Data in response ",data)
        //     if(data.loginCheck){
        //         Modal.confirm(
        //             {
        //               title: 'Warning',
        //               okText: 'Submit',
        //               okButtonProps:{ loading: true },
        //               // confirmLoading:true,
        //               content: (
        //               <div>
        //                   <h3>Login is Successfull</h3>
        //               </div>
        //               )       
        //             //   onOk() {finalSubmit()},
        //             //   onCancel() {
        //             //     setModalIsOpen(false);
        //             //   },
        //             }
        //           )
        //         }
        //         else{
        //             Modal.confirm(
        //                 {
        //                   title: 'Warning',
        //                   okText: 'Submit',
        //                   okButtonProps:{ loading: true },
        //                   // confirmLoading:true,
        //                   content: (
        //                   <div>
        //                       <h3>Login is Failed</h3>
        //                   </div>
        //                   )       
        //                 //   onOk() {finalSubmit()},
        //                 //   onCancel() {
        //                 //     setModalIsOpen(false);
        //                 //   },
        //                 }
        //               )
        //         }
            
        // })
        // .catch(err=>{
        //     console.log('error')
        // })

        

        // console.log("Final Response ",finalResponse)
    };

    
    
    // const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
    // };

    handleSubmit=()=>{
        console.log("Hello");
    }

    onFinish=()=>{

    }
    
    render(){
        
        return(
            <div style={{ border:'1px solid #777676',
            margin:'auto',width:'500px',padding:'15px',borderRadius:'5px',
            left: '50%',top: '50%',transform:'translate(-50%, -50%)',position:'absolute'}}>
            <h2 style={{ textAlign:'center'}}><b>Login </b></h2>
           
            <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
            
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
                value={this.state.username}
                onChange={(e)=>this.setState({username:e.target.value})}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                value={this.state.password}
                onChange={(e)=>this.setState({password:e.target.value})}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
            </div>
        );
    }

}

export default NewLogin;