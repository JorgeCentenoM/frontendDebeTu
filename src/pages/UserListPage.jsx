import { useEffect } from "react"
import { useState } from "react"

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading ,setLoading] = useState(false)

    useEffect(()=>{
        async function callApi(){
            setLoading(true)
            const request = await fetch('http://localhost:3000/user/')
            const json = await request.json()
            setUsers(json)
            setLoading(false)
        }
        callApi()
    },[])

    if(loading) return <div>Loading...</div>
    if(!users.length) return <div>'No hay usuarios'</div>

    return <>
        <h1>Lista usuarios  ({users.length})</h1>
        {users.map(user => 
            <div key={user._id}>{user.email}</div>
        )}
    </>
}

export default UserList