// import react from 'react'
import Navbar from './Navbar'
// import { useState } from 'react'
import names from './name';
import Button from './Button';

const App = ()=>{
  
  // const [number, setNumber] = useState(0);
  // const[name, setName] = useState("Abrham")

  // function Updater () {
  //   setNumber(number+1);
  // }
  // function nameUpdater () {
  //   setName("Eyob");

  // }
 
  return(
    <div className='h-screen justify-center '>
      <Navbar className=" m-10"/>

    {/* <button className='' onClick={Updater}> Click</button>

    <p>{number}</p> */}

    {/* <button className='bg-red-500 justify-center h-30 w-30 ' onClick={nameUpdater}>Name</button>
    <p>{name}</p> */}

    {
      names.map((name, index) => (
        <li className='hover:text-green-500'  key={index}>{name}</li>
      )
    )}

    <Button arr = {names}/>

  
    </div>

  )
}

export default App
