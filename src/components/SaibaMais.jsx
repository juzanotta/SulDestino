import { useState } from 'react';
import { Footer } from './Footer'
import { Header } from './Header'
import { useForm } from 'react-hook-form';
import './SaibaMais.css'

function SaibaMais({ local = {}, locais, setLocais }) {
    const [favorito, setFavorito] = useState('./vazio.png');
    const { register } = useForm()

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
         
            const locais2 = locais.filter((l) => l.id !== local.id);
            setLocais(locais2);

            fetch(`http://localhost:3000/locais/${local.id}`, {
                method: 'DELETE',
            })
        }
    }

    return (
        <>
            <div className='saiba_mais'>
                <div className='sm_container'>
                    <div className='sm_conteudo'>
                        <h1 className='sm_nome'>{local.nome}</h1>
                        <div className="sm_loc">
                            <img src='./loc.png' className="sm_loc_img" />
                            <p className="sm_loc_texto">{local.cidade}</p>
                        </div>
                        <p className='sm_p'>{local.descricao}</p>
                        <div className="sm_pc">{palavrasChave()}</div>

                    </div>

                    <div className='sm_imagens'>
                        <img src={local.foto} alt="" className='sm_img_gr' />
                    </div>

                </div>
            <div className='sm_avaliacao'>
                <p className='sm_campo'>
                    <label className='sm_label'>Escreva seu comentário:</label>
                    <textarea name="comentario" id="comentario" className='sm_textarea'></textarea>
                </p>
                <div className='sm_fav'>
                    <div className="card_buttons">
                        <img src="./trash.png" onClick={deletar} className="card_trash" />
                        <img src={favorito} onClick={favoritar} {...register('favorito')} className="card_coracao" />
                    </div>
                    <p className='sm_fav_p'>Adicione esse local aos seus favoritos</p>
                </div>
            </div>
            </div>

        </>
    )
}

export default SaibaMais