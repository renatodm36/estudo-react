import './App.css'
import InserirImagem from './components/InserirImagem/InserirImagem'
import ManageDate from './components/ManageDate/ManageDate'

function App() {
  return (
    <>
      <div className='container-main'>
        <h1>Avançado React</h1>
       <InserirImagem/>
       <ManageDate></ManageDate>
      </div>
    </>
  )
}

export default App
