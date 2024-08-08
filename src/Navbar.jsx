// import react from 'react'
import logo from './assets/logo.jpg'
const Navbar = ()=>{
  return(
    <div className=''>
     <nav className='bg-slate-600 p-5 flex justify-between' >
      <div className=' rounded-full'>
        <img src= {logo} alt="" className='h-10 w-10 rounded'/>
      </div>
      <ul className='flex  space-x-3 justify-end text-white  align-middle' >
        <li >Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
     </nav>
    </div>
    
    
  )
}

export default Navbar