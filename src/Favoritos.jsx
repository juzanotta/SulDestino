import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './Favoritos.css'

function Favoritos() {
    const [locais, setLocais] = useState([]);

    async function favoritos() {
        const response = await fetch('http://localhost:3000/locais');
        const locais2 = await response.json();

        const locaisFavoritos = locais2.filter(local => local.favorito);
        setLocais(locaisFavoritos);
    }
    favoritos()


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
            <main className='favoritos'>
                <div className='fav_sec'>
                    <h1 className='fav_titulo'>Seus destinos favoritos</h1>
                    <hr className='fav_barra' />

                </div>

                <div className='grid_locais'>
                    {listaLocais}
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Favoritos