import { Link } from "react-router-dom";
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { useState } from "react";
import './Header.css'
import { NovoLocal } from "./NovoLocal";

export function Header({ local, locais, setLocais }) {
    const [open, setOpen] = useState(false)

    function open_cadastrar() {
        setOpen(true)
    }

    return (
        <header>
            <div className="nav">
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
                    <Link to='/pesquisar'><img src="./lupa.png" className="header_lupa"/></Link>
                </div>
                <button onClick={open_cadastrar} className="nav_botao">Cadastre um novo destino</button>

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