import React from 'react';

const VisitedCountry = ({visitedCountries,handleDeleteCountry}) => {
    const {flags,name} = visitedCountries
    return (
        <div className='flex-item-2'>
            <img style={{width:'150px',height:"80px"}} src={flags.png} alt="" srcset="" />
               <h2 style={{color:'red'}}>{name.common}</h2>
               <button onClick={()=>handleDeleteCountry(visitedCountries.cca3)} className='delete-btn'>Delete</button> 
        </div>
    );
};

export default VisitedCountry;