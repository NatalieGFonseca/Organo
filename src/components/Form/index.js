import Button from "../Button";
import ListDrop from "../ListDrop";
import TextField from "../TextField";
import "./Form.css";
import { useState } from 'react'

const Form = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('')

  const submitted = (event) => {
    event.preventDefault(); ///usado para que não atue da 
                            //forma default de encaminhar para a url local
    
    props.salvaColaborador({
      nome, cargo, imagem, time
    })
  }

  return (
    <section className="form">
      <form onSubmit={submitted} >
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField valor={nome}  obrigatorio={true} label="Nome" placeholder="Digite o seu nome" aoAlterar={valor => setNome(valor)}></TextField>
        <TextField valor={cargo} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" aoAlterar={valor => setCargo(valor)}></TextField>
        <TextField valor={imagem} obrigatorio={true} 
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          aoAlterar={valor => setImagem(valor)}
        ></TextField>
        <ListDrop obrigatorio={true}  label="Time" itens= {props.times} valor={time} aoAlterar={ valor =>  setTime(valor)} ></ListDrop>
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
