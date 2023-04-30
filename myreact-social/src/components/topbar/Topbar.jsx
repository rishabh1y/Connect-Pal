import React from 'react';
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import {AuthContext} from "../../context/AuthContext"
import { logoutCall } from '../../apiCalls';

export default function Topbar() {

  const {user,dispatch} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleClick = () => {
    logoutCall(
      dispatch
    );
  }

  return (
    <div className='topbarContainer'>
      
      {/* LEFT */}
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>Connect-Pal</span>
        </Link> 
      
      </div>

      {/* CENTER */}
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className='searchIcon'/>
          <input placeholder='Search for Friends' className="searchInput" />

        </div>
      </div>


      {/* RIGHT */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className='topbarLink'>HomePage</span>
          <span className='topbarLink'>TimeLine</span>
        </div>


        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon/>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <ChatIcon/>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
          <NotificationsIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

       <Link to= {`/profile/${user.username}`}>
        <img 
        src={
           user.profilePicture
            ?  PF+user.profilePicture 
            : PF +"noProfile.png" 
            }
             alt="" className="topbarImg" />
             </Link>


             <span className="topbarLink" onClick={handleClick}>Sign out</span>
      </div>
    </div>
  );
}
