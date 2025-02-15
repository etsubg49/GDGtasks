import React from 'react';
import './childcss.css';
function Child({name,age,email}){
    return(
        <div>
            <p className='text'>my name is {name} </p>
            <p className='text'>my age is {age}</p>
            <p className='text'>my email is {email}</p>
        </div>
    );
}
export default Child;