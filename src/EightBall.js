import { useState } from "react"
import './EightBall.css'
const EightBall = ({answers})=>{

    // let isPlaying = false;
    // const startGame = () =>{
    //     isPlaying = true;
        
    // }
    const getMessage = () => answers[Math.floor(Math.random() * answers.length)]
    
    const [message, setMessage] = useState({msg:'Think of a question'})
 
    
    return (
        <div>
            <div className='ball' style={{backgroundColor: message.color}} onClick={()=>setMessage(getMessage)}>
                <p>{message.msg}</p>      
            </div>
        </div>
    )
}

export default EightBall
// {isPlaying? <p>{message}</p>: null}
// {isPlaying? null:<p >{message}</p> }