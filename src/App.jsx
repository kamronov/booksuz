import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login'
import './App.scss';
import Home from './pages/Home/Home';
import { useEffect } from 'react';
import Signup from './pages/Signup/Signup';
import Writer from './pages/Writer/Writer';
import Book from './pages/Book/Book';
import Header from './components/Header/Header';
function App() {
   let location = useLocation()
   let navigation = useNavigate()
   useEffect(()=>{
    
    if(window.localStorage.getItem('key') == 'qwertyuiop'){
      
    }else{
      navigation('/login')
    }
  },[location.pathname])
  return (
    <div className="App">
        <Header/>
      <Routes>
         <Route path='/' element= {<Home/>}/>
         <Route path='/signup' element= {<Signup/>}/>
         <Route path='/login' element= {<Login/>}/>
         <Route path='/writer/:slug' element= {<Writer/>}/>
         <Route path='/book/:slug' element= {<Book/>}/>
      </Routes>
    </div>
  );
}
export default App;