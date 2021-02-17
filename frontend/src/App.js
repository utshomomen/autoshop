import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import logo from './logo.svg';
//import './App.css';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
const App= () =>{
  return (
    //<div className="app"></div>
    <Router>
 <Header />
 <Body/>

 <main className = 'py-3'>
   <Container>

<Route path= '/' component={HomeScreen} exact />
<Route path= '/' component={Body} exact />
<Route path= '/product/:id' component={ProductScreen} exact />
   </Container>

 </main>
 
    <Footer/>
    </Router>

    
  );
}

export default App;
