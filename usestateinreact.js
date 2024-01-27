import React from 'react'
import { useState } from 'react';


const Home = () => {

    const[name, setName] = useState("Mario"); // datetype is not an issue whatever it can be 
    // we must import usestate lib 
    //dec const array [anyVar, setantVar] = usestate is called("default name");
    const[age, setage] = useState(19);

    const changeName = () => {
        setName("SuperMario");
        //when function is invocked  it sets a new name to the name variable
        setage(20);
    }

   

    const handle = () => {
        console.log("Hello boy!...");
    }

    const handleClickAgain = (name) => {
        console.log('Hello' + name);
    }

    

  return (
    <div>
        <h2 className='Home'>Heading</h2>
        <p> { name } is { age } years old!...</p>
        
        {/* asusual button onclick event is called */}
        <button onClick={ changeName }>Change name</button>
        <br/>

        <button onClick={handle}>Click here</button>
        <button onClick={handleClickAgain("Vasanth S")}>Argument click</button>
    </div>
  )
}

export default Home
