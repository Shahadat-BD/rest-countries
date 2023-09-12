import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'
import VisitedCountry from '../Country/VisitedCountry/VisitedCountry';

const Home = () => {
    const [countries,setCountries] =  useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data.slice(0,12)))
    },[])
        
    const [visitedCountry,setVisitedCountry] = useState([])
    // const [restcountries,setRestCountries] =  useState([])

    const handleAddedCountry = country => {
         const newCountry = [...visitedCountry, country]
               setVisitedCountry(newCountry)
    }

    const handleDeleteCountry = (cca3,id) => {
         const restcountriesAfterDel = visitedCountry.filter((delCountry,idx) => (delCountry.cca3 !== cca3 || idx !== id))
                setVisitedCountry(restcountriesAfterDel)
    }
           
    return (
        <div>
            <h1>Countries {countries.length}</h1>
             <div className='flex-item'>
             <div className='grid-container'>
               {
                countries.map(country => <Country countryLength={visitedCountry} handleAddedCountry={handleAddedCountry}  key={country.cca3} country={country}></Country>)
               }
             </div>
             <div>
                <h1>Visited Country : {visitedCountry.length}</h1>
               { visitedCountry.length >= 5 ?
                <p className='error-text'>sorry! you are not added above 5 countries</p>
                :
                ''
               }
                {
                visitedCountry.map((vCountry,idx)=> <VisitedCountry key={idx} id={idx} handleDeleteCountry={handleDeleteCountry} visitedCountries={vCountry}></VisitedCountry> )
                }
             </div>
             </div>
        </div>
    );
};

export default Home;