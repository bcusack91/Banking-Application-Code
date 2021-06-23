function Deposit(){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[0].balance );
  const [deposit, setDeposit] = React.useState('');
 

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleDeposit(){
    if (!validate(deposit,    'deposit'))    return;
    let new_balance = balance + parseFloat(deposit);
    setBalance(new_balance);
    ctx.users[0].balance = new_balance
    setShow(false);
  }    

  function clearForm(){
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Balance: {JSON.stringify(ctx.users[0].balance)} <br/>
              <br/>
              Deposit Amount<br/>
              <br/>
              <input type="number" className="form-control" id="deposit" placeholder="Enter Deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit More?</button>
              </>
            )}
    />
  )
}