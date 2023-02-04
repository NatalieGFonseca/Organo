import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField label="Nome" placeholder="Digite o seu nome"></TextField>
        <TextField label="Cargo" placeholder="Digite o seu cargo"></TextField>
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        ></TextField>
      </form>
    </section>
  );
};

export default Form;
