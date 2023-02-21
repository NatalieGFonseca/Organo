
import './Team.css'

const Team = (props) => {
    //aplica css dinamicamente
    const css = {backgroundColor: props.fundo, borderColor: props.destaque, color: props.destaque }
    return (
        <section className='team' style={ css } >
            <h3 style={{borderColor: props.destaque}} >{props.title}</h3>
            
        </section>

    )
}

export default Team;