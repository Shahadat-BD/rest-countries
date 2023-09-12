import React from 'react';

const VisitedCountry = ({visitedCountries,id,handleDeleteCountry}) => {
    const {flags,name,cca3} = visitedCountries
    return (
        <div className='flex-item-2'>
            <img style={{width:'150px',height:"80px"}} src={flags.png} />
               <h2>{name.common}</h2>
               <button onClick={()=>handleDeleteCountry(cca3,id)} className='delete-btn'>Delete</button> 
        </div>
    );
};

export default VisitedCountry;