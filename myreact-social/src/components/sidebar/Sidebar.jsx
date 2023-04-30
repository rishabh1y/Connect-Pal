import React from 'react'
import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Users} from "../../dummyData";
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Feed </span>
            </li>


            <li className="sidebarListItem">
                <ChatIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Chats </span>
            </li>


            <li className="sidebarListItem">
                <PlayCircleIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Videos </span>
            </li>


            <li className="sidebarListItem">
                <GroupIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">Groups </span>
            </li>


            <li className="sidebarListItem">
                <BookmarkIcon className='sidebarIcon'/>
                <span className="sidebarListItemText">BookMarks </span>
            </li>



        </ul>

        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
            {/* <li className="sidebarFriend">
                <img className='sidebarFriendImg' src="./assets/me.jpeg" alt="" />
                <span className="sidebarFriendName">Akash</span>
            </li>
         */}
         {Users.map(u=>(
            <CloseFriend key={u.id}  user={u} />
         ))}
        </ul>
      </div>
    </div>
  )
}
