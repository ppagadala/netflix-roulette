import React,{Component} from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import FilterContainer from './containers/FilterContainer/FilterContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import Search from './components/Search/Search';
import SearchButton from './components/SearchButton/SearchButton';
import Footer from './components/Footer/Footer';
import SearchBy from './components/SearchBy/SearchBy';
import MoviesFound from './components/MoviesFound/MoviesFound';
import SortBy from './components/SortBy/SortBy';
import ResultsContainer from './containers/ResultsContainer/ResultsContainer';

class App extends Component{

  state = {movies:[]};

  componentDidMount(){

    fetch('https://reactjs-cdp.herokuapp.com/movies')
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies:data.data,
        filteredMovies:data.data
      });
    })
    .catch(error => {
      console.log('Looks like there was a problem: \n', error);
    });
    
  }
  render(){
    return (
      <>
        <SearchContainer>
          <h2 style={{color:'#f65261'}}>netflix</h2>
          <span style={{color:'#f65261'}}>roulette</span>
          <h3>FIND YOUR MOVIE</h3>
          <Search></Search>
          <SearchButton></SearchButton>
          <SearchBy></SearchBy>
        </SearchContainer>      

        <FilterContainer>
          <MoviesFound moviesFound="0"></MoviesFound>
          <SortBy></SortBy>
        </FilterContainer>

        <ResultsContainer>

        </ResultsContainer>

        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </>
    )
  }
}


export default App;
