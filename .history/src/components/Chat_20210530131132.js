import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert } from '@material-ui/icons'
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
                <p className='chat__message'>Ce misto e fundalu hazule!!!</p>
            </div>
            <div className='chat__footer'>

            </div>
        </div>
    )
}

export default Chat
