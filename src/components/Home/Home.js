import React,{Component} from 'react';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import Search from '../Search/Search';
import SearchButton from '../SearchButton/SearchButton';
import SearchBy from '../SearchBy/SearchBy';
import FilterContainer from '../../containers/FilterContainer/FilterContainer';
import MoviesFound from '../MoviesFound/MoviesFound';
import SortBy from '../SortBy/SortBy';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';
import { connect } from "react-redux";
import { getAllMovies,updateFilteredMovies } from '../../actions/actons';



class Home extends Component{
  state = {searchBy:'title',sortBy:''}; 
  
  componentDidMount(){
    this.props.getMovies();
  }  

  onChangehandler = (event) => {
    this.searchString = event.target.value;
    this.filterResultsByStringIncludes(this.searchString,this.state.searchBy);
  }
  onSearchHandler = (e) => {
    this.filterResultsByStringIncludes(this.searchString,this.state.searchBy);
  };
  onSearchByHandler = (event) =>{
    this.setState({
      searchBy:event.target.value
    })
  }
  onSortByHandler= (event) =>{
    this.setState({
        sortBy:event.target.value
    })
    this.sortResultsByCriteria(event.target.value)
  }
  filterResultsByStringIncludes(string,key){
    let arr;    
    if(string && string.length > 0){
      arr = this.props.movies.filter(movie => {
        if(Array.isArray(movie[key])){
            let index = movie[key].findIndex(element =>{
                return element.toLowerCase().includes(string.toLowerCase())
            });
            if(index >= 0){
                return true;
            }
        }else{
            return movie[key] && movie[key].toLowerCase().includes(string.toLowerCase());
        }        
      });
    }else{
      arr = this.props.movies;
    }        
    this.props.updateFilteredMovies(arr);
  }
  sortResultsByCriteria(criteria){
    let arr = [];
    const compartFunction = (a,b,key) =>{
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }        
      return 0;
    }
    if(criteria ==='date'){
     arr = this.props.filteredMovies.sort((a,b) => compartFunction(a,b,'release_date')); 
    }else if(criteria === 'rating'){
      arr = this.props.filteredMovies.sort((a,b) => compartFunction(a,b,'vote_average'));
    }    
    this.props.updateFilteredMovies(arr);
  }
  render(){             
    return (
      <>      
        <SearchContainer>          
          <h3>FIND YOUR MOVIE</h3>
          <Search change={this.onChangehandler}></Search>
          <SearchButton search={this.onSearchHandler}></SearchButton>
          <SearchBy searchBy={this.onSearchByHandler} searchByProp={this.state.searchBy}></SearchBy>
        </SearchContainer>      

       {
            this.props.filteredMovies && this.props.filteredMovies.length > 0 ?
            <FilterContainer>
                <MoviesFound numberOfMoviesFound={this.props.filteredMovies.length}></MoviesFound>
                <SortBy sortBy={this.onSortByHandler} sortByProp={this.state.sortBy}></SortBy>
            </FilterContainer>
            : null
       } 

       <ResultsContainer movies={this.props.filteredMovies}></ResultsContainer>                
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {    
    return {
        movies : state.movies,
        filteredMovies : state.filteredMovies
    }
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => getAllMovies(dispatch),
        updateFilteredMovies : (data) => updateFilteredMovies(dispatch,data)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);