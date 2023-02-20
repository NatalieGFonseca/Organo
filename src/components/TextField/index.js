
import './TextField.css'
const TextField = (props) => {

    const toWrite = (event) =>{
        props.aoAlterar(event.target.value )
     }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={toWrite} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField