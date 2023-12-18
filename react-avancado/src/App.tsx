import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails/CarDetails'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import Container from './components/Container/Container'
import ExecuteFuntion from './components/ExecuteFunction/ExecuteFuntion'
import InserirImagem from './components/InserirImagem/InserirImagem'
import ListRender from './components/ListRender/ListRender'
import ManageDate from './components/ManageDate/ManageDate'
import ShowUserName from './components/ShowUserName/ShowUserName'
import Mensagem from './components/Mensagem/Mensagem'
import ChangeMessageState from './components/ChangeMessageState/ChangeMessageState'

function App() {

  const listCar = [
    { id: 1, color: 'Red', km: "10000", brand: 'BMW', newCar: true },
    { id: 2, color: 'Yellow', km: "10000", brand: 'BMW', newCar: true },
    { id: 3, color: 'Blue', km: "10000", brand: 'BMW', newCar: false }
  ]

  function showMesagem() {
    console.log("Ação componente pai");
  }

  const [message, setMessage] = useState("");

  function handleMensagem(msg: string) {
    setMessage(msg);
  }
  

  return (
    <>
      <div className='container-main'>
        <h1>Avançado React</h1>
        <InserirImagem />
        <ManageDate />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Renato" />

        {/*Reaproveitando componete*/}
        <CarDetails id={1} color='Red' km="10000" brand='BMW' />
        <CarDetails id={2} color='Blue' km="2000" brand='BMW' />

        {/*Loop Reaproveitando componete*/}
        {listCar.map((car) => (
          <CarDetails key={car.id} id={car.id} color={car.color} km={car.km} brand={car.brand} newCar={car.newCar} />
        ))}


        {/*Conteiner e passando conteudo dentro dele*/}
        <Container>
          <p>Este é o conteudo</p>
        </Container>

        {/*Executar Função*/}
        <ExecuteFuntion myFunction={showMesagem} />

        {/*State Lift*/}
        <Mensagem texto={message}/>
        <ChangeMessageState handleMensagem={handleMensagem}/>

      </div>
    </>
  )
}

export default App
