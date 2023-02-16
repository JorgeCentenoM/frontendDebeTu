import { useEffect, useState } from "react";
import Debts from "../components/Debts";
import DebtForm from "../components/DebtForm";

const MyDebtors = () => {
    const [debtors, setDebtors] = useState([])


    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchingDeptors = async () => {
          const request = await fetch('http://localhost:3000/connection/getMyDebtors',
          {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token,
            }
          })
          const arrayDeConexiones = await request.json()
          setDebtors(arrayDeConexiones)
        }
    
        fetchingDeptors()
      }, [])

    return <>
        <h1>Listado de mis deudores</h1>
        <ul>
        {debtors.map((debtor) => (
          <li key={debtor._id}>
            <h2>
              Deudor: {debtor.debtor.name} ({debtor.debtor.email})
            </h2>
            <Debts debts={debtor.debts}/>
            <DebtForm idConnection={debtor._id}/>
          </li>
        ))}
      </ul>
    </>
}

export default MyDebtors