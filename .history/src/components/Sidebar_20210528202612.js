import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import DounutLargeIcon from '@material-ui/core'
import ChatIcon from '@material-ui/core'
import MoreVertIcon from '@material-ui/core'


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerRight'>
                    <DounutLargeIcon />
                    <ChatIcon />
                    <MoreVertIcon />
                </div>
            </div>
            <div className='sidebar__search'>

            </div>
            <div className='sidebar__chats'>

            </div>
        </div>
    )
}

export default Sidebar
