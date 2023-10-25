import './App.css';
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/user/SignUp'
import LogIn from './components/user/LogIn'
import Presentation from './components/presentation/Presentation'
import Navigator from './components/navigator/Navigator'
import Products from './components/products/Products'
import Profile from './components/user/Profile'
import Footer from './components/footer/Footer'
import {ToastContainer} from 'react-toastify';


function App() {



  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path='/SignUp' element ={<SignUp/>}/>
        <Route path='/LogIn' element ={<LogIn/>}/>
        <Route path='/' element ={<Presentation/>}/>
        <Route path='/Products' element ={<Products/>}/>
        <Route path='/Profile' element ={<Profile/>}/>
      </Routes>
      <ToastContainer/><ToastContainer />
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
