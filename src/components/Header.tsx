import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/header.scss'
import Projects from '../pages/Projects';
import { useNavigate,useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
const Header = () => {
    let navigate = useNavigate();
    let location = useLocation();
  
    return (
        <div>
            <nav className="header">
                <div className='container'>
                <p className='title'>
                        Ryota's Portfolio
                    </p>
                <button className={"button" +((location.pathname=="/")?" selected":"")} onClick={() => {
                        navigate("/")
                    }}>Home</button>
                   
                    <button className={"button" +((location.pathname=="/History")?" selected":"")} onClick={() => {
                        navigate("/History")
                    }}>History</button>
                    <button className={"button" +((location.pathname=="/Projects")?" selected":"")} onClick={() => {
                        navigate("/Projects")
                    }}>Projects</button>
                    <button className={"button" +((location.pathname=="/Contact")?" selected":"")} onClick={() => {
                        navigate("/Contact")
                    }}>Contact</button>
                </div>
                <div className='tab'>
                    <p className='title'>
                        Ryota's Portfolio
                    </p>

                    <div className='menu'>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button className="button" variant="contained" {...bindTrigger(popupState)}>
                                        MENU
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={()=>{navigate("/")}}>Home</MenuItem>
                                        <MenuItem onClick={()=>{navigate("/History")}}>History</MenuItem>
                                        <MenuItem onClick={()=>{navigate("/Projects")}}>Projects</MenuItem>
                                        <MenuItem onClick={()=>{navigate("/Contact")}}>Contact</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;

