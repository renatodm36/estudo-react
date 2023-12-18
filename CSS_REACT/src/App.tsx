import './App.css'
import MyComponent from './components/MyComponent/MyComponent'
import Title from './components/Title/Title';

function App() {

  const redTitle = false;

  return (
    <>
      <div className='App'>
          <h1>React CSS</h1>
          <MyComponent/>
          {/*Classe dinâmica*/}
          <h2 className={redTitle ? 'ClassTrue':'ClassFalse'}>Este título vai ter classe dinâmica</h2>
          {/*CSS Modules*/}
          <Title/>
      </div>
    </>
  )
}

export default App
