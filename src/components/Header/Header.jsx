 import './Header.scss';
 import logo from '../images/logo.png';

 const Header = () =>{
     return(
       <nav className='nav-link'>
           <img src={logo} alt = 'city logo' width={70} height={100} />
           <ul className="nav-links">
               <li className="nav-link"><a href="/" className="nav-link">Home</a></li>
           </ul>
           <ul className="nav-links">
               <li className="nav-link"><a href="/" className="nav-link">About</a></li>
           </ul>
           <ul className="nav-links">
               <li className="nav-link"><a href="/" className="nav-link active">Tours</a></li>
           </ul>
       </nav>
     )
 }

 export default Header