import React from 'react'
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import Whatsapp from './images/whatsapp.png'
import Email from'./images/gmail.png'
import { Link } from 'react-router-dom'
import Style from './Style'

const SharePlatforms = () => {
  const { imgLink } = Style.sharePlatforms
  return (
    <>
      <h6>Choose de Platform</h6>
      <Link to=''>
        <img className='responsive-img' style={ imgLink } src={ Whatsapp } alt="whatsapp" />
      </Link>
      <Link to=''>
        <img className='responsive-img' style={ imgLink } src={ Facebook } alt="facebook" />
      </Link>
      <Link to=''>
        <img className='responsive-img' style={ imgLink } src={ Email } alt="email" />
      </Link>
      <Link to=''>
        <img className='responsive-img' style={ imgLink } src={ Instagram } alt="instagram" />
      </Link>
    </>
  )
}

export default SharePlatforms
