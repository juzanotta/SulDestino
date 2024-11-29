import { Link } from "react-router-dom";
import './Card.css'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-responsive-modal";
import SaibaMais from "./SaibaMais";

export function Card({ local, locais, setLocais }) {
    const [favorito, setFavorito] = useState(local.favorito ? 'preenchido.png' : 'vazio.png');
    const { register } = useForm()
    const [openSM, setOpenSM] = useState(false)

    function open_saibaMais() {
        setOpenSM(true)
    }

    function favoritar() {
        const novoFavorito = !local.favorito
        local.favorito = novoFavorito

        setFavorito(novoFavorito ? 'preenchido.png' : 'vazio.png')

        const locais2 = [...locais]
        const ind = locais2.findIndex(x => x.id === local.id)
        locais2[ind].favorito = novoFavorito

        setLocais(locais2)

        fetch(`http://localhost:3000/locais/${local.id}`, {
            method: 'PUT',
            body: JSON.stringify(locais2[ind])
        })
    }

    function palavrasChave() {
        const keywords = [
            ...(local.tipo || []),
            ...(local.dias || []),
            ...(local.oferece || [])
        ]

        return keywords.map((item, index) => (
            <p key={index} className="pc_item">{item}</p>
        ));
    }

    function deletar() {
        if (window.confirm("Tem certeza que deseja excluir este local?")) {

            const locais2 = locais.filter((x) => x.id !== local.id);
            setLocais(locais2);

            fetch(`http://localhost:3000/locais/${local.id}`, {
                method: 'DELETE',
            })
        }
    }

    return (
        <div className="card_wrapper">
            <div className="card">
                <img src={local.foto} className="card_foto" />
                <div className="card_conteudo">
                    <div className="card_nome_fav">
                    <h2 onClick={open_saibaMais} className="card_nome">{local.nome}</h2>
                        {/* <h2>{<Link to='/saibamais' className="card_nome"
                            key={local.id}
                            local={local}
                            locais={locais}
                            setLocais={setLocais}>
                            {local.nome}
                        </Link>}</h2> */}
                        <div className="card_buttons">
                            <img src="./trash.png" onClick={deletar} className="card_trash" />
                            <img src={favorito} onClick={favoritar} {...register('favorito')} className="card_coracao" />
                        </div>
                    </div>
                    <div className="card_loc">
                        <img src="./loc.png" className="loc_img" />
                        <p className="loc_texto">{local.cidade}</p>
                    </div>
                    {/* <p className="card_desc">Descrição do Lugar</p> */}
                    <div className="card_pc">{palavrasChave()}</div>

                </div>
            </div>
            <Modal open={openSM} onClose={() => setOpenSM(false)} center>
                <SaibaMais 
                key={local.id}
                local={local}
                locais={locais}
                setLocais={setLocais}/>
            </Modal>
        </div>
    )
}