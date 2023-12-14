import ImagemLogoLoud from '../../assets/LOUD_LOGO.png'
import './InserirImagem.css'

const InserirImagem = () => {
  return (
    <>
    <div className='conteiner-imagem'>
         {/*Colocando Imagem da pasta public*/}
        
         <div>
          <img src='/LOUD_LOGO.png' alt='Loud'></img>
        </div>
        {/*Colocando imagem dentro da pasta assets*/}
        <div>
          <img src={ImagemLogoLoud} alt='Loud-foda'></img>
        </div>
    </div>
    </>
  )
}

export default InserirImagem
