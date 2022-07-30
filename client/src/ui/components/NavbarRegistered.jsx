import { Link, NavLink, useNavigate } from 'react-router-dom';
import tenis from '../../assets/tenisLogo/tenisLogo.png';
import '../../stylesheets/style.css';
import {logout} from "../../api/auth";
import useAuth from "../../hooks/useAuth";

export const NavbarRegistered = () => {
    const navigate=useNavigate();
    const user=useAuth().user;
    const {name}=user;
    //console.log(email);

    const logoutUser=()=>{
       logout();
       //window.location.reload();
       window.location.href="/inicio";
    }
    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/inicio/usuario">
                <img src={tenis} alt="Logo" height={"60px"}/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    
                    

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/catalogo/usuario" 
                    >Catalogo/usuarios
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                 <span className='nav-item nav-link text-primary'>
                    {name}
                 </span>
                 {/*<button className='btn btn-primary'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                 </svg>
    </button>*/}
                 <button className="btn btn-primary mx-1"
                 onClick={logoutUser}>
                    logout
                 </button>
                </ul>
            </div>
        </nav>
    )
}
