import './Card.css'

function Card({nome, cargo, imagem, destaque}){
    return (
        <div className='card'>
           <div className='header' style={{background:destaque}} >
                <img src={imagem} alt={nome} ></img>
           </div>
           <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
           </div>
        </div>
    )
}

export default Card