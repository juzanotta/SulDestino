import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useForm } from "react-hook-form";
import './Pesquisar.css'
import { Card } from "./components/Card";

export function Pesquisar() {
    const { register, handleSubmit } = useForm()
    const [locais, setLocais] = useState([])

    async function pesquisaLocal(data) {
        if (data.palavra.lenght < 2) {
            alert('Insira pelos menos 2 caracteres')
            return
        }

        const response = await fetch('http://localhost:3000/locais')
        const locais2 = await response.json()
        
        const locaisPesquisa = locais2.filter(local => {
            const keywords = [
                ...(local.tipo || []),
                ...(local.dias || []),
                ...(local.oferece || [])
            ]
            return (
                (local.nome.toLowerCase().includes(data.palavra.toLowerCase())) ||
                (local.cidade.toLowerCase().includes(data.palavra.toLowerCase())) ||
                keywords.some(keyword => keyword.toLowerCase().includes(data.palavra.toLowerCase())) 
            )
    });
        setLocais(locaisPesquisa)
    }

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
            

            <div className="pesquisa">
                <div className="pesq_sec">
                    <h1 className="pesq_titulo">Pesquisa de Locais</h1>
                    <hr className="pesq_barra" />
                </div>

                <form onSubmit={handleSubmit(pesquisaLocal)}>
                    <p className="pesq_campo">
                        <input type="text" required placeholder="Pesquise por nome, localização ou palavras-chave" className="pesq_input" {...register('palavra')}/>
                        <input type="submit" value="Pesquisar" className="pesq_submit"/>

                    </p>
                        <div className="grid_locais">
                            {listaLocais}
                        </div>
                </form>
            </div>

            <Footer />
        </>
    )
}