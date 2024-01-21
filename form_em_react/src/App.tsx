import './App.css'
import MyForm from './components/MyForm/MyForm'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Formulario</h1>
        <MyForm user={{name:"Renato" ,email:"renato@gmail.com",bio:"Estudante de React",role:"Admin"}} />
      </div>

    </>
  )
}

export default App
