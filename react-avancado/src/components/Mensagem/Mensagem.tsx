
interface MensagemProps
{
    texto: string;
}

const Mensagem:React.FC<MensagemProps> = ({texto}) => {
  return (
    <div>
      <h1>Essa é a Mensagem: {texto}</h1>
    </div>
  )
}

export default Mensagem
