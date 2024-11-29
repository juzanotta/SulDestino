import { useState, useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './Sugestoes.css'
import { Card } from './components/Card'
import { useLocation } from 'react-router-dom'

function Sugestoes() {
    const location = useLocation();
    const [locais, setLocais] = useState([]);
    const botoesMarcados = location.state?.botoesMarcados || [];

    async function sugereLocal() {
        const response = await fetch('http://localhost:3000/locais')
        const locais2 = await response.json()

        const locaisSugestao = locais2.filter(local => {
            const keywords = [
                ...(local.tipo || []),
                ...(local.dias || []),
                ...(local.oferece || [])
            ]
            return botoesMarcados.some(button =>
                keywords.some(keyword =>
                    keyword.toLowerCase().includes(button.toLowerCase()))
            )
        })
        setLocais(locaisSugestao)
    }

    useEffect(() => {
        sugereLocal();
    }, [botoesMarcados]);

    const listaLocais = locais.map(local => (
        <Card
            key={local.id}
            local={local}
            locais={locais}
            setLocais={setLocais}
        />
    ))

    return (
        <>
            <Header />

            <div className='sugestoes'>
                <div className='sug_sec'>
                    <h1 className='sug_titulo'>Sugestões</h1>
                    <hr className='sug_barra' />
                </div>
                <div className="grid_locais">
                    {listaLocais}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sugestoes