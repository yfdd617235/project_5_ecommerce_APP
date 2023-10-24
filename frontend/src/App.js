import './App.css';
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/user/SignUp'
import LogIn from './components/user/LogIn'
import Presentation from './components/presentation/Presentation'
import Navigator from './components/navigator/Navigator'


function App() {



  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path='/SignUp' element ={<SignUp/>}/>
        <Route path='/LogIn' element ={<LogIn/>}/>
        <Route path='/' element ={<Presentation/>}/>
      </Routes>
    </div>
  );
}

export default App;
