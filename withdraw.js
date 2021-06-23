function Withdraw(){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[0].balance );
  const [withdraw, setWithdraw] = React.useState('');
 

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleWithdraw(){
    if (!validate(withdraw,    'withdraw'))    return;
    let new_balance = balance - parseFloat(withdraw);
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
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Balance: {JSON.stringify(ctx.users[0].balance)} <br/>
              <br/>
              Withdraw Amount<br/>
              <br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter Withdraw" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw More?</button>
              </>
            )}
    />
  )
}