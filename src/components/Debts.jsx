const Debts = ({debts}) => {

    const sum = debts.filter(d=>!d.isPaid).reduce((acc, d) => acc+d.amount , 0)
    
    if(!debts.length) return 'No hay deudas'

    return <>
        {debts.length}
        <ul>
            {
            debts.map(debt =>{
                return <li key={debt._id}> {debt._id} {debt.concept} {debt.amount} </li>
            })
            }
        </ul>
        <div>TOTAL: {sum} </div>
    </>
}

export default Debts