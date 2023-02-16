import { useState } from "react";

const DebtForm = ({idConnection}) =>{
    const [amount, setAmount] = useState(0)
    const [concept, setConcept] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const token = localStorage.getItem("token");
        const response = await fetch('http://localhost:3000/connection/addDebt/'+idConnection,
        {
          method:'POST',
          headers: {
            'Content-Type':'application/json',
            "Authorization": "bearer " + token,
          },
          body: JSON.stringify( { amount, concept } )  
        })
        if(!response.ok){
            console.log('error en la peticion:')
        }else{
            console.log('deuda añadida')
        }

    }

    return <>
    <form onSubmit={handleSubmit} className="flex flex-row gap-5">
        <label htmlFor="concept">Concepto:</label>
        <input type="text" className="h-6 w-14" id="concep" value={concept} 
            onChange={(e)=>setConcept(e.target.value)}/>

        <label htmlFor="amount">Amount2</label>
        <input type="text" className="h-6 w-14" id="amount" value={amount} 
            onChange={(e)=>setAmount(e.target.value)}/>
    
        <button type="submit">Add</button>
    </form>
</>
}

export default DebtForm