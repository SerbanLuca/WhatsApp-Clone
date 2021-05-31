import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert } from '@material-ui/icons'
import React,{useState, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {useParams} from 'react-router-dom'
import './Chat.css'
import db from '../firebase'

function Chat() {

    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState('')

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (setRoomName(snapshot.data().name)))
        }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    },[])

    const sendMessage = (e) => {
        e.preventDefault()
        setInput('')
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
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
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' className='chat__input' placeholder='Write a message'></input>
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
