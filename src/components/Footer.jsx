import { Link } from "react-router-dom";
import './Footer.css'

export function Footer() {
    return(
        <footer>
            <h2><Link to='/' className="footer_logo">Sul<span>Destino</span></Link></h2>
            <p className='copy'>&copy; SulDestino, 2024.</p>
        </footer>
    )
}