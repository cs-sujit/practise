import React,{useState,useEffect} from 'react';
import socket from './io';

function ChatBox(){
    const [inputField,setInputField] = useState({
        name:'',
        room:'',
        message:''
    })
    const [isChatting,setChatting] = useState(false);
    const [messageList,setMessageList] = useState([])

    const inputHandler=(e)=>{
        setInputField({
            ...inputField,
            [e.target.name]:e.target.value
        })
    }
    const enterRoom=()=>{
        console.log(inputField)
        setChatting(true)
        socket.emit('join_room',inputField.room)
    }

    useEffect(()=>{
        socket.on('received_message',(data)=>{
            setMessageList([...messageList,data])
        })
    })

    const sendMessage = async()=>{
        console.log("Sn ",inputField)
        await socket.emit('send_message',inputField)
        setMessageList([...messageList,inputField])
        setInputField({...inputField,message:''})
    }
    
    console.log("Message Come ",messageList)
    return (
        <div style={{ textAlign:'center' }}>
            <h1>Chat Box</h1>
            { !isChatting?(
            <div>                
                <input type="text" placeholder="Enter Name" name="name"
                onChange={inputHandler}/>
                <input type="text" placeholder="Enter Room" name="room"
                onChange={inputHandler}/>
                <br/>
                <button onClick={enterRoom}>Enter Chat Room</button>
            </div>
            ):(
                <div>
                    <h2>Message</h2>
                    {
                        messageList.map((item,key)=>{
                            return (
                                <div id={key}>
                                    {item.name}:{item.message}
                                </div>
                            );
                        })
                    }
                    <input type="text" 
                    placeholder="Message" name="message"
                onChange={inputHandler} value={inputField.message}/>
                <button onClick={sendMessage}>Send</button>
                </div>
            ) }
        </div>
    )
}

export default ChatBox;