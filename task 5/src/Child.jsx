import react from 'react';
function Child({name,age,email}){
    return(
        <div>
            <p>my name is {name} </p>
            <p>my age is {age}</p>
            <p>my email is {email}</p>
        </div>
    );
}
export default Child;