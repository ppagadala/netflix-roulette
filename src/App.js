import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import SortBy from './components/SortBy/SortBy';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/Nomatch';
import MovieDetail from './components/MovieDetail/MovieDetail';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function App(){
  return(
    <Router>
      <div className="App">
        <Header/>        
        <Switch>
          <Route exact path="/movies" component={Home}></Route>
          <Route exact path="/movies/:movieId" component={MovieDetail}></Route>          
          <Route exact path="/" component={Home}></Route>
          <Route path="*" component={NoMatch}></Route>          
        </Switch>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </div>
    </Router>
  );
}


 
