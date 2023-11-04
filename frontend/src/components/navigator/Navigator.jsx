import { Link, NavLink } from 'react-router-dom'
import logoE from '../logos/logoE.svg';
import React, {useContext, 
   // useEffect
} from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './navigator.css'
import Button from 'react-bootstrap/esm/Button';
import { toast } from 'react-toastify';
import * as Icon from 'react-icons/fa6'

function Navigator() {
    const navigate = useNavigate()
    function  clicnavtop(){
        window.scrollTo({top:0})
      }
    const {
        user, 
      //  saveToken, 
        clearToken} = useContext(UserContext);
    const handleSignOut = () => {
        toast.warn('User Logged Out!', {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        clearToken();
        navigate("/")
    };

    //This is for: If user press F5 or refresh the website, the token won´t be erased
    // useEffect(() => {
    //     const localToken = localStorage.getItem('token')
    //     saveToken(localToken)
    // }, []);

    return (
        <>
            <div className='nav-container'>
                <div className='name-container'>
                    <h2>E-COMMERCE</h2>
                    <img className='img-logo' src={logoE} alt="Logo-Ecommerce" />
                </div>
                <nav className='navigator' >
                    <ul className='navMenu' >
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/">Home</NavLink></li> 
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/Products">Products</NavLink></li>
                        {user.token && <li><NavLink onClick={clicnavtop} className="link-menu" to="/Profile">Profile</NavLink></li>}
                        {!user.token && <li><NavLink onClick={clicnavtop} className="link-menu" to="/SignUp">Sign Up</NavLink></li>}
                        {!user.token && <li><NavLink onClick={clicnavtop} className="link-menu" to="/LogIn">LogIn</NavLink></li>}{/*Validation to don´t show logIn*/}
                        {user.token && <li><Button className='logOutBtn link-menu' onClick={() => { handleSignOut(); clicnavtop(); }}>Log Out</Button></li>} {/*Validation to show button*/}
                    </ul>
                     <Link className='Cart' to='/Cart' onClick={clicnavtop}><Button variant='warning'><Icon.FaCartPlus/></Button></Link> 
                </nav>
            </div>

        </>
    )
}

export default Navigator;