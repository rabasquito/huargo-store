import CartWidget from './CartWidget.js';
import './NavBar.css';
function NavBar({titulo}) {
    return (
      <>
      <header>
        <div className="container">
            <h1>{titulo}</h1>

            <nav>
                <ul>
                    <li>
                        <a href="#">Aparatos</a>
                    </li>
                    <li>
                        <a href="#">Boxeo & MMA</a>
                    </li>
                    <li>
                        <a href="#">Crossfit</a>
                    </li>
                    <li>
                        <a href="#">Indumentaria</a>
                    </li>
                    <li>
                        <a href="#">Suplementos</a>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </div>
      </header> 
      </>
    );
  }
  
  export default NavBar;
  