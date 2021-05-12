import React, { useState } from 'react'
//
import './App.css';
//
import { MdFavoriteBorder, MdComment, MdFavorite } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi'
const Sidebar = ({ likes, comments, shares }) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className='sidebar'>
            <div className='sidebar__icons'>
                {
                    liked ? (<MdFavorite onClick={() => setLiked(false)} className='sidebar__icon' />) :
                        (<MdFavoriteBorder onClick={() => setLiked(true)} className='sidebar__icon' />)
                }
                <p>{likes}</p>
            </div>
            <div className='sidebar__icons'>
                <MdComment className='sidebar__icon' />
                <p>{comments}</p>
            </div>
            <div className='sidebar__icons'>
                <BiShareAlt className='sidebar__icon' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default Sidebar
