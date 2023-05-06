import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn'
import './App.scss';
import Home from './pages/Home/Home';
import { useContext, useEffect } from 'react';
import Signup from './components/Signup/Signup';
import Writer from './pages/Writer/Writer';
import Book from './pages/Book/Book';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import { Context } from './components/Context/Context';


function App() {
   let {pathname} = useLocation()
   let navigation = useNavigate()
   const {id, setId} = useContext(Context);
   useEffect(()=>{
    if(!window.localStorage.getItem('token', '123')){
      navigation('/login/signup')
    }
  },[pathname])
  return (
    <div className="App">
        <Header name={id}/>
      <Routes>
         <Route path='/' element= {<Home/>}/>
        <Route path='/login' element={<Login/>}>
            <Route path='signup' element= {<Signup/>}/>
            <Route path='' element= {<SignIn/>}/>
        </Route>
         <Route path='/writer/:slug' element= {<Writer/>}/>
         <Route path='/book/:slug' element= {<Book/>}/>
         <Route path='/*' element={<h3>404 not found</h3>}/>
      </Routes>
    </div>
  );
}
export default App;