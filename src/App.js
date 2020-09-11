import React from 'react';
import './App.css';
import CountryList from './components/ContryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox'

class App extends React.Component{

  state = {
    countries:[],
    searchField: ''
  }

  async componentDidMount(){
    const resp = await fetch('https://corona-api.com/countries');
    let countries = await resp.json();
    countries = countries.data
    this.setState({countries});
  }

  handleChange = (e) => (
    this.setState({searchField: e.target.value})
  )  

  render(){

    const {countries, searchField} = this.state
    const filteredCountries = countries.filter(country => (
      country.name.toLowerCase().includes(searchField.toLowerCase())
    ) )

    return (
      <div className="App">
          <h1>Covid19 Stats Web App</h1>
          <SearchBox placeholder="Enter country name ..." handleChange={this.handleChange} />
          <CountryList countries = {filteredCountries} />
      </div>
    )
  }
}

export default App;
