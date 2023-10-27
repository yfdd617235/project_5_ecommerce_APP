import './App.css';
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/user/SignUp'
import LogIn from './components/user/LogIn'
import Presentation from './components/presentation/Presentation'
import Navigator from './components/navigator/Navigator'
import Products from './components/products/Products'
import Profile from './components/user/Profile'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import {ToastContainer} from 'react-toastify';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';



function App() {
const {user} = useContext(UserContext)


  return (
    <div className="App">
      <Navigator/>
      <Routes>
        {!user.token &&<Route path='/SignUp' element ={<SignUp/>}/>}
        {!user.token && <Route path='/LogIn' element ={<LogIn/>}/>}
        <Route path='/' element ={<Presentation/>}/>
        <Route path='/Products' element ={<Products/>}/>
        {user.token && <Route path='/Profile' element ={<Profile/>}/>}
        <Route path='/Cart' element ={<Cart/>}/>
      </Routes>
      <ToastContainer/><ToastContainer />
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
