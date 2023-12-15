import ImagemLogoLoud from '../../assets/LOUD_LOGO.png'
import './InserirImagem.css'

const InserirImagem: React.FC = () => {
  return (
    <>
      <div className='conteiner-imagem'>
        {/*Colocando Imagem da pasta public*/}

        <img src='/LOUD_LOGO.png' alt='Loud'></img>

        {/*Colocando imagem dentro da pasta assets*/}
        <img src={ImagemLogoLoud} alt='Loud-foda'></img>
      </div>
    </>
  )
}

export default InserirImagem
