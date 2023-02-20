import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colaboradores, setColaboradores ] = useState([]);

  const salvaColaborador = (colaborador) => {
    //mantém se a lista que já se tinha e adiciona um novo dado vindo do form
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }
  return (
    <div className="App">
      <Banner></Banner>
      <Form salvaColaborador={ colaborador => salvaColaborador(colaborador) } ></Form>
    </div>
  );
}

export default App;
