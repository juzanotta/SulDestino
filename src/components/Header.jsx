import { Link } from "react-router-dom";
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { useState } from "react";
import './Header.css'
import { NovoLocal } from "./NovoLocal";

export function Header({ local, locais, setLocais }) {
    const [open, setOpen] = useState(false)
    const [ menuOpen, setMenuOpen ] = useState(false)

    function open_cadastrar() {
        setOpen(true)
    }

    function clickMenu() {
        setMenuOpen(!menuOpen); 
    }

    return (
        <header>
            <div className="nav">
                <img src="./burger.png" className="burger" />
                <p><Link to='/formulario' className="nav_link">Encontre</Link></p>
                <p><Link to='/favoritos' className="nav_link"
                    local={local}
                    locais={locais}
                    setLocais={setLocais}
                >Favoritos</Link></p>
            </div>
            <h2><Link to='/' className="logo">Sul<span>Destino</span></Link></h2>
            <div className="header_botoes">
                <div className="lupa_wrapper">
                    <Link to='/pesquisar'><img src="./lupa.png" className="header_lupa" /></Link>
                </div>
                <button onClick={open_cadastrar} className="nav_botao">Cadastre um novo destino</button>
            </div>





            <div className="header_mobile">
                <h2><Link to='/' className="logo_mobile">Sul<span>Destino</span></Link></h2>
                <div className="nav_mobile">
                    <img src="./burger.png" className="menu_icone_mobile" onClick={clickMenu} />
                    <Link to='/pesquisar' className="lupa_mobile"><img src="./lupa.png" /></Link>
                </div>
                <div className={menuOpen ? "menu_open" : "menu_closed"}>
                    <p><Link to='/formulario' className="nav_link_mobile">Encontre</Link></p>
                    <p><Link to='/favoritos' className="nav_link_mobile"
                        local={local}
                        locais={locais}
                        setLocais={setLocais}
                    >Favoritos</Link></p>
                    <button onClick={open_cadastrar} className='nav_botao_mobile'>Cadastre um novo destino</button>
                </div>

            </div>


            <Modal open={open} onClose={() => setOpen(false)} center>
                <NovoLocal
                    local={local}
                    locais={locais}
                    setLocais={setLocais}
                    setOpen={setOpen}
                />
            </Modal>
        </header>

    )
}