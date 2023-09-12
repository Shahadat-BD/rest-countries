import React, { useState } from 'react';

const Country = ({country,handleAddedCountry}) => {
    const {name,region,capital,area,flags} = country
    const [visited,setVisited]  = useState(false)
    const handleVisitedBtn = () =>{
          setVisited(!visited)
    }

    return (
        <div className={`${visited ? 'visited-country' : 'card-country'}`}>
             <img style={{width:"100%", height:"200px"}} src={flags.png}  />
             <h2>{name.common}</h2>
             <p>region :{region}</p>
             <p>Capital: {capital[0]}</p>
             <p>Area : {area}</p>
             <button onClick={handleVisitedBtn} className='button-design'>{visited ? "visited" : "not visited"}</button> <br /> <br />
             <button onClick={()=>handleAddedCountry(country)} className='button-design'>added country</button>
        </div>
    );
};

export default Country;