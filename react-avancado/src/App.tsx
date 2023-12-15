import './App.css'
import InserirImagem from './components/InserirImagem/InserirImagem'
import ListRender from './components/ListRender/ListRender'
import ManageDate from './components/ManageDate/ManageDate'

function App() {
  return (
    <>
      <div className='container-main'>
        <h1>Avançado React</h1>
       <InserirImagem/>
       <ManageDate/>
       <ListRender/>
      </div>
    </>
  )
}

export default App
