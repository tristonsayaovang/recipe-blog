import { Link } from "react-router-dom";


const Header = () => {
    return(
      <>
      <nav className='ml-8 mb-2'>
      <ul className='flex font-sans text-red-600 font-bold text-xl mt-10 shadow-slate-800 z-50'>
          <Link className='mx-10 my-5 border-2 border-transparent hover:border-b-red-600 hover:scale-110' to='/'>Home</Link>
          <Link className='mx-10 my-5 border-2 border-transparent hover:border-b-red-600 hover:scale-110' to='about'>About</Link>
          <Link className='mx-10 my-5 border-2 border-transparent hover:border-b-red-600 hover:scale-110' to='recipe'>
            Recipes</Link>
      </ul>
      
      
      </nav>
      </>
    )
}

export default Header;