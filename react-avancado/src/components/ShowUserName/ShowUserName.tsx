
interface ShowUserNameProps {
    name: string;
  }

const ShowUserName: React.FC<ShowUserNameProps> = (props) => {
  return (
    <>
        <div>
            <h2>O nome do usuário: {props.name}</h2>
        </div>
    </>
  )
}

export default ShowUserName;
