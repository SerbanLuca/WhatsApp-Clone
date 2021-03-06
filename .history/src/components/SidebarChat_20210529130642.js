import { Avatar } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    },[])


    const createChat = () => {
        const roomName = prompt('Please enter the name for the chat')
        if(roomName){
            //
        }
    }

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className='sidebarChat__info'>
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div className='sidebarChat' onClick={createChat}>
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
