
import "./ListDrop.css";

const ListDrop = (props) => {
  return (
    <div className="listDrop" >
        <label>{props.label}</label>
        <select required={props.obrigatorio} value={props.valor} onChange={ event => props.aoAlterar(event.target.value) } >
            {props.itens.map( item => <option key={item} >{item}</option> )}
        </select>
    </div>
  );
};

export default ListDrop;
