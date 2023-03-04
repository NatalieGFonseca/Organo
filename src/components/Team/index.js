
import Card from '../Card';
import './Team.css'

const Team = (props) => {
    //aplica css dinamicamente
    const css = {backgroundColor: props.fundo, borderColor: props.destaque, color: props.destaque }
    return (
        /*Se houver colaborador, retorna a section, que esta a direita do operador */
        props.colaboradores.length > 0 ? <section className='team' style={ css } >
        <h3 style={{borderColor: props.destaque}} >{props.title}</h3>
         
        <div className='cards'>
        {props.colaboradores.map(colaborador =>
        <Card key={colaborador.nome} nome={colaborador.nome} 
        cargo={colaborador.cargo}
        imagem={colaborador.imagem}
        destaque={props.destaque} /> )}
        </div>
    </section>
    : ''
    )
}

export default Team;