import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './SaibaMais.css'

function SaibaMais({ local = {}, locais, setLocais }) {
    const [favorito, setFavorito] = useState('./vazio.png');
    const { register, handleSubmit, reset } = useForm()

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

    function comentar(data) {
        const comentario = data.comentario

        const locais2 = [...locais]
        const ind = locais2.findIndex(x => x.id === local.id)

        locais2[ind].comentarios.push(comentario)

        setLocais(locais2)

        fetch(`http://localhost:3000/locais/${local.id}`, {
            method: 'PUT',
            body: JSON.stringify(locais2[ind])
        })

        reset()
    }

    function listaComentarios() {
        return local.comentarios.map((comentario, index) => (
            <div className='comentario_campo'>
                <img src="profile.png" className='comentario_profile' />
                <div className='comentario_conteudo'>
                    <p className='comentario_nome'>Visitante</p>
                    <p key={index} className='comentario_coment'>{comentario}</p>

                </div>
            </div>
        ))
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
                    <form onSubmit={handleSubmit(comentar)} className='sm_form'>
                        <p className='sm_campo'>
                            <label className='sm_label'>Escreva seu comentário:</label>
                            <textarea name="comentario" id="comentario" className='sm_textarea' {...register('comentario')}></textarea>
                        </p>
                        <div className='comentario_container'>
                            <div className='sm_fav'>
                                <img src={favorito} onClick={favoritar} {...register('favorito')} className="card_coracao" />
                                <p className='sm_fav_p'>Adicione esse local aos seus favoritos</p>
                            </div>
                            <p>
                                <input type="submit" value='Enviar comentário' className='comentario_submit' />
                            </p>

                        </div>
                    </form>
                </div>
                <div className="sm_comentarios">
                    {listaComentarios()}
                </div>
            </div>

        </>
    )
}

export default SaibaMais