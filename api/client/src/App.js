import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import Cart from './components/Cart'
import Oneproduct from './components/Oneproduct'
import { CartState } from './context/Context';


export const App = () => {
const {state : user } = CartState();
    return (
        <>
        <Router>
        <Navbar/>
        <Switch>
       <Route exact path='/'><Home/></Route>
       <Route path='/signup'>{user ? <Login/>:<Signup/>}</Route>
       <Route path='/login'>
           {user ? <Home/>
           : <Login/>}</Route>
       <Route path='/cart'>
       {user ? <Cart/>
           : <Login/>}
           </Route>
       <Route path='/item/:postId'><Oneproduct/></Route>
        </Switch>
       
        </Router>
        </>
    )
}

export default App
