import { useState } from "react"
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch('http://localhost:3000/user',
        {
          method:'POST',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': 'bearer xxxxxxx'
          },
          body: JSON.stringify( { name, email,  password } )  
        })
        if(!response.ok){
            console.log('error en la peticion:')
        }else{
            //TODO mostrar un mensaje tipo toast
            navigate('/userList')
        }

    }

    return <>
        <h1>Formulario registro</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" value={name} 
                onChange={(e)=>setName(e.target.value)}/>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
        
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Registro</button>
        </form>
    </>
}

export default UserForm