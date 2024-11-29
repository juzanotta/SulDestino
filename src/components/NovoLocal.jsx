import { useForm } from "react-hook-form"
import './NovoLocal.css'

export function NovoLocal({ locais, setLocais, setOpen }) {
    const { register, handleSubmit, reset } = useForm();

    function salvaLocal(data) {
        const novo = {
            nome: data.nome,
            cidade: data.cidade,
            foto: data.foto,
            descricao: data.descricao,
            tipo: data.tipo,
            dias: data.dias,
            oferece: data.oferece,
            comentarios: [],
            favorito: Boolean(false)
        }

        const locais2 = [novo, ...locais]
        setLocais(locais2)
        fetch('http://localhost:3000/locais', {
            method: "POST",
            body: JSON.stringify(novo),
        })

        reset()
        setOpen(false)
    }

    return (
        <div className="novolocal">
            <h1 className="nl_titulo">Formulário de cadastro</h1>

            <form className="nl_form" onSubmit={handleSubmit(salvaLocal)}>

                <p className="nl_campo">
                    <label className="nl_label">Nome do local: </label>
                    <input type="text" {...register('nome')} required className="nl_input" />
                </p>
                <p className="nl_campo">
                    <label className="nl_label">Cidade: </label>
                    <input type="text" {...register('cidade')} required className="nl_input" />
                </p>
                <p className="nl_campo">
                    <label className="nl_label">Foto: </label>
                    <input type="text" {...register('foto')} required className="nl_input" />
                </p>
                <p className="nl_campo">
                    <label className="nl_label">Descrição: </label>
                    <input type="text" {...register('descricao')} required className="nl_input" />
                </p>

                <h3 className="nl_carac">Características/recomendações do local: </h3>

                <p className="nl_campo_radio">
                    <label className="radio_label">Tipo de viagem</label>
                    <div className="radio_campos">
                        <input type="checkbox" id="tipo" value='casal' {...register('tipo')} className="radio_input" />Casal &nbsp;&nbsp;
                        <input type="checkbox" id="tipo" value='familia' {...register('tipo')} className="radio_input" />Em família &nbsp;&nbsp;
                        <input type="checkbox" id="tipo" value='amigos' {...register('tipo')} className="radio_input" />Amigos &nbsp;&nbsp;
                        <input type="checkbox" id="tipo" value='solo' {...register('tipo')} className="radio_input" />Solo &nbsp;&nbsp;
                    </div>
                </p>

                <p className="nl_campo_radio">
                    <label className="radio_label">Duração</label>
                    <div className="radio_campos">
                        <input type="checkbox" id='dias' value='1 dia' {...register('dias')} className="radio_input" />1 dia &nbsp;&nbsp;
                        <input type="checkbox" id='dias' value='2-3 dias' {...register('dias')} className="radio_input" />2-3 dias &nbsp;&nbsp;
                        <input type="checkbox" id='dias' value='5-7 dias' {...register('dias')} className="radio_input" />5-7 dias &nbsp;&nbsp;
                        <input type="checkbox" id='dias' value='+7 dias' {...register('dias')} className="radio_input" />+7 dias &nbsp;&nbsp;
                    </div>
                </p>

                <p className="nl_campo_radio">
                    <label className="radio_label">O que oferece</label>
                    <div className="radio_campos">
                        <input type="checkbox" id="oferece" value='descanso' {...register('oferece')} className="radio_input" />Descanso &nbsp;&nbsp;
                        <input type="checkbox" id="oferece" value='gastronomia' {...register('oferece')} className="radio_input" />Gastronomia &nbsp;&nbsp;
                        <input type="checkbox" id="oferece" value='cultura' {...register('oferece')} className="radio_input" />Cultura &nbsp;&nbsp;
                        <input type="checkbox" id="oferece" value='atividade' {...register('oferece')} className="radio_input" />Atividades &nbsp;&nbsp;
                        <input type="checkbox" id="oferece" value='trilha' {...register('oferece')} className="radio_input" />Trilhas &nbsp;&nbsp;
                        <input type="checkbox" id="oferece" value='cascata' {...register('oferece')} className="radio_input" />Cascatas &nbsp;&nbsp;
                        <input type="checkbox" id="oferece" value='paisagem' {...register('oferece')} className="radio_input" />Paisagens &nbsp;&nbsp;
                    </div>
                </p>

                <div className='nl_botoes'>
                    <p>
                        <input type="submit" value='Cadastrar' className="nl_submit" />
                    </p>
                    <p>
                        <input type="reset" value='Limpar' className="nl_reset" />
                    </p>
                </div>
            </form>
        </div>
    )
}