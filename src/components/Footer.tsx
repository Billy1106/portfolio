import React from 'react'
import '../assets/styles/footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <p className='p'>© 2021 Ryota </p>
                <div className="icons">
                    <GitHubIcon className='first-icon' 
                        onClick={()=>window.open("https://github.com/Billy1106","_blank")} />
                    <LinkedInIcon className='other-icon'
                        onClick={()=>window.open("https://www.linkedin.com/in/ryota-koda-1a970521b/","_blank")}/>
                    <TwitterIcon className='other-icon'
                        onClick={()=>window.open("https://github.com/Billy1106","_blank")}/>
                </div>
            </div>
         </div>
    )
}
export default Footer;
