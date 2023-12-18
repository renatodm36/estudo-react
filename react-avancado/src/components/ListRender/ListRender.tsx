import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Renato", "Rafa", "Richard"])

    const [user,setUsers] = useState(
        [            
            {id: 1, name:"Renato", age: 22},
            {id: 2, name:"Rafael", age: 28},
            {id: 3, name:"Richard", age: 26}
        ]
    )

    const deleteRandom =() =>
    {
        const numberRandom = Math.floor(Math.random() * 3);
        
        setUsers((prevUsers) => {

            return prevUsers.filter((user) => numberRandom !== user.id)
        })
    }

    return (
        <>
            <div>
                <ul>
                    {list.map((item,i) =>
                        <li key={i}>{item}</li>
                    )}
                </ul>
                <ul>
                    {user.map((user) =>
                        <li key={user.id}>{user.name} - {user.age}</li>
                    )}
                </ul>
            </div>
            <button onClick={deleteRandom}>Delete random user</button>
        </>
    )
}

export default ListRender