import './App.css'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
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
       <ConditionalRender/>
      </div>
    </>
  )
}

export default App
