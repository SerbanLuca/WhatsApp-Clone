import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert } from '@material-ui/icons'
import React,{useState, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Chat.css'

function Chat() {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <p className={`chat__message ${true && 'chat__receiver'}`}> 
                    <span className='chat__name'>Hector10</span>
                        Ce misto e fundalu hazule!!!
                    <span className='chat__timestamp'>Today 2:02PM</span>
                </p>
            </div>
            <div className='chat__footer'>
                <InsertEmoticon />
                <form className='chat__form'>
                    <input type='text' className='chat__input' placeholder='Write a message'></input>
                    <button></button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
