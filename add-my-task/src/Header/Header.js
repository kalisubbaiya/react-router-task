import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='head'>Header</div>
        <Link to="/login">Go to add task</Link>
        <Link to="/content">Go to content</Link>
    </div>
  )
}

export default Header