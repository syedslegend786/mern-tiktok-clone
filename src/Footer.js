import React from 'react'
//
import { IoMdMusicalNote } from 'react-icons/io'
import Ticker from 'react-ticker';
import './App.css';
const Footer = ({ username, description, song }) => {
    return (
        <div className='footer'>
            <h3>@{username}</h3>
            <p>{description}</p>
            <div className='footer__tickIcon'>
                <IoMdMusicalNote />
                <Ticker mode='smooth'
                    className='ticker'>
                    {({ index }) => (
                        <>
                            <p>{song}</p>
                        </>
                    )}
                </Ticker>
            </div>
        </div>
    )
}

export default Footer
