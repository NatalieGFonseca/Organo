import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const times = [
    {
      title: 'Programação',
      fundo: '#D9F7E9',
      destaque: '#57C278'
    },
    {
      title: 'Front-End',
      fundo: '#E8F8FF',
      destaque: '#82CFFA'
    },
    {
      title: 'Data Science',
      fundo: '#F0F8E2',
      destaque: '#A6D157'
    },
    {
      title: 'DevOps',
      fundo: '#FDE7E8',
      destaque: '#E06B69'
    },
    {
      title: 'UX e Design',
      fundo: '#FAE9F5',
      destaque: '#DB6EBF'
    },
    {
      title: 'Mobile',
      fundo: '#FFF5D9',
      destaque: '#FFBA05'
    },
    {
      title: 'Inovação e Gestão',
      fundo: '#FFEEDF',
      destaque: '#FF8A29'
    }
  ];

  const [colaboradores, setColaboradores ] = useState([]);

  const salvaColaborador = (colaborador) => {
    //mantém se a lista que já se tinha e adiciona um novo dado vindo do form
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner></Banner>
      <Form salvaColaborador={ colaborador => salvaColaborador(colaborador) } times={ times.map( time => time.title ) } ></Form>
      {times.map( time => <Team 
      key={time.title} 
      title={time.title} 
      fundo={time.fundo} 
      destaque={time.destaque}
      colaboradores={colaboradores.filter( colaborador => colaborador.time === time.title)}  /> ) }
      <Footer></Footer>
    </div>
  );
}

export default App;
