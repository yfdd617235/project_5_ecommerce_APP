import { NavLink } from 'react-router-dom'
import logoE from '../logos/logoE.svg';
import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './navigator.css'
import Button from 'react-bootstrap/esm/Button';
import { toast } from 'react-toastify';

function Navigator() {
    const navigate = useNavigate()
    function  clicnavtop(){
        window.scrollTo({top:0})
      }
    const {user, clearToken} = useContext(UserContext);
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
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/SignUp">SignUp</NavLink></li>
                        <li><NavLink onClick={clicnavtop} className="link-menu" to="/Products">Products</NavLink></li>
                        {!user.token &&<li><NavLink onClick={clicnavtop} className="link-menu" to="/LogIn">LogIn</NavLink></li>}
                        {user.token && <li><Button variant="dark" onClick={() => { handleSignOut(); clicnavtop(); }} className="link-menu">Log Out</Button></li>}
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navigator;