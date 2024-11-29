import { useState } from 'react'
import { Link  } from "react-router-dom";
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './Formulario.css'

function Formulario() {
    const [botoesMarcados, setBotoesMarcados] = useState([])


    function marcaBotao(value) {
        setBotoesMarcados(previous => {
            if (previous.includes(value)) {
                return previous.filter(item => item !== value)
            } else {
                return [...previous, value]
            }
        })
    }

    function limpar() {
        setBotoesMarcados([])
    }

    return (
        <>
            <Header />
            <section className='formulario'>
                <div className='form_sec'>
                    <h2 className='form_titulo'>Descubra o seu passeio ideal</h2>
                    <hr className='form_barra' />
                </div>

                <form action="filtro">
                    <div className='campo'>
                        <label htmlFor="tipo" className='form_campo_titulo'>Tipo de viagem</label>
                        <div className='form_campo_botoes'>
                            <a href="#"
                                value={'casal'}
                                className={botoesMarcados.includes('casal') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('casal')}>Casal</a>

                            <a href="#"
                                value={'familia'}
                                className={botoesMarcados.includes('familia') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('familia')}>Em família</a>
                            <a href="#"
                                value={'amigos'}
                                className={botoesMarcados.includes('amigos') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('amigos')}>Amigos</a>
                            <a href="#"
                                value={'solo'}
                                className={botoesMarcados.includes('solo') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('solo')}>Solo</a>
                        </div>
                    </div>

                    <div className='campo'>
                        <label htmlFor="duracao" className='form_campo_titulo'>Duração</label>
                        <div className='form_campo_botoes'>
                            <a href="#"
                                value={'1 dia'}
                                className={botoesMarcados.includes('1 dia') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('1 dia')}>1 dia</a>
                            <a href="#"
                                value={'2-3 dias'}
                                className={botoesMarcados.includes('2-3 dias') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('2-3 dias')}>2-3 dias</a>
                            <a href="#"
                                value={'5-7 dias'}
                                className={botoesMarcados.includes('5-7 dias') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('5-7 dias')}>5-7 dias</a>
                            <a href="#"
                                value={'+7 dia'}
                                className={botoesMarcados.includes('+7 dias') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('+7 dias')}>+7 dias</a>
                        </div>
                    </div>

                    <div className='campo'>
                        <label htmlFor="oq_busca" className='form_campo_titulo'>O que você busca?</label>
                        <div className='form_campo_botoes'>
                            <a href="#"
                                value={'descanso'}
                                className={botoesMarcados.includes('descanso') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('descanso')}>Descanso</a>
                            <a href="#"
                                value={'gastronomia'}
                                className={botoesMarcados.includes('gastronomia') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('gastronomia')}>Gastronomia</a>
                            <a href="#"
                                value={'cultura'}
                                className={botoesMarcados.includes('cultura') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('cultura')}>Cultura</a>
                            <a href="#"
                                value={'atividade'}
                                className={botoesMarcados.includes('atividade') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('atividade')}>Atividades</a>
                            <a href="#"
                                value={'trilha'}
                                className={botoesMarcados.includes('trilha') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('trilha')}>Trilhas</a>
                            <a href="#"
                                value={'cascata'}
                                className={botoesMarcados.includes('cascata') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('cascata')}>Cascatas</a>
                            <a href="#"
                                value={'paisagem'}
                                className={botoesMarcados.includes('paisagem') ? 'cor_click' : 'form_campo_botao'}
                                onClick={() => marcaBotao('paisagem')}>Paisagens</a>
                        </div>
                    </div>

                    <div className='form_botoes'>
                        <Link to='/sugestoes' 
                        state={{ botoesMarcados }}><input type="submit" value='Enviar' className='form_botao' state={{botoesMarcados}}/></Link>
                        <input type="reset" value='Limpar' className='form_botao' onClick={limpar}/>
                    </div>

                </form>
            </section>

            <Footer />
        </>
    )
}

export default Formulario