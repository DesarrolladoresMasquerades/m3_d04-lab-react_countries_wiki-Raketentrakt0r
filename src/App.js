import logo from './logo.svg';
import './App.css';
import countriesDataJSON from "./countries.json"
import {useState} from 'react'
import Navbar from "./components/Navbar"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import  { Routes, Route} from "react-router-dom"

function App() {
  const [countriesData,setCountriesData] = useState(countriesDataJSON)
  return (
    <div className="App">
       <Navbar />
       {countriesDataJSON.map((country) => {
            return (
              <CountriesList CountriesList={country} />

            )
  
            })}
            <Routes>
        {countriesDataJSON.map((country)=>(
                <Route exact path={"/" + country.alpha3Code}
                element={<CountryDetails CountryDetails={country}/>}>

                </Route>
            ))}
              

              
            </Routes>      
    </div>
    
  );
}

export default App;
